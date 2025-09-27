/**
 * Theme types and constants for the portfolio application
 */

export type Theme = 'light' | 'dark';

export interface ThemeColors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
  border: string;
  shadow: string;
}

export const lightTheme: ThemeColors = {
  primary: '#6366f1',
  primaryLight: '#818cf8',
  primaryDark: '#4f46e5',
  secondary: '#f1f5f9',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9'
  },
  text: {
    primary: '#0f172a',
    secondary: '#475569',
    muted: '#64748b'
  },
  border: '#e2e8f0',
  shadow: 'rgba(0, 0, 0, 0.1)'
};

export const darkTheme: ThemeColors = {
  primary: '#818cf8',
  primaryLight: '#a5b4fc',
  primaryDark: '#6366f1',
  secondary: '#1e293b',
  success: '#34d399',
  warning: '#fbbf24',
  error: '#f87171',
  background: {
    primary: '#0f172a',
    secondary: '#1e293b',
    tertiary: '#334155'
  },
  text: {
    primary: '#f8fafc',
    secondary: '#cbd5e1',
    muted: '#94a3b8'
  },
  border: '#334155',
  shadow: 'rgba(0, 0, 0, 0.3)'
};

export const applyTheme = (theme: Theme): void => {
  const colors = theme === 'dark' ? darkTheme : lightTheme;
  const root = document.documentElement;

  // Apply CSS custom properties
  root.style.setProperty('--primary-color', colors.primary);
  root.style.setProperty('--primary-light', colors.primaryLight);
  root.style.setProperty('--primary-dark', colors.primaryDark);
  root.style.setProperty('--secondary-color', colors.secondary);
  root.style.setProperty('--success-color', colors.success);
  root.style.setProperty('--warning-color', colors.warning);
  root.style.setProperty('--error-color', colors.error);
  
  root.style.setProperty('--bg-primary', colors.background.primary);
  root.style.setProperty('--bg-secondary', colors.background.secondary);
  root.style.setProperty('--bg-tertiary', colors.background.tertiary);
  
  root.style.setProperty('--text-primary', colors.text.primary);
  root.style.setProperty('--text-secondary', colors.text.secondary);
  root.style.setProperty('--text-muted', colors.text.muted);
  
  root.style.setProperty('--border-color', colors.border);
  root.style.setProperty('--shadow-color', colors.shadow);
  
  // Update meta theme-color for mobile browsers
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', colors.background.primary);
  }
};

export const getStoredTheme = (): Theme => {
  const stored = localStorage.getItem('portfolio-theme');
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  // Default to user's system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const setStoredTheme = (theme: Theme): void => {
  localStorage.setItem('portfolio-theme', theme);
};