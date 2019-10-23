function binarySearch(arr, target) {
  let start = 0
  let end = arr.length - 1
  let mid

  while (start <= end) {
    mid = Math.floor((start + end) / 2)
    if (target === arr[mid]) {
      return mid
    }
    if (target > arr[mid]) {
      start = mid + 1
    }
    if (target < arr[mid]) {
      end = mid - 1
    }
  }
  return -1
}

// console.log(find([1, 2, 3, 4, 5], 7))
// console.log(find([1, 2, 3, 4, 5], 2))

const find_d = function (arr, target, start, end) {
  let res
  if (start > end) {
    return -1
  }
  let mid = Math.floor((start + end) / 2)
  if (target === arr[mid]) {
    return mid
  }

  if (target > arr[mid]) {
    res = find_d(arr, target, mid + 1, end)
  }

  if (target < arr[mid]) {
    res = find_d(arr, target, start, mid - 1)
  }
  return res
}

console.log(find_d([1, 2, 3, 4, 5], 7, 0, 4))
console.log(find_d([1, 2, 3, 4, 5], 2, 0, 4))
console.log(find_d([1, 2, 3, 4, 5], 3, 0, 4))
console.log(find_d([], 3, 0, 0))
console.log(find_d([1], 3, 0, 1))



