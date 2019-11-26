import Fetch from './lib/core';
import {bind} from './lib/util';
import defaultConfig from './config';

// const createInstance = defaults => bind(Fetch.prototype.request, new Fetch(defaults))
// const request = createInstance(defaultConfig);

type Request = any

const instance = new Fetch(defaultConfig);

const request: Request = bind(Fetch.prototype.request, instance);

request.use = (plugin) => (typeof plugin !== 'function'
  ? console.error('[request plugin error]: use plugin parameters must be a function')
  : plugin(instance)
)

export default request;
