function mapLetters(string)
{
    let object = {}
    for(let i = 0; i < string.length ;i ++)
    {
        let arr = []
        for(let j = 0;j <=string.length; j++)
        {
            if(string[j] === string[i]) arr.push(j)
        }
        object[string[i]] = arr
    }
    return object
}
console.log(mapLetters('dododododo'))