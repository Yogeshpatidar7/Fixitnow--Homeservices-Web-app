import { Link, Navigate, Outlet } from "react-router-dom";
import {  FaUser } from "react-icons/fa6";
import { RiContactsBook3Line } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../../store/auth";

const AdminLayout = () => {

    
    const {user, isLoading} = useAuth();
    // console.log("Admin", user);

    if(isLoading){
        return <h1>Loading...</h1>
    }

    if(!user.isAdmin){
        return <Navigate to = "/" />
    }
    
    return (
        <>
            <header>
                <div className="admin-container" style={{marginTop: "100px", marginLeft: "50px"} }>
                    <nav>
                        <ul>
                            <li className="admin-nav" >
                                <Link to="/admin/users" className="admin-nav"><FaUser /> Users </Link>
                            </li>
                            <li className="admin-nav">
                            <Link to="/admin/contacts" className="admin-nav"> <RiContactsBook3Line/> Contacts </Link>
                            </li>
                            <li className="admin-nav">
                            <Link to="/admin/bookings" className="admin-nav"> <MdMiscellaneousServices /> Bookings</Link>
                            </li>
                            <li className="admin-nav">
                            <Link to="/admin/" className="admin-nav"><FaHome /> Home </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    )
    
};

export default AdminLayout;