require("dotenv").config();
const express = require("express");
const app = express();
const postsRoutes = require("./routes/postRoutes");

app.use(express.json());

// Register routes
app.use("/api/posts", postsRoutes);

// Root route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the JSONPlaceholder Posts Proxy API." });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});