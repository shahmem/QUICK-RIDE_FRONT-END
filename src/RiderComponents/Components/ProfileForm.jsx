import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";
import img from "../../assets/images/img-bg.png";
import Profile from "./Profile";

function ProfileForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [hasVehicle, setHasVehicle] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleFileUpload = (file) => {
    return new Promise((resolve) => {
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          resolve(reader.result);
        };
      } else {
        resolve(null);
      }
    });
  };

  const onSubmit = async (data) => {
    const file3Base64 = data.rcImg[0]
      ? await handleFileUpload(data.rcImg[0], "rcImg")
      : null;
    const file4Base64 = data.insurance[0]
      ? await handleFileUpload(data.insurance[0], "insurance")
      : null;

    const newFormData = {
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      phone: data.phone,
      address: data.address,
      state: data.state,
      district: data.district,
      zipcode: data.zipcode,
      regNum: data.regNum || null,
      brand: data.brand || null,
      model: data.model || null,
      year: data.year || null,
      rcImg: file3Base64,
      insurance: file4Base64,
    };
    const updateddata = [newFormData];
    localStorage.setItem("profiledata", JSON.stringify(updateddata)); // Save full form data
    alert("Form Data Saved!");
    setSubmitted(true);
  };
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("profiledata"));
    if (savedData && savedData.length > 0) {
      setSubmitted(true);
    }
  }, []);
  const handleCancel = () => {
    reset();
    setHasVehicle(false);
    navigate("/riderhome");
  };

  return (
    <>
      <Navbar />
      {submitted ? (
        <Profile setSubmitted={setSubmitted} />
      ) : (
        <form
          style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
          onSubmit={handleSubmit(onSubmit)}
          className="min-h-screen flex pt-20 items-center flex-col justify-center bg-white p-6"
        >
          <div className="bg-[#0000001c] p-9 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 md:gap-16">
            <div className="w-[16rem] md:w-80">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Profile Details :
              </h2>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label>First Name :</label>
                  <input
                    {...register("fname", {
                      required: "First Name is required",
                    })}
                    type="text"
                    className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded"
                    placeholder="First Name"
                  />
                  {errors.fname && (
                    <p className="text-sm text-[#f53232] mt-1">
                      {errors.fname.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label>Last Name :</label>
                  <input
                    {...register("lname", {
                      required: "Last Name is required",
                    })}
                    type="text"
                    className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded"
                    placeholder="Last Name"
                  />
                  {errors.lname && (
                    <p className="text-sm text-[#f53232] mt-1">
                      {errors.lname.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label>Email :</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    type="text"
                    className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-sm text-[#f53232] mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label>Phone Number :</label>
                  <input
                    {...register("phone", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Mobile number must be 10 digits.",
                      },
                    })}
                    type="tel"
                    className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded"
                    placeholder="Mobile Number"
                  />
                  {errors.phone && (
                    <p className="text-sm text-[#f53232] mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label>Address :</label>
                  <input
                    {...register("address", {
                      required: "Last Name is required",
                    })}
                    type="text"
                    className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded"
                    placeholder="Address"
                  />
                  {errors.address && (
                    <p className="text-sm text-[#f53232] mt-1">
                      {errors.address.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label>State :</label>
                  <input
                    {...register("state", {
                      required: "Last Name is required",
                    })}
                    type="text"
                    className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded"
                    placeholder="state"
                  />
                  {errors.state && (
                    <p className="text-sm text-[#f53232] mt-1">
                      {errors.state.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label>District :</label>
                  <input
                    {...register("district", {
                      required: "Last Name is required",
                    })}
                    type="text"
                    className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded"
                    placeholder="District"
                  />
                  {errors.district && (
                    <p className="text-sm text-[#f53232] mt-1">
                      {errors.district.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label>Zipcode :</label>
                  <input
                    {...register("zipcode", {
                      required: "Last Name is required",
                    })}
                    type="tel"
                    className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded"
                    placeholder="Zipcode"
                  />
                  {errors.zipcode && (
                    <p className="text-sm text-[#f53232] mt-1">
                      {errors.zipcode.message}
                    </p>
                  )}
                </div>
                <p className="block text-gray-700 mt-4">
                  Do You Have Vehicle ?
                </p>
                <div className="flex gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => setHasVehicle(true)}
                    className={`px-4 text-sm py-1.5 bg-[#00000056] hover:bg-[#7e7e7ea1] text-white ${
                      hasVehicle ? "bg-[#eeeeeeb9] text-black " : " "
                    } `}
                  >
                    I Have
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasVehicle(false)}
                    className={`px-4 py-1.5 text-sm bg-[#00000056] hover:bg-[#7e7e7ea1] ${
                      hasVehicle === false
                        ? "bg-[#eeeeeeb9] text-black"
                        : "text-white "
                    }  `}
                  >
                    I Haven't
                  </button>
                </div>
              </div>
            </div>

            {hasVehicle && (
              <div className="w-[16rem] md:w-96 md:pt-12">
                <div className="space-y-4 flex flex-col gap-3">
                  <div className="flex flex-col">
                    <label>Registration Number :</label>
                    <input
                      {...register("regNum", {
                        required: "Registration Number is required",
                      })}
                      type="tel"
                      className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded  placeholder:text-sm"
                      placeholder="Registration Number"
                    />
                    {errors.regNum && (
                      <p className="text-sm text-[#f53232] mt-1">
                        {errors.regNum.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label>Brand of vehicle:</label>
                    <input
                      {...register("brand", {
                        required: "Brand of vehicle is required",
                      })}
                      type="text"
                      className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded  placeholder:text-sm"
                      placeholder="Brand of vehicle"
                    />
                    {errors.brand && (
                      <p className="text-sm text-[#f53232] mt-1">
                        {errors.brand.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label>Model (Varient) :</label>
                    <input
                      {...register("model", {
                        required: "Model (Varient) is required",
                      })}
                      type="text"
                      className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded  placeholder:text-sm"
                      placeholder="Model (Varient)"
                    />
                    {errors.model && (
                      <p className="text-sm text-[#f53232] mt-1">
                        {errors.model.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label>Year :</label>
                    <input
                      {...register("year", { required: "Year is required" })}
                      min="1900"
                      max={new Date().getFullYear()}
                      type="tel"
                      className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded  placeholder:text-sm"
                      placeholder="Year"
                    />
                    {errors.year && (
                      <p className="text-sm text-[#f53232] mt-1">
                        {errors.year.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <div>
                      <label className="block mb-2 font-medium">
                        RC Image :
                      </label>
                      <input
                        type="file"
                        {...register("rcImg", {
                          required: "RC Image is required",
                        })}
                        className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded"
                      />
                      {errors.rcImg && (
                        <p className="text-red-500 text-sm">
                          {errors.rcImg.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">
                        Insurance Image:
                      </label>
                      <input
                        type="file"
                        {...register("insurance", {
                          required: "Insurance Image is required",
                        })}
                        className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded  "
                      />
                      {errors.insurance && (
                        <p className="text-red-500 text-sm">
                          {errors.insurance.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mt-7 w-full justify-center flex  gap-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 bg-gray-800 text-white rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md"
            >
              Add
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default ProfileForm;
