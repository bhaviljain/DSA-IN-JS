// var replaceElements = function(arr) {
//     let res= [];
//     let temp =[...arr]
//       for(let i = 0; i < arr.length; i++){
//           temp.shift()
//           res.push(Math.max(...temp))
//       }
//                res[arr.length - 1] = -1
 
//       return res;
//  };
//  console.log(replaceElements([17,18,5,4,6,1]));

const replaced = function (arr)
{
 let res= []
 let temp= [...arr]
 for (let i = 0; i < arr.length; i++){
    temp.shift()
  res.push(Math.max(...temp))

}
res[arr.length-1] = -1;

return res;
}
console.log(replaced([2,1,3,1])); 




