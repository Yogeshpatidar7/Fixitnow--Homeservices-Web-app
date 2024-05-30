const mongoose = require("mongoose");

//booking schema
const bookingSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    services: {
        type: String,
        require: true,
    },
    serviceDetail: {
        type: String,
        require: true,
    },
    datetime: {
        type: String,
        require: true,
    }
});

//define the model or the collection name
const Bookings = new mongoose.model("Booking", bookingSchema);

module.exports = Bookings;