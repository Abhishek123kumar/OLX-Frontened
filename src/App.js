import React from "react";
import ItemState from "./Context/item/ItemState";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import AuthState from "./Context/authentication/AuthState";
import Login from "./Component/Login";
import SubNavbar from "./Component/SubNavbar";
import SignUp from "./Component/SignUp";
import SetPassword from "./Component/SetPassword";
import ResetPassword from "./Component/ResetPassword";

import ResetSetPassword from "./Component/ResetSetPassword";


function App() {
  return (
    <AuthState>
      <ItemState>
        <Router>
          <Navbar  />
          <div style={{ marginTop: "80px" }} >
            <SubNavbar/>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/sign-up" element={<SignUp/>}></Route>
              <Route path="/set-password/:token" element={<SetPassword/>}></Route>
              <Route path="/reset-password" element={<ResetPassword/>}></Route>
              <Route path="/reset-set-password/:email/:token" element={<ResetSetPassword/>}></Route>
            </Routes>
          </div>
        </Router>
      </ItemState>
    </AuthState>
  );
}

export default App;
