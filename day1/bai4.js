// Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
function  factorialOfn()
    {
        let n = Number(prompt("moi nhap n:"))
        var x = 1;
       for(let i = 1; i <= n; i++ )
        {
             x = x*i
        }  
        console.log(x)
    }
