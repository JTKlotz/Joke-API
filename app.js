
const path = require('path')
const express = require('express')
const app = express()
const port = 3000

const root = path.join(__dirname, 'public')

const jokes = [
    {
        id: 1,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field."
    },
    {
         id: 2,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired."
    },
    {
         id: 3,
        joke: "Why did the developer go broke?",
        punchline: "Because he used up all his cache."
    },
    {
         id: 4,
        joke: "Why don't staplers ever get promoted?",
        punchline: "They're stuck in middle management."
    },
    {
         id: 5,
        joke: "Why did the cow become an astronaut",
        punchline: "She wanted to see the mooooon."
    },
    {
         id: 6,
        joke: "Why did the math book look so sad?",
        punchline: "It had too many problems."
    },
    {
         id: 7,
        joke: "Why did the coffee file a police report?",
        punchline: "It got mugged."
    },
    {
         id: 8,
        joke: "Why did the smartphone break up with the charger?",
        punchline: "It felt like it was being taken for granted."
    },
    {
         id: 9,
        joke: "What does a cloud wear under its raincoat?",
        punchline: "Thunderwear."
    },
    {
         id: 10,
        joke: "Why did the musician bring a ladder to the concert?",
        punchline: "To reach the high notes!"
    }
]

app.use(express.json())

app.use(express.static('public'))

app.get('/', (request, response) =>{
    response.sendFile('index.html', {root})
})

app.get('/joke/:id', (request, response) => {
     response.sendFile('index.html', {root})
})

app.get('/api/v1/joke/:id', (request, response) => {
    const {id} = request.params
    
    const found = jokes.find(p => p.id.toString() === id)
    if(found) response.send(found)
    else response.send({error: {message: `Could not find pokemon with id: ${id}`}})
})

app.get('/api/v1/random-joke', (request, response) => {
    const r = Math.floor(Math.random()*jokes.length)
    response.send(jokes[r])
})

app.listen(port, () => console.log(`http://localhost:${port}`))