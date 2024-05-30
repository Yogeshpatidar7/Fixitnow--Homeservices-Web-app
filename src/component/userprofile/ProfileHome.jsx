import { useAuth } from "../../store/auth";

const ProfileHome = () => {

    const {user} = useAuth();

    return(
        <div>
            <h2 style={{marginLeft: 50, marginTop: 40}}>Hello <span className="userprofile-name"> {user.username}</span> , Welcome to <b>E-Household Services</b></h2>
         </div>
        )
};

export default ProfileHome;