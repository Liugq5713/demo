

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

