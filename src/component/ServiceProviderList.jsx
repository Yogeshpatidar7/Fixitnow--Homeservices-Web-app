
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {  useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";


const ServiceProviderList = () => {
    const [searchParams] = useSearchParams();
    const City = searchParams.get('City');
    const Service = searchParams.get('Service');
    const ServiceDetail = searchParams.get('ServiceDetail');
    const Datetime = searchParams.get('Datetime');
    console.log("book", ServiceDetail, Datetime);
    const {user} = useAuth()
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const { authorizationToken } = useAuth();

    const setBooking = {
        username: user.username,
        phone: user.phone,
        email: user.email,
        address: user.address,
        city: City,
        services: Service,
        serviceDetail: ServiceDetail ,
        datetime: Datetime,
      };

    const getAllServiceProviderData = async () => {
        try {
            let CityJson = { 'City':City, 'Service':Service }
            const response = await fetch("http://localhost:5000/api/bookingform/booking/serviceproviderlist", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(CityJson)
            });
            const data = await response.json();
            setUsers(data);
            console.log(`users1 ${users}`);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(form);
        try {
          const response = await fetch("http://localhost:5000/api/bookingform/booking", {
            method: "POST",
            headers: {
              'Content-Type': "application/json"
            },
            body: JSON.stringify(setBooking),
          })  
          console.log(response);
          if(response.ok){
            toast.success("Booked Successfull")
            navigate("/profile")
          }
        } catch (error) {
          console.log("Booking ", error);
        }
      };
    

    useEffect(() => {
        getAllServiceProviderData();
    }, []);

    return (
        <>
            <section className="admin-users-section" style={{ marginTop: 100 }}>
                <div className="admin-users-container">
                    <h1>Service Provider List</h1>
                </div>
                { users.length > 0 ? 
                <div className="container-admin-users">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Service</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Visit Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((curUser, index) => {
                                return (
                                    <tr key={index}>
                                        <td> {curUser.username}</td>
                                        <td> {curUser.email}</td>
                                        <td> {curUser.phone}</td>
                                        <td> {curUser.services}</td>
                                        <td> {curUser.address}</td>
                                        <td> {curUser.city}</td>
                                        <td> {curUser.charges}</td>
                                        <td>
                                            <button onClick={handleSubmit} >Book</button>
                                        </td>

                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>

                </div> : <h3 style={{marginLeft: 20}}>No Service Provider found at your Location</h3>  } 
            </section>
        </>
    );

};

export default ServiceProviderList;