import React, { useState } from "react";
import { ProgressBar, Card } from "react-rainbow-components";
import "./../dashboard/Dashboard.scss";
import TeamMembers from "../../components/TeamMembers/TeamMembers";
import moment from "moment";
import Calendar from "react-calendar";
import TeamSlider from "../../components/TeamSlider/TeamSlider";
import prevIcon from "../../assets/images/prev-icon.svg";
import nextIcon from "../../assets/images/next-icon.svg";
function Dashboard(props) {
  props.path("dashboard");

  const [devActivitys, setdevActivitys] = useState([
    {
      name: "Lorem ipsum dolor sit...",
      admin: "Ned Stark",
      persons: [
        require("../../assets/images/yellow-oval.svg"),
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg")
      ],
      description: "Lorem ipsum dolor sit amet, consectetuer",
      progression: 25
    },
    {
      name: "Lorem ipsum dolor sit...",
      admin: "Ned Stark",
      persons: [
        require("../../assets/images/yellow-oval.svg"),
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg")
      ],
      description: "Lorem ipsum dolor sit amet, consectetuer",
      progression: 25
    },
    {
      name: "Lorem ipsum dolor sit...",
      admin: "Ned Stark",
      persons: [
        require("../../assets/images/yellow-oval.svg"),
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg")
      ],
      description: "Lorem ipsum dolor sit amet, consectetuer",
      progression: 25
    },
    {
      name: "Lorem ipsum dolor sit...",
      admin: "Ned Stark",
      persons: [
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg"),
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg")
      ],
      description: "Lorem ipsum dolor sit amet, consectetuer",
      progression: 25
    },
    {
      name: "Lorem ipsum dolor sit...",
      admin: "Ned Stark",
      persons: [
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg"),
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg")
      ],
      description: "Lorem ipsum dolor sit amet, consectetuer",
      progression: 25
    }
  ]);
  const [desActivitys, setdesActivitys] = useState([
    {
      name: "Lorem ipsum dolor sit...",
      admin: "Ned Stark",
      persons: [
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg"),
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg")
      ],
      description: "Lorem ipsum dolor sit amet, consectetuer",
      progression: 25
    },
    {
      name: "Lorem ipsum dolor sit...",
      admin: "Ned Stark",
      persons: [
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg"),
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg")
      ],
      description: "Lorem ipsum dolor sit amet, consectetuer",
      progression: 25
    },
    {
      name: "Lorem ipsum dolor sit...",
      admin: "Ned Stark",
      persons: [
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg"),
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg")
      ],
      description: "Lorem ipsum dolor sit amet, consectetuer",
      progression: 25
    },
    {
      name: "Lorem ipsum dolor sit...",
      admin: "Ned Stark",
      persons: [
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg"),
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg"),
        require("../../assets/images/person-picture.svg")
      ],
      description: "Lorem ipsum dolor sit amet, consectetuer",
      progression: 25
    },
    {
      name: "Lorem ipsum dolor sit...",
      admin: "Ned Stark",
      persons: [
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg"),
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg"),
        require("../../assets/images/person-picture.svg")
      ],
      description: "Lorem ipsum dolor sit amet, consectetuer",
      progression: 25
    },
    {
      name: "Lorem ipsum dolor sit...",
      admin: "Ned Stark",
      persons: [
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg"),
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg")
      ],
      description: "Lorem ipsum dolor sit amet, consectetuer",
      progression: 25
    },
    {
      name: "Lorem ipsum dolor sit...",
      admin: "Ned Stark",
      persons: [
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg"),
        require("../../assets/images/person-picture.svg"),
        require("../../assets/images/yellow-oval.svg")
      ],
      description: "Lorem ipsum dolor sit amet, consectetuer",
      progression: 25
    }
  ]);
  const weather = {
    icon: require("../../assets/images/weather-picture.svg"),
    day: "Monday ",
    time: "11:25 AM",
    degres: 25,
    weather_info: "cloudy"
  };
  const team = [
    {
      picture: require("../../assets/images/yellow-oval.svg"),
      name: "Ned"
    },
    {
      picture: require("../../assets/images/person-picture.svg"),
      name: "Tyrion"
    },
    {
      picture: require("../../assets/images/yellow-oval.svg"),
      name: "Cersi"
    },
    {
      picture: require("../../assets/images/person-picture.svg"),
      name: "Jaime"
    },
    {
      picture: require("../../assets/images/person-picture.svg"),
      name: "Jaime"
    },
    {
      picture: require("../../assets/images/yellow-oval.svg"),
      name: "Ned"
    },
    {
      picture: require("../../assets/images/person-picture.svg"),
      name: "Tyrion"
    },
    {
      picture: require("../../assets/images/person-picture.svg"),
      name: "Tyrion"
    },
    {
      picture: require("../../assets/images/yellow-oval.svg"),
      name: "Ned"
    },
    {
      picture: require("../../assets/images/person-picture.svg"),
      name: "Tyrion"
    }
  ];

  const [completedevList, setCompletedevList] = useState(false);
  const [completedesList, setCompletedesList] = useState(false);
  const [currentdevActivitys, setCurrentdevActivitys] = useState(
    devActivitys.filter((activitys, index) => index < 4)
  );
  const [currentdesActivitys, setCurrentdesActivitys] = useState(
    desActivitys.filter((activitys, index) => index < 4)
  );

  const updateDevActivitysList = () => {
    setCompletedevList(!completedevList);
    if (completedevList) {
      setCurrentdevActivitys(
        devActivitys.filter((activitys, index) => index < 4)
      );
    } else {
      setCurrentdevActivitys(devActivitys);
    }
  };
  const updateDesActivitysList = () => {
    setCompletedesList(!completedesList);
    if (completedesList) {
      setCurrentdesActivitys(
        desActivitys.filter((activitys, index) => index < 4)
      );
    } else {
      setCurrentdesActivitys(desActivitys);
    }
  };

  const calendarContainerStyles = {
    width: "100%",
    height: "212px"
  };
  const [state, setState] = useState({
    date: new Date()
  });
  const dates = ["2019-10-21", "2019-10-23", "2019-10-25"];

  const selctedDates = ({ date, view }) => {
    let getDate = moment(date).format("YYYY-MM-DD");
    console.log(getDate);
    if (dates.includes(getDate)) {
      console.log("nice");
      return "border-calendar";
    } else {
      return false;
    }
  };
  //const onChange = date => setState({ date });
  return (
    <div className="row global-row">
      <div className="col-md-9 pt-4 projects-container">
        <div className="row dashboard-welcome-row">
          <div className="col-md-9 pl-0 ">
            <div className="dashboard-welcome-container">
              <div className="row">
                <div className="col-md-8">
                  <div className="normal-title">
                    Welcome to Smala client portal !
                  </div>
                  <div className="welcome-container-text">
                    Lorem ipsum dolor sit amet, consectetuer <br />
                    adipiscing elit, sed diam nonummy nibh euismod tincidunt.
                  </div>
                </div>
                <div className="col-md-4 ">
                  <img
                    src={require("../../assets/images/welcome-picture.svg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 pr-0">
            <div className="dashboard-sunglow-ellipse">
              <div className="dashboard-ellipse-container">
                <span className="dashboard-ellipse-info-number">183</span>
                <span className="dashboard-ellipse-info">
                  Total hours worked
                </span>
              </div>
            </div>
            <div className="dashboard-blue-ellipse">
              <div className="dashboard-ellipse-container">
                <span className="dashboard-ellipse-info-number">95</span>
                <span className="dashboard-ellipse-info">
                  Documents uploaded
                </span>
              </div>
            </div>
            <div className="dashboard-torea-ellipse">
              <div className="dashboard-ellipse-container">
                <span className="dashboard-ellipse-info-number">00.000 €</span>
                <span className="dashboard-ellipse-info">Invoices</span>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-activitys-container dashboard-welcome-row">
          <div className="dashboard-activity-card">
            <div className="row">
              <div className="col-md-4">
                <div className="dashboard-activitys-title">Activity</div>
              </div>
              <div className="col-md-2">
                <div className="dashboard-activitys-title"> Admin</div>
              </div>
              <div className="col-md-2">
                <div className="dashboard-activitys-title">Team</div>
              </div>
              <div className="col-md-4">
                <div className="dashboard-activitys-title">Progress</div>
              </div>
            </div>
            {currentdevActivitys.map((value, index) => (
              <div className="row pt-3 " key={index}>
                <div className="col-md-4">
                  <div className="dashboard-activity-card-title ">
                    {value.name}
                  </div>
                  <div className="normal-text">{value.description}</div>
                </div>
                <div className="col-md-2 pt-1 ">
                  <div className="stark-ellipse">
                    <div className="stark-label">NedStack</div>
                  </div>
                </div>
                <div className="col-md-2 pt-1">
                  <TeamMembers teamPictures={value.persons} />
                </div>
                <div className="col-md-4 pt-1">
                  <ProgressBar
                    className="dashboard-progress-bar progress-bar"
                    value={25}
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            className="dashboard-directionDown-btn"
            onClick={() => updateDevActivitysList()}
          >
            <div className="dashboard-directionDown-label">
              Development activity{" "}
            </div>

            <img
              className={
                completedevList
                  ? "dashboard-directionUp-icon"
                  : "directionDown-icon"
              }
              src={require("../../assets/images/Shape.png")}
              alt=""
            />
          </button>

          <div className="dashboard-activity-card">
            <div className="row">
              <div className="col-md-4">
                <div className="dashboard-activitys-title">Activity</div>
              </div>
              <div className="col-md-2">
                <div className="dashboard-activitys-title"> Admin</div>
              </div>
              <div className="col-md-2">
                <div className="dashboard-activitys-title">Team</div>
              </div>
              <div className="col-md-4">
                <div className="dashboard-activitys-title">Progress</div>
              </div>
            </div>
            {currentdesActivitys.map((value, index) => (
              <div className="row pt-3 ">
                <div className="col-md-4">
                  <div className="dashboard-activity-card-title ">
                    {value.name}
                  </div>
                  <div className="normal-text">{value.description}</div>
                </div>
                <div className="col-md-2 pt-1 ">
                  <div className="stark-ellipse">
                    <div className="stark-label">NedStack</div>
                  </div>
                </div>
                <div className="col-md-2 pt-1">
                  <TeamMembers teamPictures={value.persons} />
                </div>
                <div className="col-md-4 pt-1">
                  <ProgressBar
                    className="dashboard-progress-bar progress-bar"
                    value={25}
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            className="dashboard-directionDown-btn"
            onClick={() => updateDesActivitysList()}
          >
            <div className="dashboard-directionDown-label">
              Design activity{" "}
            </div>

            <img
              className={
                completedesList
                  ? "dashboard-directionUp-icon"
                  : "directionDown-icon"
              }
              src={require("../../assets/images/Shape.png")}
              alt=""
            />
          </button>
        </div>
      </div>
      {/**********************************notification column ***************************/}
      <div className="col-md-3 notification-column">
        <div className="notification-container">
          <div class="d-flex flex-column notification-container pt-4">
            {/**********************************weather container ***************************/}
            <div className="dashboard-weather-container">
              <div className="row pl-3 pr-3 pt-2">
                <div className="col-lg-4">
                  <div className="weather-icon pl-3 pt-1">
                    <img src={weather.icon} alt="" />
                  </div>
                </div>
                <div className="col-lg-8 pl-0 pr-0">
                  <div className="row">
                    <div className="dashboard-secondary-title">
                      {weather.day}
                    </div>
                    <div className="dashboard-weather-time pl-3">
                      {weather.time}
                    </div>
                  </div>
                  <div className="row">
                    <div className="dashboard-weather-degree">
                      {weather.degres}°C,
                      <div className="dashboard-weather-info pl-2">
                        {weather.weather_info}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/**********************************dashboard-dashboard-team-container-container container ***************************/}
            <div className="row">
              <div className="dashboard-notification-title pt-5 pb-3 pl-4">
                Team
              </div>
            </div>
            <TeamSlider team={team} />
            <div className="row">
              <div className="calendar-container">
                <div className="rainbow-align-content_center rainbow-p-vertical_xx-large rainbow-p-horizontal_medium">
                  <Card
                    style={calendarContainerStyles}
                    className="rainbow-p-around_large calendar-container"
                  >
                    <Calendar
                      className="calendar-card"
                      prevLabel={<img src={prevIcon} alt="" />}
                      locale="french"
                      prev2Label=""
                      next2Label=""
                      tileClassName={selctedDates}
                      nextLabel={<img src={nextIcon} alt="" />}
                      value={state.date}
                    />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
