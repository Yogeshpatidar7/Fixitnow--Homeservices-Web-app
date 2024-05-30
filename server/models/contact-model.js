const {Schema, model, default: mongoose} = require("mongoose");

const contactSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

//create a model or a collection
const Contact = new model("Contact", contactSchema);

module.exports = Contact;