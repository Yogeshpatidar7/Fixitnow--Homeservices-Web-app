 const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;


// mongoose.connect("mongodb://localhost:27017/mynewDB");
const connectDb =  () => {
    try {
        mongoose.connect(URI)
        console.log("Db connected");
    } catch (error) {
        console.log("Db connection failed");
        process.exit(0); 
    }
}
 module.exports = connectDb;
