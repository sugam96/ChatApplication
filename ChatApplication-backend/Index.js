//Importing Modules
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");



//App Variables
const myApp = express();
const port = 3050;

//Using Middlewares and Utilities
myApp.use(express.json());
myApp.use(cors);
myApp.use(helmet);


myApp.get('/', async (req, res) => {
    res.status(200).json({ status: true, data: "Hello There" });
});

myApp.listen(port, () => {
    console.log("Listening at Port", port);
})
