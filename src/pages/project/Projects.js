import React, { useState } from "react";
import "../project/Projects.scss";
import Card from "../../components/Card/Card";
import Notifications from "../../components/notifications/Notifications";
import { Link } from "react-router-dom";
function Projects(props) {
  props.path("projects");

  console.log("=>", props);
  const [currentProjects, setcurrentProjects] = useState([
    {
      id: 41,
      name: "Project name",
      nedStark: "Ned Stark",
      person: [],
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore...",
      tasks: 7,
      complete: 20,
      daysLeft: 30
    },
    {
      id: 42,
      name: "Project name",
      nedStark: "Ned Stark",
      person: [
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/person-picture.svg")
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore...",
      tasks: 2,
      complete: 20,
      daysLeft: 35
    },
    {
      id: 43,
      name: "Project name",
      nedStark: "Ned Stark",
      person: [
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/person-picture.svg")
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore...",
      tasks: 10,
      complete: 10,
      daysLeft: 35
    }
  ]);
  const [delivredProjects, setDelivredProjects] = useState([
    {
      id: 1,
      name: "Project name",
      nedStark: "Ned Stark",
      person: [
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/person-picture.svg")
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore...",
      tasks: 15,
      complete: 30,
      daysLeft: 35
    },
    {
      id: 2,
      name: "Project name",
      nedStark: "Ned Stark",
      person: [
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/person-picture.svg")
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore...",
      tasks: 10,
      complete: 30,
      daysLeft: 35
    }
  ]);

  const notifications = [
    {
      title: "New tasks added",
      subtitle: "LBS project / Version 0.3",
      date: "15 min ago",
      state: "new"
    },
    {
      title: "Sound issue fixed",
      subtitle: "Smala project / Version 0.2",
      date: "1 h ago",
      state: "new"
    },
    {
      title: "Added navigation bar",
      subtitle: "LBS project / Version 0.3",
      date: "1 h ago",
      state: "new"
    },
    {
      title: "Lorem ipsum dolor sit amet,",
      subtitle: "Lorem ipsum dolor sit amet,",
      date: "1 h ago",
      state: "new"
    },
    {
      title: "Lorem ipsum dolor sit amet,",
      subtitle: "Lorem ipsum dolor sit amet,",
      date: "1 h ago",
      state: "new"
    },
    {
      title: "Lorem ipsum dolor sit amet,",
      subtitle: "Lorem ipsum dolor sit amet,",
      date: "1 h ago",
      state: "new"
    },
    {
      title: "Lorem ipsum dolor sit amet,",
      subtitle: "Lorem ipsum dolor sit amet,",
      date: "1 h ago",
      state: "old"
    },
    {
      title: "Lorem ipsum dolor sit amet,",
      subtitle: "Lorem ipsum dolor sit amet,",
      date: "1 h ago",
      state: "old"
    },
    {
      title: "Lorem ipsum dolor sit amet,",
      subtitle: "Lorem ipsum dolor sit amet,",
      date: "1 h ago",
      state: "old"
    }
  ];

  return (
    <div className="row global-row">
      <div className="col-md-9 projects-container">
        <div className="projects-current-title primary-title">
          Projets en cours
        </div>
        <div className="row global-row">
          {currentProjects.map((value, index) => {
            return (
              <div className="col-md-4 " key={index}>
                <Link to={{ pathname: "/projects/" + value.id + "/details" }}>
                  <Card projects={value} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="projects-delivred-title primary-title">
          Projets livré
        </div>

        <div className=" d-flex">
          {delivredProjects.map((value, index) => {
            return (
              <div className="col-md-4" key={index}>
                <Link to={{ pathname: "/projects/" + value.id + "/details" }}>
                  <Card projects={value} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-md-3 notification-column">
        <Notifications notifications={notifications} />
      </div>
    </div>
  );
}

export default Projects;
