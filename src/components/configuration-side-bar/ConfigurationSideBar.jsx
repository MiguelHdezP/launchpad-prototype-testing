import React, { useState } from "react";
import "./ConfigurationSideBar.scss";
import { Link } from "react-router-dom";
import { BsGearFill, BsXLg } from "react-icons/bs";
import {
  ConfigToday,
  ConfigApps,
  ConfigCustom,
  ConfigSearch,
} from "./PageConfigurations";

//<></>  </>
export default function ConfigurationSideBar(props) {
  const {
    toggleSideBar,
    sidebarVisible,
    toggleSearchSort,
    appsToBeDisplayed,
    chooseLinkTarget,
    activeCount,
  } = props;
  const [configPerPage, setConfigPerPage] = useState("");
  let populateSideBar = () => {
    const pathname = window.location.pathname;
    toggleSideBar();
    setConfigPerPage(pathname);
  };

  let labelPanel = "";
  switch (configPerPage) {
    case "/today":
      labelPanel = "Today";
      break;
    case "/":
      labelPanel = "Apps";
      break;
    case "/apps":
      labelPanel = "Apps";
      break;
    case "/protocols":
      labelPanel = "Protocols";
      break;
    case "/announcements":
      labelPanel = "Announcements";
      break;
    case "/messages":
      labelPanel = "Messages";
      break;
    case "/ddashboard":
      labelPanel = "Dashboard";
      break;
    case "/reports":
      labelPanel = "Reports";
      break;
    case "/search":
      labelPanel = "Search";
      break;
    case "/settings":
      labelPanel = "Settings";
      break;
    default:
  }
  return (
    <>
      <div className="navBar">
        <Link to="#" className="menu-bars" title="Configuration options">
          {/*<BsGearFill onClick={populateSideBar} />*/}
        </Link>
      </div>
      <nav className={sidebarVisible ? "nav-menu active" : "nav-menu"}>
        <Link to="#" className="menu-bars" title="Close config panel">
          <BsXLg onClick={toggleSideBar} />
        </Link>
        <h4>Config Options - {labelPanel}</h4>
        <div className="nav-menu-configOptions">
          {(configPerPage === "/apps" && (
            <ConfigApps
              toggleSearchSort={toggleSearchSort}
              appsToBeDisplayed={appsToBeDisplayed}
              activeCount={activeCount}
            />
          )) ||
            (configPerPage === "/today" && (
              <ConfigToday chooseLinkTarget={chooseLinkTarget} />
            )) ||
            (configPerPage === "/protocols" && <ConfigCustom />) ||
            (configPerPage === "/announcements" && <ConfigCustom />) ||
            (configPerPage === "/messages" && <ConfigCustom />) ||
            (configPerPage === "/ddashboard" && <ConfigCustom />) ||
            (configPerPage === "/reports" && <ConfigCustom />) ||
            (configPerPage === "/search" && <ConfigSearch />) ||
            (configPerPage === "/settings" && <ConfigCustom />)}
        </div>
      </nav>
    </>
  );
}
