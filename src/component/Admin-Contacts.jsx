import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const AdminContacts = () => {
    const [contacts, setContacts] = useState([]);
    const { authorizationToken } = useAuth();

    const getAllContactData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            setContacts(data);
            console.log(contacts);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteContact = async(id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log(`contact after deletion ${data}`);

            if(response.ok){
                getAllContactData();
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllContactData();
    }, []);

    return (
        <>
            <section className="admin-users-section">
                <div className="admin-users-container">
                    <h1>Admin Contact Data</h1>
                </div>
                <div className="container-admin-users">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Message</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((curUser, index) => {
                                return (
                                <tr key={index}>
                                    <td> {curUser.username}</td>
                                    <td> {curUser.phone}</td>
                                    <td> {curUser.text}</td>
                                    <td> <button onClick={() => deleteContact(curUser._id)} className="button-7">Delete</button> </td>
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

export default AdminContacts;