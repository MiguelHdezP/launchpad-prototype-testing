import React from "react";
import ContentContainer from "../components/content-container/ContentContainer";
import SectionHeader from "../components/section-header/SectionHeader";
import Lists from "../components/lists/Lists";

export default function Homepage() {
  return (
    <ContentContainer customClassContainer="homepage">
      <SectionHeader sectionText="Homepage" />
      <h1>This is the Homepage</h1>
    </ContentContainer>
  );
}
