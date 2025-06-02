const express = require('express')
const app = express()
const port = 3000
const port2 = 4000

app.get('/', (req, res) => {
res.send('Hello World! port 3000')
})

app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})

app.get('/', (req, res) => {
res.send('Hello World port 4000!')
})

app.listen(port2, () => {
console.log(`Example app listening
at http://localhost:${port2}`)
})