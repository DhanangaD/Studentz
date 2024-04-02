const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8070; //5000 is the default port,or else load any port numbers

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{ 
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;  //create a database connection
connection.once("open", () => { //open a connection which we created
    console.log("Mongodb connection success!"); 
});


const studentRouter = require("./routes/students.js"); //import the students.js file from routes folder

//http://localhost:8070/students
app.use("/students", studentRouter); //use the student router on the /students route

app.listen(PORT,()=>{  //listen to the particular port number
    console.log("Server is up and running on port:", PORT);
});