import React from "react";
import "./TabNav.scss";
import { NavLink } from "react-router-dom";
import CountBadge from "../count-badge/CountBadge";

export default function TabNav(props) {
  const {
    img,
    tabText,
    altText,
    path,
    classTab,
    clickFn,
    countBadge = 0,
  } = props;
  return (
    <div id="js-tab-nav" className="tab-nav">
      <NavLink to={path} className={classTab} onClick={() => clickFn()}>
        <img src={img} alt={altText} />
      </NavLink>
      <label>{tabText}</label>
      {countBadge ? <CountBadge count={countBadge} /> : ""}
    </div>
  );
}
