function area(radius) {
  return Math.PI * radius * radius;
}

// 在这里写上需要向外暴露的函数、变量
module.exports = {
  area: area
}


