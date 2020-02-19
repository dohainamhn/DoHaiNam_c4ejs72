const arr = [3, 4, 6, -9, 10, -88, 2];
let a = Number(prompt("Enter a numbers"))
if(Number.isNaN(a))
    {
        console.log("please enter a number")
    }
else if(!Number.isNaN(a))
    {
        var h = 0
        for(let i = 0; i < arr.length; i++)
        {
            if(a == arr[i])
                {
                  console.log("the index of the number in array is: ",i)
                  h = 1;
                }
        }
        if(h == 0)
        {
            console.log("can't found the number in array")
        }
    }

