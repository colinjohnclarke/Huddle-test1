import React from "react";
import ReadingTable from "./MeterReadingsTable";

function Readings() {
  return (
    <div>
      Readings
      <ReadingTable type={"Electricity"}></ReadingTable>
      <ReadingTable type={"Gas"}></ReadingTable>
    </div>
  );
}

export default Readings;
