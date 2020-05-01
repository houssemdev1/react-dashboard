import React, { useState } from "react";
import "../notifications/notifications.scss";
function Notifications(props) {
  const [notifications, setNotifications] = useState(props.notifications);
  const newNotifications = notifications.filter(item => {
    return item.state === "new";
  });
  return (
    <div className="projects-notification-container">
      <div className="d-flex justify-content-between">
        <div class="d-flex flex-column notification-container">
          <div class="p-2 ">
            <div className="d-flex justify-content-between">
              <div className="notification-activity-title notification-title">
                Recent Activity
              </div>

              <div>
                <div className="d-flex justify-content-end">
                  <div className="notification-icon">
                    <img
                      src={require("../../assets/images/notification-icon.svg")}
                      alt=""
                    />

                    {newNotifications.length > 0 ? (
                      <div className="notification-cercle">
                        <div className="notification-cercle-label">
                          {newNotifications.length}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {notifications.map((value, index) => {
            return (
              <div class="p-2" key={index}>
                <div className="d-flex justify-content-between">
                  <div className="left-items">
                    <a
                      onClick={() =>
                        setNotifications([
                          ...notifications,
                          (notifications[index].state = "newName")
                        ])
                      }
                    >
                      <div
                        className={
                          value.state === "new"
                            ? "notification-new-title"
                            : "notification-old-title"
                        }
                      >
                        {value.title}
                      </div>
                      <div className="notification-subtitle">
                        {value.subtitle}
                      </div>
                    </a>
                  </div>
                  <div className="right-items">
                    {value.state === "new" ? (
                      <div className="notification-date">{value.date}</div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Notifications;
