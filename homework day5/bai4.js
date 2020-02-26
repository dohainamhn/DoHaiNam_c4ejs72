function khaBanh(string)
{
    let newstring = ""
    let index = 1;
    for(let x of string)
    {
        if(index %2 != 0 ) newstring += x.toUpperCase()
        else newstring += x
        index++
    }
    return newstring;
}
console.log(khaBanh('hello'))
