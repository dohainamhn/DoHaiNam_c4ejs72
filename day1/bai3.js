// 3.a Write a program to print out 7 numbers, starting from 0 (no user input)
function cau3a()
    {
    for(let i = 0; i < 7; i++)
        {
            console.log(i)
        }
    }
// 3.b Write a program to print out n numbers, starting from 0, n entered by user
function cau3b()
    {
    var n = Number(prompt("Moi Nhap n:"))
    for(let i = 0; i < n; i++ )
        {
            console.log(i)
        }
    }
// 3.c Write a program to print out A sequence of numbers, starting from 3, ending before n, n entered by user
function cau3c()
    {
    var n = Number(prompt("Moi Nhap n:"))
    for(let i = 3; i < n; i++)
        {
            console.log(i)
        }
    }
// 3.d Write a program to print out A sequence of numbers, starting from c, ending before n, c and n entered by
// user
function cau3d()
    {
        var c = Number(prompt("Moi Nhap c:"))
        var n = Number(prompt("Moi Nhap n:"))
        for(let i = c; i < n; i++)
            {
                console.log(i)
            }

    }
// 3.e Write a program to print out A sequence of numbers, starting from c, ending before n, stepping by 3, c and
// n entered by user
function cau3e()
    {
        var c = Number(prompt("Moi Nhap c:"))
        var n = Number(prompt("Moi Nhap n:"))
        for(let i = c; i < n; i+=3)
            {
                console.log(i)
            }
    }
// 3.e Write a program to print out A sequence of numbers, starting from c, ending before n, stepping by s. c, n
// and s entered by user
function cau3f()
    {
        var c = Number(prompt("Moi Nhap c:"))
        var n = Number(prompt("Moi Nhap n:"))
        var s = Number(prompt("Moi Nhap s:"))
        for(let i = c; i < n; i+=s)
        {
            console.log(i)
        }
    }