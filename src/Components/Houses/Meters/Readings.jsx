import React from "react";
import ReadingTable from "./MeterReadingsTable";

function Readings() {
  return (
    <div>
      <h1> Your Readings</h1>
      <ReadingTable type={"Electricity"}></ReadingTable>
      <ReadingTable type={"Gas"}></ReadingTable>
    </div>
  );
}

export default Readings;
