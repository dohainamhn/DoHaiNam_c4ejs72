let sheeps = [100,200,30,45,30]
console.log("Hello, my name is Nam and here is my sheep sizes:\n",...sheeps)
var c = Number(sheeps[0]);
var b;
for(let i =1; i<sheeps.length; i++)
    {
       if(c < Number(sheeps[i]))
       c = Number(sheeps[i])
    }
console.log("Now my biggest sheep has size ",c,"let's shave it")
for(let i = 0; i < sheeps.length; i++)
    {
        if(c == sheeps[i])
        sheeps[i] = 8;
    }
console.log("after shearing, here is my flock\n",...sheeps)
for(let i = 1; i<5; i++)
{
    for(let j = 0; j<sheeps.length; j++)
        {
            sheeps[j] += 50
        }
    console.log("MONTH",i,"\n0ne month has, passed, my sheeps have grown, here are their sizes\n",...sheeps)
}
var sum = 0
for(let i = 0; i<sheeps.length; i++)
    {
       sum += sheeps[i] 
    }
console.log("my flock has size in total:",sum,"\n I would get ",sum,"*","2$ =",sum*2)

