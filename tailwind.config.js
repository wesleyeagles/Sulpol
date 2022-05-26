module.exports = {
  content: ["./src/components/*.{html,js}",
            "./src/components/Navbar/*.{html,js}",
            "./src/components/TopNavBar/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'bg-topbar': '#202124',
      },

      colors: {
        'text-topbar' : '#A5A5A5',
        'sulpol-green' : '#81D742'
        
      }
    },
  },
  plugins: [],
}
