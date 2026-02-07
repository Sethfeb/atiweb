import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxurious Red Theme (더 빨간색 톤)
        primary: {
          50: '#fff1f2',
          100: '#ffe1e3',
          200: '#ffc7cc',
          300: '#ffa0a6',
          400: '#ff6b75',
          500: '#ff3d4d',
          600: '#e91e2e', // 더 밝은 빨강
          700: '#d32f2f', // Main brand color - 더 빨간색
          800: '#c62828', // 더 빨간색 Primary
          900: '#b71c1c',
          950: '#8b0000',
        },
        // Charcoal Black (더 밝게 조정)
        charcoal: {
          50: '#f8f8f8',
          100: '#e9e9e9',
          200: '#d4d4d4',
          300: '#b5b5b5',
          400: '#909090',
          500: '#757575',
          600: '#656565',
          700: '#575757',
          800: '#3a3a3a', // 더 밝은 배경
          900: '#2a2a2a', // 메인 배경 (더 밝게)
          950: '#1f1f1f', // 가장 어두운 배경 (더 밝게)
        },
        // Metallic Accents
        metallic: {
          silver: '#c0c0c0',
          gold: '#d4af37',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto-sans-kr)', 'var(--font-noto-sans-sc)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-overlay': 'linear-gradient(to bottom, rgba(198, 40, 40, 0.6), rgba(42, 42, 42, 0.85))',
        'gradient-primary': 'linear-gradient(135deg, rgba(198, 40, 40, 0.1) 0%, rgba(42, 42, 42, 0.9) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(198, 40, 40, 0.3)',
        'glow-lg': '0 0 40px rgba(198, 40, 40, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
