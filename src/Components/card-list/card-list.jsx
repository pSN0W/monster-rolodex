import React from "react";
import "./card-list.css";
import { Card } from "../cards/card";

export const CardList = (props) => {
  return (
    <div className="cardlist">
      {props.monster.map((monster) => (
        <Card key={monster.id} user = {monster} />
      ))}
    </div>
  );
};
