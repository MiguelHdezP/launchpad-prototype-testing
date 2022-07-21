import React, { useState, useRef } from "react";
import "./GlanceSettings.scss";
import {
  attentionNeeded,
  applicationsGlance,
} from "../../components/AssetsFiles";
import IconWarning from "terra-icon/lib/icon/IconWarning";

export default function GlanceSettings(props) {
  const {
    toggleModalContent,
    addNewGlanceToday,
    checkboxNeeded,
    checkboxApplications,
    checkboxAtt,
    checkboxApps,
  } = props;
  const [activeList, setActiveList] = useState(checkboxAtt);
  const [activeList2, setActiveList2] = useState(checkboxApps);
  const [typeOfGlance, setTypeOfGlance] = useState("");
  const [glancesAmount, setGlancesAmount] = useState(4);
  const [displayGlancesAlert, setDisplayGlancesAlert] = useState("no-display");

  const handleActiveList = () => {};
  const handleActiveList2 = () => {};
  const addNewGlance = () => {
    addNewGlanceToday();
    setTimeout(() => {
      toggleModalContent();
    }, 400);
  };
  const handleCheckbox = (e) => {
    let elementVal = e.target;
    if (elementVal.value === "4") {
      setTypeOfGlance("needed");
      setActiveList(!activeList);
      checkboxNeeded();
    } else if (elementVal.value === "6") {
      setTypeOfGlance("apps");
      setActiveList2(!activeList2);
      checkboxApplications();
    }
    if (elementVal.checked) {
      setGlancesAmount(glancesAmount + 1);
    } else {
      setGlancesAmount(glancesAmount - 1);
    }
  };
  if (glancesAmount === 5) {
    setDisplayGlancesAlert("yes-display");
    setGlancesAmount(4);
    checkboxNeeded();
    setActiveList(false);
    setTimeout(() => {
      setDisplayGlancesAlert("no-display");
    }, 1300);
  }
  return (
    <>
      <div className="glanceSettings">
        <div className="glanceSettings-header">
          <div className="header-text">Add Gadget</div>
          <div className="header-closeBtn">
            <button onClick={() => toggleModalContent()}>X</button>
          </div>
        </div>
        <div className={`glances-alert ${displayGlancesAlert}`}>
          <IconWarning /> You only can add 4 glances
        </div>
        <div className="glanceSettings-container">
          <div className="container-glances">
            <div className="glances-searchBox">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
              />
            </div>
            <div className="glances-lists">
              <ul>
                <li className="glance inactive">
                  <span>
                    <input
                      type="checkbox"
                      value="1"
                      onChange={(e) => handleCheckbox(e)}
                      checked={false}
                    />
                  </span>
                  Outpatient Schedule
                </li>
                <li className="glance inactive">
                  <span>
                    <input
                      type="checkbox"
                      value="2"
                      onChange={(e) => handleCheckbox(e)}
                      checked={false}
                    />
                  </span>
                  Connect Messenger
                </li>
                <li className="glance inactive">
                  <span>
                    <input
                      type="checkbox"
                      value="3"
                      onChange={(e) => handleCheckbox(e)}
                      checked={false}
                    />
                  </span>
                  Quick Links
                </li>
                <li
                  className={`glance ${activeList ? "active" : "inactive"}`}
                  onClick={() => handleActiveList2()}
                >
                  <span>
                    <input
                      type="checkbox"
                      value="4"
                      onChange={(e) => handleCheckbox(e)}
                      checked={checkboxAtt}
                    />
                  </span>
                  Attention Needed
                </li>
                <li className="glance active">
                  <span>
                    <input
                      type="checkbox"
                      value="5"
                      onChange={(e) => handleCheckbox(e)}
                      checked={true}
                    />
                  </span>
                  Schedule
                </li>
                <li
                  className={`glance ${activeList2 ? "active" : "inactive"}`}
                  onClick={() => handleActiveList()}
                >
                  <span>
                    <input
                      type="checkbox"
                      value="6"
                      onChange={(e) => handleCheckbox(e)}
                      checked={checkboxApps}
                    />
                  </span>
                  Applications
                </li>
                <li className="glance active">
                  <span>
                    <input
                      type="checkbox"
                      value="7"
                      onChange={(e) => handleCheckbox(e)}
                      checked={true}
                    />
                  </span>
                  Message Center Inbox
                </li>
                <li className="glance active">
                  <span>
                    <input
                      type="checkbox"
                      value="8"
                      onChange={(e) => handleCheckbox(e)}
                      checked={true}
                    />
                  </span>
                  Patient List
                </li>
              </ul>
            </div>
          </div>
          <div className="container-glanceDetails">
            {activeList2 ? (
              <>
                <h1>Details</h1>
                <p>Version, Date, Other Info</p>
                <p>Details</p>
              </>
            ) : (
              <>
                <h1>Details</h1>
                <p>V.1.0, 5/13/22, Other Info</p>
                <p>Attention Needed</p>
              </>
            )}
          </div>
          <div className="container-glancePreview">
            {typeOfGlance === "needed" && (
              <img src={attentionNeeded} alt="Attention Needed Glance" />
            )}
            {typeOfGlance === "apps" && (
              <img src={applicationsGlance} alt="Attention Needed Glance" />
            )}
            {typeOfGlance !== "needed" && typeOfGlance !== "apps" && (
              <span>PREVIEW</span>
            )}
          </div>
        </div>
        <div className="glanceSettings-footer">
          <button onClick={() => addNewGlance()}>Apply</button>
          <button onClick={() => toggleModalContent()}>Cancel</button>
        </div>
      </div>
    </>
  );
}
