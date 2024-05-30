//Booking page routing
const Bookings = require("../models/booking-model");

const bookingForm = async (req, res) => {
    try{
        const response = req.body;
        const bookedData = await Bookings.create(response);
        return res.status(200).json({ message: "Booked Succesfully", bookedData});
    }catch(error){
        res.status(500).json({message: "Booking failed", });
        next(error);
    }
}

module.exports = bookingForm;