import React from "react";
import "./SingleApplication.scss";
//<></>  </>
export default function SingleApplication(props) {
  const { appName, appIcon, applicationType } = props;
  let openNewWindow = () =>
    window.open("/today", "_blank", "noopener,noreferrer");
  return (
    <div
      id="js-single-application"
      className="single-application"
      onClick={() => openNewWindow()}
    >
      {appIcon ? (
        <img src="appIcon" alt={appName} />
      ) : (
        <div className="single-application-dummy"></div>
      )}
      <div className="single-application-labels">
        <label>{appName}</label>
        <label>{applicationType}</label>
      </div>
    </div>
  );
}
