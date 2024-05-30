const express = require("express");
const router = express.Router();
const {home, register} = require("../controllers/auth-controller");
const authControllers = require("../controllers/auth-controller");
const {signupSchema,loginSchema,serviceSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

//home page
router.route("/").get(authControllers.home);

//customer registration route
router
.route("/register/customer")
.post( validate(signupSchema), authControllers.register);

//serviceprovider registration route
router
.route("/register/serviceprovider")
.post( validate(serviceSchema), authControllers.register);

//login page
router
.route("/login")
.post(validate(loginSchema), authControllers.login);

router.route("/user").get(authMiddleware, authControllers.user);


module.exports = router;