import React, { useState } from "react";
import axios from "axios";

function AddMeterReadingModal({
  setMeterReadings,
  setIsModalOpen,
  type,
  houseId,
}) {
  const [readingValue, setReadingValue] = useState();
  const [date, setDate] = useState("");

  console.log("readingValue", readingValue, "date", date);

  const handleReadingValueChange = (e) => {
    e.preventDefault();
    setReadingValue(e.target.value);
  };

  const handleDateChange = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  const addMeterReading = async () => {
    const data = {
      type: type,
      readingValue: readingValue,
      date: date,
      id: houseId,
    };

    axios
      .post("http://localhost:3600/meterReadings", data)
      .then((response) => {
        console.log(response.data);
        setMeterReadings(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsModalOpen((prev) => !prev);
    const result = await addMeterReading();
    setMeterReadings((prev) => result);
  };

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <h3>Add New {type} Meter Reading</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Reading Value:</label>
            <input
              type="number"
              value={readingValue}
              onChange={handleReadingValueChange}
            />
          </div>
          <div>
            <label>Date:</label>
            <input type="date" value={date} onChange={handleDateChange} />
          </div>
          <div style={styles.modalButtons}>
            <button style={styles.modalButton} type="submit">
              Add
            </button>
            <button style={styles.modalButton}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMeterReadingModal;

const styles = {
  container: {
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  heading: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "10px",
  },
  addButton: {
    backgroundColor: "rgb(113,64,196)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    cursor: "pointer",
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
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "4px",
    textAlign: "center",
  },
  modalButtons: {
    marginTop: "20px",
    borderRadius: "10px",
  },
  modalButton: {
    backgroundColor: "rgb(113,64,196)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    margin: "0 5px",
    cursor: "pointer",
    width: "100px",
  },
};
