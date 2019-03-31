// http://localhost:4000/banner
// import obtain from './'
const obtain = require('./')

const fetch = require('node-fetch')

obtain.interceptor.request.use(() => {
  console.log('in to interceptor ****************')
}, 123)
obtain.interceptor.response.use(() => {
  console.log('after interceptor ****************')
}, 123)

console.log(obtain.interceptor.request)

obtain.curl('http://localhost:4000/banner').then(async res => {
  console.log(res)
})


