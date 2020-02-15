// (Optional) Use JS Turtle to draw n polygons, n entered by users
function drawPolygon()
{
    let polygon = Number(prompt("How many polygon?"))
    for(let i = 3; i < polygon + 3; i++)
    {
     for(let j = 0; j < i; j++)
     {
         fd(100)
         lt(360/i)
     }
    }
}