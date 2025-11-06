
(async () =>{
const myJ = document.querySelector('#joke')
const myPL = document.querySelector('#punchline')
const nextJoke = document.querySelector('#getjoke')

const url = '/api/v1/random-joke'

const result = await fetch(url)
const {joke, punchline} = await result.json()

myJ.textContent = joke
myPL.textContent = punchline

nextJoke.addEventListener('click', async () =>{
    const result = await fetch(url)
    const {joke, punchline} = await result.json()

    myJ.textContent = joke
    myPL.textContent = punchline
})

})()




