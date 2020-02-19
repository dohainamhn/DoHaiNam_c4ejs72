// 9.a Write a program to print out 6 L’s and H’s, half L’s, half H’s (L means low, H means high)
function cau9a()
    {
        let x = 6
        let a = x / 2
        console.log(a + "L\n" + a + "H")
    }
// 9.b Write a program to print out n L’s and H’s in total, n entered by user
function cau9b()
    {
        let n = Number(prompt("Moi Nhap n:"))
        let a = n % 2
        let b = n / 2
        console.log(b + a/2 + "H\n" + (b - a/2) + "L")
    }
// 9.c Write a program to print out 8 1’s and 0’s in total, consecutively
function cau9c()
    {
      for(let i = 0 ; i < 8 ; i++)  
        {
            if(i % 2 == 0) console.log("0")
            else console.log("1")
        }
    }
// 9.d  Write a program to print out n 1’s and 0’s in total, consecutively, n entered by user
function cau9d()
    {
        let n = Number(prompt("moi nhap n:"))
        for(let i = 0 ; i < n ; i++)  
        {
            if(i % 2 == 0) console.log("0")
            else console.log("1")
        }
    }
