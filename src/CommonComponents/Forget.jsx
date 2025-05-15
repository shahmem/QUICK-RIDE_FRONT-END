import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
import CommonNavbar from "./CommonNavbar";
import CommonFooter from "./CommonFooter";

function Forget() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [emailExists, setEmailExists] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Watch password field to compare with confirmPassword
  const newPassword = watch("newPassword");

  const checkEmail = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/api/forgot-password", data);
      setUserEmail(data.email);
//    console.log(data);
      
      setEmailExists(true);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  const resetPassword = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/api/reset-password", {
        email: userEmail,
        newPassword: data.newPassword,
      });
      setMessage(response.data.message);
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <CommonNavbar />
      <div className="w-full h-full bg-[#a9fde9] px-4 py-10 md:px-32 lg:px-[24%] md:py-28">
        <div className=" h-auto flex flex-col items-center bg-white p-6 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold text-[#3aad92]">Forgot Password</h2>
          {message && <p className="text-sm text-red-600 mt-2">{message}</p>}

          {!emailExists ? (
            // Email verification form
            <form
              onSubmit={handleSubmit(checkEmail)}
              className="w-full flex flex-col gap-4 mt-6"
            >
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                className="border p-2 rounded-md"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
              <button
                type="submit"
                className="bg-[#3aad92] text-white py-2 rounded-md"
              >
                Verify Email
              </button>
            </form>
          ) : (
            // Password reset form
            <form
              onSubmit={handleSubmit(resetPassword)}
              className="w-full flex flex-col gap-4 mt-6"
            >
              <input
                {...register("newPassword", {
                  required: "New Password is required",
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message:
                      "At least 8 characters and include letters, numbers, and symbols.",
                  },
                })}b
                type="password"
                className="focus:outline-none p-1 "
                placeholder="New Password"
              />
              {errors.newPassword && (
                <p className="text-xs text-red-500">
                  {errors.newPassword.message}
                </p>
              )}

              <input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === newPassword || "Passwords do not match",
                })}
                type="password"
                className="border p-2 rounded-md w-full"
                placeholder="Re-enter new password"
              />
              {errors.confirmPassword && (
                <p className="text-xs text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}

              <button
                type="submit"
                className="bg-[#3aad92] text-white py-2 rounded-md"
              >
                Reset Password
              </button>
            </form>
          )}

          <button
            onClick={() => navigate("/login")}
            className="mt-4 text-sm text-[#3aad92] underline"
          >
            Back to Login
          </button>
        </div>
      </div>
      <CommonFooter />
    </>
  );
}

export default Forget;
