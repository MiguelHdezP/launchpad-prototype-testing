import React from "react";
import "./PatientCard.scss";

export default function PatientCard(props) {
  const {
    patientName,
    patientInfo1,
    patientInfo2,
    patientInfo3,
    patientInfo4,
  } = props;
  return (
    <article>
      <div className="patientCard-article1">
        <h1>{patientName}</h1>
        <p>{patientInfo1}</p>
        <p>{patientInfo2}</p>
      </div>
      <div className="patientCard-article2">
        <p>{patientInfo3}</p>
        <p>{patientInfo4}</p>
      </div>
    </article>
  );
}
