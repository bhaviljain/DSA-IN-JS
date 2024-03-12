var chunk = function(arr, size) {
    let Chunked = size;
    let chu=  []
    for (let i = 0; i < arr.length; i += Chunked) {
        chu.push(arr.slice(i, i + Chunked));

    }
    return chu;
};
console.log(chunk([1,2,4,5,6],1));