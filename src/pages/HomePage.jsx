import React from "react";
import ContentContainer from "../components/content-container/ContentContainer";
import SectionHeader from "../components/section-header/SectionHeader";
import Lists from "../components/lists/Lists";

export default function Homepage() {
  return (
    <ContentContainer customClassContainer="homepage">
      <SectionHeader sectionText="Homepage" />
      <ul>
        <li>
          <a href="/apps">Prototype 1</a>
        </li>
        <li>
          <a href="">Prototype 2</a>
        </li>
        <li>
          <a href="">Prototype 3</a>
        </li>
      </ul>
    </ContentContainer>
  );
}
