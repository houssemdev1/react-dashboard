import React from "react";
import "../TeamMembers/teamMembers.scss";
function TeamMembers(props) {
  return (
    <div className="stark-picture">
      {props.teamPictures.map((value, index) => {
        return <img src={value} key={index} className="person-picture" />;
      })}
    </div>
  );
}

export default TeamMembers;
