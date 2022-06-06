import React from "react";
import ContentContainer from "../components/content-container/ContentContainer";
import SectionHeader from "../components/section-header/SectionHeader";

export default function Messages() {
  return (
    <ContentContainer>
      <SectionHeader sectionText="Messages" />
      <div className="fakeContainer"></div>
    </ContentContainer>
  );
}
