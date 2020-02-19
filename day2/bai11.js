let a = prompt("Enter the sequence of number")
let b = a.split(",")
let newArry = []
for(let i=0;i<b.length;i++)
    {
      if(b[i]%2 !==0) newArry.push(b[i]+',')
    }
console.log(a,'=>',...newArry)


