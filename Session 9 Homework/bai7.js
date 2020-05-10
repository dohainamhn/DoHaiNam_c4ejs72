const root = document.getElementById('API')

async function loadData(){
    const data = await fetch('http://quotes.rest/qod.json')
    const realdata = await data.json()

    const content = realdata["contents"]['quotes'][0]['quote']
    const author = realdata["contents"]['quotes'][0]['author']

    const html = `<h2>${content}</h2><b>${author}</b>`

    root.insertAdjacentHTML("beforeend",html)
}

loadData()