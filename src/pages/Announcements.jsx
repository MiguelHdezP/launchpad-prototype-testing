import React from "react";
import ContentContainer from "../components/content-container/ContentContainer";
import SectionHeader from "../components/section-header/SectionHeader";

export default function Announcements() {
  return (
    <ContentContainer>
      <SectionHeader sectionText="Announcements" />
      <div className="fakeContainer"></div>
    </ContentContainer>
  );
}
