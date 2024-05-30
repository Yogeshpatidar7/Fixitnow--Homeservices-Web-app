const Bookings = require("../models/booking-model");
const User = require("../models/user-model");

const getUserProfile = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({ _id: id }, { password: 0 });
        
        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};


const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;

        const updatedData = await User.updateOne(
            { _id : id },
            {
                $set: updatedUserData,
            }
        );
        return res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
};

const getAllBookingByEmail = async (req, res, next) => {
    try {
        const reqemail = req.user.email;
        // console.log("reqemail",reqemail);
        const booking = await Bookings.find({email: reqemail});
        if(!booking || booking.length === 0){
            return res.status(404).json({message: "No booking found"});
        };

        return res.status(200).json(booking);

    } catch (error) {
        next(error);
    }

};

module.exports = {getUserProfile, updateUser, getAllBookingByEmail};