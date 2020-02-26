object = {
    'Nguyen Minh Huy': 'name',
    'MindX C4E': 'class'
}
for(let x in object)
{
    let temp,temp2;
    temp = x;
    temp2 = object[x]
    delete object[x]
    object[temp2] = temp 
}
console.log(object)
