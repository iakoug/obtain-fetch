export const bind = (fn, context) => {
  return function() {
    return fn.apply(context, Array.from(arguments))
  }
}
