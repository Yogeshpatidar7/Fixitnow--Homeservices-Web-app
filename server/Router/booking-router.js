const express = require("express");
const router = express.Router();
const bookingForm = require("../controllers/booking-controller");
const {getServiceProvider, getServiceProviderlist} = require("../controllers/serviceprovider-constroller");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/booking").post(bookingForm);

router.route("/booking/serviceprovider").get(authMiddleware, getServiceProvider);

router.route("/booking/serviceproviderlist").post( getServiceProviderlist);

module.exports = router;