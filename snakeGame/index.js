const canvas = document.getElementById("screen")
const context = canvas.getContext('2d')

canvas.style.border = "green solid 1px"

function game(){
    this.box = 32;
    this.score = 0
    
    this.foodImage = new Image()
    this.foodImage.src = './img/food.png'
    this.snakehead = new Image()
    this.snakehead.src = './img/snakehead.png'
    this.direction = null;

    this.food = {
        x : Math.floor(Math.random()*17) * this.box,
        y : Math.floor(Math.random()*15) * this.box
    }

    this.snake = [{
        x: Math.floor(Math.random()*10)*this.box,
        y: Math.floor(Math.random()*13)*this.box
    }]

    let self = this

    this.draw = function(){
        context.clearRect(0,0,800,600)
        for(let i = 0;i < self.snake.length;i++){
            if(i<1){
                context.fillStyle = 'green'
                context.fillRect(self.snake[i]["x"],self.snake[i]["y"],self.box,self.box)
            }
            else{
                context.fillStyle = 'red'
                context.fillRect(self.snake[i]["x"],self.snake[i]["y"],self.box,self.box)
            }
        }

        context.drawImage(self.foodImage,self.food.x,self.food.y,self.box,self.box)

        let newHeadSnake = {
            x : self.snake[0].x,
            y : self.snake[0].y
        }

        if(self.snake[0].x == self.food.x && self.snake[0].y == self.food.y )
            {
                self.score++
                console.log(self.score)
                let x =  Math.floor(Math.random()*17) * self.box
                let y =  Math.floor(Math.random()*15) * self.box
                let check = true
                while(check)
                {
                    for(let i = 0; i < self.snake.length;i++)
                    {
                        if(x == self.snake[i].x && y == self.snake[i].y) {
                            console.log(`snake x ${ self.snake[i].x}, snake y:${ self.snake[i].y},x${x},y:${y}`)
                            x =  Math.floor(Math.random()*17) * self.box
                            y =  Math.floor(Math.random()*15) * self.box
                        }
                        else check = false
                    }
                }
        
                self.food = {
                    x: x,
                    y: y
                }
            }
        else{
                self.snake.pop()
            }
            self.snake.unshift(newHeadSnake) 

        if( self.direction == "LEFT") self.snake[0].x -= self.box
            if(  self.direction == "UP") self.snake[0].y -= self.box;
            if(  self.direction == "RIGHT") self.snake[0].x += self.box;
            if(  self.direction == "DOWN") self.snake[0].y  += self.box;

        if(self.snake[0].x<0||self.snake[0].y<0||self.snake[0].x>768||self.snake[0].y>600||self.collision())
        {
            context.fillStyle = 'green'
            clearInterval(snake)
            context.fillText('Game Over', 200, 300,600);
        }

         self.countScore()
    }

    

    this.direction = function(event){
        let key = event.keyCode;
        if( key == 37 && self.direction != "RIGHT"){
            self.direction = "LEFT"
        }else if(key == 38 && self.direction != "DOWN"){
            self.direction = "UP";
        }else if(key == 39 && self.direction != "LEFT"){
            self.direction = "RIGHT";
        }else if(key == 40 && self.direction != "UP"){
            self.direction = "DOWN";
        }
    }

    this.countScore = function(){
        context.fillStyle = 'blue'
        context.font = "30px Arial"
        context.fillText(`Score: ${self.score}`, 10, 30,60);
    }

    this.collision = function(){
        for(let i =1;i < self.snake.length; i++){
            if(self.snake[0].x == self.snake[i].x && self.snake[0].y == self.snake[i].y){
                return  true
            }
        }
        return false
    }

}

let g = new game()
window.addEventListener('keydown',g.direction)
let snake = setInterval(g.draw,100)
