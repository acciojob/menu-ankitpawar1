import React from "react";

const Cards = ({ title, price, desc, category, img }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "500px",
        display: "flex",
        padding: "10px",
        marginTop: "30px",
      }}
      data-test-id={`menu-item-${category}`}
    >
      <div style={{ border: "1px solid black" }}>
        <img
          src={img}
          alt={title}
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <span>{title}</span>
        <span style={{ marginLeft: "10px" }}>${price}</span>
      </div>
      <div style={{ marginLeft: "10px" }}>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Cards;
