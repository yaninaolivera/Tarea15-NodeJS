const express = require('express')

const app = express()
const port = 3000
let a = 5, b = 7

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/user', (req, res) => {
    res.send('Estamos en User')
})
app.listen(port, () => {
    console.log(`Operación matemática: ${a} + ${b} = ${a + b}`)
    console.log(`El servidor se está ejecutando en http://localhost:${port}/`)
})