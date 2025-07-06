import React, { useEffect, useState } from "react";
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

function YourRide() {
  const [rides, setRides] = useState([]);

  const handleReady = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/bookings/ready/${id}`,
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

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/bookings/approved`
      );
      console.log(" Response:", res.data);
      setRides(res.data);
    } catch (err) {
      console.error("Fetch error", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
        <Navbar className="bg-white" />
        <Sidebar />
      <div className="bg-slate-100 h-screen overflow-auto">
        <div className=" flex flex-col gap-3 p-20 pl-64 px-28">
          <div>
            <h3 className="text-xl font-semibold">Your Rides :</h3>
          </div>
          {rides.length > 0 ? (
            rides.map((item) => (
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
                <div>
                  <p className="text-xl font-bold border-x-[1px] border-gray-300 px-3 w-40 text-center py-2 text-blue-900">
                    ₹{item.fare}
                  </p>
                </div>
                <div className="flex gap-1 items-center px-3 w-44 flex-col">
                  <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faClock} />
                    <p className="text-xl font-semibold">{item.time}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faCalendarDays} size="sm" />
                    <p className="text-sm text-center">
                      {" "}
                      {moment(item.date).format("DD MMM YYYY")}
                    </p>
                  </div>
                </div>
                <div className=" w-48 text-center">
                  { item.ready === "notready" && (
                    <div className=" border-l-[1px] border-[#c4c4c494]">
                    <button
                    disabled
                      className=" font-semibold bg-gray-400 px-3 py-2 text-white rounded-lg"
                    >
                      Ready
                    </button>
                  </div>
                  )}
                  { item.ready === "isready" && (
                    <div className=" border-l-[1px]  border-[#c4c4c494]">
                      <button
                        onClick={() => handleReady(item._id)}
                        className=" font-semibold bg-green-600 px-3 py-2 text-white hover:bg-green-700 rounded-lg"
                      >
                        Ready
                      </button>
                    </div>
                  )}
                  { item.ready === "ready" && (
                   <div className=" border-l-[1px]  border-[#c4c4c494]">
                    <button
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
            <div className="overflow-auto flex items-center justify-center">
              No Pending Rides
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default YourRide;
