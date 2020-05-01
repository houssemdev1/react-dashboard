import React, { useState } from "react";
import { ActivityTimeline, TimelineMarker } from "react-rainbow-components";
import "./Development.scss";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import Carousel from "../Carousel/Carousel";
import Notifications from "../../notifications/Notifications";
import TeamSlider from "../../TeamSlider/TeamSlider";
const Development = () => {
  const [versions, setVersions] = useState([
    "Version 1.0",
    "Version 1.1",
    "Version 2"
  ]);
  const [selectedVersion, setSelectedVersion] = useState(versions[0]);
  const [versionContent, setVersionContent] = useState({
    "Version 1.0": {
      details:
        " version 1.0 Lorem ipsum dolor sit amet, consecetuer lmpp adipiscing elit, sed diam nonu.",
      link: "www.version1-0.com",
      changelog: [
        {
          state: "active",
          date: "30/09/2019",
          descriptions: [
            "Added dashboard new project button",
            "Added dashboard new project button",
            "Added dashboard new project button"
          ]
        },
        {
          state: "desactive",
          date: "22/09/2019",
          descriptions: [
            "Added dashboard new list",
            "Added dashboard new list",
            "Added dashboard new list"
          ]
        },
        {
          state: "desactive",
          date: "15/09/2019",
          descriptions: [
            "Added dashboard inputs",
            "Added dashboard inputs",
            "Added dashboard inputs"
          ]
        }
      ],
      screenshots: [
        "https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg",
        "https://mdbootstrap.com/img/Photos/Slides/img%20(115).jpg",
        "https://mdbootstrap.com/img/Photos/Slides/img%20(108).jpg"
      ],
      video: require("../../../assets/video/testVideo.mp4"),
      calendarEvents: [
        {
          className: "calendarEvent",
          title: "Development",
          image1url:
            "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png",
          image3url:
            "https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png",
          description: "Smala project / v 0.3",
          start: "2019-10-23T08:00:00",
          end: "2019-10-23T12:00:00"
        },
        {
          className: "calendarEvent",
          title: "Development",
          image1url:
            "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png",
          image3url:
            "https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png",

          description: "Smala project / v 0.3",
          start: "2019-10-25T08:00:00",
          end: "2019-10-25T12:00:00"
        },
        {
          className: "calendarEvent",
          title: "Development",
          image1url:
            "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png",
          image3url:
            "https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png",

          description: "Smala project / v 0.3",
          start: "2019-10-23T14:02:00",
          end: "2019-10-23T18:00:00"
        },
        {
          className: "calendarEvent",
          title: "Development",
          description: "Smala project / v 0.3",
          image1url:
            "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png",
          image3url:
            "https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png",

          start: "2019-10-21T08:00:00",
          end: "2019-10-21T12:00:00"
        }
      ]
    },
    "Version 1.1": {
      details:
        " version 1.1 Lorem ipsum dolor sit amet, consecetuer lmpp adipiscing elit, sed diam nonu.",
      link: "www.version1-1.com",
      changelog: [
        {
          state: "active",
          date: "30/09/2019",
          descriptions: [
            "Added dashboard new project button",
            "Added dashboard new project button",
            "Added dashboard new project button"
          ]
        },
        {
          state: "desactive",
          date: "22/09/2019",
          descriptions: [
            "Added dashboard new list",
            "Added dashboard new list",
            "Added dashboard new list"
          ]
        },
        {
          state: "desactive",
          date: "15/09/2019",
          descriptions: [
            "Added dashboard inputs",
            "Added dashboard inputs",
            "Added dashboard inputs"
          ]
        }
      ],
      screenshots: [
        "https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg",
        "https://mdbootstrap.com/img/Photos/Slides/img%20(115).jpg",
        "https://mdbootstrap.com/img/Photos/Slides/img%20(108).jpg"
      ],
      video: require("../../../assets/video/testVideo.mp4"),
      calendarEvents: [
        {
          className: "calendarEvent",
          title: "Development",
          image1url:
            "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png",
          image3url:
            "https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png",
          description: "Smala project / v 0.3",
          start: "2019-10-23T08:00:00",
          end: "2019-10-23T12:00:00"
        },
        {
          className: "calendarEvent",
          title: "Development",
          image1url:
            "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png",
          image3url:
            "https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png",

          description: "Smala project / v 0.3",
          start: "2019-10-25T08:00:00",
          end: "2019-10-25T12:00:00"
        },
        {
          className: "calendarEvent",
          title: "Development",
          image1url:
            "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png",
          image3url:
            "https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png",

          description: "Smala project / v 0.3",
          start: "2019-10-23T14:02:00",
          end: "2019-10-23T18:00:00"
        },
        {
          className: "calendarEvent",
          title: "Development",
          description: "Smala project / v 0.3",
          image1url:
            "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png",
          image3url:
            "https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png",

          start: "2019-10-21T08:00:00",
          end: "2019-10-21T12:00:00"
        }
      ]
    },
    "Version 2": {
      details:
        " version 2 Lorem ipsum dolor sit amet, consecetuer lmpp adipiscing elit, sed diam nonu.",
      link: "www.version2.com",
      changelog: [
        {
          state: "active",
          date: "30/09/2019",
          descriptions: [
            "Added dashboard new project button",
            "Added dashboard new project button",
            "Added dashboard new project button"
          ]
        },
        {
          state: "desactive",
          date: "22/09/2019",
          descriptions: [
            "Added dashboard new list",
            "Added dashboard new list",
            "Added dashboard new list"
          ]
        },
        {
          state: "desactive",
          date: "15/09/2019",
          descriptions: [
            "Added dashboard inputs",
            "Added dashboard inputs",
            "Added dashboard inputs"
          ]
        }
      ],
      screenshots: [
        "https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg",
        "https://mdbootstrap.com/img/Photos/Slides/img%20(115).jpg",
        "https://mdbootstrap.com/img/Photos/Slides/img%20(108).jpg"
      ],
      video: require("../../../assets/video/testVideo.mp4"),
      calendarEvents: [
        {
          className: "calendarEvent",
          title: "Development",
          image1url:
            "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png",
          image3url:
            "https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png",
          description: "Smala project / v 0.3",
          start: "2019-10-23T08:00:00",
          end: "2019-10-23T12:00:00"
        },
        {
          className: "calendarEvent",
          title: "Development",
          image1url:
            "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png",
          image3url:
            "https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png",

          description: "Smala project / v 0.3",
          start: "2019-10-25T08:00:00",
          end: "2019-10-25T12:00:00"
        },
        {
          className: "calendarEvent",
          title: "Development",
          image1url:
            "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png",
          image3url:
            "https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png",

          description: "Smala project / v 0.3",
          start: "2019-10-23T14:02:00",
          end: "2019-10-23T18:00:00"
        },
        {
          className: "calendarEvent",
          title: "Development",
          description: "Smala project / v 0.3",
          image1url:
            "https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png",
          image3url:
            "https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png",

          start: "2019-10-21T08:00:00",
          end: "2019-10-21T12:00:00"
        }
      ]
    }
  });
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
  const team = [
    {
      picture: require("../../../assets/images/yellow-oval.svg"),
      name: "Ned"
    },
    {
      picture: require("../../../assets/images/person-picture.svg"),
      name: "Tyrion"
    },
    {
      picture: require("../../../assets/images/yellow-oval.svg"),
      name: "Cersi"
    },
    {
      picture: require("../../../assets/images/person-picture.svg"),
      name: "Jaime"
    },
    {
      picture: require("../../../assets/images/person-picture.svg"),
      name: "Jaime"
    },
    {
      picture: require("../../../assets/images/yellow-oval.svg"),
      name: "Ned"
    },
    {
      picture: require("../../../assets/images/person-picture.svg"),
      name: "Tyrion"
    },
    {
      picture: require("../../../assets/images/person-picture.svg"),
      name: "Tyrion"
    },
    {
      picture: require("../../../assets/images/yellow-oval.svg"),
      name: "Ned"
    },
    {
      picture: require("../../../assets/images/person-picture.svg"),
      name: "Tyrion"
    }
  ];

  return (
    <div className="development">
      <div className="row">
        <div className="col-lg-9 details-page-column-padding">
          <div className="title">Projets Title</div>

          <select
            className="pl-3 select"
            name="version"
            id="version"
            onChange={event => {
              setSelectedVersion(event.target.value);
            }}
          >
            {versions.map(version => (
              <option key={version} value={version}>
                {version}
              </option>
            ))}
          </select>
          <div className="row">
            <div className="col-lg-4">
              <div className="subtitle pad-t-32 pad-b-20">Details</div>
              <div className="white-backgr">
                <p className="details-txt">
                  {versionContent[selectedVersion].details} <br />
                  Link:
                  <a className="pad-l-13 link">
                    {versionContent[selectedVersion].link}
                  </a>
                </p>
              </div>
              <div className="subtitle pad-t-22 pad-b-20">Changelog</div>

              <div className="rainbow-m-around_xx-large white-backgr">
                <ActivityTimeline>
                  {versionContent[selectedVersion].changelog.map(item => (
                    <div className={item.state + "-timeline"}>
                      <TimelineMarker
                        datetime={item.date}
                        icon={
                          <div
                            className={
                              "rainbow-timeline-marker_dot " + item.state
                            }
                          ></div>
                        }
                        description={
                          <ul>
                            {item.descriptions.map(description => (
                              <li className="development-li">{description}</li>
                            ))}
                          </ul>
                        }
                      />
                    </div>
                  ))}
                </ActivityTimeline>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="subtitle pad-t-32 pad-b-18">Screenshots</div>
              <Carousel
                screenshots={versionContent[selectedVersion].screenshots}
              />
              <div className="subtitle pad-t-42 pad-b-15">Video</div>
              <video
                className="development-video w-100"
                controls
                preload="metadata"
              >
                <source
                  src={versionContent[selectedVersion].video}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="subtitle pad-t-41 pad-b-30">Planning</div>
          <FullCalendar
            defaultView="timeGridWeek"
            allDaySlot={false}
            minTime="08:00:00"
            maxTime="19:00:00"
            plugins={[timeGridPlugin]}
            hiddenDays={[0]}
            displayEventTime={false}
            events={versionContent[selectedVersion].calendarEvents}
            eventRender={info => {
              const description = document.createElement("div");
              description.className = "descriptionEvent";
              const node = document.createTextNode(
                info.event.extendedProps.description
              );
              description.appendChild(node);
              info.el.appendChild(description);
              const images = document.createElement("d-flex");
              images.className = "images";
              if (info.event.extendedProps.image1url) {
                const oImg = document.createElement("img");
                oImg.setAttribute("src", info.event.extendedProps.image1url);
                oImg.className = "event-image";
                const imagecol = document.createElement("col-4");
                imagecol.appendChild(oImg);
                images.appendChild(imagecol);
              }

              if (info.event.extendedProps.image3url) {
                const oImg = document.createElement("img");
                oImg.setAttribute("src", info.event.extendedProps.image3url);
                oImg.className = "event-image";
                const imagecol = document.createElement("col-4");
                imagecol.appendChild(oImg);
                images.appendChild(imagecol);
              }

              info.el.appendChild(images);
            }}
            columnHeaderHtml={date => {
              switch (date.getUTCDay()) {
                case 0:
                  return "MON <br />" + date.getDate();
                case 1:
                  return "TUE <br />" + date.getDate();
                case 2:
                  return "WED <br />" + date.getDate();
                case 3:
                  return "THU <br />" + date.getDate();
                case 4:
                  return "FRI <br />" + date.getDate();
                case 5:
                  return "SAT <br />" + date.getDate();
              }
            }}
          />
        </div>
        <div className="col-lg-3 notification-column details-page-notifications">
          <div className="container">
            <Notifications notifications={notifications} />
          </div>
          <hr />
          <div className="container">
            <div className="dev-team">Development team</div>
            <TeamSlider team={team} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Development;
