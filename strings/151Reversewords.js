var reverseWords = function(s) {
    let ReverseStr ='';
    let arr = s.split(' ')
    for(let i = arr.length - 1 ; i>=0; i--)
    {
        if(arr[i]==='') continue;
        if(ReverseStr.length > 0) 
        ReverseStr+=' '
        ReverseStr +=arr[i]

    }
    return ReverseStr;
};
console.log(reverseWords("the    sky is blue"));lllllllllllllllllllllllllllllllllllllllll