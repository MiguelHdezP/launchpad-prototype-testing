import React, { useState, useEffect } from "react";
import "./NotificationBanner.scss";

export default function NotificationBanner(props) {
  const {
    notificationIcon = "",
    altText = "",
    notificationTitle = "",
    notificationDescp = "",
    notificationTurnOnOff,
  } = props;
  return (
    <section
      id="js-notification-banner"
      className={`${
        notificationTurnOnOff ? "showNotification" : "hideNotification"
      } notification-banner`}
    >
      <div className="notification-banner-iconTitle">
        <img src={notificationIcon} alt={altText} />
        <h3>{notificationTitle}</h3>
      </div>
      <div className="notification-banner-description">
        <p>{notificationDescp}</p>
      </div>
    </section>
  );
}
