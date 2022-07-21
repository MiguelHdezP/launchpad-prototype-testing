import React from "react";
import "./SectionHeader.scss";
import Hyperlink from "../hyperlink/Hyperlink";
import { BsFillFunnelFill } from "react-icons/bs";
import IconExternalLink from "terra-icon/lib/icon/IconExternalLink";

export default function SectionHeader(props) {
  const {
    sectionText,
    icon1On = false,
    icon2On = false,
    hyperLinkData = {},
    customClassSectHeader,
    newMessagesCount,
  } = props;
  const {
    customClassHyperlink = "",
    hyperlinkText = "",
    hrefHyperlink = "",
    hyperlinkTarget = "",
  } = hyperLinkData;
  return (
    <header
      id="js-header-header"
      className={`${customClassSectHeader} section-header`}
    >
      <div className="section-header-title">
        <span className="section-title">{sectionText}</span>
        <span
          className={`section-count ${newMessagesCount ? "countBubble" : ""}`}
        >
          {newMessagesCount ? newMessagesCount : ""}
        </span>
      </div>
      <div>
        {hyperlinkText.length ? (
          <Hyperlink
            customClassHyperlink={customClassHyperlink}
            hyperlinkText={hyperlinkText}
            hrefHyperlink={hrefHyperlink}
            hyperlinkTarget={hyperlinkTarget}
          />
        ) : (
          ""
        )}
        {icon1On ? <BsFillFunnelFill /> : ""}
        {icon2On ? <IconExternalLink /> : ""}
      </div>
    </header>
  );
}
