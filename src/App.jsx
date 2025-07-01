import React from "react";
import CommonRouter from "./Router/CommonRouter";
import { BrowserRouter } from "react-router";
import RiderRouter from "./Router/RiderRouter";
import DriverRouter from "./Router/DriverRouter";
import { LoadScript } from "@react-google-maps/api";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
function App() {
  return (
    <>
      <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
        <BrowserRouter>
          <CommonRouter />
          <RiderRouter />
          <DriverRouter />
        </BrowserRouter>
      </LoadScript>
    </>
  );
}

export default App;
