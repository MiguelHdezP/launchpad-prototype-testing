import React from "react";
import "./ContainerGlance.scss";
import SectionHeader from "../section-header/SectionHeader";

export default function ContainerGlance(props) {
  const {
    glanceTitle,
    children,
    hyperLinkData,
    customClassSectHeader,
    customClassIndividualGlance,
    icon1On,
    icon2On,
    newMessagesCount = 0,
  } = props;
  return (
    <section className={`${customClassIndividualGlance} todays-glances`}>
      <SectionHeader
        sectionText={glanceTitle}
        hyperLinkData={hyperLinkData}
        customClassSectHeader={customClassSectHeader}
        icon1On={icon1On}
        icon2On={icon2On}
        newMessagesCount={newMessagesCount}
      />
      <div>{children}</div>
    </section>
  );
}
