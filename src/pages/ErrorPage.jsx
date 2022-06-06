import React from "react";
import ContentContainer from "../components/content-container/ContentContainer";
import SectionHeader from "../components/section-header/SectionHeader";

export default function ErrorPage() {
  return (
    <ContentContainer>
      <SectionHeader sectionText="404 page" />
      <div className="fakeContainer"></div>
    </ContentContainer>
  );
}
