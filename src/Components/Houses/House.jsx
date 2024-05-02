import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function House({ data }) {
  console.log(data.id);
  return (
    <Link
      to={`/house-meter-readings/${data.id}/${data.address.streetAddress}/${data.address.city}`}
      style={{ textDecoration: "none", color: "#333" }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          margin: "10px",
          borderRadius: "16px",
          boxShadow: "0px 0px 30px 4px rgba(174, 196, 216, 0.25)",
          background: "white",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space=around",
        }}
      >
        <FaHome size={40} style={styles.icon} />
        <p style={{ margin: "5px" }}>{data.address.streetAddress}</p>

        <p style={{ margin: "5px" }}>{data.address.city}</p>
      </div>
    </Link>
  );
}

export default House;

const styles = {
  container: {
    margin: "20px",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    background: "linear-gradient(90deg, rgb(90, 65, 192), rgb(226, 114, 188))",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#4e4e4e",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: "10px",
    color: "black",
  },
  houseContainer: {
    marginTop: "20px",
  },
};
