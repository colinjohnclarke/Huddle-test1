import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ReadingTable from "../Components/Houses/Meters/MeterReadingsTable";
import Readings from "../Components/Houses/Meters/Readings";

function Routing({}) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route
          index
          path="/house-meter-readings/:houseId/:streetAddress/:city"
          element={<Readings />}
        />
      </Routes>
    </Suspense>
  );
}

export default Routing;
