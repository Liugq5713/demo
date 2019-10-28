

Function.prototype.bind2 = (context) => {
  const self = this
  const args = Array.prototype.slice.call(arguments, 1)

  const fNOP = function () { }
  const fBound = function () {
    const bindArgs = Array.prototype.slice.call(arguments)
    return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs))
  }

  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP()
  return fBound
}

// 不知道为啥

function add(x, y, z) {
  return 100 * x + 10 * y + z;
}

let add1 = add.bind(null, 1, 2);

console.log(add1(3)) //123
