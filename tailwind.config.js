module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "fade-appear": {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        },
        "fade": {
          "0%": {
            opacity: "1"
          },
          "100%": {
            opacity: "0"
          }
        },
        "to-full-width": {
          "0%": {
            width: "0"
          },
          "100%": {
            width: "100%"
          }
        },
        "flow": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0"
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1"
          } 
        }
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-appear": "fade-appear 1.5s linear",
        "fade": "fade 0.5s ease-out forwards",
        "to-full-width": "to-full-width 1s ease-out forwards",
        "flow": "flow 1s ease-in forwards"
      },
      fontFamily: {
        'gideon': ['Josefin Sans', 'sans-serif'],
        "fjalla": ['Fjalla One']
      }
    },
  },
  plugins: [

  ],
}
