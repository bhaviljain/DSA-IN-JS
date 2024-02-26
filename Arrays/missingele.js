var missingNumber = function(nums) {
    let n = nums.length;
    let sum = (n * (n + 1)) / 2;

    for (let val of nums) {
        sum -= val;
    }
    return sum;
};
console.log(missingNumber([0,2,3]));





var missingNumber = function(nums) {

let set = new Set(nums);
for(let i=0; i<set.size; i++)
{
    if(!set.has(i))
    {
        return i;
    }
}
return set.size;
}
console.log(missingNumber([0,2,3]));

