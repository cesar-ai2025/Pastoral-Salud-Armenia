'use client'

import { useEffect } from 'react'

/**
 * Custom CSS styles for the n8n chat widget
 * Aligned with Pastoral de la Salud design system
 *
 * Design System References:
 * - Colors: Celestial Blue (#0284c7), Healing Green (#22c55e), Sacred Gold (#f59e0b)
 * - Typography: DM Sans (body), Fraunces (display), Caveat (accent)
 * - Border Radius: lg (0.75rem / 12px), xl (1rem / 16px)
 * - Shadows: celestial shadow for interactive elements
 */
const chatStyles = `
  /* ==========================================================================
   * N8N CHAT WIDGET — PASTORAL DE LA SALUD THEME
   * ==========================================================================
   * Overrides default n8n chat styles to match the website's design system
   */

  /* CSS Variables Override */
  :root {
    /* Primary Colors - Celestial Blue */
    --chat--color-primary: #0284c7;
    --chat--color-primary-shade-50: #0369a1;
    --chat--color-primary-shade-100: #075985;
    --chat--color-secondary: #0ea5e9;
    --chat--color-secondary-shade-50: #38bdf8;

    /* Background Colors */
    --chat--color-white: #ffffff;
    --chat--color-light: #f8fafc;
    --chat--color-light-shade-50: #f1f5f9;
    --chat--color-medium: #e2e8f0;
    --chat--color-dark: #0f172a;
    --chat--color-disabled: #94a3b8;
    --chat--color-typing: #64748b;

    /* Typography */
    --chat--font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --chat--font-size: 1rem;
    --chat--line-height: 1.5;
    --chat--font-weight-normal: 400;
    --chat--font-weight-medium: 500;
    --chat--font-weight-bold: 600;

    /* Sizing & Spacing */
    --chat--border-radius: 0.75rem;
    --chat--border-radius-large: 1rem;
    --chat--input-height: 3rem;
    --chat--button-size: 3.5rem;

    /* Transitions */
    --chat--transition-duration: 150ms;

    /* Shadows - Custom celestial shadow */
    --chat--shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -2px rgba(15, 23, 42, 0.1);
    --chat--shadow-hover: 0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -4px rgba(15, 23, 42, 0.1);
    --chat--shadow-celestial: 0 4px 14px 0 rgba(14, 165, 233, 0.25);
  }

  /* ==========================================================================
   * CHAT TOGGLE BUTTON (Floating Action Button)
   * ========================================================================== */

  .n8n-chat .chat-toggle {
    background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
    border: none;
    border-radius: 1rem;
    width: 3.5rem;
    height: 3.5rem;
    box-shadow: var(--chat--shadow-celestial);
    transition: all 150ms ease;
    position: relative;
    overflow: hidden;
  }

  .n8n-chat .chat-toggle::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%);
    pointer-events: none;
  }

  .n8n-chat .chat-toggle:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px 0 rgba(14, 165, 233, 0.35);
  }

  .n8n-chat .chat-toggle:active {
    transform: translateY(0) scale(0.98);
  }

  .n8n-chat .chat-toggle:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #0ea5e9;
  }

  /* Custom chat icon styling */
  .n8n-chat .chat-toggle svg {
    color: #ffffff;
    width: 1.5rem;
    height: 1.5rem;
  }

  /* ==========================================================================
   * CHAT WINDOW CONTAINER
   * ========================================================================== */

  .n8n-chat .chat-window {
    border-radius: 1rem;
    box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.25);
    border: 1px solid #e2e8f0;
    overflow: hidden;
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  /* ==========================================================================
   * CHAT HEADER
   * ========================================================================== */

  .n8n-chat .chat-header {
    background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
    padding: 1rem 1.25rem;
    border-bottom: none;
    position: relative;
  }

  .n8n-chat .chat-header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  }

  .n8n-chat .chat-header .chat-title {
    font-family: 'Fraunces', Georgia, 'Times New Roman', serif;
    font-size: 1.125rem;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
    line-height: 1.3;
  }

  .n8n-chat .chat-header .chat-subtitle {
    font-family: 'Caveat', cursive;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.9);
    margin-top: 0.25rem;
    font-weight: 500;
  }

  /* Close button */
  .n8n-chat .chat-header button,
  .n8n-chat .chat-header .close-button {
    color: #ffffff;
    opacity: 0.9;
    transition: all 150ms ease;
    border-radius: 0.5rem;
    padding: 0.25rem;
  }

  .n8n-chat .chat-header button:hover,
  .n8n-chat .chat-header .close-button:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.15);
  }

  .n8n-chat .chat-header button:focus-visible,
  .n8n-chat .chat-header .close-button:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }

  /* ==========================================================================
   * CHAT MESSAGES AREA
   * ========================================================================== */

  .n8n-chat .chat-messages-list,
  .n8n-chat .chat-messages {
    background-color: #f8fafc;
    padding: 1rem;
  }

  /* Bot messages */
  .n8n-chat .chat-message.chat-message-from-bot,
  .n8n-chat .chat-message-bot {
    background-color: #ffffff;
    color: #0f172a;
    border: 1px solid #e2e8f0;
    border-radius: 1rem;
    border-bottom-left-radius: 0.25rem;
    padding: 0.875rem 1rem;
    box-shadow: 0 1px 2px 0 rgba(15, 23, 42, 0.05);
    font-size: 0.9375rem;
    line-height: 1.5;
    max-width: 85%;
  }

  /* User messages */
  .n8n-chat .chat-message.chat-message-from-user,
  .n8n-chat .chat-message-user {
    background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
    color: #ffffff;
    border-radius: 1rem;
    border-bottom-right-radius: 0.25rem;
    padding: 0.875rem 1rem;
    box-shadow: 0 1px 3px 0 rgba(2, 132, 199, 0.3);
    font-size: 0.9375rem;
    line-height: 1.5;
    max-width: 85%;
  }

  /* Message spacing */
  .n8n-chat .chat-message {
    margin-bottom: 0.75rem;
  }

  /* Typing indicator */
  .n8n-chat .chat-message-typing,
  .n8n-chat .typing-indicator {
    color: #64748b;
    font-style: italic;
    font-size: 0.875rem;
  }

  /* ==========================================================================
   * CHAT INPUT AREA
   * ========================================================================== */

  .n8n-chat .chat-input,
  .n8n-chat .chat-footer {
    background-color: #ffffff;
    border-top: 1px solid #e2e8f0;
    padding: 0.75rem 1rem;
  }

  .n8n-chat .chat-input-container,
  .n8n-chat .chat-input-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    padding: 0.25rem 0.25rem 0.25rem 1rem;
    transition: all 150ms ease;
  }

  .n8n-chat .chat-input-container:focus-within,
  .n8n-chat .chat-input-wrapper:focus-within {
    border-color: #0ea5e9;
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15);
    background-color: #ffffff;
  }

  .n8n-chat .chat-input input,
  .n8n-chat .chat-input textarea,
  .n8n-chat .chat-input-field {
    background: transparent;
    border: none;
    outline: none;
    flex: 1;
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 0.9375rem;
    color: #0f172a;
    padding: 0.5rem 0;
    line-height: 1.5;
  }

  .n8n-chat .chat-input input::placeholder,
  .n8n-chat .chat-input textarea::placeholder,
  .n8n-chat .chat-input-field::placeholder {
    color: #94a3b8;
  }

  /* Send button */
  .n8n-chat .chat-input button[type="submit"],
  .n8n-chat .chat-send-button {
    background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
    color: #ffffff;
    border: none;
    border-radius: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 150ms ease;
    flex-shrink: 0;
  }

  .n8n-chat .chat-input button[type="submit"]:hover,
  .n8n-chat .chat-send-button:hover {
    background: linear-gradient(135deg, #0369a1 0%, #075985 100%);
    box-shadow: 0 2px 8px 0 rgba(14, 165, 233, 0.3);
  }

  .n8n-chat .chat-input button[type="submit"]:active,
  .n8n-chat .chat-send-button:active {
    transform: scale(0.95);
  }

  .n8n-chat .chat-input button[type="submit"]:focus-visible,
  .n8n-chat .chat-send-button:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #0ea5e9;
  }

  .n8n-chat .chat-input button[type="submit"]:disabled,
  .n8n-chat .chat-send-button:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
    box-shadow: none;
  }

  .n8n-chat .chat-input button[type="submit"] svg,
  .n8n-chat .chat-send-button svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  /* ==========================================================================
   * NEW CONVERSATION / GET STARTED BUTTON
   * ========================================================================== */

  .n8n-chat .chat-new-session-button,
  .n8n-chat .get-started-button,
  .n8n-chat .new-conversation-button {
    background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
    color: #ffffff;
    border: none;
    border-radius: 0.75rem;
    padding: 0.625rem 1.25rem;
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 150ms ease;
    box-shadow: var(--chat--shadow-celestial);
  }

  .n8n-chat .chat-new-session-button:hover,
  .n8n-chat .get-started-button:hover,
  .n8n-chat .new-conversation-button:hover {
    background: linear-gradient(135deg, #0369a1 0%, #075985 100%);
    transform: translateY(-1px);
    box-shadow: 0 6px 16px 0 rgba(14, 165, 233, 0.3);
  }

  .n8n-chat .chat-new-session-button:active,
  .n8n-chat .get-started-button:active,
  .n8n-chat .new-conversation-button:active {
    transform: translateY(0) scale(0.98);
  }

  .n8n-chat .chat-new-session-button:focus-visible,
  .n8n-chat .get-started-button:focus-visible,
  .n8n-chat .new-conversation-button:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #0ea5e9;
  }

  /* ==========================================================================
   * SCROLLBAR STYLING
   * ========================================================================== */

  .n8n-chat .chat-messages-list::-webkit-scrollbar,
  .n8n-chat .chat-messages::-webkit-scrollbar {
    width: 6px;
  }

  .n8n-chat .chat-messages-list::-webkit-scrollbar-track,
  .n8n-chat .chat-messages::-webkit-scrollbar-track {
    background: transparent;
  }

  .n8n-chat .chat-messages-list::-webkit-scrollbar-thumb,
  .n8n-chat .chat-messages::-webkit-scrollbar-thumb {
    background-color: #cbd5e1;
    border-radius: 3px;
  }

  .n8n-chat .chat-messages-list::-webkit-scrollbar-thumb:hover,
  .n8n-chat .chat-messages::-webkit-scrollbar-thumb:hover {
    background-color: #94a3b8;
  }

  /* ==========================================================================
   * LINKS IN CHAT
   * ========================================================================== */

  .n8n-chat a {
    color: #0284c7;
    text-decoration: none;
    font-weight: 500;
    transition: color 150ms ease;
  }

  .n8n-chat a:hover {
    color: #0369a1;
    text-decoration: underline;
  }

  .n8n-chat .chat-message-from-user a,
  .n8n-chat .chat-message-user a {
    color: #ffffff;
    text-decoration: underline;
  }

  /* ==========================================================================
   * LOADING / THINKING ANIMATION
   * ========================================================================== */

  .n8n-chat .chat-message-loading,
  .n8n-chat .thinking-indicator {
    display: flex;
    gap: 0.25rem;
    padding: 0.5rem 0;
  }

  .n8n-chat .chat-message-loading span,
  .n8n-chat .thinking-indicator span {
    width: 0.5rem;
    height: 0.5rem;
    background-color: #0284c7;
    border-radius: 50%;
    animation: chatBounce 1.4s ease-in-out infinite both;
  }

  .n8n-chat .chat-message-loading span:nth-child(1),
  .n8n-chat .thinking-indicator span:nth-child(1) {
    animation-delay: -0.32s;
  }

  .n8n-chat .chat-message-loading span:nth-child(2),
  .n8n-chat .thinking-indicator span:nth-child(2) {
    animation-delay: -0.16s;
  }

  @keyframes chatBounce {
    0%, 80%, 100% {
      transform: scale(0);
      opacity: 0.5;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
  }

  /* ==========================================================================
   * ACCESSIBILITY: REDUCED MOTION
   * ========================================================================== */

  @media (prefers-reduced-motion: reduce) {
    .n8n-chat * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* ==========================================================================
   * RESPONSIVE ADJUSTMENTS
   * ========================================================================== */

  @media (max-width: 640px) {
    .n8n-chat .chat-window {
      border-radius: 0;
      width: 100% !important;
      height: 100% !important;
      max-height: 100% !important;
      position: fixed !important;
      bottom: 0 !important;
      right: 0 !important;
      left: 0 !important;
      top: 0 !important;
    }

    .n8n-chat .chat-toggle {
      width: 3rem;
      height: 3rem;
    }

    .n8n-chat .chat-header {
      padding: 0.875rem 1rem;
    }

    .n8n-chat .chat-header .chat-title {
      font-size: 1rem;
    }
  }
`

