function sum (num1 , num2)
{
    while(num2!=0)
    {
    const all = num1 & num2 ;
    num1 = num1 ^ num2
    num2 = all<<1
    }
    return num1
}
console.log(sum(10,5));