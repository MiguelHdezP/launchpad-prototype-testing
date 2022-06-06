import React from "react";
import "./Lists.scss";
import Hyperlink from "../hyperlink/Hyperlink";

export default function Lists(props) {
  const {
    customClassList = "",
    listLinkData = {},
    children,
    activePatient = false,
  } = props;
  const { hyperlinkTarget, hrefHyperlink, listLinkTarget = "" } = listLinkData;
  return (
    <li
      className={`${customClassList} lists ${
        activePatient ? "active-patient" : ""
      }`}
    >
      {listLinkTarget.length ? (
        <Hyperlink
          hyperlinkTarget={hyperlinkTarget}
          hrefHyperlink={hrefHyperlink}
          listLinkTarget={listLinkTarget}
        >
          {children}
        </Hyperlink>
      ) : (
        children
      )}
    </li>
  );
}
