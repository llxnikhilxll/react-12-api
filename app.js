require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
// console>log("he+llo")

//dbconnection 
require("./models/dbconfig").dbconnection();

//routes
const userRouter = require("./routes/userRoute");


//logger
const logger = require("morgan");
app.use(logger("tiny"));

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.use("/api/user", userRouter);



//server
app.listen(process.env.PORT, () => {
    console.log(`The Server is running on port ${process.env.PORT}`);
});