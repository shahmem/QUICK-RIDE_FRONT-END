import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import bg from "../../assets/images/img-3-op.jpg";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";
import BackButton from "../../CommonComponents/BackButton";
import axios from "axios";
import { Autocomplete, LoadScript } from "@react-google-maps/api";

function BookForm() {
  const navigate = useNavigate();

  const [distance, setDistance] = useState("");

  const sourceRef = useRef(null);
  const destinationRef = useRef(null);

  const handleGetFare = () => {
    const dist = parseFloat(distance.replace(/\D/g, "")); 
    const dist_sliced =Math.floor(dist / 10);

      let fareRate = 300;
      let dist_Fare = 0;
      let sorted_fare = 0;

      if (dist_sliced > 10) {
        sorted_fare = dist_sliced - 10
        dist_Fare = sorted_fare * 9;
        fareRate += dist_Fare ;
      }


    setFare(fareRate);
    setisfare(true);
  };
  const handlePlaceChanged = () => {
    const srcPlace = sourceRef.current.getPlace();
    const destPlace = destinationRef.current.getPlace();

    if (srcPlace?.geometry?.location && destPlace?.geometry?.location) {
      const srcLoc = srcPlace.geometry.location;
      const destLoc = destPlace.geometry.location;

      const srcCoords = {
        lat: srcLoc.lat(),
        lng: srcLoc.lng(),
      };

      const destCoords = {
        lat: destLoc.lat(),
        lng: destLoc.lng(),
      };

      const service = new window.google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [srcCoords],
          destinations: [destCoords],
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === "OK") {
            const result = response.rows[0].elements[0].distance.text; // Example: "23.4 km"
            setDistance(result);
          } else {
            console.error("Distance Matrix failed:", status);
          }
        }
      );
    
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [hasVehicle, setHasVehicle] = useState(null);
  const [isfare, setisfare] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [Fare, setFare] = useState(0);

  // const getfare = () => {
  //   setisfare(true);
  //   const randomfare = Math.floor(Math.random() * (1300 - 330 + 1)) + 330;
  //   setFare(randomfare);
  // };
  const handleCustomSubmit = (data) => {
    const dataWithFare = {
      ...data,
      fare: Fare,
      distance: distance, 
    };
    console.log(
      "Submit button clicked! Additional action before submission.",
      data
    );
    onSubmit(dataWithFare);
  };

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in to book a ride.");
        return;
      }

      const res = await axios.post("http://localhost:5000/api/bookings", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Form Submitted:", res.data);
      alert("Form submitted successfully!");
      reset(); // clear form
      setTimeout(() => {
        setSubmitted(true);
        navigate("/riderhome");
      }, 1400);
    } catch (err) {
      console.error("Submission error:", err);
      alert("Error submitting form");
    }
  };
  const handleCancel = () => {
    reset();
    navigate("/riderhome");
  };

  return (
    <>
      <BackButton />
      <Navbar className="bg-[#ffffffd2]" />
      <div
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
        className=" pt-24 pb-12 min-h-screen flex flex-col items-center justify-center bg-gray-100"
      >
        {submitted ? (
          <div className="text-xl md:text-4xl text-center font-semibold text-white">
            Your Request Has been Sent ! Wait for approval..
          </div>
        ) : (
          <form onSubmit={handleSubmit(handleCustomSubmit)} action="/submit">
            <div
              className={`bg-[#b9b9b925] md:px-16 md:py-8 p-4 py-8 shadow-lg justify-center flex flex-col md:flex-row md:gap-16 gap-12`}
            >
              <div className="w-[16rem] md:w-80">
                <h2 className="text-2xl font-semibold mb-4 text-white ">
                  Book Your Ride
                </h2>
                <div className="space-y-4 text-white">
                  <div>
                    <Autocomplete
                      onLoad={(ref) => (sourceRef.current = ref)}
                      onPlaceChanged={handlePlaceChanged}
                    >
                      <input
                        {...register("pickup", {
                          required: "PickUp Location is required",
                        })}
                        className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded"
                        placeholder="PickUp Location"
                      />
                    </Autocomplete>
                    {errors.pickup && (
                      <p className="text-red-500 text-sm">
                        {errors.pickup.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Autocomplete
                      onLoad={(ref) => (destinationRef.current = ref)}
                      onPlaceChanged={handlePlaceChanged}
                    >
                      <input
                        {...register("dropoff", {
                          required: "Dropoff Location is required",
                        })}
                        className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded"
                        placeholder="Dropoff Location"
                      />
                    </Autocomplete>
                    {errors.dropoff && (
                      <p className="text-red-500 text-sm">
                        {errors.dropoff.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="date"
                      {...register("date", { required: "Date is required" })}
                      className="w-full px-3 py-1.5 border text-[#fffb] bg-[#2c2c2c4b] border-gray-300 rounded [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:brightness-50 "
                    />
                    {errors.date && (
                      <p className="text-red-500 text-sm">
                        {errors.date.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="time"
                      {...register("time", { required: "Time is required" })}
                      className="w-full px-3 py-1.5 border text-[#fffb] bg-[#2c2c2c4b] border-gray-300 rounded [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:brightness-50 "
                    />
                    {errors.time && (
                      <p className="text-red-500 text-sm">
                        {errors.time.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <p className="block text-white">Do You Have a Vehicle?</p>
                    <div className="flex gap-3 mt-2">
                      <button
                        type="button"
                        onClick={() => setHasVehicle(true)}
                        className={`px-4 text-sm py-1.5 bg-[#00000056] hover:bg-[#7e7e7ea1] text-white ${
                          hasVehicle ? "bg-[#eeeeeeb9] text-black" : ""
                        } `}
                      >
                        I Have
                      </button>
                      <button
                        type="button"
                        onClick={() => setHasVehicle(false)}
                        className={`px-4 py-1.5 text-sm bg-[#00000056] hover:bg-[#7e7e7ea1] text-white ${
                          hasVehicle === false
                            ? "bg-[#eeeeeeb9] text-black"
                            : ""
                        }  `}
                      >
                        I Haven't
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {hasVehicle && (
                <div className="w-[16rem] md:w-80 text-white">
                  <h3 className="text-xl font-semibold mb-5 text-white">
                    Vehicle Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <input
                        {...register("vehicle.registration", {
                          required: "Registration Number is required",
                        })}
                        className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded"
                        placeholder="Registration Number"
                      />
                    </div>

                    <div>
                      <input
                        {...register("vehicle.brand", {
                          required: "Brand is required",
                        })}
                        className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded"
                        placeholder="Brand of vehicle"
                      />
                    </div>

                    <div>
                      <input
                        {...register("vehicle.model", {
                          required: "Model is required",
                        })}
                        className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded"
                        placeholder="Model (Variant) "
                      />
                    </div>
                    <div>
                      <input
                        {...register("vehicle.year", {
                          required: "Year is required",
                        })}
                        className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded"
                        placeholder="Year"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {!isfare && (
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={handleGetFare}
                  className=" text-xs px-7 font-semibold py-2.5 hover:bg-orange-700 bg-orange-600 text-white "
                >
                  GET FARE
                </button>
              </div>
            )}
            {distance && (
              <p className="mt-4 text-lg font-semibold">
                Distance: <span className="text-green-600">{distance}</span>
              </p>
            )}
            {isfare && (
              <div className="flex flex-col md:flex-row justify-between gap-3">
                <div className="text-white mt-2">
                  <p className="text-xl p-2 font-semibold">
                    {Fare} is Expense for Your Ride . Are Sure with this?
                  </p>
                </div>
                <div className="flex  gap-1 md:float-right mt-3">
                  <button
                    onClick={handleCancel}
                    type="button"
                    className="text-xs px-7 font-semibold py-2 h-min hover:bg-gray-700 bg-gray-600 text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="text-xs px-7 font-semibold py-2 h-min hover:bg-blue-700 bg-blue-600 text-white"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </>
  );
}

export default BookForm;
