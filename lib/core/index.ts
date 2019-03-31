import Interceptor from './interceptor';
/**
 * obtain fetch
 */

interface params {
  method: string,
  data: object
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

  curl(url: string, options: params): Promise<any> {
    options.method = options.method || 'GET'

    const requestHandlers = this.interceptor.request.handler

    if (requestHandlers.length) this.interceptor.request.handler.forEach(interceptor => {
      options = interceptor(options)
    })
    
    
    return new Promise<any>(function (resolve, reject) {
      fetch(url, options).then(res => {
        const responseHandlers = this.interceptor.response.handler

        if (responseHandlers.length) this.interceptor.request.handler.forEach(interceptor => {
          options = interceptor(options)
        })

        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default new Obtain()
