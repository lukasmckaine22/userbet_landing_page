import React from "react";
import { apple, google } from "../../assets";

const MicroMatchPlayerCard = ({ player }) => {
  return (
    <div
      style={{
        width: 300,
        height: 100,
        backgroundColor: "black",
        border: "solid 2px red",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 10,
        margin: 5,
      }}
    >
      <img
        src={player.image}
        alt={player.name}
        style={{ width: 50, height: 50 }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span style={{ color: "white", fontSize: 24 }}>{player.name}</span>
        <span style={{ color: "grey", fontStyle: "italic", fontSize: 12 }}>
          {player.team} @ {player.opponent}
        </span>
      </div>
      <span style={{ color: "white", fontSize: 24 }}>{player.points}</span>
    </div>
  );
};

export default MicroMatchPlayerCard;
