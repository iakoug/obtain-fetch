/**
 * obtain fetch
 */
import Interceptor from './interceptor'
import {merge} from './../util'
import dispatchRequest from './fetch'

// const fetch = require('node-fetch')

interface TypeInterceptor {
  request: Interceptor,
  response: Interceptor
}

interface URLType {
  body?: string
}

class Fetch {
  params: object | string
  config: any
  interceptors: TypeInterceptor
  constructor({config, params}) {
    // base config & params
    this.params = params
    this.config = config

    this.interceptors = {
      request: new Interceptor(),
      response: new Interceptor(),
    }
  }

  request(...args) {
    // 参数处理
    const [url, body = {}, config] = args
    /**
     * @main 参数合并
     * @example 可以使用两种方式进行传参
     * request(url, {
     *  method: 'post'
     * })
     *
     * request({
     *  url: '',
     *  method: 'post'
     * })
     */
    let options: URLType = {}

    const params = typeof url === 'string' ? {url, body} : url

    options = merge(this.params, params)

    if (config) {
      this.config = merge(this.config, config)
    }

    // url控制 目前根据环境读取根目录apiConfig
    // if (options.baseURL && !isAbsoluteURL(options.url)) {
    //   options.url = combineURL(options.baseURL, options.url)
    // }

    // 序列化json
    options.body = JSON.stringify(options.body || {})

    /**
     * @main 拦截器入栈
     * @description request前置，response后置
     */
    // this.interceptors.request.reducer((fns) => {
    //   chain.unshift(fns)
    // })

    // this.interceptors.response.reducer((fns) => {
    //   chain.push(fns)
    // })
    const chain = [
      ...this.interceptors.request.handlers,
      [dispatchRequest, undefined],
      ...this.interceptors.response.handlers,
    ]

    /**
     * @main promise链调用
     */
    return chain.reduce(
      (promise: Promise<any>, interceptors: Array<any>) => (promise = promise.then(...interceptors)),
      Promise.resolve(options),
    )
  }
}

export default Fetch
