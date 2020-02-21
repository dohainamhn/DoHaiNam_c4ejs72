const learningTask = [
    task1 = {
        name: 'HTML',
        complete: false, 
    },
    task2 = {
        name: 'CSS',
        complete: false, 
    },
    task3 = {
        name: 'basic of javascript',
        complete: false, 
    },
    task4 = {
        name: 'node package manager(npm)',
        complete: false, 
    },
    task5 = {
        name: 'Git',
        complete: false, 
    }
]
function b6_1()
{
    console.log("Hi there, this is your learning Task to front - end career")
    for(let i = 0; i < learningTask.length; i++)
    {   
        console.log(`${i+1}.${learningTask[i]['name']} \n  Complete: ${learningTask[i]['complete']}`)
    }
}
function checkif(x)
{
    if(Number.isNaN(x))
    {
        alert("please enter a number")
    }
    else return true;
}
function b6_2_3_4_5()
{
    b6_1()
    let a = prompt("Enter your command (New, Delete, Update, Complete)")
    if(a === 'New')
    {
        let b = prompt("Enter new Task")
        learningTask.push(
            {
                name: b,
                complete: false,
            }
        ) 
    }
    else if(a === 'Update')
    {
        let b = Number(prompt("Enter position"))
        checkif(b);
        if (checkif())
        {
            let c = prompt("Enter new title")
            for(let x in learningTask[b-1])
            {
                if(x === 'name')learningTask[b-1][x] = c
            }
        }
    }
    else if(a === 'Complete')
    {
        let b = Number(prompt("Enter position"))
        checkif(b)
        if(checkif()) for(let x in learningTask[b-1])
        {
            if(x === 'complete')learningTask[b-1][x] = 'true'
        }
    }
    else if(a === 'Delete')
    {   
        let b = Number(prompt("Enter position"))
        checkif(b)
        if(checkif())
        {
            learningTask.splice(b-1,1)
        }
        
    }
    console.clear()
    b6_1()
}
b6_2_3_4_5()
