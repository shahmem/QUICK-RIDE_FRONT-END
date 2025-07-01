import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChevronDown,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Autocomplete, GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const containerStyle = {
  width: "100%",
  height: "400px",
};
function History() {
 const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

   const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState("");
  const [center, setCenter] = useState({ lat: 19.076, lng: 72.8777 });

  const sourceRef = useRef(null);
  const destinationRef = useRef(null);

  const handlePlaceChanged = () => {
    const srcPlace = sourceRef.current.getPlace();
    const destPlace = destinationRef.current.getPlace();
// console.log(srcPlace);

    if (
      srcPlace?.geometry?.location &&
      destPlace?.geometry?.location
    ) {
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
console.log(srcCoords);

      setSource(srcCoords);
      setDestination(destCoords);

      // Center map between two points
      setCenter({
        lat: (srcCoords.lat + destCoords.lat) / 2,
        lng: (srcCoords.lng + destCoords.lng) / 2,
      });

      // Calculate Distance
      const service = new window.google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [srcCoords],
          destinations: [destCoords],
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === "OK") {
            const result =
              response.rows[0].elements[0].distance.text; // Example: "23.4 km"
            setDistance(result);
          } else {
            console.error("Distance Matrix failed:", status);
          }
        }
      );
    }
  };

  return (
    <>
      <div className="bg-slate-100 h-screen flex flex-col items-center justify-center overflow-auto">
      <h2 className="text-xl font-bold">Calculate Distance Between Locations</h2>

      <div className="w-full md:w-2/3 flex flex-col gap-2">
        <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
          {/* Source Input */}
          <Autocomplete
            onLoad={(ref) => (sourceRef.current = ref)}
            onPlaceChanged={handlePlaceChanged}
          >
            <input
              type="text"
              placeholder="Enter Source"
              className="border px-3 py-2 rounded w-full"
            />
          </Autocomplete>

          {/* Destination Input */}
          <Autocomplete
            onLoad={(ref) => (destinationRef.current = ref)}
            onPlaceChanged={handlePlaceChanged}
          >
            <input
              type="text"
              placeholder="Enter Destination"
              className="border px-3 py-2 rounded w-full"
            />
          </Autocomplete>

          {/* Map */}
          {/* <div className="mt-4">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              {source && <Marker position={source} />}
              {destination && <Marker position={destination} />}
            </GoogleMap>
          </div> */}

          {/* Distance */}
          {distance && (
            <p className="mt-4 text-lg font-semibold">
              Distance: <span className="text-green-600">{distance}</span>
            </p>
          )}
        </LoadScript>
      </div>


        {/* <Navbar className="bg-white"/>
        <Sidebar/>
        <div className=' flex flex-col gap-3 p-20 pl-64 px-28'>
          <div>
            <h3 className='text-xl font-semibold'>History :</h3>
          </div>
          <div className='flex gap-5 text-xs font-semibold'>
            <div className='bg-white px-2 py-1 rounded-md flex justify-between items-center gap-7 shadow'>Status <FontAwesomeIcon icon={faChevronDown} /></div>
            <div className='bg-white px-2 py-1 rounded-md flex justify-between items-center gap-7 shadow'>Sort <FontAwesomeIcon icon={faChevronDown}  /> </div>
            <div className='bg-white px-2 py-1 rounded-md flex justify-between items-center gap-7 shadow'>Filter <FontAwesomeIcon icon={faChevronDown}  /> </div>
          </div>
          
         
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className='pr-5'>
              <div className='font-semibold text-xl'>John Doe</div>
            </div>
            <div className=' text-[#111269] px-24 border-x-[1px]'>
              <div className='flex gap-3  items-center'>
                <FontAwesomeIcon className='text-sm' icon={faLocationDot} />
                <p className=' font-semibold'>Calicut</p>
                <p className='text-xl font-bold'>-</p>
                <p className=' font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-6'>62km</p>
            </div>
            <div className='text-sm pl-8 font-extralight text-slate-500'>
              <p>16/02/2025</p>
              <p>04:38:45 AM</p>
            </div>
          </div>
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className='pr-5'>
              <div className='font-semibold text-xl'>John Doe</div>
            </div>
            <div className=' text-[#111269] px-24 border-x-[1px]'>
              <div className='flex gap-3  items-center'>
                <FontAwesomeIcon className='text-sm' icon={faLocationDot} />
                <p className=' font-semibold'>Calicut</p>
                <p className='text-xl font-bold'>-</p>
                <p className=' font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-6'>62km</p>
            </div>
            <div className='text-sm pl-8 font-extralight text-slate-500'>
              <p>16/02/2025</p>
              <p>04:38:45 AM</p>
            </div>
          </div>
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className='pr-5'>
              <div className='font-semibold text-xl'>John Doe</div>
            </div>
            <div className=' text-[#111269] px-24 border-x-[1px]'>
              <div className='flex gap-3  items-center'>
                <FontAwesomeIcon className='text-sm' icon={faLocationDot} />
                <p className=' font-semibold'>Calicut</p>
                <p className='text-xl font-bold'>-</p>
                <p className=' font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-6'>62km</p>
            </div>
            <div className='text-sm pl-8 font-extralight text-slate-500'>
              <p>16/02/2025</p>
              <p>04:38:45 AM</p>
            </div>
          </div>
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className='pr-5'>
              <div className='font-semibold text-xl'>John Doe</div>
            </div>
            <div className=' text-[#111269] px-24 border-x-[1px]'>
              <div className='flex gap-3  items-center'>
                <FontAwesomeIcon className='text-sm' icon={faLocationDot} />
                <p className=' font-semibold'>Calicut</p>
                <p className='text-xl font-bold'>-</p>
                <p className=' font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-6'>62km</p>
            </div>
            <div className='text-sm pl-8 font-extralight text-slate-500'>
              <p>16/02/2025</p>
              <p>04:38:45 AM</p>
            </div>
          </div>
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className='pr-5'>
              <div className='font-semibold text-xl'>John Doe</div>
            </div>
            <div className=' text-[#111269] px-24 border-x-[1px]'>
              <div className='flex gap-3  items-center'>
                <FontAwesomeIcon className='text-sm' icon={faLocationDot} />
                <p className=' font-semibold'>Calicut</p>
                <p className='text-xl font-bold'>-</p>
                <p className=' font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-6'>62km</p>
            </div>
            <div className='text-sm pl-8 font-extralight text-slate-500'>
              <p>16/02/2025</p>
              <p>04:38:45 AM</p>
            </div>
          </div>
          <div className='flex justify-between items-center bg-white py-5 w-full rounded-2xl shadow px-12  overflow-y-auto'>
            <div className='pr-5'>
              <div className='font-semibold text-xl'>John Doe</div>
            </div>
            <div className=' text-[#111269] px-24 border-x-[1px]'>
              <div className='flex gap-3  items-center'>
                <FontAwesomeIcon className='text-sm' icon={faLocationDot} />
                <p className=' font-semibold'>Calicut</p>
                <p className='text-xl font-bold'>-</p>
                <p className=' font-semibold'>Malappuram</p>
              </div>
              <p className='text-xs ml-6'>62km</p>
            </div>
            <div className='text-sm pl-8 font-extralight text-slate-500'>
              <p>16/02/2025</p>
              <p>04:38:45 AM</p>
            </div>
          </div>
          
        </div> */}
      </div>
    </>
  );
}

export default History;
