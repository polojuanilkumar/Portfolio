// 2026 Modern Design System
export const colors = {
  // Primary color palette - modern gradient-focused
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe', 
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  
  // Accent colors - modern vibrant accents
  accent: {
    purple: '#8b5cf6',
    pink: '#ec4899', 
    cyan: '#06b6d4',
    emerald: '#10b981',
    amber: '#f59e0b',
  },
  
  // Dark theme with modern depth
  dark: {
    bg: '#0a0a0a',
    surface: '#111111',
    card: '#1a1a1a',
    border: '#2a2a2a',
    muted: '#666666',
    text: '#ffffff',
    textSecondary: '#a1a1aa',
  },
  
  // Semantic colors
  semantic: {
    success: '#10b981',
    warning: '#f59e0b', 
    error: '#ef4444',
    info: '#3b82f6',
  },
};

// Modern gradient definitions
export const gradients = {
  primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  tech: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  dark: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
  glass: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
};

// Modern typography scale
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
    display: ['Space Grotesk', 'system-ui', 'sans-serif'],
  },
  
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem', 
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
  },
  
  fontWeight: {
    thin: '100',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
};

// Modern spacing scale
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
  '5xl': '8rem',
};

// Modern border radius
export const borderRadius = {
  sm: '0.25rem',
  md: '0.5rem', 
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  '3xl': '2rem',
  full: '9999px',
};

// Modern shadows with glassmorphism
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  glow: '0 0 20px rgba(139, 92, 246, 0.3)',
};

// Modern animation presets
export const animations = {
  // Duration
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '1000ms',
  },
  
  // Easing curves
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    custom: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Preset animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
  
  slideUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  
  stagger: {
    container: {
      initial: { opacity: 0 },
      animate: { 
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    },
    item: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
    },
  },
};

// Modern component styles
export const componentStyles = {
  // Glass card style
  glassCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: borderRadius.xl,
    boxShadow: shadows.glass,
  },
  
  // Modern button styles
  button: {
    primary: {
      background: gradients.primary,
      color: 'white',
      padding: `${spacing.md} ${spacing.xl}`,
      borderRadius: borderRadius.full,
      fontWeight: typography.fontWeight.medium,
      transition: 'all 0.3s ease',
      boxShadow: shadows.md,
    },
    secondary: {
      background: 'transparent',
      color: colors.dark.text,
      border: `1px solid ${colors.dark.border}`,
      padding: `${spacing.md} ${spacing.xl}`,
      borderRadius: borderRadius.full,
      fontWeight: typography.fontWeight.medium,
      transition: 'all 0.3s ease',
    },
    ghost: {
      background: 'transparent',
      color: colors.dark.textSecondary,
      padding: `${spacing.sm} ${spacing.md}`,
      borderRadius: borderRadius.md,
      fontWeight: typography.fontWeight.normal,
      transition: 'all 0.2s ease',
    },
  },
  
  // Modern input styles
  input: {
    background: colors.dark.card,
    border: `1px solid ${colors.dark.border}`,
    color: colors.dark.text,
    padding: `${spacing.md} ${spacing.lg}`,
    borderRadius: borderRadius.lg,
    fontSize: typography.fontSize.base,
    transition: 'all 0.2s ease',
    '&:focus': {
      borderColor: colors.primary[500],
      boxShadow: `0 0 0 3px rgba(14, 165, 233, 0.1)`,
    },
  },
};

export default {
  colors,
  gradients,
  typography,
  spacing,
  borderRadius,
  shadows,
  animations,
  componentStyles,
};
