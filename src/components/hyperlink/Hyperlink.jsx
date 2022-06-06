import React from "react";
import "./Hyperlink.scss";

export default function Hyperlink(props) {
  const {
    customClassHyperlink = "",
    hyperlinkText = "",
    hrefHyperlink = "",
    hyperlinkTarget = "",
    listLinkTarget,
    children,
  } = props;
  let windowMode = hrefHyperlink === "/organizer" ? "fullscreen='yes'" : "";
  return hrefHyperlink === "/organizer" ? (
    <a
      className={`${customClassHyperlink} hyperlink`}
      target={hyperlinkTarget}
      onClick={() => {
        window.open(listLinkTarget || hrefHyperlink, "", windowMode);
      }}
    >
      {children || hyperlinkText}
    </a>
  ) : (
    <a
      className={`${customClassHyperlink} hyperlink`}
      href={listLinkTarget || hrefHyperlink}
      target="_blank"
    >
      {children || hyperlinkText}
    </a>
  );
}
