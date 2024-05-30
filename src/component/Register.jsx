
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const customerURL = "http://localhost:5000/api/auth/register/customer";
const serviceProviderURL = "http://localhost:5000/api/auth/register/serviceprovider";

const Register = () => {
    // const [role, setRole] = useState("");
    const [user, setUser] = useState({
        roles: "",
        username: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        password: "",
        aadhaarNumber: "",
        services: "",
        charges: "",
    });

    const {storeTokenInLS} = useAuth();

    const navigate = useNavigate();
    //handling the input values

    const handlInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;


        setUser({
            ...user,   //spread operator if we chng phne value other value will remain same
            [name]: value,
        })
    };

    //handling the form submission

    const handleSubmit = async (e) => {
        // console.log(user)
        e.preventDefault();
        
        try {
            let URl = '';
            if(user.roles === 'individual')
            {
                URl = customerURL;
            }
            else if(user.roles === 'serviceProvider')
            {
                URl = serviceProviderURL;
            }
            const response = await fetch(URl, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(user)
            });

            console.log("USer ", user);
        

            const res_data = await response.json();
            console.log("response from server", res_data.extraDetails);

            if (response.ok) {
                //storing token in local storage
                storeTokenInLS(res_data.token);
                // localStorage.setItem("token", res_data);
                setUser({ roles: "", username: "", email: "", phone: "", address: "", city: "", password: "", aadhaarNumber: "",
                services: " ", });
                toast.success("Registration Successful");
                 navigate("/");
            }else{
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }

            // console.log(response);
        } catch (error) {
            console.log("Register ", error);
        }


    };

    const checkRole = (e) => {
        let values = e.target.value;
        if (values === 'roles') {
            document.getElementById("divAadhaarNumber").style.display = "none";
            document.getElementById("divServices").style.display = "none";
            document.getElementById("divCharges").style.display = "none";
        }

        else if(values === 'individual') {
            document.getElementById("divAadhaarNumber").style.display = "none";
            document.getElementById("divServices").style.display = "none";
            document.getElementById("divCharges").style.display = "none";
        }
        else{
            document.getElementById("divAadhaarNumber").style.display = "flex";
            document.getElementById("divServices").style.display = "flex";
            document.getElementById("divCharges").style.display = "flex";
        }
    };

    return (
        <>
            <section className="registraion-page">
                <main>
                    <div className="section-registration"  >
                        <div className="containerr grid grid-two-cols" style={{ display: "flex", justifyContent: "space-evenly", border: "none" }}>
                            <div className="registration-image reg-img">
                                <img
                                    src="./Assets/images/register.png"
                                    alt="a nurse with a cute look"
                                    width="500"
                                    height="500"
                                />
                            </div>

                            {/* Registration form */}
                            <div className="registraion-form">
                                <h1 className="main-heading mb-3">Registration form</h1>
                                <br />

                                <form onSubmit={handleSubmit}>
                                <div className="Field" >
                                        <label> Role  </label>
                                        <select
                                            value={user.roles}
                                            name="roles"
                                            id="roles"
                                             //onChange={handlInput}
                                            onChange={(e) => {
                                                // setRole(values);
                                                checkRole(e)
                                                handlInput(e)
                                            }}
                                            required
                                            // autoComplete="off"
                                        >
                                            <option value="" >Role</option>
                                            <option value="individual" >Customer</option>
                                            <option value="serviceProvider" >Service Provider</option>
                                        </select>
                                    </div>
                                    <div className="Field" >
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            placeholder="Username"
                                            required
                                            autoComplete="off"
                                            value={user.username}
                                            onChange={handlInput}
                                        />
                                    </div>
                                    <div className="Field">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            required
                                            autoComplete="off"
                                            value={user.email}
                                            onChange={handlInput}
                                        />
                                    </div>
                                    <div className="Field">
                                        <label htmlFor="phone">Mobile Number</label>
                                        <input
                                            type="number"
                                            name="phone"
                                            id="phone"
                                            placeholder="Mobile Number"
                                            required
                                            autoComplete="off"
                                            value={user.phone}
                                            onChange={handlInput}
                                        />
                                    </div>
                                    <div className="Field">
                                        <label htmlFor="address">Street Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            placeholder="House No./Colony"
                                            required
                                            autoComplete="off"
                                            value={user.address}
                                            onChange={handlInput}
                                        />
                                    </div>
                                    <div className="Field">
                                        <label htmlFor="city">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            placeholder="city"
                                            required
                                            autoComplete="off"
                                            value={user.city}
                                            onChange={handlInput}
                                        />
                                    </div>
                                    
                                    <div className="Field">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="text"
                                            name="password"
                                            id="password"
                                            placeholder="Password"
                                            required
                                            autoComplete="off"
                                            value={user.password}
                                            onChange={handlInput}
                                        />
                                    </div>
                                    <div className="Field" id="divAadhaarNumber">
                                        <label htmlFor="aadhaarNumber">AadhaarNumber</label>
                                        <input
                                            type="number"
                                            name="aadhaarNumber"
                                            id="aadhaarNumber"
                                            placeholder="AadhaarNumber"
                                            
                                            autoComplete="off"
                                            value={user.aadhaarNumber}
                                            onChange={handlInput}
                                        />
                                    </div>
                                    <div className="Field" id="divServices">
                                        <label> Services  </label>
                                        <select
                                            value={user.services}
                                            name="services"
                                            id="services"
                                            onChange={handlInput}
                                            
                                            autoComplete="off"
                                        >
                                            <option value="" >Services</option>
                                            <option value="plumber" >Plumber</option>
                                            <option value="painter" >Painter</option>
                                            <option value="electrician" >Electrician</option>
                                            <option value="mechanic" >Mechanic</option>
                                            <option value="grooming" >Salon</option>
                                            <option value="acappliance" >AC & appliances repair</option>
                                            <option value="cleaning" >Cleaning</option>
                                        </select>
                                    </div>
                                    <div className="Field" id="divCharges">
                                        <label> Visit Charges </label>
                                        <input
                                            type="number"
                                            name="charges"
                                            id="charges"
                                            placeholder="Charges in between Rs100 - Rs500 "
                                            
                                            autoComplete="off"
                                            value={user.charges}
                                            onChange={handlInput}
                                        />
                                    </div>
                                    <br />
                                    <button type="submit" className="register-btn">
                                        Register Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main >

            </section >
        </>
    )
};

export default Register;