let vowel = 'aieuo'
function censoredString (string)
{
    let newstring = ''
   for(let x of string)
   {
        if(vowel.includes(x))
        {
            newstring +='*'
        }
        else newstring += x
   }
   return newstring
}
let string = 'hello world'
console.log(censoredString(string))