export const bind = (fn, context) => function() {
  return fn.apply(context, Array.from(arguments))
}
