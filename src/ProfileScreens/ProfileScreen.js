import React from "react";
import "./ProfileScreen.css";
import Nav from "../Navs/Nav";
import AvatarPng from "./netflix_avatar.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../Firebase";

function ProfileScreen() {
  const user = useSelector((state) => state.users.user);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <div className="profileScreen_contents">
          <div className="profileScreen_editProfile">
            <h2>Edit Profile</h2>
          </div>
          <div className="profileScreen_info">
            <img src={AvatarPng} alt="avatar_logo" />
            <div className="profileScreen_email">
              <div className="profileScreen_emailInfo">
                <h5>{user?.email}</h5>
              </div>
              <div className="profileScreen_plans">
                <h6>Plans (Current Plan: premium)</h6>
              </div>
            </div>
          </div>
          <div className="profileScreen_plans_and_subscriptions">
            <div className="profileScreen_subscriptions">
              <div className="profileScreen_renewalDate">
                <h6>Renewal date: 04/03/2021</h6>
              </div>
              <div className="profileScreen_planPackages">
                <div className="profileScreen_packages">
                  <div className="profileScreen_planPackage">
                    <h5>
                      Netflix Standard
                      <br />
                      <small>1080p</small>
                    </h5>
                    <button className={true ? "red" : "gray"}>Subcribe</button>
                  </div>
                  <div className="profileScreen_planPackage">
                    <h5>
                      Netflix Basic
                      <br />
                      <small>480p</small>
                    </h5>
                    <button className={true ? "red" : "gray"}>Subcribe</button>
                  </div>
                  <div className="profileScreen_planPackage">
                    <h5>
                      Netflix Premium
                      <br />
                      <small>4K+HDR</small>
                    </h5>
                    <button className={false ? "red" : "gray"}>
                      {false ? "Subcribe" : "Current Package"}
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => {
                    auth.signOut();
                    window.location.reload();
                  }}
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
