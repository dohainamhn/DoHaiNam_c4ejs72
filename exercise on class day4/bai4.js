const dictionation ={
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect:'The formal word for ‘error',
    pm: 'The short version of Project Manager, the person in charge of the final result of a project',
    'ui/ux': 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
}
alert("hi there, this is dev dictination")
let n = prompt('Enter the keyword')
for (let x in dictionation)
{
    if(n === x)
        {   
            alert(x+'\n'+dictionation[n])
            break;
        }
    else 
        {
            let a = prompt('we could not find your word:'+n+'leave your explanation')
            dictionation[n] = a;
            break;
        }   
}
let c = prompt('Enter the keyword')
for (let d  in dictionation)
{
    if(c === d)
        {   
            alert(d+'\n'+dictionation[c])
            break;
        }  
}

for(let x in dictionation)
{
    console.log(x,':',dictionation[x])
}






