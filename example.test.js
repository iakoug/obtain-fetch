// http://localhost:4000/banner
// import obtain from './'
const obtain = require('./')

// const fetch = require('node-fetch')

obtain.use(function(http) {
  http.interceptor.request.use(option => {
    console.log('in to interceptor ****************', option)
    return option
  }, 123)
  http.interceptor.response.use(option => {
    console.log('after interceptor ****************', option)
    return option
  }, 123)
})

obtain('http://localhost:4000/banner').then(async res => {
  console.log(res, '1')
})


