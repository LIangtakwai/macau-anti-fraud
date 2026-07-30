/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          900: '#1E3A8A',
        },
        accent: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        warning: {
          400: '#FB923C',
          500: '#F97316',
          600: '#EF4444',
        },
        dark: {
          900: '#0A0F1C',
          800: '#0F172A',
          700: '#1E1B4B',
          600: '#312E81',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Segoe UI"',
          'system-ui',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse at top, #1E1B4B 0%, #0F172A 45%, #0A0F1C 100%)',
        'glow-primary':
          'radial-gradient(circle at center, rgba(59,130,246,0.35) 0%, transparent 70%)',
        'glow-accent':
          'radial-gradient(circle at center, rgba(139,92,246,0.30) 0%, transparent 70%)',
      },
      boxShadow: {
        'glass':
          '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
        'glow-primary':
          '0 0 40px rgba(59, 130, 246, 0.35)',
        'glow-accent':
          '0 0 40px rgba(139, 92, 246, 0.30)',
        'soft-xl':
          '0 20px 60px -15px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 3.5s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
