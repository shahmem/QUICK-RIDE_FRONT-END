import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChevronDown,
  faCircleCheck,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router";
import FilterDropdown from "./FilterDropdown";
import Menubar from "./Menubar";

function Booking() {
  const [ridesList, setRidesList] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Sort");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const dropdownRef = useRef(null);
  const filterOptions = [
    { label: "Pending", value: "pending" },
    { label: "Approved", value: "approved" },
    { label: "Paid", value: "paid" },
  ];

  const sortOptions = [
    { label: "Newest", value: "date-desc" },
    { label: "Oldest", value: "date-asc" },
  ];

  const handleSelect = (option) => {
    setSelectedSort(option.label);
    setShowDropdown(false);
    fetchData(option.value, selectedFilters);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handlePayment = async (booking) => {
    const token = localStorage.getItem("token");
    try {
      // 1. Create Razorpay order from backend
      const { data: order } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/payment/order`,
        { amount: booking.fare ,bookingId: booking._id }, // amount in rupees
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // 2. Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Razorpay key from env
        amount: order.amount,
        currency: "INR",
        name: "QuickRide",
        description: "Ride Payment",
        order_id: order.id,
        handler: async function (response) {
          // 3. Verify payment with backend
          const verifyRes = await axios.post(
            `${import.meta.env.VITE_API_URL}/api/payment/verify`,
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              bookingId: booking._id,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (verifyRes.data.success) {
            alert("Payment successful!");

            await axios.patch(
              `${import.meta.env.VITE_API_URL}/api/bookings/pay/${booking._id}`,
              {rcpt: order.reciept},
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            fetchData();
          } else {
            alert("Payment verification failed...");
          }
        },
        prefill: {
          name: "User Name",
          email: "user@example.com",
          contact: "7736179305",
        },
        theme: {
          color: "#3aad92",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Error initiating payment", err);
      alert("Payment failed to start invalid Ride");
    }
  };
  const handleReady = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/bookings/isready/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Approved:", res.data);
      await fetchData();
    } catch (err) {
      console.error("Error approving booking:", err);
    }
  };

  const fetchData = async (
    sortValue = selectedSort,
    filters = selectedFilters
  ) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/bookings/lists`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            sort: sortValue, // e.g. "date-desc" or "date-asc"
            filters: filters.join(","), // comma-separated status filters
          },
        }
      );
      setRidesList(res.data);
    } catch (err) {
      console.error("Fetch error", err);
    }
  };

  useEffect(() => {
    fetchData(selectedSort, selectedFilters);
  }, []);

  return (
    <div className="bg-slate-100 h-screen overflow-auto">
      <Navbar className="bg-white z-20" />
      <Sidebar /><Menubar display='md:hidden'/>
      <div className=" flex flex-col gap-5 pt-20 md:px-20 px-6 md:pl-56">
        <div>
          <h3 className="font-semibold">Your Bookings :</h3>
        </div>
        <div className="flex gap-4">
          <div ref={dropdownRef} className="flex gap-5 text-xs font-semibold">
            <button
              onClick={() => setShowDropdown((prev) => !prev)}
              className="bg-white px-2 py-1 rounded-md shadow flex justify-between items-center gap-7 hover:bg-gray-50"
            >
              {selectedSort}
              <FontAwesomeIcon icon={faChevronDown} />
            </button>

            {showDropdown && (
              <div className="absolute z-10 mt-7 w-48 bg-white rounded-md shadow">
                {sortOptions.map((option, i) => (
                  <div
                    key={i}
                    onClick={() => handleSelect(option)}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <FilterDropdown
              options={filterOptions}
              selected={selectedFilters}
              onChange={setSelectedFilters}
            />
          </div>
        </div>
        {ridesList.length > 0 ? (
          ridesList.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto"
            >
              <div className="flex-1 text-[#111269]">
                <div className="flex gap-6 items-center">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p className="text-lg font-semibold">
                    {item.pickup.split(",")[0].trim()}
                  </p>
                  <p className="text-2xl font-bold">-</p>
                  <p className="text-lg font-semibold">
                    {item.dropoff.split(",")[0].trim()}
                  </p>
                </div>
                <p className="text-xs ml-9">{item.distance}</p>
              </div>
              <div className="flex gap-1 items-center border-[#c4c4c494] border-x-[1px] px-24 flex-col">
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faClock} />
                  <p className="text-xl font-semibold">{item.time}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faCalendarDays} size="sm" />
                  <p className="text-sm text-center">
                    {moment(item.date).format("DD MMM YYYY")}
                  </p>
                </div>
              </div>
              <div className="w-48 text-center">
                {item.ready === "notready"  && item.payment === "notpaid" && (
                    <button
                      type="button"
                      disabled
                      className="text-lg text-center w-16  font-bold  text-black"
                    >
                      ₹{item.fare}
                    </button>
                  ) }
                {item.ready === "isready"  && item.payment === "notpaid" && (
                    <button
                      type="button"
                      disabled
                      className="text-lg text-center w-16  font-bold  text-black"
                    >
                      ₹{item.fare}
                    </button>
                  ) }
                  { item.payment === "paid" && (
                    <button
                      disabled
                      className="text-sm text-center w-auto px-1.5 p-1 rounded-lg font-semibold text-white bg-green-700"
                    >
                      ₹{item.fare}
                      <FontAwesomeIcon 
                        className="bg-green-700 rounded-full pl-2"
                        icon={faCircleCheck}
                        style={{ color: "#fff" }}
                      />
                    </button>
                  )}
                 {item.ready === "ready" && item.payment === "notpaid" &&  (
                  <button
                    type="button"
                    onClick={() => handlePayment(item)}
                    className="text-sm text-center w-18 p-1 rounded-lg font-bold text-blue-700 border border-blue-700 hover:text-white hover:bg-blue-700 "
                  >
                    ₹{item.fare}
                  </button>
                )}
              </div>
              <div>
                {item.status === "pending" && (
                  <div className=" border-l-[1px] px-9 border-[#c4c4c494]">
                    <p className="text-xl font-semibold text-sky-300">
                      {item.status}
                    </p>
                  </div>
                )}
                {item.status === "approved" && item.ready ==='notready' && (
                  <div className=" border-l-[1px] px-9 border-[#c4c4c494]">
                    <button
                      onClick={() => handleReady(item._id)}
                      className=" font-semibold bg-green-600 px-3 py-2 text-white hover:bg-green-700 rounded-lg"
                    >
                      Ready
                    </button>
                  </div>
                )}
                {item.status === "completed" && (
                  <div className=" border-l-[1px] px-9 border-[#c4c4c494]">
                    <button
                      className=" font-semibold text-green-600 text-lg"
                    >
                      {item.status}
                    </button>
                  </div>
                )}
                {item.ready === "isready" && item.status === "approved" && (
                  <div className=" border-l-[1px] px-9 border-[#c4c4c494]">
                    <button
                    disabled
                      onClick={() => handleReady(item._id)}
                      className=" font-semibold bg-gray-400 px-3 py-2 text-white rounded-lg"
                    >
                      Ready
                    </button>
                  </div>
                )}
                {item.ready === "ready" && item.status === "approved" && (
                  <div className=" border-l-[1px] px-9 border-[#c4c4c494]">
                    <button
                      onClick={() => handleReady(item._id)}
                      disabled
                      className=" font-semibold text-lg text-green-600"
                    >
                      Ready
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No rides</p>
        )}
      </div>
    </div>
  );
}

export default Booking;
