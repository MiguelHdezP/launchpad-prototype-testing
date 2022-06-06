import React from "react";
import "./ApplicationHeader.scss";
import {
  ApplicationsBar,
  MagnifyingGlassWhite,
  CalendarWhite,
  CustomIconWhite,
} from "../AssetsFiles";

export default function ApplicationHeader() {
  return (
    <section id="js-application-header" className="application-header">
      <div className="application-header-title">
        <img src={ApplicationsBar} alt="Applications icon" />
        <span>Launchpad</span>
      </div>
      <div className="application-header-options">
        <ul className="application-header-iconsSet1">
          <li>
            <img src={MagnifyingGlassWhite} alt="Search" />
          </li>
          <li>
            <img src={CalendarWhite} alt="Calendar" />
          </li>
          <li>
            <img src={CustomIconWhite} alt="X icon dummy" />
          </li>
        </ul>
        <ul className="application-header-iconsSet2">
          <li>
            <img src={CustomIconWhite} alt="X icon dummy" />
          </li>
        </ul>
        <ul>
          <li>
            <img src={CustomIconWhite} alt="X icon dummy" />
          </li>
          <li>
            <img src={CustomIconWhite} alt="X icon dummy" />
          </li>
        </ul>
        <ul className="application-header-notificationsUser">
          <li>
            <img src={CustomIconWhite} alt="X icon dummy" />
          </li>
          <li>
            <img src={CustomIconWhite} alt="X icon dummy" />
          </li>
          <li>
            <img src={CustomIconWhite} alt="X icon dummy" />
          </li>
        </ul>
      </div>
    </section>
  );
}
