// promise 链
// 链式调用，catch之后还能继续

const a = Promise.resolve(1)
const b = Promise.reject(2)
const c = Promise.resolve(3)
const d = Promise.resolve(4)

a.then(res => {
  console.log('a', res)
  return b
}).then((res) => {
  console.log('b', res)
  return c
}).catch((res) => {
  console.log('catch', res)
}).then((res) => {
  console.log('c', res)
  return d
}).then((res) => {
  console.log(res)
})


