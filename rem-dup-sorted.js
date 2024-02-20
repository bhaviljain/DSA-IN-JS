var removeDuplicates = function(nums) {
    for(let i=0 ; i<nums.length; i++)
    {
        if(nums[i] === nums[i+1])
        {
       nums.splice(i+1,1)
       i--
        }
    }
    return nums.length
   };
   console.log(removeDuplicates([1,1,1])); //number of element available counts will be posted