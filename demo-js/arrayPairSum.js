/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  const res = nums.sort((a, b) => a - b).filter((item, idx) => {
    return !(idx % 2)
  })
  console.log(res)
  res.reduce((acc, curr) => {
    return acc += curr
  }, 0)
  return res
};

var r = arrayPairSum([1, 4, 3, 2])
console.log(r)
