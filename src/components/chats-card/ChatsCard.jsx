import React from "react";
import "./ChatsCard.scss";
import IconClock from "terra-icon/lib/icon/IconClock";
import IconFlag from "terra-icon/lib/icon/IconFlag";
import IconModerate from "terra-icon/lib/icon/IconModerate";
import Avatar from "../avatar/Avatar";

export default function ChatsCard(props) {
  const {
    messageCard = "",
    messageCard1 = "",
    messageCard3 = "",
    messageCard4 = "",
    messageCardIcon1 = false,
    messageCardIcon2 = false,
    messageCardIcon3 = false,
    avatarVal = 0,
    messagesCount = 0,
  } = props;
  let colors = ["gr", "prp", "bl", "rd", "or", "yl", "lgr", "lbl", "lprp"];
  let initials = ["SK", "MA", "SC", "AP", "AL", "RG", "MH", "RV", "KS"];
  let randomeInteger = () => Math.floor(Math.random() * 9);

  return (
    <div className="chatsCard-card">
      <article>
        <div className="chatsCard-article-0">
          <span className="circle-email"></span>
          <div className="chatsCard-circle-avatars">
            {messagesCount === 1 ? (
              <div>
                <Avatar
                  customClassAvatar={colors[avatarVal]}
                  avatarInitials={initials[avatarVal]}
                />
              </div>
            ) : (
              ""
            )}
            {messagesCount === 2 ? (
              <div className="avatars-2-elements">
                <div className="avatars-md">
                  <Avatar
                    customClassAvatar={colors[avatarVal]}
                    avatarInitials={initials[avatarVal]}
                  />
                  <div className="avatars-fake-sapce"></div>
                </div>
                <div className="avatars-md">
                  <div className="avatars-fake-sapce"></div>
                  <Avatar
                    customClassAvatar={colors[randomeInteger()]}
                    avatarInitials={initials[randomeInteger()]}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
            {messagesCount === 4 ? (
              <div className="avatars-4-elements">
                <div className="avatars-sm">
                  <Avatar
                    customClassAvatar={colors[randomeInteger()]}
                    avatarInitials={initials[randomeInteger()]}
                  />
                  <Avatar
                    customClassAvatar={colors[randomeInteger()]}
                    avatarInitials={initials[randomeInteger()]}
                  />
                </div>
                <div className="avatars-sm">
                  <Avatar
                    customClassAvatar={colors[randomeInteger()]}
                    avatarInitials={initials[randomeInteger()]}
                  />
                  <Avatar
                    customClassAvatar={colors[randomeInteger()]}
                    avatarInitials={initials[randomeInteger()]}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="chatsCard-article1">
          <h1>{messageCard}</h1>
          <p>{messageCard1}</p>
        </div>
        <div className="chatsCard-article2">
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
          <p className="chats-card-hour">{messageCard3}</p>
        </div>
      </article>
      <p className="chats-last-message">{messageCard4}</p>
    </div>
  );
}
