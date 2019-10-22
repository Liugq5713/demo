// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */

// function findMaxNum(n, nums) {
//   let start = 0;
//   let end = nums.length - 1
//   let mid
//   while (start <= end) {
//     mid = Math.floor((start + end) / 2)
//     console.log(start, mid, end)
//     if (nums[mid] === n) {
//       return nums[mid]
//     }
//     if (nums[mid] > n) {
//       end = mid - 1
//     }
//     if (nums[mid] < n) {
//       start = mid + 1
//     }
//   }
//   return nums[mid - 1]
// }

// var combinationSum = function (candidates, target) {
//   candidates.sort((a, b) => a - b)
//   const res = []
//   if (target < 0) {
//     return false
//   }
//   if (target === 0) {
//     return target
//   }
//   let currentNum = target
//   for (let i = 0; i < candidates.length; i++) {
//     const res = []
//     currentNum = currentNum - candidates[i]
//     const n = combinationSum(candidates, currentNum)
//     res.push(n)
//     console.log(res)
//   }
//   return res
// };


function combinationSum(candidates, target) {
  let path = []
  let res = []
  getCombination(candidates, target, 0, res, path)

  function getCombination(candidates, target, it, res, path) {
    if (target < 0) {
      return
    }
    if (target === 0) {
      path = path.slice()
      res.push(path);
      return
    }
    for (let i = it; i < candidates.length; i++) {
      path.push(candidates[i])
      getCombination(candidates, target - candidates[i], i, res, path)
      // 无论是该路径大于target还是等于target，都需要对其删除最后一个元素，进行其余支路的搜索
      path.pop()
    }
  }
  return res
}
console.log(combinationSum([2, 3, 6, 7], 7))
