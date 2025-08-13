const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, "data.json");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// GET all employees as JSON
app.get("/employees", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  res.json(data.employees);
});

// POST to add new employee
app.post("/add", (req, res) => {
  const { name, email, role } = req.body;
  const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));

  const newEmployee = {
    id: data.employees.length + 1,
    name,
    email,
    role
  };

  data.employees.push(newEmployee);

  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.redirect("/"); // Redirect back to form
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});