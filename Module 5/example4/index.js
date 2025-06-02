const express = require('express')
const app = express()
const port = 3000
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

// map the user routes to our app
app.use('/users', userRoutes);

app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})