// 接口

// ==
// ts类型检查 主要是检查值的形状，那么接口就是给这个值的形状起一个名字
interface OptionsValue {
  label: string
  // 该值可有可无
  value?: string
  // 只读，不能被改变
  readonly x: number
}

const oneOption: OptionsValue = {
  label: "sss",
  value: "ss",
  x: 1
}

// TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T> with all mutating methods removed,
const options: Array<OptionsValue> = [
  {
    label: "sss",
    value: "ss",
    x: 1
  },
  {
    label: "ss",
    x: 1
  }
]

// ==
// 额外的属性检查

interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): void {}
// 额外的属性检查，colour 该属性不存在
let mySquare = createSquare({ colour: "red", width: 100 })

// 如何避免额外的属性检查

// 使用类型断言的方式
let mySquareAs = createSquare({ width: 100, opacity: 0.5 } as SquareConfig)
// 增加一个索引类型
interface SquareConfigWithIndex {
  color?: string
  width?: number
  [propName: string]: any
}
// 事实证明，赋值的方式不太行
let squareOptions = { colour: "red" }
let mySquare1 = createSquare(squareOptions)

// 函数类型
// 接口拥有描述宽泛的对象的能力，当然也能描述函数
// 描述函数，描述函数的参数，和函数的返回值

interface PersonFunc {
  (name: string, age: number): string
}

let helloMan: PersonFunc

helloMan = function(name: "liu", age: 1) {
  return "hi"
}

// 对于函数参数来说，不必和接口定义的一致

let helloWoman: PersonFunc = function(tickname: "ju", age: 0) {
  return "no no no"
}

// ===
// 索引类型
// 支持两种数据形式，string 和 number
// 但是number索引返回的类型必须是string类型的子类型， 因为js的对象的key为字符串
interface StringArray {
  [index: number]: string
}

let stringArray: StringArray
stringArray = ["e", "e"]

// 索引类型 强制其所有的属性符合索引类型的返回值
interface NumberOrStringDictionary {
  [index: string]: number | string
  length: number // ok, length is a number
  name: string // ok, name is a string
}

// ====
// 类也可以使用接口，类的声明分为两种，静态和实例,但是类接口仅仅验证其实例的方法
// 声明类的属性，和方法
interface MyClass {
  now: Date
  setTime(d: Date): void
  new (hour: number, minute: number)
}

class Clock implements MyClass {
  now: Date = new Date()
  d: string = "s"
  setTime(d: Date) {
    this.now = d
  }
  constructor(h: number, m: number): void {}
}

// ====
// 接口的继承，可以一下子继承多个

interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  sideLength: number
}

// 接口也可以继承类
// todo
