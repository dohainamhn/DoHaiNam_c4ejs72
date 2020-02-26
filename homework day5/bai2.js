
function getFrequencies(arr)
{
    let object = {}
    arr.forEach(function(value)
    {
        if(!object[value]) object[value] = 1
        else object[value] ++
    })
    return object;
}
console.log(getFrequencies(["A", "B", "c", "c", "A","C","T"]))

