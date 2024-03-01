let nums1 = [4,1,2,1]
let nums2 = [1,3,4,2]
let max = Math.max(...nums1)
let len = nums1.length
let set = new Set(nums1)
let newSet = JSON.stringify(set)


console.log(typeof newSet)
console.log(max);
console.log(len);
console.log(set);
