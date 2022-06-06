import React, { useState } from "react";
import ContentContainer from "../components/content-container/ContentContainer";
import SectionHeader from "../components/section-header/SectionHeader";

export default function Settings(props) {
  const [checkedState, setCheckedState] = useState(false);
  const { turnOnOffTabs } = props;
  const handleCheckBoxes = (e) => {
    const { value, checked } = e.target;
    turnOnOffTabs(parseInt(value), checked);
  };
  return (
    <ContentContainer>
      <SectionHeader sectionText="Settings" />
      <div className="pagesContainer">
        <h1>
          Choose one to five modules to display. Apps and Settings are required.
        </h1>
        <h2>Launch Pad Modules</h2>
        <ul>
          <li>
            <div>
              <input
                type="checkbox"
                id="js-today"
                name="today"
                value="1"
                checked={checkedState}
                onChange={(e) => {
                  setCheckedState(!checkedState);
                  handleCheckBoxes(e);
                }}
              />
              <label htmlFor="js-today">Today</label>
            </div>
          </li>
          <li>
            <div>
              <input
                type="checkbox"
                id="s-settings-checkbox"
                checked
                disabled
                value="2"
              />
              <label htmlFor="js-settings-checkbox">Apps</label>
            </div>
          </li>
          <li>
            <div>
              <input
                type="checkbox"
                id="js-protocols"
                name="protocols"
                value="3"
                onChange={(e) => handleCheckBoxes(e)}
              />
              <label htmlFor="js-protocols">Protocols</label>
            </div>
          </li>
          <li>
            <div>
              <input
                type="checkbox"
                id="js-announcements"
                name="announcements"
                value="4"
                onChange={(e) => handleCheckBoxes(e)}
              />
              <label htmlFor="js-announcements">Announcements</label>
            </div>
          </li>
          <li>
            <div>
              <input
                type="checkbox"
                id="js-messages"
                name="messages"
                value="5"
                onChange={(e) => handleCheckBoxes(e)}
              />
              <label htmlFor="js-messages">Messages</label>
            </div>
          </li>
          <li>
            <div>
              <input
                type="checkbox"
                id="js-ddashboard"
                name="ddashboard"
                value="6"
                onChange={(e) => handleCheckBoxes(e)}
              />
              <label htmlFor="js-ddashboard">Discharge Dashboard</label>
            </div>
          </li>
          <li>
            <div>
              <input
                type="checkbox"
                id="js-reports"
                name="reports"
                value="7"
                onChange={(e) => handleCheckBoxes(e)}
              />
              <label htmlFor="js-reports">Reports</label>
            </div>
          </li>
          <li>
            <div>
              <input
                type="checkbox"
                id="js-psearch"
                name="psearch"
                value="8"
                onChange={(e) => handleCheckBoxes(e)}
              />
              <label htmlFor="js-psearch">Patient Search</label>
            </div>
          </li>
          <li>
            <div>
              <input
                type="checkbox"
                id="s-settings-checkbox"
                checked
                disabled
                value="9"
              />
              <label htmlFor="js-settings-checkbox">Settings</label>
            </div>
          </li>
        </ul>
      </div>
    </ContentContainer>
  );
}
