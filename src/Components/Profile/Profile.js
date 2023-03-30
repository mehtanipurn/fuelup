import { signOut } from "firebase/auth";
import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../firebaseConfig";
// import axios from "axios";
import "./profile.css"
const Profile = (props) => {
    // const auth = getAuth();
    const navigate = useNavigate();
    const logoutt = () =>{}
  
      useEffect(() => {
        return () => {
          
        };
      }, []);
  return (
    <div className="profile">
      <h1>Profile</h1>
      <p>Welcome, {props.username}!</p>
      <p>Email-Id: {props.email}</p>
      {/* <p>Change Password: []</p> */}
      <span onClick={() => {signOut(auth).then(() => {
        alert("Signed Out Succesfully");
        navigate("/");
      }).catch((error) => {
        alert(error);
      });}}>Log Out</span>
    </div>
  );
};

export default Profile;
