const { z } = require("zod");

//login schema
const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required " })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be atleast of 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    password: z
        .string({ required_error: "Password is required " })
        .trim()
        .min(6, { message: "Password must be atleast of 6 characters" })
        .max(1024, { message: "Password must not be more than 1024 characters" }),
});


//creating user registration schema
const signupSchema = loginSchema.extend({
    roles: z
        .string({ required_error: "Role is required " })
        .trim(),
    username: z
        .string({ required_error: "Name is required " })
        .trim()
        .min(3, { message: "Name must be atleast of 3 characters" })
        .max(255, { message: "Name must not be more than 255 characters" }),

    phone: z
        .string({ required_error: "Phone number is required " })
        .trim()
        .min(10, { message: "Phone number must be atleast of 10 characters" })
        .max(12, { message: "Phone number must not be more than 12 caracters" }),

    address: z
        .string({ required_error: "Address is required " })
        .trim(),

    city: z
        .string({ required_error: "City is required " })
        .trim()

});

const serviceSchema = signupSchema.extend({

    aadhaarNumber: z
        .string({ required_error: "Aadhaar number is required " })
        .trim()
        .min(12, { message: "Aadhaar number must be atleast of 12 characters" })
        .max(12, { message: "Aadhaar number must not be exceed more than 12 characters" }),

    services: z
        .string({ required_error: "Service is required " })
        .trim()
        .min(3, { message: "Service must be atleast of 3 characters" })
        .max(255, { message: "Service must not be more than 255 characters" }),
    charges: z
        .coerce.number({ required_error: "Charges is required " })
        .gte(100, { message: "Charges must be atleast 100 " })
        .lte(500, { message: "Charges must not be more than 500 " })
})

module.exports = { signupSchema, loginSchema, serviceSchema };