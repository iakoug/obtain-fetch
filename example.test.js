// http://localhost:4000/banner
// import obtain from './'
const obtain = require('./')

// const fetch = require('node-fetch')

// 拦截器
obtain.use(function(http) {
  http.interceptor.request.use(option => {
    console.log('in to interceptor ****************', option)
    return option
  }, null)
  http.interceptor.response.use(option => {
    console.log('after interceptor ****************')
    return option
  }, null)
})

// 并发
obtain.use(function(http) {
  http.concurrency = 10
})

obtain('http://localhost:4000/banner').then(async res => {
  console.log(res, 'result')
})


