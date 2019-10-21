// 简单的sleep函数
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

const test = async () => {
  await sleep(3000)
  console.log('coming')
}
test()
