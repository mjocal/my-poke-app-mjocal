import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import SignIn from "../components/SignIn";
import Homepage from "../components/Homepage";
import Profile from "../components/Profile";
import NotFound from "../components/NotFound";
import Pokedex from "../components/Pokedex";

export const RoutesList = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/logIn" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/myProfile" element={<Profile />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/error" element={<NotFound />} />

        {/* <Route
              path="/myProfile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            /> */}
      </Routes>
    </Router>
  );
};
