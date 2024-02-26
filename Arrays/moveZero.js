var moveZeroes = function(nums) {
    let zero = 0;
    for(let i=0; i<nums.length; i++)
{
    
    if(nums[i]===0)
    {
        zero++
    }
            else{
     [nums[i-zero], nums[i]] = [nums[i], nums[i-zero]] 

            }

}
    return nums
};
console.log(moveZeroes([0,1,0,3,12]));




var moveZeroes = function(nums) {
   
    let zero = 0;
    for(let i=0; i<nums.length;i++)
    {     //Moves all the non zero numbers at the start of the array

        if(nums[i]!=0)
        {
            nums[zero] = nums[i];
            zero ++;
        }
    }
    for(let i=zero; i<nums.length;i++)
    {
        nums[i] = 0
    }
    //Moves all the zeroes replaced from last non zero number found 
    //to the end of array 
    return nums
    };
    console.log(moveZeroes([0,1,0,3,12]));
