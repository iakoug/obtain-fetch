/**
 *  Interceptor 
 **/
class Interceptor {
	public handler: Array<Function>

	constructor() {
		this.handler = []
	}

	public use(fn: Function): Array<Function> {
		this.handler.push(fn)

		return this.handler
	}
}

export default Interceptor
