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
        if(cmds[i].hasOwnProperty('penWidth'))
        {
            penwidth(cmds[i].penWidth)
        }
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
        draw(cmds[i].x,cmds[i].y)
        for(let i = 0; i < 100; i++)
        {
            fd(5)
            lt(360/100)
        }

    }
}
        