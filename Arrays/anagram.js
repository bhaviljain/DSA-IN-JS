// var isAnagram = function(s, t) {
//     s = "djnjdnjsd"
//     t= "snjdnsjdnxjn"
//     t = t.split('').sort().join("")
//     s = s.split('').sort().join("")
//     return s === t;
// };
// const res = isAnagram()
// console.log(res);

var isAnagram = function(s, t) {

if(s.length !== t.length)
 return false;

 let obj1 ={}
 let obj2 ={}

 for(let i=0; i<s.length; i++){
   obj1[t[i]] = (obj1[t[i]] || 0) + 1
   obj2[s[i]] = (obj2[s[i]] || 0) + 1
 }
 for (let i=0; i<obj1; i++){
    if(obj1[i]!== obj2[i]) return false
 }
 return true
}
console.log(isAnagram('gaga', 'agga'));

