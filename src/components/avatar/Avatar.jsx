import React from "react";
import "./Avatar.scss";

export default function Avatar(props) {
  const { customClassAvatar = "", avatarInitials = "" } = props;
  return <div className={`${customClassAvatar} avatar`}>{avatarInitials}</div>;
}
