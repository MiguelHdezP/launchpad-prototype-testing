import React from "react";
import "./Modal.scss";

export default function Modal(props) {
  const { children, customClass } = props;
  return (
    <div className={`modal ${customClass}`}>
      <div className={`modal-contents`}>{children}</div>
    </div>
  );
}
