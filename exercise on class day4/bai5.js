const products = [
    sp1 = {
        name: 'Xiaomi portable charger 20000mah',
        Brand: 'xiaomi',
        Price: 428,
        Color: 'White',
        Category: 'Charger',
        Providers:'Phukienzero Dientuccc'
    },
    sp2 ={
        name:'VSmart Active 1',
        Brand: 'VSmart',
        Price: 5487,
        Color: 'Black',
        Category: 'Phone',
        Providers:'Tgdd Ddghn Ddghn',
    },
    sp3 ={
        name:'IPhone X',
        Brand: 'Apple',
        Price: 21490,
        Color: 'Gray',
        Category: 'Phone',
        Providers:'Tgdd',
    },
    sp4 ={
        name:'Samsung Galaxy A9',
        Brand: 'Samsung',
        Price: 8490,
        Color: 'Blue',
        Category: 'Phone',
        Providers:'Tgdd',
    },
]
function b5_1()
{
    for(let i =0;i<products.length;i++)
        {
            console.log('name: '+products[i].name +'\n'+'Price: '+products[i].Price)
        }
}

function b5_2()
{
    for(let i =0;i<products.length;i++)
        {
            console.log('#'+(i+1)+'.'+products[i].name +'\n'+'Price: '+products[i].Price)
        }
    let a = Number(prompt('Enter product position'))
    console.clear()
    for(let x in products[a])
    {
        console.log(x+':'+products[a][x])
    }
}

function b5_3()
{
    let a = prompt("Enter your category")
    for(let i =0;i<products.length;i++)
    {
        if(a === products[i].Category)
        {
            console.log('name:'+products[i].name)
            console.log('price:'+products[i].Price)
        }
    }
}
function b5_4And5_5()
{
    const provider = ['Phukienzero','Dientuccc','Ddghn','VhStore','Tgdd']
    for(let i =0; i<products.length;i++)
    {
        console.log('#'+i+'.'+products[i].name)
        console.log('Price:'+products[i].Price)
        console.log('provider:'+products[i].provider)
    }
    let a = prompt("moi nhap provider:")
    console.clear()
    if(provider.indexOf(a,0) < 0)
    {
        alert("Nhập sai nhà cung cấp !")
    }
    for(let i =0;i<products.length;i++)
    {
        let b = products[i]['Providers'].includes(a,0)
        if(b)
        {
            console.log("Tb:"+i)
            for(let x in products[i])
            {
                console.log(x,products[i][x])
            }
        }
    }
}


