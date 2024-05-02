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
      <div style={styles.container}>
        <FaHome size={40} style={styles.icon} />
        <p style={{ margin: "5px" }}>{data.address.streetAddress}</p>
        <p style={{ margin: "5px" }}> {data.address.city}</p>
        <p style={{ margin: "5px" }}> Tenants: {data.numberOfTenants}</p>
        <p style={{ margin: "5px" }}> Type: {data.houseType}</p>
        <p style={{ margin: "5px" }}> Beds: {data.bedroomNumber}</p>
      </div>
    </Link>
  );
}

export default House;

const styles = {
  container: {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px",
    borderRadius: "16px",
    boxShadow: "0px 0px 30px 4px rgba(174, 196, 216, 0.25)",
    background: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space=around",
  },
};
