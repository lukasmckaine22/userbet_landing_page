import React from "react";
import Player from "../../models/player";
import MicroMatchPlayerCard from "./micro_match_player_card";
import { apple, google } from "../../assets";
import SquareRow from "./position_filter";
import Pill from "../Pill";

const RedRectangle = () => {
  const player1 = new Player("Patrick Mahomes", "QB", 27, apple, "KC", "PHI");

  const styles = {
    container: {
      width: "350px",
      height: "612px",
      backgroundColor: "#000000",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      borderRadius: "30px",
      border: "solid 2px grey",
      boxShadow: "0px 2px 20px rgba(255, 255, 255, 0.25)",
    },
    dot: {
      width: "10px",
      height: "10px",
      backgroundColor: "#FFFFFF",
      borderRadius: "50%",
      position: "absolute",
      top: "30px",
      right: "calc(50% - 25px)",
    },
    bar: {
      width: "50px",
      height: "5px",
      backgroundColor: "#FFFFFF",
      position: "absolute",
      top: "40px",
      left: "50%",
      transform: "translateX(-25%)",
      borderRadius: "20px",
    },
    row: {
      display: "flex", // Add this line to create a flex row
      alignItems: "center",
    },
    column: {
      display: "flex", // Add this line to create a flex column
      flexDirection: "column",
      alignItems: "center",
      marginTop: "20px", // Add this line to position the text below the dot and bar
    },
    text: {
      fontSize: "12px",
      color: "white",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <div style={styles.dot}></div>
        <div style={styles.bar}></div>
      </div>
      <SquareRow style={{ alignSelf: "flex-start" }} />
      <MicroMatchPlayerCard player={player1} />
      <MicroMatchPlayerCard player={player1} />
      <MicroMatchPlayerCard player={player1} />
      <MicroMatchPlayerCard player={player1} />

      <Pill label="New Draft Board" color="blue" />
    </div>
  );
};

export default RedRectangle;
