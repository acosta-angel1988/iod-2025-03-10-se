const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("Hello World! 123");
});

app.get("/pet", (req, res) => {
    res.send("Hello World! This is a pet page");
});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});



