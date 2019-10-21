const arr = [1, 2, 3, 4, 5]
const res = arr.reduce((previousValue, currentValue, currentIndex, arr) => {
  return previousValue + currentValue
}, 0)

console.log({ res })
