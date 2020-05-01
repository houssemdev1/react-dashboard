import "./Bug.scss";
import React from "react";
const Bug = props => {
  const colorArray = {
    list: "blue-bord",
    inProgress: "red-bord",
    fixed: "yellow-bord",
    toBeTested: "green-bord"
  };
  const { state } = props;
  return (
    <div className="bug">
      <div className={"d-flex bord-rad pad " + colorArray[state]}>
        <div className="my-auto">
          <div className="bug-description">{props.description}</div>
          <div className="bug-date">{props.date}</div>
        </div>
        <div className="ml-auto image">
          <img src={props.image} className="bug-image" />
        </div>
      </div>
    </div>
  );
};
export default Bug;
