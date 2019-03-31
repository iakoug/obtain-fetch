/**
 *  Interceptor 
 **/
class Interceptor {
	public handler: Array<Array<any>>

	constructor() {
		this.handler = []
	}

	public use(success: Function, failed: Function): void {
		this.handler.push([success, failed])
	}

	public reducer(fn: Function): void {
		this.handler.forEach(handlerList => fn(handlerList))
	}
}

export default Interceptor
