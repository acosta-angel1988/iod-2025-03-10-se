require("dotenv").config();
const express = require("express");
const app = express();
const dbConnect = require("./dbConnect");
const userRoutes = require('./routes/userRoutes');

const postRoutes = require('./routes/postRoutes');

const commentRoutes = require('./routes/commentRoutes');
const reactionRoutes = require('./routes/reactionRoutes')

// parse requests of content-type -
app.use(express.json());

app.get("/", (req, res) => {
res.json({ message: "Welcome to my MongoDB application." });
});

app.use('/api/users', userRoutes);

app.use('/api/posts', postRoutes);

app.use('/api/posts', commentRoutes);
app.use('/api/posts', reactionRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});