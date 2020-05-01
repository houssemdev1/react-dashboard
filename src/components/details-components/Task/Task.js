import "./Task.scss";
import React from "react";
const Task = props => {
  const colorArray = {
    design: "red-bord",
    dev: "yellow-bord",
    marketing: "green-bord"
  };
  const { profession } = props;
  return (
    <div className="task-container">
      <div className={"d-flex bord-rad pad " + colorArray[profession]}>
        <div className="my-auto">
          <div className="name">{props.name}</div>
          <div className="since">{props.since}</div>
        </div>
        <div className="ml-auto image">
          <img src={props.image} className="circle-image" />
        </div>
      </div>
    </div>
  );
};
export default Task;
