import React from "react";
import "./Lists.scss";
import Hyperlink from "../hyperlink/Hyperlink";

export default function Lists(props) {
  const {
    customClassList = "",
    listLinkData = {},
    children,
    activePatient = false,
    patientName = "",
  } = props;
  const { hyperlinkTarget, hrefHyperlink, listLinkTarget = "" } = listLinkData;
  let evalValue =
    patientName === "Suzie Smith" || patientName === "Essie Stanley"
      ? true
      : false;
  console.log(evalValue, evalValue ? patientName : "");
  return (
    <li
      className={`${customClassList} lists ${
        activePatient ? "active-patient" : ""
      }`}
    >
      {listLinkTarget.length ? (
        evalValue ? (
          <Hyperlink
            hyperlinkTarget={hyperlinkTarget}
            hrefHyperlink={hrefHyperlink}
            listLinkTarget={listLinkTarget}
          >
            {children}
          </Hyperlink>
        ) : (
          children
        )
      ) : (
        children
      )}
    </li>
  );
}
