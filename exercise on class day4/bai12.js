clear()
home()
penwidth(1)
setshape("rocket")
rt(90)
const cmds = [
    {
        shape: 'circle',
        x: 0,
        y: -20,
        radius: 60,
    },
    {
        shape: 'circle',
        x: 0,
        y: 80,
        radius: 40,
    },
    {
        shape: 'circle',
        x: -75,
        y: 10,
        radius: 20,
    },
      {
        shape: 'circle',
        x: 75,
        y: 10,
        radius: 20,
    },
    {
        shape: 'square',
        x: -65,
        y: -100,
        width: 30,
    },
      {
        shape: 'square',
        x: 38,
        y: -100,
        width: 30,
    },
  
  {
        shape: 'rect',
        x: -30,
        y: 80,
        width: 20,
        height: 4
    },
    {
        shape: 'rect',
        x: 10,
        y: 80,
        width: 20,
        height: 4
    },
      {
        shape: 'rect',
        x: -10,
        y: 50,
        width: 20,
        height: 6
    },
  {
        shape: 'square',
        x: 500,
        y: 500,
        width: 20,
    },
]
function draw(x,y)
{
    penup()
    fd(x)
    lt(90)
    fd(y)
    pendown()
}

for(let i = 0; i< cmds.length;i++)
{
    if(cmds[i].shape === 'square')
    {   
        let width = cmds[i].width
        draw(cmds[i].x,cmds[i].y)
        for(let i =0;i<4;i++)
        {
            fd(width)
            rt(90)
        }
    }else if (cmds[i].shape === 'rect')
    {
        let width = cmds[i].width
        let height = cmds[i].height
        draw(cmds[i].x,cmds[i].y)
        for(let i =1;i<=4;i++)
        {
            if(i%2==0)
            {
                fd(width)
                rt(90)
            }
            else {
                fd(height)
                rt(90)
            }
        }
    }else
    {
        let radius = cmds[i].radius
        for (var i = 0; i < 360; i++) {
            fd(radius*3.14/360);
            rt(1);
          }
      }
      home()
}
        