import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const AdminBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { authorizationToken } = useAuth();

    const getAllBookingData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/bookings", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            setBookings(data);
            console.log(bookings);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteBooking = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/bookings/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log("booking delte", data);

            if(response.ok){
                getAllBookingData();
            } 
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
                    <h1>Admin Booking Data</h1>
                </div>
                <div className="container-admin-users">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Service</th>
                                <th>Service Detail</th>
                                <th>Date Time</th>
                                <th>Update</th>
                                <th>Delete</th>
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
                                    <td> {curUser.services}</td>
                                    <td> {curUser.serviceDetail}</td>
                                    <td> {curUser.datetime}</td>
                                    <td> Edit </td>
                                    <td> <button onClick={() => deleteBooking(curUser._id)} className="button-7">Delete</button> </td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </table>

                </div>
            </section>
        </>
    );
};

export default AdminBookings;