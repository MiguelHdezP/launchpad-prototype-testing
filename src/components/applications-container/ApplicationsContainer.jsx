import React from "react";
import "./ApplicationsContainer.scss";
import SingleApplication from "../single-application/SingleApplication";
import { MagnifyingGlass } from "../AssetsFiles";
import { BsFolder } from "react-icons/bs";
//<></>  </>
export default function ApplicationsContainer(props) {
  const {
    classAppContainer = "",
    customClass = "",
    filterFlag,
    appsPayload = [],
  } = props;

  return (
    <div
      id={`js-${classAppContainer}`}
      className={`${classAppContainer} ${customClass}`}
    >
      {appsPayload.length ? (
        appsPayload.map((element, index) => {
          const { appName, appIcon, applicationType, id } = element;
          return (
            <SingleApplication
              appName={appName}
              appIcon={appIcon}
              applicationType={applicationType}
              key={`${index + appName}`}
              id={id}
            />
          );
        })
      ) : filterFlag ? (
        <div className="no-matching-apps no-apps-center">
          <img src={MagnifyingGlass} alt="No matching results when filtering" />
          <p>No Matching Results</p>
        </div>
      ) : (
        <div className="no-apps-available no-apps-center">
          <BsFolder />
          <h2>No Results</h2>
          <p>No applications to display</p>
        </div>
      )}
    </div>
  );
}
