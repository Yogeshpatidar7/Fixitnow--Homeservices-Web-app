const express = require("express");
const {getAllUsers, getAllContacts, getAllBookings, deleteUserByID, deleteBookingByID, deleteContactByID, getUserById, updateUserById} = require("../controllers/admin-controller");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);

//single user data
router.route("/users/:id").get(authMiddleware, adminMiddleware, getUserById);

router.route("/users/profile/:id").get(authMiddleware, adminMiddleware, getUserById);

//update route
router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, updateUserById);

//delete 
router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, deleteUserByID)

router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContacts);

router.route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware, deleteContactByID);

router.route("/bookings").get(authMiddleware, adminMiddleware, getAllBookings);

router.route("/bookings/delete/:id").delete(authMiddleware, adminMiddleware, deleteBookingByID);
module.exports = router;