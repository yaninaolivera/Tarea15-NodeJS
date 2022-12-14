const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
const port = 3000

let users = [
    { nombre: "Javier", apellido: "Pacheco", correo: "javier@mail.com" },
    { nombre: "Andres", apellido: "Polanco", correo: "andres@mail.com" },
    { nombre: "Julian", apellido: "Mattos", correo: "julian@mail.com" },
    { nombre: "Andrea", apellido: "Sarmiento", correo: "andrea@mail.com" },
    { nombre: "Jazmin", apellido: "Gonzales", correo: "jazmin@mail.com" },
    { nombre: "Yanina", apellido: "Olivera", correo: "yanina@mail.com" },
]

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log(`El servidor se está ejecutando`)
})