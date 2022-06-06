import React from "react";
import "./FieldSet.scss";

export default function FieldSet(props) {
  const { children, classFieldset } = props;
  return <fieldset className={classFieldset}>{children}</fieldset>;
}
