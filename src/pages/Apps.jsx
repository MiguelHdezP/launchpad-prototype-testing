import React, { useState, useEffect } from "react";
import ContentContainer from "../components/content-container/ContentContainer";
import SectionHeader from "../components/section-header/SectionHeader";
import Form from "../components/form-elements/Form";
import FieldSet from "../components/form-elements/FieldSet";
import InputFilter from "../components/inputFilter/InputFilter";
import ApplicationsContainer from "../components/applications-container/ApplicationsContainer";
import Divider from "../components/divider/Divider";
import MockAppsData from "../context/mockData.json";

export default function Apps(props) {
  const { searchConfig, sortConfig, arrangeConfig, dataNoData, filterFlag } =
    props;
  const fakeData = MockAppsData.slice(0, dataNoData);
  const [payLoadData, setPayLoadData] = useState("");
  const [searchApps, setSearchApp] = useState("");
  const [arrangeApps, setArrangeApps] = useState("");
  const filterData = () => {
    let fakeDataFiltered = fakeData.filter((data) => {
      if (searchApps === "" || searchApps === " ") {
        return data;
      } else if (
        data.appName.toLowerCase().includes(searchApps.toLocaleLowerCase())
      ) {
        return data;
      }
    });
    if (arrangeConfig == 5) setArrangeApps("n-citrix-apps");
    else if (arrangeConfig == 6) setArrangeApps("z-citrix-apps");
    if (sortConfig == 3)
      return fakeDataFiltered.sort((a, b) => {
        if (a.appName.toLowerCase() < b.appName.toLowerCase()) return -1;
        else if (a.appName.toLowerCase() > b.appName.toLowerCase()) return 1;
        else return 0;
      });
    else if (sortConfig == 4)
      return fakeDataFiltered.sort((a, b) => {
        if (a.appName.toLowerCase() < b.appName.toLowerCase()) return 1;
        else if (a.appName.toLowerCase() > b.appName.toLowerCase()) return -1;
        else return 0;
      });
  };

  useEffect(() => {
    let newData = filterData();
    setPayLoadData(newData);
  }, [searchApps, dataNoData, sortConfig, arrangeConfig]);

  const inputFn = (value) => {
    setSearchApp(value);
  };

  return (
    <ContentContainer>
      <SectionHeader sectionText="Applications" />
      {dataNoData > 15 ? (
        <Form>
          <FieldSet classFieldset="app-filtering">
            <InputFilter inputFn={inputFn} fnToggle={searchConfig} />
          </FieldSet>
        </Form>
      ) : (
        ""
      )}
      {dataNoData > 15 ? <Divider customClassDivider="apps-divider" /> : ""}
      <ApplicationsContainer
        appsPayload={fakeData.length ? payLoadData : []}
        classAppContainer={`${arrangeApps} citrix-apps`}
        customClass={dataNoData > 15 ? "" : "citrix-apps-extraPadding"}
        filterFlag={filterFlag}
      />
    </ContentContainer>
  );
}
