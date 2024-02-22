var maximumWealth = function(accounts) {
    let res = 0;
    for(let i=0 ; i<accounts.length; i++)
    {
        let maxx = accounts[i].reduce((total , curr)=>
       total + curr, 0)
        if(maxx > res)
        {
            res = maxx
        }
    }
                return res

};
console.log(maximumWealth([[1,2,3],[3,2,1,4,5]]));