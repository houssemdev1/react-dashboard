import React from "react";
import { ButtonMenu, MenuItem } from "react-rainbow-components";
import threeDots from "../../../assets/images/three-dots-icon.svg";
import "./Persona.scss";
const Persona = props => {
  return (
    <div className="d-flex persona pb-2">
      <div className="col-6">
        <img src={props.image} className="persona-image" />
        <span className="name-persona-file">{props.name}</span>
      </div>
      <div className="col-5 pl-0 align-self-center">
        <div className="job-owner-size">{props.job}</div>
      </div>
      <div className="col-1 align-self-center">
        <ButtonMenu
          id="button-menu"
          menuAlignment="right"
          menuSize="x-small"
          icon={<img src={threeDots} />}
        >
          <MenuItem label="Download as PDF" />
          <MenuItem label="Edit" />
          <MenuItem label="Delete" />
        </ButtonMenu>
      </div>
    </div>
  );
};
export default Persona;
