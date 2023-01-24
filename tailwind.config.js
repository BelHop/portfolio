/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./PageComponents/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
          'slide-in-right': {
              '0%': {
                  marginLeft: '-100%',
              },
              '100%': {
                  marginLeft: '0%',
              },
          },
          'slide-in-left': {
            '0%': {
                marginRight: '-100%',
            },
            '100%': {
                marginRight: '0%',
            },
        },
          'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-40px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
      },
      animation: {
          'slide-in-right': 'slide-in-right 0.5s ease-out',
          'fade-in-down': 'fade-in-down 0.5s ease-out',
          'spin-slow': 'spin 60s linear infinite',
          'slide-in-left': 'slide-in-left 0.5s ease-out',
      }
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animate"),
  ],
}
