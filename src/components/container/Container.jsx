import React from "react";
import "./Container.scss";

export default function Container(props) {
  return (
    <main id="js-main-container" className="main-container">
      {props.children}
    </main>
  );
}
