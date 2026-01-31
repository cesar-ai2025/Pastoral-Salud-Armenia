---
name: image-optimizer
description: Download images from URLs (like Pexels, Unsplash), resize them, and convert to WebP format. Use when the user wants to optimize stock images, download and convert images to WebP, or prepare images for web use.
argument-hint: <url> [width] [height] [filename]
allowed-tools: Bash(python *)
---

# Image Optimizer

Download, resize, and convert images to WebP format for optimal web performance.

## Prerequisites

Ensure Pillow is installed:

```bash
pip install Pillow requests
```

## Usage

Run the optimization script with the image URL and optional parameters:

```bash
python .claude/skills/image-optimizer/scripts/optimize.py <url> [width] [height] [filename]
```

### Parameters

- `url` (required): The image URL to download
- `width` (optional): Target width in pixels (default: 1200)
- `height` (optional): Target height in pixels (default: auto-calculated to maintain aspect ratio)
- `filename` (optional): Output filename without extension (default: derived from URL or timestamp)

### Examples

**Download and optimize with default settings (1200px width):**
```bash
python .claude/skills/image-optimizer/scripts/optimize.py "https://images.pexels.com/photos/1234/nature.jpg"
```

**Download with specific dimensions:**
```bash
python .claude/skills/image-optimizer/scripts/optimize.py "https://images.pexels.com/photos/1234/nature.jpg" 800 600
```

**Download with custom filename:**
```bash
python .claude/skills/image-optimizer/scripts/optimize.py "https://images.pexels.com/photos/1234/nature.jpg" 800 600 hero-image
```

**Download with width only (maintain aspect ratio):**
```bash
python .claude/skills/image-optimizer/scripts/optimize.py "https://images.pexels.com/photos/1234/nature.jpg" 1920
```

## Output

Images are saved to `public/images/` as WebP files with:
- Optimized compression (quality: 85)
- Maintained aspect ratio (when height not specified)
- Proper color profile handling

## Batch Processing

To process multiple images, run the script multiple times or create a list:

```bash
# Process multiple URLs
for url in "https://example.com/img1.jpg" "https://example.com/img2.jpg"; do
  python .claude/skills/image-optimizer/scripts/optimize.py "$url" 1200
done
```

## Supported Sources

Works with any public image URL including:
- Pexels (images.pexels.com)
- Unsplash (images.unsplash.com)
- Pixabay
- Direct image links

## WebP Benefits

WebP provides:
- 25-35% smaller file sizes compared to JPEG
- Support for transparency (like PNG)
- Excellent browser support (95%+ globally)
- Faster page load times
