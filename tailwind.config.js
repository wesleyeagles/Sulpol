module.exports = {
  content: ["./src/components/*.{html,js}",
            "./src/pages/*.{html,js}",
            "./src/components/Navbar/*.{html,js}",
            "./src/components/Slider/*.{html,js}",
            "./src/components/TopNavBar/*.{html,js}",
            "./src/components/ButtonPrimary/*.{html,js}",
            "./src/components/Equipamentos/*.{html,js}",
            "./src/components/FormularioMaquinas/*.{html,js}",
            "./src/components/FormularioMaquinas/InputsSelect/*.{html,js}",
            "./src/components/Maquinas/*.{html,js}"],
  
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
