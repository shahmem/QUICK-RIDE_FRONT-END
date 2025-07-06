import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChevronDown,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import axios from "axios";
import moment from "moment";

function Requests() {
  const [requests, setRequests] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Sort");
  const dropdownRef = useRef(null);

  const sortOptions = [
    { label: "Date : Newest", value: "date-desc" },
    { label: "Date : Oldest", value: "date-asc" },
    { label: "Price : High-to-Low", value: "price-asc" },
    { label: "Price : Low-to-High", value: "price-desc" },
  ];

  const handleSelect = (option) => {
    setSelectedSort(option.label);
    setShowDropdown(false);
    fetchData(option.value);
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

  const fetchData = async (
    sortValue = selectedSort
  ) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/bookings/requests`,
         {params: {
            sort: sortValue
          }}
      );
      console.log("✅ Response:", res.data); // actual data
      setRequests(res.data); // save to state
    } catch (err) {
      console.error("Fetch error", err);
    }
  };

  const handleApprove = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/bookings/approve/${id}`,
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

  useEffect(() => {
    fetchData(selectedSort);
  }, []);

  return (
    <>
      <div className="bg-slate-100 h-screen overflow-auto">
        <Navbar className="bg-white" />
        <Sidebar />
        <div className=" flex flex-col gap-3 p-20 pl-64 px-28">
          <div>
            <h3 className="text-xl font-semibold">Requests :</h3>
          </div>
          <div className="flex gap-5 text-xs font-semibold">
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
          </div>
          {requests.length > 0 ? (
            requests.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto"
              >
                <div className="flex-1 text-[#111269]">
                  <p className=" mb-3 text-sm font-semibold text-gray-800">
                    From : <span className="font-bold"> {item.name}</span>
                  </p>
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
                <div className="flex gap-1 items-center border-x-[1px] px-18 flex-col">
                  <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faClock} />
                    <p className="text-xl font-semibold">{item.time}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faCalendarDays} size="sm" />
                    <p className="text-sm text-center">  {moment(item.date).format("DD MMM YYYY")}</p>
                  </div>
                </div>
                <div className="w-48 text-center">
                  <p className="text-xl font-bold text-blue-900">
                    ₹{item.fare}
                  </p>
                </div>
                <div>
                  <div className=" border-l-[1px] px-9">
                    <button
                      onClick={() => handleApprove(item._id)}
                      type="button"
                      className=" px-4 text-white py-1 text-sm font-semibold rounded-lg hover:bg-green-700 bg-green-600"
                    >
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">No Pending Requests</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Requests;
