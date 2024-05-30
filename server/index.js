require('dotenv').config();
const express = require("express");
const app = express();
const authRoute = require("./Router/auth-router");
const contactRoute = require("./Router/contact-router");
const bookingRoute = require("./Router/booking-router");
const adminRoute = require("./Router/admin-router");
const userProfileRoute = require("./Router/userprofile-router");
const connectDb = require("./utils/db");
const cors = require("cors");
const errorMiddleware = require('./middlewares/error-middleware');

const corsOption = {
    origin: "http://localhost:5173",
    method: "GET, POST, PUT, DELETE, PATCH, HEAD",
    Credentials: true,
}
app.use(cors(corsOption));

//parsing JSON data from requests ,it is middleware
app.use(express.json());

//mount to router-to use the router in your main express app, you can "mount " it at a specific URL prefix

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/bookingform", bookingRoute);

//admin route
app.use("/api/admin/", adminRoute);

//user profile route
app.use("/api/profile/", userProfileRoute);

//finding error before connecting
app.use(errorMiddleware);

const PORT = 5000;

connectDb();

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});
