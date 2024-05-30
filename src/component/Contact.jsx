import  { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/form/contact";

const defaultContactFormData = {
    username: "",
    phone: "",
    text: "",
};

function Contact() {

    const [contact, setContact] = useState(defaultContactFormData);

    const [userData, setUserData] = useState(true);

    const { user , isloggedIn} = useAuth();

   
    
    if (userData && user) {
        setContact({
            username: user.username,
            phone: user.phone,
            text: "",
        });

        setUserData(false);
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(contact);

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(contact),
            })

            if (response.ok) {
                setContact(defaultContactFormData);
                toast.success("Message sent successfully");
            }

        } catch (error) {
            console.log("Booking ", error);
        }
    }
    return (
        <>
            <div className="content">
                <div id="heading">Contact Us</div>
                <div className="container1">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <h3 className="headin mb-4">Let's talk about everything!</h3>
                                    <p>If you have any query, just fill out this contact form or just mail us on eservices@gmail.com, we will nswer you shortly.</p>
                                    <p><img src="./Assets/img/contactimg.avif" alt="Image" className="contact-img" /></p>
                                </div>
                                <div className="col-md-6">
                                    <form onSubmit={handleSubmit} className="mb-5" method="post" id="contactForm" name="contactForm" noValidate="novalidate">
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="username"
                                                    id="username"
                                                    placeholder="Your name"
                                                    value={contact.username}
                                                    onChange={handleInput}
                                                    required
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="phone"
                                                    id="phone"
                                                    placeholder="Mobile Number"
                                                    value={contact.phone}
                                                    onChange={handleInput}
                                                    required
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>
        
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <textarea
                                                    className="form-control text-area"
                                                    name="text"
                                                    id="text"
                                                    cols="120"
                                                    rows="7"
                                                    placeholder="Write your message"
                                                    value={contact.text}
                                                    onChange={handleInput}
                                                    required
                                                    autoComplete="off"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <button
                                                    type="submit"
                                                    className="btn1 btn-primary rounded-0 py-2 px-4"
                                                >
                                                    Send Message
                                                </button>
                                                <span className="submitting" ></span>
                                            </div>
                                        </div>
                                    </form>
                                    <div id="form-message-warning mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;