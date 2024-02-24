var findMaxConsecutiveOnes = function(nums) {
    let count = 0; 
    let maxCount = 0;
    for(let vals of nums)
    {
        if(vals === 1)
        {
            count++
        }
        else{
            count = 0
        }
               maxCount = Math.max(count, maxCount);
  
     
    }  
                  return maxCount
  
  
  };
  console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));