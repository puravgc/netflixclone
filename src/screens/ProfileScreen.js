import React from "react";
import "./ProfileScreen.css";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase.js";
const ProfileScreen = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className="profile">
      <Navbar />
      <div className="mainprofile">
        <div className="container">
          <div className="heading">
            <h1>Edit Profile</h1>
          </div>
          <hr />
          <div className="details">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
            <div className="extradetails">
              <div className="firstpart">
                <div className="email">
                  <h2>{user.email}</h2>
                </div>

                <h1>Plans ( Current Plan : premium )</h1>
                <hr />
              </div>
              <div className="secondpart">
                <h3>Renewal Date:04/03/2023</h3>
                <div className="stan">
                  <h4>Netflix Standard 1080p</h4>
                  <button>Subscribe</button>
                </div>
                <div className="basic">
                  <h4>Netflix Standard 1080p</h4>
                  <button>Subscribe</button>
                </div>
                <div className="prem">
                  <h4>Netflix Standard 1080p</h4>
                  <button>Subscribe</button>
                </div>
                <button
                  className="signout"
                  onClick={() => {
                    auth.signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
