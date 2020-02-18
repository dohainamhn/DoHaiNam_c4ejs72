clear()
const colors = ['red', 'gray', 'blue', 'purple', 'cyan']
var x=20,y=20;
for(let i =0; i < 5;i++)
{
  x+=20
  y+=20
  color(colors[i])
  for(let j =0; j < 4;j++)
  {
    fd(x)
    rt(90)
  }
}