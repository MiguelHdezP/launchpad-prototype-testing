import React from "react";
import "./SingleApplication.scss";

export default function SingleApplication(props) {
  const { appName, appIcon, applicationType, id } = props;
  let openNewWindow = () => window.open("/today", "", "fullscreen='yes'");
  let urlAppOpen = "";
  let windowModeType = "";
  let windowMode = "";
  switch (appName) {
    case "Connect Messenger":
      urlAppOpen = "/messageCenterWin64";
      if (id === 592) windowModeType = "_blank";
      else windowMode = "fullscreen='yes'";
      break;
    case "PowerChart Touch":
      urlAppOpen = "/patient-list";
      windowModeType = "_blank";
      break;
    case "PowerChart":
      urlAppOpen = "/patientListImgWin64";
      windowMode = "fullscreen='yes'";
      break;
    default:
      break;
  }

  return (
    <div id="js-single-application" className="single-application">
      {appName === "Connect Messenger" ||
      appName === "PowerChart Touch" ||
      appName === "PowerChart" ? (
        <>
          {appIcon ? (
            <img src="appIcon" alt={appName} />
          ) : (
            <div className="single-application-dummy"></div>
          )}
          <a
            href=""
            onClick={() => {
              window.open(urlAppOpen, windowModeType, windowMode);
            }}
          >
            <div className="single-application-labels">
              <label>{appName}</label>
              <label>{applicationType}</label>
            </div>
          </a>
        </>
      ) : (
        <>
          {appIcon ? (
            <img src="appIcon" alt={appName} />
          ) : (
            <div className="single-application-dummy"></div>
          )}
          <div className="single-application-labels">
            <label>{appName}</label>
            <label>{applicationType}</label>
          </div>
        </>
      )}
    </div>
  );
}
