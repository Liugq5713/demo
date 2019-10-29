const target = Date.parse('2019/11/11 00:00:00')


let timerID = setTimeout(function tick() {
  const now = Date.now()
  if (target <= now) {
    console.log('start')
  } else {
    console.log('pending')
  }
  timerID = setTimeout(tick, 1000)
}, 1000)
