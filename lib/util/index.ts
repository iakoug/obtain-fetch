export const bind = (fn, context) => function() {
  return fn.apply(context, Array.from(arguments))
}
/**
 * forloop
 * @param {Array|Object} obj
 * @param {Function} fn
 */
export function forEach(obj, fn) {
  if (obj === null || obj === undefined) {
    return;
  }

  if (typeof obj !== 'object') {
    obj = [obj];
  }

  if (obj instanceof Array) {
    return obj.forEach(fn);
  }

  Object.keys(obj).forEach((k) => {
    fn.call(null, obj[k], k, obj);
  });
}
/**
 * 对象判断
 * @param  {...any} args
 */
export const isObject = (...args) => args.every((obj) => obj && obj.constructor === Object);
/**
 * 合并对象
 * @param  {...any} args
 */
export const merge = (...args) =>
  args.reduce(
    (result, obj) => (
      forEach(
        obj,
        (val, key) => (result[key] = isObject(result[key], val) ? merge(result[key], val) : val),
      ),
      result
    ),
    {},
  );
