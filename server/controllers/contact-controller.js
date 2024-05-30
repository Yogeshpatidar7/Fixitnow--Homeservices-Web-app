const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
    try {
        const response = req.body;
        // console.log(response);
        await Contact.create(response);
        return res.status(200).json({ message: "Message sent succesfully"});
    } catch (error) {
       console.log(error);
         res.status(500).json({message: "Message not deliver"});
    }
};

module.exports = contactForm;