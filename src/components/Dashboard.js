import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";

const buttonLogOut = (e) => {
  e.preventDefault();
  
  <Routes>
    <Route path='/' element={<Login />} />
  </Routes>
  
  console.log('Clicked botton logout');
}

const Dashboard = () => {
  return (
    <div>
      <p>Welcome to your Dashboard</p>
      <button onClick={buttonLogOut}>Log out</button>
    </div>
  );
};
export default Dashboard;