// http://localhost:4000/banner
// import obtain from './'
const obtain = require('./')

obtain.curl('http://localhost:4000/banner').then(res => {
  console.log(res, '---')
})

