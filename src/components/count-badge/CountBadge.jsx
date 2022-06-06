import React, { useEffect, useState } from "react";
import "./CountBadge.scss";

export default function CountBadge(props) {
  const { count, customClass } = props;
  const [animateCount, setAnimateCount] = useState(count ? "count-grow" : "");
  useEffect(() => {
    setAnimateCount("count-grow");
  }, [count]);

  setTimeout(() => {
    setAnimateCount("");
  }, 600);
  return (
    <div className={`${customClass} ${animateCount} count-badge`}>{count}</div>
  );
}
