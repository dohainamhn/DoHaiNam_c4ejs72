function keysAndValues(object)
{
    let newArr = []
    for(let x in object)
    {
        newArr.push(x)
    }
    for(let x in object)
    {
        newArr.push(object[x])
    }
    return newArr;
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }))