import React, { useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreens";
import LoginScreen from "./Logins/LoginScreen";
import ProfileScreen from "./ProfileScreens/ProfileScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./Firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
      return unsubscribe;
    });
  }, []);
  return (
    <div className="app">
      {!user ? (
        <LoginScreen path="/signIn" />
      ) : (
        <Router>
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
