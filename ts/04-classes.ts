// class

// Inheritance
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`)
  }
}

// 当然子类可以覆盖父类的方法
class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!")
  }
}

// 类的几个修饰方法 Public, private, and protected modifiers

// The protected modifier acts much like the private modifier
//  with the exception that members declared protected can also be accessed within deriving classes

// Readonly modifier

// Accessors

// Static Properties

// Abstract Classes

// 抽象类，也许不会直接实例化，但是可能会包含继承的细节

abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name)
  }
  // 类里面的方法也可以虚拟化
  abstract printMeeting(): void // must be implemented in derived classes
}
