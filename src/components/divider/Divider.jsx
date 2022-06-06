import React from "react";
import "./Divider.scss";

export default function Divider(props) {
  const { customClassDivider = "" } = props;
  return <div className={`${customClassDivider} divider`}></div>;
}
