// var intersection = function(nums1, nums2) {
   
//     let one = new Set(nums1)
//     let two = new Set(nums2)
//     let inter = [];
//     for(let i of two)
//     {
//         if(one.has(i))
//         inter.push(i)
//     }
//     return inter;
//   };
//   console.log(intersection([1,2,3,4],[2,3,4,5,6]));


function NumberofElementsInIntersection(a, b) {
    // code here
     let one = new Set(a)
let two = new Set(b)
let inter = [];
let count =0;
for(let i of two)
{
  if(one.has(i))
  {
  inter.push(i)
  count++
}


return count;
}
}
console.log(NumberofElementsInIntersection[2,2,3,1,4],[1,2,3,4]);
