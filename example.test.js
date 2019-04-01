// http://localhost:4000/banner
// import obtain from './'
const { obtain, curl } = require('./')

const fetch = require('node-fetch')

obtain.interceptor.request.use(option => {
  console.log('in to interceptor ****************', option)
  return option
}, 123)
obtain.interceptor.response.use(option => {
  console.log('after interceptor ****************', option)
  return option
}, 123)

curl('http://localhost:4000/banner').then(async res => {
  console.log(res, '1')
})


