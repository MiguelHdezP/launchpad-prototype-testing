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
import MessageCenterWinTouch from "../pages/popup-pages/MessageCenterWinTouch";
import GlanceSettings from "./glance-settings/GlanceSettings";
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
  const [toggleScrollGlance, setToggleScrollGlance] = useState(false);
  const [recentApps, setRecentApps] = useState([]);
  const [pinnedApps, setPinnedApps] = useState([]);
  const [modalMessage, setModalMessage] = useState("Some action happened");
  const [modalContent, setModalContent] = useState(false);
  const [newGlanceM, setNewGlanceM] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const hideSidebar = () => setSidebar(false);
  const [checkboxAtt, setCheckboxAtt] = useState(false);
  const [checkboxApps, setCheckboxApps] = useState(true);

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
      urlPathToCheck === "messageCenterWinTouch"
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
  const chooseLinkTarget = (value) => setLinkTarget(value);

  const toogleModalAction = (value = "") => {
    let speedModalToggle = 800;
    if (value === "myday") {
      setToggleModal(true);
      setModalContent(!modalContent);
    } else {
      if (value.length) {
        setModalMessage(value);
        speedModalToggle = 2000;
      }
      setToggleModal(true);
      setTimeout(() => {
        setToggleModal(false);
      }, speedModalToggle);
      if (countsMsg > 0) {
        setCountsMsg(countsMsg - 1);
        setNumberOfCounts(numberOfCounts - 1);
      }
      if (countsSch > 0) {
        setCountsSch(countsSch - 1);
        setNumberOfCounts(numberOfCounts - 1);
      }
    }
  };
  const toggleModalContent = () => {
    setToggleModal(false);
    setModalContent(!modalContent);
  };
  const activeCount = (value1 = 0, value2 = 0) => {
    setNumberOfCounts(value1 + value2);
    setCountsMsg(value1);
    setCountsSch(value2);
  };
  const scrollGlances = (val) => {
    if (val) setToggleScrollGlance(true);
    else setToggleScrollGlance(false);
  };
  const recentApplications = (e) => {
    const eText = e.innerText;
    if (typeof eText === "string") setRecentApps([eText, ...recentApps]);
  };
  const pinnedApplications = (e) => setPinnedApps([e, ...pinnedApps]);

  const addNewGlanceToday = () => setNewGlanceM(!newGlanceM);

  const checkboxNeeded = () => setCheckboxAtt(!checkboxAtt);

  const checkboxApplications = () => setCheckboxApps(!checkboxApps);

  return (
    <>
      {toggleModal ? (
        <div className="background-modal">
          {modalContent ? (
            <GlanceSettings
              toggleModalContent={toggleModalContent}
              addNewGlanceToday={addNewGlanceToday}
              checkboxNeeded={checkboxNeeded}
              checkboxApplications={checkboxApplications}
              checkboxAtt={checkboxAtt}
              checkboxApps={checkboxApps}
            />
          ) : (
            <Modal customClass="">
              <p>{modalMessage}</p>
            </Modal>
          )}
        </div>
      ) : (
        ""
      )}
      {turnOnOffAppTabs ? <ApplicationHeader /> : ""}
      <NotificationBanner
        notificationIcon="http://cdn.onlinewebfonts.com/svg/img_331995.png"
        notificationTitle="Alert"
        altText="Alert: You can only have 4 tabs"
        notificationDescp="You can only have 4 tabs"
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
                scrollGlances={scrollGlances}
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
            <Route
              path="/"
              element={
                <Today
                  linkTarget={linkTarget}
                  numberOfCounts={numberOfCounts}
                  countsMsg={countsMsg}
                  countsSch={countsSch}
                  toogleModalAction={toogleModalAction}
                  toggleScrollGlance={toggleScrollGlance}
                  recentApps={recentApps}
                  pinnedApps={pinnedApps}
                  newGlanceM={newGlanceM}
                />
              }
            />
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
                  recentApplications={recentApplications}
                  pinnedApplications={pinnedApplications}
                  toogleModalAction={toogleModalAction}
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
                  toogleModalAction={toogleModalAction}
                  toggleScrollGlance={toggleScrollGlance}
                  recentApps={recentApps}
                  pinnedApps={pinnedApps}
                  newGlanceM={newGlanceM}
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
            <Route
              path="/messageCenterWinTouch"
              element={<MessageCenterWinTouch />}
            />
            <Route path="/organizer" element={<Organizer />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}
