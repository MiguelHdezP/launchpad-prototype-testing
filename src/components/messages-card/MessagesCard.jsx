import React, { useEffect, useState } from "react";
import "./MessagesCard.scss";
import IconClock from "terra-icon/lib/icon/IconClock";
import IconFlag from "terra-icon/lib/icon/IconFlag";
import IconModerate from "terra-icon/lib/icon/IconModerate";

export default function MessagesCard(props) {
  const {
    messageCard = "",
    messageCard1 = "",
    messageCard2 = "",
    messageCard3 = "",
    messageCard4 = "",
    messageCardIcon1 = false,
    messageCardIcon2 = false,
    messageCardIcon3 = false,
    newMessage = false,
    toggleModalEmailRead,
  } = props;
  const [toggleNewMessage, setToggleNewMessage] = useState(newMessage);

  useEffect(() => {
    setToggleNewMessage(newMessage);
  }, [newMessage]);

  const handleClick = () => {
    toggleModalEmailRead();
    setToggleNewMessage(false);
  };

  return (
    <div
      className="messages-card"
      onClick={() => (newMessage ? handleClick() : "")}
    >
      <article>
        <div className="messagesCard-article1">
          <h1>{messageCard}</h1>
          <p>{messageCard1}</p>
          <p>
            {toggleNewMessage ? <span className="circle-email"></span> : ""}
            {messageCard2}
          </p>
        </div>
        <div className="messagesCard-article2">
          {messageCardIcon1 ? (
            <span>
              <IconClock />
            </span>
          ) : (
            ""
          )}
          {messageCardIcon2 ? (
            <span>
              <IconFlag />
            </span>
          ) : (
            ""
          )}
          {messageCardIcon3 ? (
            <span>
              <IconModerate />
            </span>
          ) : (
            ""
          )}
          <p className="messages-card-hour">{messageCard3}</p>
        </div>
      </article>
      <p>{messageCard4}</p>
    </div>
  );
}
