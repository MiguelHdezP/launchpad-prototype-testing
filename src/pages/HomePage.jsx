import React from "react";
import ContentContainer from "../components/content-container/ContentContainer";
import SectionHeader from "../components/section-header/SectionHeader";
import Lists from "../components/lists/Lists";

export default function Homepage() {
  return (
    <ContentContainer customClassContainer="homepage">
      <SectionHeader sectionText="Homepage" noExtraLinks={true} />
      <ul className="homepage-links">
        <li>
          <a
            href="https://launchpad-prototypes.herokuapp.com/today"
            target="_blank"
          >
            Prototype 1
          </a>
        </li>
        <li>
          <a
            href="https://launchpad-prototype2.herokuapp.com/today"
            target="_blank"
          >
            Prototype 2
          </a>
        </li>
        <li>
          <a
            href="https://launchpad-prototype3.herokuapp.com/today"
            target="_blank"
          >
            Prototype 3
          </a>
        </li>
        <li>
          <a
            href="https://launchpad-prototype4.herokuapp.com/today"
            target="_blank"
          >
            Prototype 4
          </a>
        </li>
        <li>
          <a
            href="https://launchpad-prototype5.herokuapp.com/today"
            target="_blank"
          >
            Prototype 5
          </a>
        </li>
        <li>
          <a
            href="https://launchpad-prototype6.herokuapp.com/today"
            target="_blank"
          >
            Prototype 6
          </a>
        </li>
      </ul>
    </ContentContainer>
  );
}
