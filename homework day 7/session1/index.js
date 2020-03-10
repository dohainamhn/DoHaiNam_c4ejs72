const body = document.querySelector('body')
body.style.width = `${window.innerWidth}px`
body.style.height = `${window.innerHeight}px`
const countUp = document.getElementById('countUp')
const countDown = document.getElementById('countDown')
const display = document.getElementById('display')
let counter = 0
display.textContent = counter
function count(e)
{
   if(e.target.id == 'countUp')
   {
    counter ++
   }
   else counter--
    display.textContent = counter
}
countUp.addEventListener('click',count)
countDown.addEventListener('click',count)


