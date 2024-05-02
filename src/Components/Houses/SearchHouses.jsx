import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function SearchHouses({ setSearchResult }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "400px",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <form
        style={{ display: "flex", alignItems: "center", width: "200px" }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <BsSearch
            style={{ fontSize: "1.2rem", color: "black", paddingLeft: "10px" }}
          />
        </div>
        <input
          onChange={(e) => {
            setSearchResult(e.target.value);
          }}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "none",
            fontSize: "1rem",
            outline: "none",
            boxShadow: "none",
          }}
          type="text"
          placeholder="Search houses..."
        />
      </form>
    </div>
  );
}

export default SearchHouses;
