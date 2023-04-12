import React, { useState } from "react";

const SquareRow = () => {
  const [selected, setSelected] = useState([true, false, false, false]);

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "50%",
      margin: "0 auto",
    },
    square: {
      width: "30px",
      height: "30px",
      backgroundColor:
        selected === null ? "#000000" : selected ? "blue" : "grey",
      border: "solid 2px blue",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: selected === null ? "blue" : "white",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      transform: selected === null || selected ? "scale(1)" : "scale(0.8)",
    },
  };

  const handleSquareClick = (index) => {
    if (index === selected) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.square} onClick={() => handleSquareClick(0)}>
        QB
      </div>
      <div style={styles.square} onClick={() => handleSquareClick(1)}>
        RB
      </div>
      <div style={styles.square} onClick={() => handleSquareClick(2)}>
        WR
      </div>
      <div style={styles.square} onClick={() => handleSquareClick(3)}>
        TE
      </div>
    </div>
  );
};

export default SquareRow;
