import React, { useState, useEffect } from "react";
import EnterReadingModal from "./EnterReadingModal";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiOutlineExclamationCircle } from "react-icons/ai";

function MeterReadingsTable({ type }) {
  const { houseId, streetAddress, city } = useParams();
  const [meterReadings, setMeterReadings] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addMeterReading = () => {
    setIsModalOpen(true);
  };

  let filteredMeterReadings = meterReadings?.data?.filter((entry) => {
    return entry.type === type;
  });

  const id = houseId;

  const fetchMeterReadings = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3600/meterReadings/?id=${id}`
      );

      setMeterReadings(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchMeterReadings(id);
  }, []);

  return (
    <div style={styles.container}>
      {isModalOpen && (
        <EnterReadingModal
          houseId={houseId}
          type={type}
          setIsModalOpen={setIsModalOpen}
          setMeterReadings={setMeterReadings}
        />
      )}
      <h2 style={styles.heading}>
        {" "}
        {type} Meter Readings for {streetAddress}
      </h2>
      <h4>
        {" "}
        house id : {houseId}, city {city}
      </h4>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                backgroundColor: "#f2f2f2",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Reading Value
            </th>
            <th
              style={{
                backgroundColor: "#f2f2f2",
                padding: "10px",
                textAlign: "left",
              }}
            >
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredMeterReadings?.length ? (
            filteredMeterReadings?.map((reading, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "10px" }}>{reading.readingValue}</td>
                <td style={{ padding: "10px" }}>{reading.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "16px",
                    height: "200px",
                    justifyContent: "center",
                  }}
                >
                  <AiOutlineExclamationCircle
                    style={{ marginRight: "5px", fontSize: "24px" }}
                  />
                  <p style={{ margin: "0" }}>No meter readings added</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <button style={styles.addButton} onClick={addMeterReading}>
        Add {type} Meter Reading
      </button>
    </div>
  );
}

export default MeterReadingsTable;

const styles = {
  container: {
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    background: "linear-gradient(90deg, rgb(90, 65, 192), rgb(226, 114, 188))",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "white",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "10px",
    borderRadius: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  addButton: {
    backgroundColor: "rgb(226, 114, 188)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "5px",
    width: "300px",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  modalButtons: {
    marginTop: "20px",
  },
  modalButton: {
    backgroundColor: "#f50057",
    color: "white",
    border: "none",
    borderRadius: "16px",
    padding: "10px 20px",
    margin: "0 5px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  messageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "16px",
    backgroundColor: "#f9f9f9",
  },
  icon: {
    fontSize: "32px",
    marginRight: "10px",
    color: "#f50057",
  },
  message: {
    fontSize: "18px",
    color: "#4e4e4e",
  },
};
