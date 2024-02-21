var maxSubArray = function(nums) {
    let maxSum = nums[0];
    for(let i =0; i<nums.length; i++)
    {
        let currentSum = 0;
        for(let j = i ;j<nums.length; j++)
        {
         currentSum = currentSum + nums[j]
         if(currentSum > maxSum)
         maxSum = currentSum
        }
    }
    return maxSum;
};
console.log(maxSubArray([-10 -2 -3 -4]));

// tc : (O N sqaure)

var maxSubArray = function(nums) {
    let maxSum = nums[0]
       let sum = 0;
       for(let i=0 ; i<nums.length; i++)
       {       
           sum += nums[i]
           if(sum > maxSum)
           {
           maxSum = sum
           
       }
       if(sum < 0)
         {
             sum = 0
         }
       }
                 return maxSum

};

//TC : (O)N