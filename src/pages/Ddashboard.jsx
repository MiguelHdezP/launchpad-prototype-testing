import React from "react";
import ContentContainer from "../components/content-container/ContentContainer";
import SectionHeader from "../components/section-header/SectionHeader";

export default function Ddashboard() {
  return (
    <ContentContainer>
      <SectionHeader sectionText="Discharge Dashboard" />
      <div className="fakeContainer"></div>
    </ContentContainer>
  );
}
