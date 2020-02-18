let n = prompt("Hi there, welcome to shop , what do you want(C , R ,U ,D)?").toUpperCase()
let item = ['shirt','socks','shoes','Jeans']
if(n =='R')
    {
        for(let i=0; i< item.length; i++)
        {
            console.log(item[i])
        }
    }
else if(n =='C')
    {
        let b = prompt("Enter the new item")
        item.push(b)
        alert("Done!")
        for(let i=0; i< item.length; i++)
        {
            console.log(item[i])
        }
    }
else if(n == 'U')
    {
        let u = Number(prompt("choose the position you want to update"))
        if(Number.isNaN(u))
            {
                console.log("please enter a number")
            }
        else 
        {
         let b = prompt("enter your data")
         item[u] = b
         alert("Done!")
         for(let i=0; i< item.length; i++)
            {
                console.log(item[i])
            }
        }
    }
else if(n == 'D')
        {
            let u = Number(prompt("choose the position you want to delete"))
            if(Number.isNaN(u))
                {
                    console.log("please enter a number")
                }
            else 
                {
                    item.splice(u,1)
                    alert("Done")
                    for(let i=0; i< item.length; i++)
                    {
                        console.log(item[i])
                    }
                }
        }
    
