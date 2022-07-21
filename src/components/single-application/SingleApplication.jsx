import React, { useState } from "react";
import "./SingleApplication.scss";
import { iconConnectM, iconPCT, iconPower } from "../AssetsFiles";
import { BsFillPinFill } from "react-icons/bs";

export default function SingleApplication(props) {
  const {
    appName,
    appIcon,
    applicationType,
    id,
    recentApplications,
    pinnedApplications,
    toogleModalAction,
  } = props;
  const [hoverIcon, setHoverIcon] = useState(false);
  let validApps = false;
  let urlAppOpen = "",
    windowModeType = "",
    windowMode = "",
    iconApp = "";
  switch (appName) {
    case "Connect Messenger":
      if (id === 592) {
        urlAppOpen = "/messageCenterWinTouch";
        windowModeType = "_blank";
      } else {
        urlAppOpen = "/messageCenterWin64";
        windowMode = "fullscreen='yes'";
      }
      iconApp = iconConnectM;
      break;
    case "PowerChart Touch":
      urlAppOpen = "/patient-list";
      windowModeType = "_blank";
      iconApp = iconPCT;
      break;
    case "PowerChart":
      urlAppOpen = "/patientListImgWin64";
      windowMode = "fullscreen='yes'";
      iconApp = iconPower;
      break;
    default:
      break;
  }
  const onMouseEnterHandler = () => setHoverIcon(!hoverIcon);
  const onMouseLeaveHandler = () => setHoverIcon(!hoverIcon);
  const handleClick = (e) => {
    recentApplications(e);
    toogleModalAction("Something happend, check Apps Glance in Today's view");
  };
  const handlePinClick = (element) => {
    pinnedApplications(element);
  };
  switch (appName) {
    case "Connect Messenger":
      validApps = true;
      break;
    case "PowerChart Touch":
      validApps = true;
      break;
    case "PowerChart":
      validApps = true;
      break;
    default:
      validApps = false;
      break;
  }
  return (
    <div
      id="js-single-application"
      className="single-application"
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      onClick={(e) => {
        if (!validApps) {
          handleClick(e.target);
        }
      }}
    >
      {validApps ? (
        <>
          {iconApp.length > 0 ? (
            <img src={iconApp} alt={appName} className="single-app-iconApps" />
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
      <div className="single-app-pinIcon">
        <span
          title="Pin Application"
          onClick={() => {
            if (!validApps) {
              handlePinClick(appName);
            }
          }}
        >
          {hoverIcon && !validApps ? <BsFillPinFill /> : ""}
        </span>
      </div>
    </div>
  );
}
