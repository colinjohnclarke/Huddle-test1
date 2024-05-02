import React, { useState } from "react";
import { houses } from "../data/dummydata";
import House from "../Components/Houses/House";
import SearchHouses from "../Components/Houses/SearchHouses";

function Home() {
  const [searchResult, setSearchResult] = useState("");

  console.log("searchResult", searchResult);

  let filteredHouses = houses?.filter((house) => {
    const result = searchResult?.toLowerCase();

    return (
      house.address.city.toLowerCase().includes(result) ||
      house.address.streetAddress.toLowerCase().includes(result)
    );
  });

  return (
    <div className="home-container" style={styles.container}>
      <h1 style={styles.heading}>
        Welcome to the Meter Readings App for Huddle
      </h1>

      <p style={styles.description}>
        Manage the readings of home gas and electricity meters
      </p>

      <SearchHouses setSearchResult={setSearchResult} />

      <h2> Houses </h2>
      <div style={styles.houseContainer}>
        {filteredHouses.map((house) => {
          return <House key={house.id} data={house}></House>;
        })}
      </div>
    </div>
  );
}

const styles = {
  container: {
    color: "white",
    margin: "20px",
    padding: "20px",
    borderRadius: "16px",
    background: "linear-gradient(90deg, rgb(90, 65, 192), rgb(226, 114, 188))",
    boxShadow: "0px 0px 30px 4px rgba(174, 196, 216, 0.25)",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#4e4e4e",
    color: "white",
  },
  houseContainer: {
    marginTop: "20px",
  },
};

export default Home;
