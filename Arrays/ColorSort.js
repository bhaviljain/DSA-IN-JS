var sortColors = function(nums) {
    let temp = []
    for(let i= 0; i<nums.length; i++)
    {
     for(let j = i  + 1; j<nums.length; j++)
     {
        if(nums[i] <= nums[j])
        {
            continue;
        }
        if(nums[i] > nums [j])
        {
            let temp = nums[j]
            nums[j] = nums[i]
            nums[i] =  temp;
        }
       
        
    }
    }
                return nums

};
console.log(sortColors([2,2,1,1,0,0]));