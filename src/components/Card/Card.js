import React from "react";
import "./Card.scss";

import { ProgressBar } from "react-rainbow-components";
import TeamMembers from "../TeamMembers/TeamMembers";
function Card(props) {
  return (
    <div className=" project-card">
      <div className="card-container">
        <div className="card-activity-title pb-1">{props.projects.name}</div>
        <div className="d-flex justify-content-between">
          {props.projects.person.length > 0 ? (
            <TeamMembers teamPictures={props.projects.person} />
          ) : null}
          <div className="stark-ellipse">
            <div className="stark-label"> {props.projects.nedStark}</div>
          </div>
        </div>
        <p className="card-text">{props.projects.description}</p>
        <hr />
        <div class="d-flex justify-content-between">
          <div className="card-footer-item">
            <div className="card-footer-number">{props.projects.tasks}</div>
            <div className="card-footer-name">Tasks</div>
          </div>
          <div className="card-footer-item">
            <div className="card-footer-number">{props.projects.complete}</div>
            <div className="card-footer-name">Complete</div>
          </div>
          <div className="card-footer-item ">
            <div className="card-footer-number active-item">
              {props.projects.daysLeft}
            </div>
            <div className="card-footer-name active-item">Days left</div>
          </div>
        </div>
        <ProgressBar
          className="card-progress-bar"
          value={(props.projects.tasks * 100) / props.projects.complete}
        />
      </div>
    </div>
  );
}

export default Card;
