import { useRef, useState } from "react";
import { Autocomplete, LoadScript } from "@react-google-maps/api";

function Distance() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const [distance, setDistance] = useState("");

  const sourceRef = useRef(null);
  const destinationRef = useRef(null);

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
  return (
    <div className="h-screen flex flex-col items-center justify-center overflow-auto">
      <h2 className="text-xl font-bold">
        Calculate Distance Between Locations
      </h2>

      <div className="w-full md:w-2/3 flex flex-col gap-2">
        <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
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

          {distance && (
            <p className="mt-4 text-lg font-semibold">
              Distance: <span className="text-green-600">{distance}</span>
            </p>
          )}
        </LoadScript>
      </div>
    </div>
  );
}

export default Distance;
