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

var person = [{ name: 'kevin' }, { name: 'daisy' }]
var prop = curry(function (key, obj) {
  console.log({ key, obj })
  return obj[key]
});
var name = person.map(prop('name'))
console.log({ prop, name })
