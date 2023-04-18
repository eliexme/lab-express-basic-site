const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile (__dirname + '/views/home.html')
})

app.get('/about', (req, res) => {
    res.sendFile (__dirname + '/views/about.html')
})

app.get('/works', (req, res) => {
    res.sendFile (__dirname + '/views/works.html')
})

app.use(express.static(__dirname + '/public'))

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})