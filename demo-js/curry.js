function add_base(...rest) {
  console.log({ rest })
  return rest.reduce((prev, current) => {
    return prev + current
  }, 0)
}

var curry = function (fn) {
  // 因为arguments是个类数组
  var args = [].slice.call(arguments, 1);
  return function () {
    var newArgs = args.concat.call([].slice.call(arguments));
    return fn.apply(this, newArgs);
  };
};

add = curry(add_base, 1, 2, 3)
console.log(add())
