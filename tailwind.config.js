module.exports = {
  mode: 'jit',
  content: ['./dist/*.html'],
  theme: {
    extend: {
      boxShadow: {
        'selects': '0px 30px 59px 0px #35353512;',
        'about-badge': '0px 30px 59px rgba(53, 53, 53, 0.07);',
        'services-card': '0px 30px 49px #B43331;',
      },
      backgroundImage: {
        'hero': "url('/dist/img/car_bg.png')",
      },
    },
  },
  plugins: [],
}
