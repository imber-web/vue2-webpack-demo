const nums = [7, 8, 9, 2]
const target = 9
const toSum = (nums, target) => {
  const diffs = new Map()
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i]
    if (diffs.get(target - item) !== undefined) {
      return [diffs.get(target - item), i]
    }
    diffs.set(item, i)
  }
}
console.log(toSum(nums, target))
