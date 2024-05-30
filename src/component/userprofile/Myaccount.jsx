import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../store/auth";

const Myaccount = () => {

    const [users, setUsers] = useState([]);
    const { authorizationToken, user } = useAuth();

    const getSingleUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/profile/userprofile/${user._id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log("user data", data);
            setUsers(data);
            console.log(`profile da${users}`);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getSingleUserData();
    }, []);

    return (
        <>
            <section className="admin-users-section">
                <div className="admin-users-container">
                    <h1>User Profile</h1>
                </div>
                <div className="container-admin-users">
                    <table className="userprofile-table">
                        { users.roles == "individual" ?
                        <thead>
                        
                                <tr>
                                    <th className="profile-th">Name</th>
                                    <td className="profile-th"> {users.username}</td>

                                </tr>
                                <tr>
                                    <th className="profile-th">Email</th>
                                    <td className="profile-th"> {users.email}</td>
                                </tr>
                                <tr>
                                    <th className="profile-th">Phone</th>
                                    <td className="profile-th"> {users.phone}</td>
                                </tr>
                                <tr>
                                    <th className="profile-th">Address</th>
                                    <td className="profile-th"> {users.address}</td>
                                </tr>
                                <tr>
                                    <th className="profile-th">City</th>
                                    <td className="profile-th"> {users.city}</td>
                                </tr>
                                <tr>
                                    <div className="profileBtnDiv">
                                    <Link to = {`/profile/users/${user._id}/edit`}>
                                            <button className="profileBtn">Update Details</button>
                                        </Link>
                                    </div> 
                                </tr>
                            </thead>
                            :
                            <thead>
                                <tr>
                                        <th className="profile-th">Name</th>
                                        <td className="profile-th"> {users.username}</td>

                                    </tr>
                                    <tr>
                                        <th className="profile-th">Email</th>
                                        <td className="profile-th"> {users.email}</td>
                                    </tr>
                                    <tr>
                                        <th className="profile-th">Phone</th>
                                        <td className="profile-th"> {users.phone}</td>
                                    </tr>
                                    <tr>
                                        <th className="profile-th">Address</th>
                                        <td className="profile-th"> {users.address}</td>
                                    </tr>
                                    <tr>
                                        <th className="profile-th">City</th>
                                        <td className="profile-th"> {users.city}</td>
                                    </tr>
                                    <tr>
                                        <th className="profile-th">Aadhar Number</th>
                                        <td className="profile-th"> {users.aadhaarNumber}</td>
                                    </tr>
                                    <tr>
                                        <th className="profile-th">Service</th>
                                        <td className="profile-th"> {users.services}</td>
                                    </tr>
                                    <tr>
                                        <th className="profile-th">Charges</th>
                                        <td className="profile-th"> {users.charges}</td>
                                    </tr>

                                <tr>
                                    <div className="profileBtnDiv">
                                        <Link to = {`/profile/users/${user._id}/edit`}>
                                            <button className="profileBtn">Update Details</button>
                                        </Link>
                                    </div> 
                                </tr> 
                        </thead>
                        }

                    </table>

                </div>
            </section>
        </>
    );

};

export default Myaccount;