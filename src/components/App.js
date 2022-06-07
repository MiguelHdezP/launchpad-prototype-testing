import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/layout.scss";
import "../styles/base.scss";
import { returnActiveTabs } from "../utils/tabsSelectionURL";
import ApplicationHeader from "./application-header/ApplicationHeader";
import Container from "./container/Container";
import Tabs from "./tabs/Tabs";
import ConfigurationSideBar from "./configuration-side-bar/ConfigurationSideBar";
import NotificationBanner from "./notification-banner/NotificationBanner";
import Modal from "../components/modal/Modal";
import PatientListViewMore from "../pages/popup-pages/PatientListViewMore";
import PatientList from "../pages/popup-pages/PatientList";
import Organizer from "../pages/popup-pages/Organizer";
import WinPatientChart from "../pages/popup-pages/WinPatientChart";
import WebPatientChart from "../pages/popup-pages/WebPatientChart";
import PatientListImgWin64 from "../pages/popup-pages/PatientListImgWin64";
import MessageCenterWin64 from "../pages/popup-pages/MessageCenterWin64";
import Today from "../pages/Today";
import Apps from "../pages/Apps";
import Protocols from "../pages/Protocols";
import Search from "../pages/Search";
import ErrorPage from "../pages/ErrorPage";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import Announcements from "../pages/Announcements";
import Messages from "../pages/Messages";
import Ddashboard from "../pages/Ddashboard";
import HomePage from "../pages/HomePage";

export default function App() {
  let pathArray = window.location.pathname.split("/");
  let initialTabs = [1, 2, 9, returnActiveTabs(pathArray[1])].sort(
    (a, b) => a - b
  );
  const [sidebar, setSidebar] = useState(false);
  const [dataNoData, setDataNoData] = useState(127);
  const [searchConfig, setSearchConfig] = useState(true);
  const [sortConfig, setSSortConfig] = useState(3);
  const [arrangeConfig, setArrangeConfig] = useState(5);
  const [filterFlag, setFilterFlag] = useState(false);
  const [checkedIf, setCheckedIf] = useState(true);
  const [visibleTabs, setVisibleTabs] = useState(initialTabs);
  const [toggleNotBanner, setToggleNotBanner] = useState(false);
  const [turnOnOffAppTabs, setTurnOnOffAppTabs] = useState(true);
  const [linkTarget, setLinkTarget] = useState("_self");
  const [numberOfCounts, setNumberOfCounts] = useState(0);
  const [countsMsg, setCountsMsg] = useState(0);
  const [countsSch, setCountsSch] = useState(0);
  const [toggleModal, setToggleModal] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const hideSidebar = () => setSidebar(false);

  useEffect(() => {
    let urlPathToCheck = pathArray[1];
    if (
      urlPathToCheck === "patient-list" ||
      urlPathToCheck === "patientList-viewMore" ||
      urlPathToCheck === "organizer" ||
      urlPathToCheck === "win64patientchart" ||
      urlPathToCheck === "webpatientchart" ||
      urlPathToCheck === "messageCenterWin64" ||
      urlPathToCheck === "patientListImgWin64" ||
      urlPathToCheck === ""
    ) {
      setTurnOnOffAppTabs(false);
    }
  }, [turnOnOffAppTabs]);

  const appsToBeDisplayed = (value) => {
    setDataNoData(value);
    if (value == 0) setFilterFlag(false);
    else setFilterFlag(true);
  };
  const toggleSearchSort = (valSearch, valSort, pickArrange) => {
    if (valSearch == 1) setSearchConfig(false);
    else if (valSearch == 2) setSearchConfig(true);
    else if (valSearch == 3 || valSearch == 4) setSSortConfig(valSort);
    setArrangeConfig(pickArrange);
  };
  const turnOnOffTabs = (value, checked) => {
    let tabsToDisplay = [];
    if (checked) {
      tabsToDisplay = [...visibleTabs, value].sort((a, b) => a - b);
    } else {
      tabsToDisplay = visibleTabs.filter((e) => {
        if (e !== value) {
          return true;
        }
      });
    }
    if (tabsToDisplay.length === 6) {
      setToggleNotBanner(true);
      setTimeout(() => {
        setToggleNotBanner(false);
      }, 3000);
      return;
    } else {
      setCheckedIf(checked);
      setVisibleTabs(tabsToDisplay);
    }
  };
  const chooseLinkTarget = (value) => {
    setLinkTarget(value);
  };
  const toggleModalEmailRead = () => {
    setToggleModal(true);
    setTimeout(() => {
      setToggleModal(false);
    }, 800);
    if (countsMsg > 0) {
      setCountsMsg(countsMsg - 1);
      setNumberOfCounts(numberOfCounts - 1);
    }
  };
  const activeCount = (value1 = 0, value2 = 0) => {
    setNumberOfCounts(value1 + value2);
    setCountsMsg(value1);
    setCountsSch(value2);
  };

  return (
    <>
      {toggleModal ? (
        <Modal>
          <p>Email Read</p>
        </Modal>
      ) : (
        ""
      )}

      {turnOnOffAppTabs ? <ApplicationHeader /> : ""}
      <NotificationBanner
        notificationIcon="http://cdn.onlinewebfonts.com/svg/img_331995.png"
        notificationTitle="Alert"
        altText="Alert: You can only have 5 tabs"
        notificationDescp="You can only have 5 tabs"
        notificationTurnOnOff={toggleNotBanner}
      />
      <Container>
        <Router>
          {turnOnOffAppTabs ? (
            <>
              <ConfigurationSideBar
                toggleSideBar={showSidebar}
                sidebarVisible={sidebar}
                toggleSearchSort={toggleSearchSort}
                appsToBeDisplayed={appsToBeDisplayed}
                chooseLinkTarget={chooseLinkTarget}
                activeCount={activeCount}
              />
              <Tabs
                toggleSideBar={hideSidebar}
                visibleTabs={visibleTabs}
                checked={checkedIf}
                numberOfCounts={numberOfCounts}
              />
            </>
          ) : (
            ""
          )}

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/apps"
              element={
                <Apps
                  searchConfig={searchConfig}
                  sortConfig={sortConfig}
                  arrangeConfig={arrangeConfig}
                  dataNoData={dataNoData}
                  filterFlag={filterFlag}
                  activeCount={activeCount}
                />
              }
            />
            <Route
              path="/today"
              element={
                <Today
                  linkTarget={linkTarget}
                  numberOfCounts={numberOfCounts}
                  countsMsg={countsMsg}
                  countsSch={countsSch}
                  toggleModalEmailRead={toggleModalEmailRead}
                />
              }
            />
            <Route path="/protocols" element={<Protocols />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/ddashboard" element={<Ddashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/search" element={<Search />} />
            <Route
              path="/settings"
              element={<Settings turnOnOffTabs={turnOnOffTabs} />}
            />
            <Route path="/patient-list" element={<PatientList />} />
            <Route path="/win64patientchart" element={<WinPatientChart />} />
            <Route path="/webpatientchart" element={<WebPatientChart />} />
            <Route
              path="/patientList-viewMore"
              element={<PatientListViewMore />}
            />
            <Route
              path="/patientListImgWin64"
              element={<PatientListImgWin64 />}
            />
            <Route
              path="/messageCenterWin64"
              element={<MessageCenterWin64 />}
            />

            <Route path="/organizer" element={<Organizer />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}
