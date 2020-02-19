let a = prompt("Enter the sequence of name")
let c = a.split(",")
let b = [];
for(let i = 0;i<c.length;i++)
    {
        b[i] = "<" + c[i] + ">,"
    }
console.log(a,'=>',...b)