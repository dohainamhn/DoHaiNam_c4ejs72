clear()
setshape("rocket")
rt(90)
const rect = {
    x: 100,
    y: 50,
    width: 20,
    height: 40,
};
penup()
fd(rect.x)
lt(90)
fd(rect.y)
pendown()
for(let i =1;i<=4;i++)
{
    if(i%2==0)
    {
     fd(rect.width)
     rt(90)
    }
    else 
    {
        fd(rect.height)
        rt(90)
    }
}
