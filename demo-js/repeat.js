// const repeat = () => {
//   let cnt = 5
//   const timer = setInterval(() => {
//     if (cnt === 1) {
//       clearInterval(timer)
//     }
//     console.log(1)
//     cnt--
//   }, 2000)
// }



function wait(millisecond) {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
}

async function repeat(task, count = 1, millisecond = 0) {
  while (count--) {
    await wait(millisecond);
    task();
  }
}

const taskA = () => {
  console.log('A')
}

const taskB = () => {
  console.log('B')
}

// (async () => {
//   await repeat(taskA, 3, 1000)
//   taskB()
// })()

repeat(taskA, 3, 1000)
taskB()
