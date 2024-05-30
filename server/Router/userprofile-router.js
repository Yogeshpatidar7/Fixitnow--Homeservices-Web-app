const express = require("express");
const { getUserProfile, updateUser, getAllBookingByEmail } = require("../controllers/userprofile-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();


router.route("/userprofile/:id").get(authMiddleware, getUserProfile);


//update route
router.route("/userprofile/update/:id").patch(authMiddleware,  updateUser);

//fetching Booking orders details
router.route("/mybooking").get(authMiddleware,  getAllBookingByEmail);


module.exports = router;