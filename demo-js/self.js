function Con(name) {
  if (!new.target) {
    return new Con(name)
  }
  return
}
Con.prototype.hi = function () {
  console.log('hi')
}

Con('test').hi()

const con = new Con()
con.hi()

