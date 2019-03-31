/**
 *  Interceptor 
 **/
class Interceptor {
	public handler: Array<Array<any>>

	constructor() {
		this.handler = []
	}

	public use(success: Function, failed: Function): Array<Array<any>> {
		this.handler.push([
			success, failed
		])

		return this.handler
	}

	public reducer(fn: Function) {
		this.handler.forEach(handlerList => fn(handlerList))
	}
}

export default Interceptor
