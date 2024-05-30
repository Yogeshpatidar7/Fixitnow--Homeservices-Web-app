import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/auth/login";

function Login() {

    const [user, setUser] = useState({
        roles:"",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })

            const res_data = await response.json();
            console.log("login form", res_data);
        
            storeTokenInLS(res_data.token);

            if (response.ok) {
                toast.success("Login successful");
                storeTokenInLS(res_data.token);
                // localStorage.setItem("token", res_data.token);
                setUser({ email: "", password: "" })
                if(res_data.userRole == "individual"){
                    navigate("/profile/home");
                }else{
                    navigate("/profile/serviceprovider");
                }
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);

                console.log("Invalid credentials");
            }

        } catch (error) {
            console.log("Login", error);
        }
    };


    return (
        <>
            <section className="ftco-section login-section">
                <div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                            <h2 className="heading-section"> </h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="container col-md-6 col-lg-4">
                            <div className="login-wrap py-5">
                                <div className="img d-flex align-items-center justify-content-center" ></div>
                                <h3 className="text-center mb-0">Welcome to E-Household Services</h3>
                                <p className="text-center">Sign in by entering the information below</p>
                                <form onSubmit={handleSubmit} className="login-form">

                                
                                    <div className="form-group">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-user"></span></div>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={user.email}
                                            name="email"
                                            id="email"
                                            onChange={handleInput}
                                            placeholder="Email"
                                            required />
                                    </div>
                                    <div className="form-group">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-lock"></span></div>
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={user.password}
                                            name="password"
                                            id="password"
                                            onChange={handleInput}
                                            placeholder="Password"
                                            required />
                                    </div>
                                    <div className="form-group d-md-flex">
                                        <div className="w-100 text-md-right">
                                            <a href="#" style={{ color: "darkblue", fontWeight: "600" }}>Forgot Password</a>
                                        </div>
                                    </div>
                                    <div className="form-group login-btn">
                                        <button type="submit" className=" ">Login Now</button>
                                    </div>
                                </form>
                                <div className="w-100 text-center mt-4 text">
                                    <p className="mb-0">Don't have an account?</p>
                                    <Link to="/Register" style={{ color: "darkblue", fontWeight: "600" }}>Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login