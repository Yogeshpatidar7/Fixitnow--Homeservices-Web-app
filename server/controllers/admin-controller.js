const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const Booking = require("../models/booking-model");
const { isAborted } = require("zod");

const getAllUsers = async (req, res) =>{
    try {
        const users = await User.find({isAdmin: "false"},{password:0});
        
        if(!users || users.length === 0){
            return res.status(404).json({message: "No users found"});
        }
        return res.status(200).json(users);

    } catch (error) {
        next(error);
    }
};

//single user logic
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({_id : id}, {password: 0 });
        
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

//update logic
const updateUserById = async (req, res) => {
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

//delete user logic
const deleteUserByID = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({_id : id});
        return res.status(200).json({message: "User Deleted Succesfully"});
    } catch (error) {
        next(error);
    }
};

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        if(!contacts || contacts.length === 0){
            return res.status(404).json({message: "No contacts found"});
        };

        return res.status(200).json(contacts);

    } catch (error) {
        next(error);
    }
};

const deleteContactByID = async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id : id});
        return res.status(200).json({message: "Contact Deleted Succesfully"});
    } catch (error) {
        next(error);
    }
};

const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        if(!bookings || bookings.length === 0){
            return res.status(404).json({message: "No bookings found"});
        };

        return res.status(200).json(bookings);

    } catch (error) {
        next(error);
    }
};

const deleteBookingByID = async (req, res) => {
    try {
        const id = req.params.id;
        await Booking.deleteOne({_id : id});
        return res.status(200).json({message: "Booking Deleted Succesfully"});
    } catch (error) {
        next(error);
    }
};



module.exports = {getAllUsers, getUserById, updateUserById, deleteUserByID, getAllContacts, deleteContactByID, getAllBookings, deleteBookingByID};