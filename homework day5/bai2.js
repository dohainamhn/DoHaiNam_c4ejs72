
function getFrequencies(arr)
{
    let suma = 0;
    let sumb = 0;
    let A_B = {}
    arr.forEach(function(value)
    {
        if(value === 'A') suma++;
        else sumb ++;
    })
    A_B['A'] = suma;
    A_B['B'] = sumb;
    return A_B;
}
console.log(getFrequencies(["A", "B", "A", "A", "A"]))
