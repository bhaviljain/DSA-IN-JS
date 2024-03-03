//this is with built in functions
function isPal(str)
{
    let strnew = str.split("").reverse().join("")
    if(strnew === str)
    return true;

    return false;
}
console.log(isPal("level"));

//without inbuilt functions

function isRev(str)
{
    let strnew = str.toLowerCase();
   let left = 0;
   let right = strnew.length-1;
   while(left < right){
    if(strnew[left] !== strnew[right]){
        return false;
        left++;
        right--
    }
    return true
   }
}
console.log(isRev("ajay"));
