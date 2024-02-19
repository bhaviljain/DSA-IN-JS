// // const arr = [1,8,10,1,6,6,66,88,1,8]

// function sec(arr){
// const unique =Array.from( new Set(arr))
// unique.sort((a,b)=>{
//     return b - a
// })

// if (unique.length >=2){
//     return unique[1]
// }
// else{
//     return -1
// }
// }
// console.log(sec([1,8,10,1,6,6,66,88,1,8]));

// // time complex - nlogn


function main(arr) {

   
    let first = -1;
    let second = -1;


    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] > first)
        {    
            second = first;
            first = arr[i];
            
        }
        else if (arr[i] != first && arr[i] > second)
        {
            second = arr[i];
        }
    }
    return second;
    return -1
}
console.log(main([1,8,10,1,6,6,66,88,1,8,77]));