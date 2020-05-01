import React, { useState } from "react";
import downArrow from "../../../assets/images/down-arrow-icon.svg";
import upArrow from "../../../assets/images/up-arrow-icon.svg";
import "./ArrowVertical.scss";
const ArrowVertical = props => {
  if (props.tasksLength > props.minNbrToShow) {
    return (
      <div className="d-flex justify-content-center details-white-backgr pad-arrow">
        {props.arrowDirectionDown ? (
          <img src={downArrow} />
        ) : (
          <img src={upArrow} />
        )}
      </div>
    );
  }
  return null;
};
export default ArrowVertical;
