#!/usr/bin/env python3
"""
Download, resize, and convert images to WebP format.

Usage:
    python optimize.py <url> [width] [height] [filename]

Examples:
    python optimize.py "https://images.pexels.com/photos/1234/nature.jpg"
    python optimize.py "https://images.pexels.com/photos/1234/nature.jpg" 800
    python optimize.py "https://images.pexels.com/photos/1234/nature.jpg" 800 600
    python optimize.py "https://images.pexels.com/photos/1234/nature.jpg" 800 600 hero-image
"""

import sys
import os
import re
import hashlib
from datetime import datetime
from pathlib import Path
from io import BytesIO
from urllib.parse import urlparse, unquote

try:
    import requests
    from PIL import Image
except ImportError:
    print("Error: Required packages not installed.")
    print("Please run: pip install Pillow requests")
    sys.exit(1)


def sanitize_filename(name: str) -> str:
    """Remove invalid characters from filename."""
    # Remove or replace invalid characters
    name = re.sub(r'[<>:"/\\|?*]', '', name)
    name = re.sub(r'\s+', '-', name)
    name = re.sub(r'-+', '-', name)
    name = name.strip('-')
    return name[:100] if name else None


def extract_filename_from_url(url: str) -> str:
    """Extract a reasonable filename from the URL."""
    parsed = urlparse(url)
    path = unquote(parsed.path)

    # Get the last part of the path
    basename = os.path.basename(path)

    # Remove extension
    name = os.path.splitext(basename)[0]

    # Sanitize
    name = sanitize_filename(name)

    if name and len(name) >= 3:
        return name

    # Fallback: use hash of URL + timestamp
    url_hash = hashlib.md5(url.encode()).hexdigest()[:8]
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    return f"image_{timestamp}_{url_hash}"


def download_image(url: str) -> Image.Image:
    """Download image from URL and return PIL Image."""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': urlparse(url).scheme + '://' + urlparse(url).netloc + '/',
    }

    print(f"Downloading: {url}")

    response = requests.get(url, headers=headers, timeout=30, stream=True)
    response.raise_for_status()

    content_length = response.headers.get('content-length')
    if content_length:
        size_mb = int(content_length) / (1024 * 1024)
        print(f"Download size: {size_mb:.2f} MB")

    image_data = BytesIO(response.content)
    image = Image.open(image_data)

    # Convert to RGB if necessary (for WebP compatibility)
    if image.mode in ('RGBA', 'LA', 'P'):
        # Keep alpha channel for images that have it
        if image.mode == 'P':
            image = image.convert('RGBA')
    elif image.mode != 'RGB':
        image = image.convert('RGB')

    print(f"Original size: {image.width}x{image.height}")
    return image


def resize_image(image: Image.Image, width: int, height: int = None) -> Image.Image:
    """Resize image maintaining aspect ratio if height not specified."""
    original_width, original_height = image.size

    if height is None:
        # Calculate height maintaining aspect ratio
        aspect_ratio = original_height / original_width
        height = int(width * aspect_ratio)

    # Use high-quality resampling
    resized = image.resize((width, height), Image.Resampling.LANCZOS)
    print(f"Resized to: {width}x{height}")

    return resized


def save_as_webp(image: Image.Image, output_path: Path, quality: int = 85) -> None:
    """Save image as WebP with optimization."""
    # Ensure output directory exists
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Determine if we should save with alpha channel
    if image.mode == 'RGBA':
        image.save(output_path, 'WEBP', quality=quality, method=6)
    else:
        # Convert to RGB if not already
        if image.mode != 'RGB':
            image = image.convert('RGB')
        image.save(output_path, 'WEBP', quality=quality, method=6)

    # Report file size
    file_size = output_path.stat().st_size
    size_kb = file_size / 1024
    print(f"Saved: {output_path} ({size_kb:.1f} KB)")


def find_project_root() -> Path:
    """Find the project root by looking for package.json or public folder."""
    current = Path.cwd()

    # Check current directory first
    if (current / 'public').is_dir():
        return current

    # Walk up to find project root
    for parent in current.parents:
        if (parent / 'public').is_dir():
            return parent
        if (parent / 'package.json').is_file():
            return parent

    return current


def main():
    if len(sys.argv) < 2:
        print("Usage: python optimize.py <url> [width] [height] [filename]")
        print("\nExamples:")
        print('  python optimize.py "https://images.pexels.com/photos/1234/nature.jpg"')
        print('  python optimize.py "https://images.pexels.com/photos/1234/nature.jpg" 800')
        print('  python optimize.py "https://images.pexels.com/photos/1234/nature.jpg" 800 600 hero')
        sys.exit(1)

    url = sys.argv[1]
    width = int(sys.argv[2]) if len(sys.argv) > 2 else 1200
    height = int(sys.argv[3]) if len(sys.argv) > 3 else None
    custom_filename = sys.argv[4] if len(sys.argv) > 4 else None

    # Determine output filename
    if custom_filename:
        filename = sanitize_filename(custom_filename)
    else:
        filename = extract_filename_from_url(url)

    # Find project root and set output path
    project_root = find_project_root()
    output_dir = project_root / 'public' / 'images'
    output_path = output_dir / f"{filename}.webp"

    # Handle filename conflicts
    counter = 1
    original_path = output_path
    while output_path.exists():
        output_path = output_dir / f"{filename}-{counter}.webp"
        counter += 1

    if output_path != original_path:
        print(f"Note: File exists, saving as: {output_path.name}")

    try:
        # Download
        image = download_image(url)

        # Resize
        image = resize_image(image, width, height)

        # Save as WebP
        save_as_webp(image, output_path)

        print(f"\n✓ Successfully optimized image!")
        print(f"  Location: {output_path.relative_to(project_root)}")

    except requests.exceptions.RequestException as e:
        print(f"Error downloading image: {e}")
        sys.exit(1)
    except Exception as e:
        print(f"Error processing image: {e}")
        sys.exit(1)


if __name__ == '__main__':
    main()
