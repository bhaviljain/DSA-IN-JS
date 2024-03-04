var subarraySum = function(nums, k) {
    let count = 0;
    let n = nums.length
    for(let i = 0; i<n; i++)
    {
        for(let j = i; j<n; j++)
        {
            let sum = 0;
            for(let l = i; l <= j; l++)
            
                sum =  sum + nums[l]
            
            if(sum === k)
            
                count++
            }
     
    }
  return count;
 };
console.log(subarraySum([1,3,2,-1,-2,5,-3]
    ,3)); 