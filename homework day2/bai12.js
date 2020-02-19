// 1Use JS Turtle to draw a polygon, the number of polygon’s edges entered by users
let n = Number(prompt("moi nhap số cạnh:"))
for(let i = 0; i < n; i++)
        {
            if(n < 10)
                {
                    fd(50)
                }
            else if(n >= 10 && n <=100)
                {
                    fd(10)
                }
            else fd(2)
            lt(360/n)
        }