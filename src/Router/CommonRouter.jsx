import React from "react";
import CommonHome from "../CommonComponents/CommonHome";
import { Route, Routes } from "react-router";
import Signup from "../CommonComponents/Signup";
import Login from "../CommonComponents/Login";
import Forget from "../CommonComponents/Forget";
import AdminLogin from "../Admin/AdminLogin";
import AdminSignup from "../Admin/AdminSignup";
import Dashboard from "../Admin/Dashboard";
import ScrollToTop from "../CommonComponents/ScrollToTop";

function CommonRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CommonHome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forget />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default CommonRouter;
