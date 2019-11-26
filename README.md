# obtain-fetch
To construct a request lib.

# To do list
- [x] `obtain.use` 插件模式
- [x] `interceptor` 拦截器
- [x] `concurrency` 并发数控制
- [ ] `cache` 接口缓存

...

# Getting started
## install
```bash
yarn add obtain-fetch
```

## usage
```js
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
    option => option,
    err => {},
  )
  // 响应拦截器
  http.interceptor.response.use(
    res => res,
    err => {},
  )
})
```

## concurrency
*默认不控制*
```js
obtain.use(http => {
  http.concurrency = 10
})
```
