import React from "react";
import threeDots from "../../../assets/images/three-dots-icon.svg";
import { ButtonMenu, MenuItem } from "react-rainbow-components";
import "./File.scss";
import FileIcon from "../FileIcon/FileIcon";
const File = props => {
  const { type, name, owner, size } = props;
  return (
    <div className="d-flex file">
      <div className="col-6 pr-0">
        <FileIcon type={type} />
        <span className="name-persona-file">{name}</span>
      </div>
      <div className="col-3 pl-0 align-self-center">
        <div className="job-owner-size">{owner}</div>
      </div>
      <div className="col-2 pl-0 align-self-center">
        <div className="job-owner-size">{size}</div>
      </div>
      <div className="col-1 align-self-center">
        <ButtonMenu
          id="button-menu"
          menuAlignment="right"
          menuSize="x-small"
          icon={<img src={threeDots} />}
        >
          <MenuItem label="Download" />
          <MenuItem label="Delete" />
        </ButtonMenu>
      </div>
    </div>
  );
};
export default File;
