module.exports = {
  content: ['./src/*.{js,jsx,ts,tsx}',
    './src/components/*.{js,jsx,ts,tsx}'
    ],
  theme: {
    extend: {
      backgroundImage: {
        'bgBasique': "url('/public/background.svg')",
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}
