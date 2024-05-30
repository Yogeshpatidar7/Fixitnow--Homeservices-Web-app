import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { Link } from "react-router-dom";

const MyOrders = () => {

    const [bookings, setBookings] = useState([]);
    const { authorizationToken } = useAuth();


    const getAllBookingData= async () => {
        try {
            const response = await fetch("http://localhost:5000/api/profile/mybooking", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            setBookings(data);
            console.log(`Booking ${users}`);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllBookingData();
    }, []);

    return (
    <>
        <section className="admin-users-section">
                <div className="admin-users-container">
                    <h1>My Bookings</h1>
                </div>
                { bookings.length > 0 ? 
                    <div className="container-admin-users">
                    <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Service</th>
                                    <th>Service Detail</th>
                                    <th>Date Time</th>
                                    <th>Status</th>
                                    <th>Cancel Booking</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((curUser, index) => {
                                    return (
                                    <tr key={index}>
                                        <td> {curUser.username}</td>
                                        <td> {curUser.phone}</td>
                                        <td> {curUser.email}</td>
                                        <td> {curUser.address}</td>
                                        <td> {curUser.city}</td>
                                        <td> {curUser.services}</td>
                                        <td> {curUser.serviceDetail}</td>
                                        <td> {curUser.datetime}</td>
                                        <td> Pending </td>
                                        <td> <button onClick={() => deleteBooking(curUser._id)} className="button-7">Cancel</button> </td>
                                    </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div> : <h3 style={{marginLeft: 20}}>No Booking found</h3>   
                }
            </section>
        </>
    );
};

export default MyOrders;