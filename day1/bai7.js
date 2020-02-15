// Write a program asking user to enter two numbers, x and n, then check if x is in lower
// half or higher half of n
function check()
    {
        let x = Number(prompt("Moi Nhap x:"))
        let n = Number(prompt("Moi Nhap n:"))
        if(x > n/2) console.log("higher half of n") 
        else console.log("lower half of n") 
    }