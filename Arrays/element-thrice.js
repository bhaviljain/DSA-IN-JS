
    //Function to find the element that occurs once in the array.
    var singleNumber = function(nums) {

        //your code here
        nums.sort((a,b)=>a-b)
        
        for(let i =0; i<nums.length; i+=3)
        {
            if(nums[i]!==nums[i+1])
            {
            return nums[i]
            }

        }
    }
console.log(singleNumber([1, 10, 1, 1]));