function getSomeAfterOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done')
    }, 1000)
  })
}

function isDef(v) {
  return v !== undefined && v !== null
}

function isPromise(val) {
  return (
    isDef(val) &&
    typeof val.then === "function" &&
    typeof val.catch === "function"
  )
}

async function main() {
  const a = await getSomeAfterOneSecond()
  console.log(a)
  const b = getSomeAfterOneSecond()
  console.log({ b }, isPromise(b))
}

main()
