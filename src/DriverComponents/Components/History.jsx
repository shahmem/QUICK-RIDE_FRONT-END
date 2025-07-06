import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import moment from "moment";

function History() {
  const [lists, setLists] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Sort");
  const dropdownRef = useRef(null);

  const sortOptions = [
    { label: "Date : Newest", value: "date-desc" },
    { label: "Date : Oldest", value: "date-asc" },
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

  const fetchData = async (sortValue = selectedSort) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/bookings/driver/history`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            sort: sortValue
          }
        }
      );
      setLists(res.data);
    } catch (error) {
      console.error("Fetch error", error);
    }
  };
  useEffect(() => {
    fetchData(selectedSort);
  }, [selectedSort]);

  return (
    <>
      <div className="bg-slate-100 h-screen overflow-auto">
        <Navbar className="bg-white" />
        <Sidebar />
        <div className=" flex flex-col gap-3 p-20 pl-64 px-28">
          <div>
            <h3 className="text-xl font-semibold">History :</h3>
          </div>
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

          {lists.length > 0 ? (
            lists.map((booking, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto"
              >
                <div className="flex-1 text-[#111269] px-3 ">
                  <p className=" mb-3 text-sm font-semibold text-gray-800">
                    From : <span className="font-bold"> {booking.name}</span>
                  </p>
                  <div className="flex gap-3  items-center">
                    <FontAwesomeIcon className="text-sm" icon={faLocationDot} />
                    <p className=" font-semibold">{booking.pickup.split(",")[0].trim()}</p>
                    <p className="text-xl font-bold">-</p>
                    <p className=" font-semibold">
                      {booking.dropoff.split(",")[0].trim()}
                    </p>
                  </div>
                  <p className="text-xs ml-6">
                    {booking.distance}
                  </p>
                </div>
                <div className="w-52 border-x-[1px] border-gray-300 text-center">
                  <p className="text-xl font-bold   py-2 text-blue-900">
                    ${booking.fare}
                  </p>
                </div>
                <div className="text-sm border-r-[1px] border-gray-300 text-center w-44 font-extralight text-slate-500">
                  <p> {moment(booking.date).format("DD MMM YYYY")}</p>
                  <p>{booking.time}</p>
                </div>
                <div className="text-center w-44 font-semibold">
                  {booking.status === "completed" ? (
                    <p className="text-green-700">{booking.status}</p>
                  ) : (
                    <p className="text-red-600">{booking.status}</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center bg-white py-10 w-full rounded-2xl shadow">
              <p className="text-gray-500">No booking history found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default History;
