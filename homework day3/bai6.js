let a = prompt("Enter the sequence of numbers")
let b = a.split(",")
var c = Number(b[0]);
for(let i =1; i<b.length; i++)
    {
       if(c > Number(b[i]))c = Number(b[i])
    }
console.log(c)