var isPalindrome = function(x) {
  
    if(x<0) return false
            return x === Number(x.toString().split("").reverse().join(""))
};
const res = isPalindrome(121)
console.log(res);