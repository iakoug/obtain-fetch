/**
 * obtain fetch
 */
import Interceptor from './interceptor';

interface params {
  method: string,
  data: any
}

interface TypeInterceptor {
  request: Interceptor,
  response: Interceptor
}

class Obtain {
  public interceptor: TypeInterceptor

  constructor() {
    this.interceptor = {
      request: new Interceptor(),
      response: new Interceptor()
    }
  }

  curl(url: string, options: any): Promise<any> {
    options.method = options.method || 'GET'

    let promise = Promise.resolve(options)

    const chain: Array<Array<any>> = [[ fetch(url, options), undefined ]]

    this.interceptor.request.reducer((...handlerList) => chain.unshift(handlerList))
    this.interceptor.response.reducer((...handlerList) => chain.push(handlerList))

    while (chain.length) {
      promise = promise.then(...chain.shift())
    }

    return promise
  }
}

export default new Obtain()
