document.body.style.height = `${window.innerHeight}px`
document.body.style.width = `${window.innerWidth}px`

const defaultColor  = 'rgb(15, 15, 15)'
const defaultColor2 = 'rgb(151, 148, 148)'

const start  = document.getElementById('start')
const stop   = document.getElementById('stop')
const input  = document.querySelector('input')
const view   = document.querySelector('h2')
var timer;

start.style.color ,stop.style.color  = 'rgb(15, 15, 15)';

function changingColorButton(x)
{   
    if(x == 'start')
    {
        start.style.color = defaultColor2
        stop.style.color  = defaultColor
    }
    else {
        stop.style.color = defaultColor2
        start.style.color  = defaultColor
    }
    
}

function stopTimer()
{
    changingColorButton('stop')
    if(this.id == 'stop') 
    {
        view.textContent = 'Stopped'
        clearInterval(timer)
    }
}

function startTimer()
{
    changingColorButton('start')
    let count = input.value
    timer = setInterval(function()
    {
        view.textContent = count;
        if(count <= 0)
        {
            view.textContent = "Time's up"
            clearInterval(timer)
        }
        count--;
    },1000)
}
start.addEventListener('click',startTimer)
stop.addEventListener('click',stopTimer)
