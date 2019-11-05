// Generics

// 对于组件而言，泛型让你更加灵活的构建大型软件系统

// T在这里算类型变量
function identity<T>(arg: T): T {
  return arg
}

// 泛型接口
interface GenericIdentityFn {
  <T>(arg: T): T
}

// 泛型类

class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) {
  return x + y
}

// Generic Constraints 泛型限制
interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length) // Now we know it has a .length property, so no more error
  return arg
}
