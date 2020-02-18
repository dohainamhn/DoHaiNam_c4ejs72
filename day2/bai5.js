let a = prompt("Enter the sequence of numbers")
let b = a.split(",")
var sum = 0;
for(let i = 0; i < b.length ; i++)
    {
        sum += Number(b[i])
    }
console.log(sum)
