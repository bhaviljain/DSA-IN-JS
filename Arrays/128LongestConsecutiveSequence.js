// 128LongestConsecutiveSequence


var longestConsecutive = function(nums) {
    nums.sort((a, b) => a - b);
     if (nums.length === 0) return [[]];
    let small= -Infinity;;
    let long = 1;
    let count = 0;
    for(let i =0; i<nums.length; i++)
    {
    if(nums[i] - 1 === small)
    {
        count = count+1;
        small = nums[i]
    }
    else if(nums[i] !== small)
    {
   count = 1;
   small = nums[i]
    }
    long = Math.max(long,count)
    }

    return long
};
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));

//TC : O Log N * N
// O Log N as we are sorting