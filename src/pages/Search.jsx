import React from "react";
import ContentContainer from "../components/content-container/ContentContainer";
import SectionHeader from "../components/section-header/SectionHeader";

export default function Search() {
  return (
    <ContentContainer>
      <SectionHeader sectionText="Apps Search" />
      <div className="fakeContainer"></div>
    </ContentContainer>
  );
}
