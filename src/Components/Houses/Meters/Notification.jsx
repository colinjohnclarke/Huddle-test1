import React from "react";

const Notification = ({ message, setShowNotification }) => {
  const handleClick = () => {
    setShowNotification(false);
  };
  return (
    <div style={notificationStyles}>
      {message}
      <button style={modalButtonStyles} onClick={handleClick}>
        hide
      </button>
    </div>
  );
};

export default Notification;

const notificationStyles = {
  backgroundColor: "white",
  color: "#333",
  padding: "30px",
  borderRadius: "10px",
  marginBottom: "10px",
  textAlign: "center",
  position: "absolute",
  boxShadow: "0px 0px 30px 4px rgba(174, 196, 216, 0.25)",
  top: "50%;",
  right: "20px",
};

const modalButtonStyles = {
  backgroundColor: "#f50057",
  color: "white",
  border: "none",
  borderRadius: "16px",
  padding: "10px 20px",
  margin: "0 5px",
  cursor: "pointer",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};
