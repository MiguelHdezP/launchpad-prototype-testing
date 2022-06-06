import React, { useState } from "react";
import "./PageConfigurations.scss";
import Divider from "../divider/Divider";

export const ConfigToday = (props) => {
  const { chooseLinkTarget } = props;
  const [pickSearch, setPickSearch] = useState(1);
  const [btnDataSend, BtnDataSend] = useState(true);
  const [txtBtn, setTxtBtn] = useState("Apply");

  const handleRadioClick = (e) => {
    const value = parseInt(e.target.value);
    setPickSearch(value);
    switch (value) {
      case 1:
        chooseLinkTarget("_self");
        break;
      case 2:
        chooseLinkTarget("_blank");
        break;
      case 3:
        chooseLinkTarget("popup");
        break;
      default:
        break;
    }
  };

  return (
    <div className="config-apps">
      <label htmlFor="js-search-enter">Open window as:</label>
      <div>
        <input
          type="radio"
          id="js-search-self"
          name="js-search-self"
          value="1"
          checked={pickSearch == 1 ? true : false}
          onChange={handleRadioClick}
        />
        <label htmlFor="js-search-self">_self</label>
      </div>
      <div>
        <input
          type="radio"
          id="js-search-blank"
          name="js-search-blank"
          value="2"
          checked={pickSearch == 2 ? true : false}
          onChange={handleRadioClick}
        />
        <label htmlFor="js-search-blank">_blank</label>
      </div>
      <div>
        <input
          type="radio"
          id="js-search-popup"
          name="js-search-popup"
          value="3"
          checked={pickSearch == 3 ? true : false}
          onChange={handleRadioClick}
        />
        <label htmlFor="js-search-popup">popup</label>
      </div>
      <div className="config-apps-button">
        <button
          className={btnDataSend ? "" : "infoSent"}
          onClick={() => {
            setTimeout(function () {
              BtnDataSend(false);
              setTxtBtn("Done!");
              setTimeout(function () {
                BtnDataSend(true);
                setTxtBtn("Apply");
              }, 800);
            }, 100);
          }}
        >
          {txtBtn}
        </button>
      </div>
    </div>
  );
};

export const ConfigApps = (props) => {
  const { toggleSearchSort, appsToBeDisplayed, activeCount } = props;
  const [pickSearch, setPickSearch] = useState(2);
  const [pickSort, setPickSort] = useState(3);
  const [pickArrange, setPickArrange] = useState(5);
  const [appsNumber, setAppsNumber] = useState(0);
  const [btnDataSend, BtnDataSend] = useState(true);
  const [radiosToggle, setRadiosToggle] = useState(1);
  const [txtBtn, setTxtBtn] = useState("Apply");
  const [newMessage, setNewMessage] = useState(0);
  const [newPatient, setNewPatient] = useState(0);

  const handleRadioClick = (e) => {
    setPickSearch(e.target.value);
  };
  const handleRadioSort = (e) => {
    setPickSort(e.target.value);
  };
  const handleRadioArrange = (e) => {
    setPickArrange(e.target.value);
  };
  const appsAmount = (e) => {
    const value = e.target.value;
    setAppsNumber(value);
  };
  const handleSendMessage = () => {
    setNewMessage(newMessage + 1);
  };
  const handleSendSchedule = () => {
    setNewPatient(newPatient + 1);
  };
  return (
    <div className="config-apps">
      <div>
        <input
          type="radio"
          id="js-search-filter"
          name="js-search-filter"
          value="1"
          checked={pickSearch == 1 ? true : false}
          onChange={handleRadioClick}
          disabled={!!radiosToggle}
        />
        <label htmlFor="js-search-filter">Search filter</label>
      </div>
      <div>
        <input
          type="radio"
          id="js-search-enter"
          name="js-search-enter"
          value="2"
          checked={pickSearch == 2 ? true : false}
          onChange={handleRadioClick}
          disabled={!!radiosToggle}
        />
        <label htmlFor="js-search-enter">Serch by enter/click button</label>
      </div>
      <Divider customClassDivider="config-divider" />
      <div>
        <label htmlFor="js-displayed-apps">
          Applications to be displayed (0-30)
        </label>
        <input
          type="number"
          id="js-turn-onoff-apps"
          className="turn-onoff-apps"
          name="js-turn-onoff-apps"
          value={appsNumber}
          min="0"
          max="18"
          onChange={appsAmount}
        />
      </div>
      <Divider customClassDivider="config-divider" />
      <div>
        <input
          type="radio"
          id="js-arrange-n"
          name="js-arrange-n"
          value="5"
          checked={pickArrange == 5 ? true : false}
          onChange={handleRadioArrange}
          disabled={false}
        />
        <label htmlFor="js-arrange-n">Z arrangement</label>
      </div>
      <div>
        <input
          type="radio"
          id="js-arrange-z"
          name="js-arrange-z"
          value="6"
          checked={pickArrange == 6 ? true : false}
          onChange={handleRadioArrange}
          disabled={false}
        />
        <label htmlFor="js-arrange-z">N arrangement</label>
      </div>
      <Divider customClassDivider="config-divider" />
      <div>
        <input
          type="radio"
          id="js-sort-az"
          name="js-sort-az"
          value="3"
          checked={pickSort == 3 ? true : false}
          onChange={handleRadioSort}
          disabled={true}
        />
        <label htmlFor="js-sort-az">Sort A-Z</label>
      </div>
      <div>
        <input
          type="radio"
          id="js-sort-za"
          name="js-sort-za"
          value="4"
          checked={pickSort == 4 ? true : false}
          onChange={handleRadioSort}
          disabled={true}
        />
        <label htmlFor="js-sort-za">Sort Z-A</label>
      </div>
      <Divider customClassDivider="config-divider" />
      <button className="config-button-count" onClick={handleSendMessage}>
        Send new message ({newMessage})
      </button>
      <Divider customClassDivider="config-divider" />
      <button className="config-button-count" onClick={handleSendSchedule}>
        New patient appointment ({newPatient})
      </button>
      <Divider customClassDivider="config-divider" />
      <div className="config-apps-button">
        <button
          className={btnDataSend ? "" : "infoSent"}
          onClick={() => {
            if (appsNumber >= 16) {
              setRadiosToggle(0);
            } else if (appsNumber >= 2) {
              //setRadiosToggle(5);
            } else if (appsNumber <= 0) {
              setRadiosToggle(1);
            }
            setTimeout(function () {
              toggleSearchSort(pickSearch, pickSort, pickArrange);
              activeCount(newMessage, newPatient);
              appsToBeDisplayed(appsNumber);
              BtnDataSend(false);
              setTxtBtn("Done!");
              setTimeout(function () {
                BtnDataSend(true);
                setTxtBtn("Apply");
              }, 800);
            }, 100);
          }}
        >
          {txtBtn}
        </button>
      </div>
    </div>
  );
};

export const ConfigCustom = () => {
  return <div>Hello</div>;
};

export const ConfigSearch = () => {
  return <div>Hello</div>;
};
