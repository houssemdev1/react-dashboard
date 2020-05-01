import React, { useState } from "react";
import "./TeamSlider.scss";
function Team(props) {
  const [team, setTeam] = useState(props.team);
  const [currentTeams] = useState(team);
  const updatePersonsList = () => {
    setTeam(team.slice(4));
    if (team.length < 4) {
      setTeam(currentTeams);
    }
  };

  return (
    <div className="d-flex ">
      <div className="team-column">
        <div className="team-container">
          <div className="row team-container-items">
            {team.map((value, index) =>
              index < 4 ? (
                <div class="col-md-3">
                  <img src={value.picture} alt="" />
                  <div className="team-name pt-2 pr-3"> {value.name} </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>

      <div className="btn-column">
        <button className="btn list-btn" onClick={() => updatePersonsList()}>
          <div className="btn-lable">
            <svg
              width="6"
              height="8"
              viewBox="0 0 6 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99031 4.42263L1.58925 7.82369C1.35417 8.05877 0.974054 8.05877 0.741482 7.82369L0.176305 7.25852C-0.0587684 7.02344 -0.0587684 6.64333 0.176305 6.41075L2.58706 4L0.176305 1.58925C-0.0587687 1.35417 -0.0587687 0.974054 0.176305 0.741482L0.741481 0.176305C0.976555 -0.0587683 1.35667 -0.0587683 1.58925 0.176305L4.99031 3.57737C5.22538 3.80744 5.22538 4.18756 4.99031 4.42263Z"
                fill="#A4A7B5"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
export default Team;
