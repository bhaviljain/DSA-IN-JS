var removeElement = function(nums, val) {
    let i = 0;
    for(let j =0; j<nums.length; j++)
    {
        if(nums[j] !== val)
        {
            nums[i] = nums[j] //new array bana diye
            i++
        }
    }
           return i;
 
 };
 console.log(removeElement([0,1,2,2,3,0,4,2],5));