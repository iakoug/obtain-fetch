# obtain-fetch
To construct a request lib.

# To do list
- [x] `interceptor` 拦截器
- [x] `obtain.use` 插件模式
- [ ] `concurrency` 并发数控制
- [ ] `cache` 接口缓存

...

# Getting started

## usage
```js
// 暂未发布npm
import obtain from 'obtain-fetch'
// 默认get
obtain('http://localhost:4000/banner', {
  method: 'POST',
  body: {}
})
```
## interceptor
```js
obtain.use(http => {
  // 请求拦截器
  http.interceptor.request.use(
    option => {},
    err => {},
  )
  // 响应拦截器
  http.interceptor.response.use(
    res => {},
    err => {},
  )
})
```