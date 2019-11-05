// Enums

// define a set of named constants

// Numeric
enum Direction {
  // 如果不设置初始值，那么Up将会从零开始
  Up = 1,
  Down,
  Left,
  Right
}

//  enum 如何使用？
enum Res {
  No = 0,
  Yes
}

function respond(recipient: string, message: Res): void {
  // ...
}

respond("Princess Caroline", Res.Yes)

// String enums

// 枚举类型的常量都被声明为字符串

// Heterogeneous enums

// 混杂型
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES"
}
