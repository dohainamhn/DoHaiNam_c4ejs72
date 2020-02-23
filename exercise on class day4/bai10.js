clear()
home()
penwidth(1)
setshape("rocket")

const cmds = [
    {
        shape: 'square',
        x: 20,
        y: 40,
        width: 50,
    },
    {
        shape: 'rect',
        x: 8,
        y: 70,
        width: 12,
        height: 40,
    },
    {
        shape: 'rect',
        x: 70,
        y: 70,
        width: 12,
        height: 40,
    },
    {
        shape: 'rect',
        x: 10,
        y: 20,
        width: 70,
        height: 20,
    },
    {
        shape: 'square',
        x: 25,
        y: 40,
        width: 14,
    },
    {
        shape: 'square',
        x: 33,
        y: 42,
        width: 6,
    },
    {
        shape: 'square',
        x: 50,
        y: 40,
        width: 14,
    },
    {
        shape: 'square',
        x: 58,
        y: 42,
        width: 6,
    },
    {
        shape: 'square',
        x: 40,
        y: 25,
        width: 8,
    },
    {
        shape: 'square',
        penWidth: 1,
        x: 500,
        y: 500,
        width: 15,
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
    rt(90)
    draw(cmds[i].x,cmds[i].y)
    if(cmds[i].shape === 'square')
    {   
        let width = cmds[i].width
        for(let i =0;i<4;i++)
        {
            fd(width)
            rt(90)
        }
    }else {
        let width = cmds[i].width
        let height = cmds[i].height
        for(let i =0;i<4;i++)
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
    }
}
        