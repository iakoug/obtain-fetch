/**
 * obtain fetch
 */
import Interceptor from './interceptor'
const fetch = require('node-fetch')

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

  curl(url: string, options: any = {}): Promise<any> {
    options.method = options.method || 'GET'

    let promise = Promise.resolve(options)

    // Collection interceptor
    const requestHandler: Array<Array<any>> = []
    const responseHandler: Array<Array<any>> = []

    this.interceptor.request.reducer(handlerList => requestHandler.push(handlerList))
    this.interceptor.response.reducer(handlerList => responseHandler.push(handlerList))

    // excute request inteceptor
    while (requestHandler.length) {
      promise = promise.then(...requestHandler.shift())
    }

    return new Promise((resolve, reject) => {
      fetch(url, options).then(
        async res => {
          resolve(await res.json())

          // excute response inteceptor
          while (responseHandler.length) {
            promise = promise.then(...responseHandler.shift())
          }
        },
        err => reject(err)
      )
    })

  }
}

export default new Obtain()
