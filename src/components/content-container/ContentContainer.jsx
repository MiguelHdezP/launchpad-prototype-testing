import React from "react";
import "./ContentContainer.scss";

export default function ContentContainer(props) {
  const { customClassContainer } = props;
  return (
    <section
      id="js-content-container"
      className={`${customClassContainer} content-container`}
    >
      {props.children}
    </section>
  );
}
