import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminUpdate = () => {

    const [data, setData] = useState({
        roles: "",
        username: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        aadhaarNumber: "",
        services: "",
    });

    const params = useParams();
    // console.log("params", params);
    const { authorizationToken, user } = useAuth();


    const navigate = useNavigate();


    //get single user data
    const getSingleUserData = async () => {

        try {
            let URl = '';
            if(user.isAdmin)
            {
                URl = `http://localhost:5000/api/admin/users/${params.id}`;
            }
            else
            {
                URl = `http://localhost:5000/api/profile/userprofile/${user._id}`;
            }

            const response = await fetch(URl, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });


            const data = await response.json();
            console.log(`users single data: ${data}`);
            setData(data);

            // if (response.ok) {
            //     getAllUserSData();
            // }
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSingleUserData();
    }, []);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name]: value,
        })
    };

    //to update data dynamically
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let URl = '';
            if(user.isAdmin)
            {
                URl = `http://localhost:5000/api/admin/users/update/${params.id}`;
            }
            else
            {
                URl = `http://localhost:5000/api/profile/userprofile/update/${user._id}`;
            }

            const response = await fetch(URl, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(data),
            });

            console.log("response", response);
            if (response.ok) {
                toast.success("Updated Succesfully");
            } else {
                toast.error("Not updated");
            }

            if(user.isAdmin){
                navigate("/admin/users");
            }else{
                navigate("/profile/myaccount");
            }
        } catch (error) {
            console.log("errr", error);
        }
    };

    return (
        <>
            <div className="content">
                <div id="heading">Update User Data</div>
                <div className="container1">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row justify-content-center">
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
                                                    value={data.username}
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
                                                    value={data.phone}
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
                                                    name="email"
                                                    id="email"
                                                    placeholder="Mobile Number"
                                                    value={data.email}
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
                                                    name="address"
                                                    id="address"
                                                    placeholder="Address"
                                                    value={data.address}
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
                                                    name="city"
                                                    id="city"
                                                    placeholder="City"
                                                    value={data.city}
                                                    onChange={handleInput}
                                                    required
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>
                                        { data.roles === "individual" ? "": <div className="row" id="divAadhaarNumber">
                                            <div className="col-md-12 form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="aadhaaarNumber"
                                                    id="aadhaaarNumber"
                                                    placeholder="AadhaaarNumber"
                                                    value={data.aadhaarNumber}
                                                    onChange={handleInput}
                                                    required
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div> }
                                        { data.roles === "individual" ? "" : <div className="Field" id="divServices">
                                        <select
                                            value={data.services}
                                            name="services"
                                            id="services"
                                            onChange={handleInput}
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
                                    </div> }
                                        <div className="row">
                                            <div className="col-12">
                                                <button
                                                    type="submit"
                                                    className="btn1 btn-primary rounded-0 py-2 px-4"
                                                >
                                                    Update
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
};

export default AdminUpdate;