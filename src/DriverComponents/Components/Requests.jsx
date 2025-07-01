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

function Requests() {
  const [requests, setRequests] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/bookings/requests");
      console.log("✅ Response:", res.data); // actual data
      setRequests(res.data); // save to state
    } catch (err) {
      console.error("Fetch error", err);
    }
  };

   const handleApprove = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.patch(
        `http://localhost:5000/api/bookings/approve/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Approved:', res.data);
      await fetchData();
    } catch (err) {
      console.error('Error approving booking:', err);
    }
  };

  useEffect(() => {
    fetchData();
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
            <div className="bg-white px-2 py-1 rounded-md flex justify-between items-center gap-7 shadow">
              Status <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className="bg-white px-2 py-1 rounded-md flex justify-between items-center gap-7 shadow">
              Sort <FontAwesomeIcon icon={faChevronDown} />{" "}
            </div>
            <div className="bg-white px-2 py-1 rounded-md flex justify-between items-center gap-7 shadow">
              Filter <FontAwesomeIcon icon={faChevronDown} />{" "}
            </div>
          </div>
          {requests.length > 0  ? 
          (requests.map((item)=>(
            <div key={item._id} className="flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto">
            <div className="flex-1 text-[#111269]">
              <p className=" mb-3 text-sm font-semibold text-gray-800">From : <span className="font-bold"> {item.name}</span></p>
              <div className="flex gap-6 items-center">
                <FontAwesomeIcon icon={faLocationDot} />
                <p className="text-lg font-semibold">{item.pickup}</p>
                <p className="text-2xl font-bold">-</p>
                <p className="text-lg font-semibold">{item.dropoff}</p>
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
                <p className="text-sm text-center">{item.date}</p>
              </div>
            </div>
            <div className="w-48 text-center">
              <p className="text-xl font-bold text-blue-900">${item.fare}</p>
            </div>
            <div>
              <div className=" border-l-[1px] px-9">
                <button
                onClick={()=>handleApprove(item._id)}
                  type="button"
                  className=" px-4 text-white py-1 text-sm font-semibold rounded-lg hover:bg-green-700 bg-green-600"
                >
                  Approve
                </button>
              </div>
            </div>
          </div>
          ))
          )
          : 
          (<div  className="text-center">
            No Pending Requests
          </div> )
          }
          
        </div>
      </div>
    </>
  );
}

export default Requests;
