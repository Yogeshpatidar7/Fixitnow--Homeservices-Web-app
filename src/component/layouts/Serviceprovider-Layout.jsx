import { Link, Navigate, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { MdBorderColor, MdMiscellaneousServices } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../../store/auth";

const ServiceProviderLayout = () => {
    const { isLoading, isloggedIn, user } = useAuth();

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (!isloggedIn) {
        return <Navigate to="/" />
    }

    return (
        <>
            <header>
                <div className="userprofile-container" style={{ marginTop: "100px", marginLeft: "50px" }}>
                    <nav>
                        <ul className="userprofile-nav">
                            <li className="user-nav">
                                <Link to="/profile/serviceprovider/home" className="admin-nav"><FaHome /> Home </Link>
                            </li>
                            <li className="user-nav" >
                                <Link to="/profile/serviceprovider/myaccount" className="admin-nav"><FaUser /> My Account </Link>
                            </li>
                            {/* <li className="user-nav">
                                <Link to="/profile/bookservice" className="admin-nav"><FaHome /> Book Service </Link>
                            </li> */}
                            <li className="user-nav">
                                <Link to="/profile/serviceprovider/myservices" className="admin-nav"> <MdBorderColor /> My Services </Link>
                            </li>
                            <li className="user-nav">
                                <Link to="/profile/serviceprovider" className="admin-nav"> <MdMiscellaneousServices /> Password</Link>
                            </li>

                        </ul>
                    </nav>

                </div>
            </header>
            <Outlet />
        </>
    )

};

export default ServiceProviderLayout ;