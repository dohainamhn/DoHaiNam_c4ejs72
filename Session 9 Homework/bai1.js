//1. Create a Promise that resolve: return ‘Promise is da best’ after 5
//seconds. Take this Promise to test / consume in 2 ways

let promise = new Promise(function(resolve){
    setTimeout(function (){resolve('Promise is da best')},5000)
})
promise.then(function(x){console.log(x)})

async function render(){
    const data = await promise
    console.log(data)
}
render()