const express = require("express"); // import the express package
const app = express(); // create a new app
const port = 4000; // change this to run the app on a different port - usually a 4 digit number
app.use(express.json());


const friendRoutes = require('./routes/friendRoutes');
const userRoutes = require('./routes/userRoutes');


// parse requests of content-type - application/json (needed for POST and PUT requests using req.body)
app.use('/users', userRoutes);
app.use('/friends', friendRoutes);



// starts the backend app on the given port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
