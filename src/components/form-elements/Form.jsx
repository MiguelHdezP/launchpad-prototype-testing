import React from "react";
import "./Form.scss";

export default function Form(props) {
  const { actionForm = "", formClass } = props;
  return (
    <form action={actionForm} id={`js-${formClass}`} className={formClass}>
      {props.children}
    </form>
  );
}
