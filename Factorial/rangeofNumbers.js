function rangeofNumbers(SN ,EN)
{
    if(EN < SN) {return []}
    else 
    {
        const numbers = rangeofNumbers(SN , EN - 1)
        numbers.push(EN)
        return numbers
    }
}
console.log(rangeofNumbers(0,5));