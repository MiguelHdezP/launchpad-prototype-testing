import React from "react";
import "./Tabs.scss";
import TabNav from "../tab-nav/TabNav";
import {
  Calendar,
  Applications,
  MagnifyingGlass,
  Protocols,
  Reports,
  Settings,
  CustomIcon,
} from "../AssetsFiles";

export default function Tabs(props) {
  const { toggleSideBar, visibleTabs, numberOfCounts } = props;
  console.log("**Tabs numberOfCounts: ", numberOfCounts);
  let tabsToShow = (tabs, index) => {
    switch (parseInt(tabs)) {
      case 1:
        return (
          <TabNav
            img={Calendar}
            tabText="Today"
            altText="List of last applications reviewed"
            path={"/today"}
            classTab="tabLink"
            clickFn={toggleSideBar}
            key={index}
            countBadge={numberOfCounts}
          />
        );
      case 2:
        return (
          <TabNav
            img={Applications}
            tabText="Apps"
            altText="List of all your apps"
            path={"/apps"}
            classTab="tabLink"
            clickFn={toggleSideBar}
            key={index}
          />
        );
      case 3:
        return (
          <TabNav
            img={Protocols}
            tabText="Protocols"
            altText="Protocols"
            path={"/protocols"}
            classTab="tabLink"
            clickFn={toggleSideBar}
            key={index}
          />
        );
      case 4:
        return (
          <TabNav
            img={CustomIcon}
            tabText="Announcements"
            altText="Announcements"
            path={"/announcements"}
            classTab="tabLink"
            clickFn={toggleSideBar}
            key={index}
          />
        );
      case 5:
        return (
          <TabNav
            img={CustomIcon}
            tabText="Messages"
            altText="Messages"
            path={"/messages"}
            classTab="tabLink"
            clickFn={toggleSideBar}
            key={index}
          />
        );
      case 6:
        return (
          <TabNav
            img={CustomIcon}
            tabText="Discharge Dashboard"
            altText="Discharge Dashboard"
            path={"/ddashboard"}
            classTab="tabLink"
            clickFn={toggleSideBar}
            key={index}
          />
        );
      case 7:
        return (
          <TabNav
            img={Reports}
            tabText="Reports"
            altText="Reports"
            path={"/reports"}
            classTab="tabLink"
            clickFn={toggleSideBar}
            key={index}
          />
        );
      case 8:
        return (
          <TabNav
            img={MagnifyingGlass}
            tabText="Search"
            altText="Application Search"
            path={"/search"}
            classTab="tabLink"
            clickFn={toggleSideBar}
            key={index}
          />
        );
      case 9:
        return (
          <TabNav
            img={Settings}
            tabText="Settings"
            altText="Settings"
            path={"/settings"}
            classTab="tabLink"
            clickFn={toggleSideBar}
            key={index}
          />
        );
      default:
        return "";
    }
  };
  return (
    <nav id="js-tabs" className="tabs">
      {visibleTabs.map((ele, index) => tabsToShow(ele, index))}
    </nav>
  );
}