export function N8nChat() {
  useEffect(() => {
    // Inject custom styles
    const styleElement = document.createElement('style')
    styleElement.id = 'n8n-chat-pastoral-styles'
    styleElement.textContent = chatStyles

    // Only inject if not already present
    if (!document.getElementById('n8n-chat-pastoral-styles')) {
      document.head.appendChild(styleElement)
    }

    // Load CSS dynamically
    const cssLink = document.createElement('link')
    cssLink.rel = 'stylesheet'
    cssLink.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css'
    cssLink.id = 'n8n-chat-base-styles'
    if (!document.getElementById('n8n-chat-base-styles')) {
      document.head.appendChild(cssLink)
    }

    // Load n8n chat script via script tag to avoid TypeScript/bundler issues
    const script = document.createElement('script')
    script.type = 'module'
    script.id = 'n8n-chat-script'
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'https://n8n-clean.srv856038.hstgr.cloud/webhook/5f3fdcad-1bd3-4d7e-8695-abc2cf8da62a/chat',
        mode: 'window',
        showWelcomeScreen: false,
        loadPreviousSession: true,
        defaultLanguage: 'en',
        initialMessages: [
          'Hola, bienvenido a la Pastoral de la Salud',
          'Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?',
        ],
        i18n: {
          en: {
            title: 'Pastoral de la Salud',
            subtitle: 'El amor que sana',
            footer: '',
            getStarted: 'Nueva Conversacion',
            inputPlaceholder: 'Escribe tu mensaje...',
            closeButtonTooltip: 'Cerrar',
          },
        },
      });
    `

    if (!document.getElementById('n8n-chat-script')) {
      document.body.appendChild(script)
    }

    // Cleanup on unmount
    return () => {
      const existingStyle = document.getElementById('n8n-chat-pastoral-styles')
      if (existingStyle) {
        existingStyle.remove()
      }
    }
  }, [])

  return null
}
