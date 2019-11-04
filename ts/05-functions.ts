//  Named function
function add(x, y) {
  return x + y
}

// Anonymous function
let myAdd = function(x, y) {
  return x + y
}

// 对函数进行类型定义

function add(x: number, y: number): number {
  return x + y
}

// 类型推断，这两种形式都可以
// myAdd has the full function type
let myAdd = function(x: number, y: number): number {
  return x + y
}

// The parameters 'x' and 'y' have the type number
let myAdd: (baseValue: number, increment: number) => number = function(x, y) {
  return x + y
}

// 函数的功能

// 可选参数，默认参数，剩余参数

// 重载
