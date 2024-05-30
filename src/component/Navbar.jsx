import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from '../store/auth';


function Navbar() {
const {isloggedIn, user} = useAuth();

    return (
        <>
            <div className="topnav">
                <div className="logo"><img src="./Assets/img/WebLogo.png" alt="logo" /></div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Services">Services</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                        {isloggedIn ? <li id='nav-username'>
                            <Link to="/profile/home">{user.username}</Link>
                        </li> : ""
                        }
 
                        {isloggedIn ? <li>
                            <Link to="/Logout">Logout</Link>
                        </li> :  <li>
                            <Link to="/Login" id="LoginName">Login/Register</Link>
                        </li>
                        }
                        
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar