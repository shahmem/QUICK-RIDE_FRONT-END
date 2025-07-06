import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Menubar from "./Menubar";

function Transaction() {
  return (
    <>
      <div className="bg-slate-100 h-screen overflow-auto">
        <Navbar className="bg-white" />
        <Sidebar />
        <Menubar display="md:hidden" />
        <div className=" flex flex-col gap-3 p-20 px-4 md:pl-64 md:px-28">
          <div>
            <h3 className="text-xl font-semibold">Transaction :</h3>
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

          <div className="flex flex-col  gap-2.5  bg-white py-4 w-full rounded-2xl shadow px-5 md:px-16  overflow-y-auto">
            <div className="flex items-center gap-1.5  ">
              <div className="font-light text-slate-500 md:text-sm text-xs">Sent to :</div>
              <div className="text-xs  font-semibold md:text-base">
                John Doe
              </div>
            </div>
            <div className="flex justify-between items-center text-[#111269]  ">
              <div className="flex flex-col gap-1">
                <div className="flex text-sm md:text-xl gap-1.5 md:gap-3  items-center">
                  <FontAwesomeIcon className="text-sm " icon={faLocationDot} />
                  <p className=" font-semibold">Calicut</p>
                  <p className="text-xl font-bold">-</p>
                  <p className=" font-semibold">Malappuram</p>
                </div>
                <p className="text-xs ml-4 md:ml-6">62km</p>
              </div>

              <div className="text-xs md:text-sm font-extralight text-slate-700">
                <p>16/02/2025</p>
                <p>04:38:45 AM</p>
              </div>
              <div>
                <p className="md:text-xl text-lg font-bold text-blue-900">
                  $560
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transaction;
