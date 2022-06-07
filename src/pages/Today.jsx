import React, { useEffect, useState } from "react";
import "../styles/custom.scss";
import ContentContainer from "../components/content-container/ContentContainer";
import ContainerGlance from "../components/container-glance/ContainerGlance";
import Lists from "../components/lists/Lists";
import PatientCard from "../components/patient-card/PatientCard";
import MessagesCard from "../components/messages-card/MessagesCard";
import ChatsCard from "../components/chats-card/ChatsCard";

export default function Today(props) {
  const {
    linkTarget,
    numberOfCounts,
    countsMsg,
    countsSch,
    toggleModalEmailRead,
  } = props;
  const [arrayNumberMsg, setArrayNumberMsg] = useState(3);
  const [arrayNumberSch, setArrayNumberSch] = useState(5);
  let patientName = [
    "Allie Terry",
    "Alice Dyer",
    "Brody Katz",
    "Christina Burton",
    "Essie Stanley",
    "Gabriela Stephens",
    "Fredrick Mitchell",
    "Jack Knight",
    "Jenna Kimball",
    "Lucas McCoy",
    "Liana Frank",
    "Matteo Nielsen",
    "Olga Fleming",
    "Suzie Smith",
  ];
  let patHour = [
    "9:15 AM",
    "9:30 AM",
    "9:45 AM",
    "10:30 AM",
    "1:00 PM",
    "1:15 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:30 PM",
    "5:20 PM",
    "6:10 PM",
  ];
  let activePatient = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
  ];
  let messagesArr = [
    {
      id: 1,
      messageCard: "About: Elijah Crouch",
      messageCard1: "Sender Name",
      messageCard2: "RE: Message Title",
      messageCard3: "4:17 PM",
      messageCard4: "First Line of Message that spans the whole",
      messageCardIcon1: true,
      messageCardIcon2: true,
      messageCardIcon3: true,
      newMessage: false,
    },
    {
      id: 2,
      messageCard: "About: Matthew Hogan",
      messageCard1: "Sender Name, name Two, Name...",
      messageCard2: "RE: Message Title",
      messageCard3: "2:24 PM",
      messageCard4: "First Line of Message that spans the whole",
      messageCardIcon1: false,
      messageCardIcon2: true,
      messageCardIcon3: false,
      newMessage: false,
    },
    {
      id: 3,
      messageCard: "About: Gladys Woodard",
      messageCard1: "Sender Name, name Two",
      messageCard2: "FW: Message Title",
      messageCard3: "10:20 AM",
      messageCard4: "First Line of Message that spans the whole",
      messageCardIcon1: true,
      messageCardIcon2: false,
      messageCardIcon3: false,
      newMessage: false,
    },
  ];
  let messagesArr2 = [
    {
      id: 4,
      messageCard: "About: Susan O'Neal",
      messageCard1: "Sender Name, name Two, Name...",
      messageCard2: "Message Title",
      messageCard3: "10:23 AM",
      messageCard4: "First Line of Message that spans the whole",
      messageCardIcon1: false,
      messageCardIcon2: false,
      messageCardIcon3: true,
      newMessage: true,
    },
    {
      id: 5,
      messageCard: "About: Janie Fuller",
      messageCard1: "Sender Name",
      messageCard2: "Message Title",
      messageCard3: "10:30 AM",
      messageCard4: "First Line of Message that spans the whole",
      messageCardIcon1: false,
      messageCardIcon2: true,
      messageCardIcon3: true,
      newMessage: true,
    },
    {
      id: 6,
      messageCard: "About: David Little",
      messageCard1: "Sender Name",
      messageCard2: "Message Title",
      messageCard3: "10:50 AM",
      messageCard4: "First Line of Message that spans the whole",
      messageCardIcon1: false,
      messageCardIcon2: true,
      messageCardIcon3: true,
      newMessage: true,
    },
    {
      id: 7,
      messageCard: "About: Hugh Courtney",
      messageCard1: "Sender Name",
      messageCard2: "Message Title",
      messageCard3: "10:50 AM",
      messageCard4: "First Line of Message that spans the whole",
      messageCardIcon1: false,
      messageCardIcon2: true,
      messageCardIcon3: true,
      newMessage: false,
    },
    {
      id: 8,
      messageCard: "About: Lester Tipton",
      messageCard1: "Sender Name",
      messageCard2: "Message Title",
      messageCard3: "10:50 AM",
      messageCard4: "First Line of Message that spans the whole",
      messageCardIcon1: false,
      messageCardIcon2: true,
      messageCardIcon3: true,
      newMessage: true,
    },
  ];
  let chatsArr = [
    {
      messageCard: "Noor Shaikh",
      messageCard1: "",
      messageCard3: "4:17 PM",
      messageCard4: "First Line of Message that spans",
      messageCardIcon1: false,
      messageCardIcon2: false,
      messageCardIcon3: false,
      messagesCount: 1,
    },
    {
      messageCard: "About: Vera Rollins",
      messageCard1: "Juan Richards",
      messageCard3: "2:24 PM",
      messageCard4: "First Line of Message that spans",
      messageCardIcon1: false,
      messageCardIcon2: false,
      messageCardIcon3: false,
      messagesCount: 1,
    },
    {
      messageCard: "About: Polinka Pliego",
      messageCard1: "Name One +1",
      messageCard3: "10:37 AM",
      messageCard4: "First Line of Message that spans",
      messageCardIcon1: true,
      messageCardIcon2: false,
      messageCardIcon3: false,
      messagesCount: 2,
    },
    {
      messageCard: "About: Shin Clements",
      messageCard1: "Name One +6",
      messageCard3: "10:23 AM",
      messageCard4: "First Line of Message that spans",
      messageCardIcon1: false,
      messageCardIcon2: false,
      messageCardIcon3: false,
      messagesCount: 4,
    },
    {
      messageCard: "About: Herbert Howell",
      messageCard1: "Name One +1",
      messageCard3: "8:04 AM",
      messageCard4: "First Line of Message that spans",
      messageCardIcon1: false,
      messageCardIcon2: false,
      messageCardIcon3: false,
      messagesCount: 2,
    },
  ];
  const hyperLinkDataV = {
    hyperlinkText: "show more",
    hrefHyperlink: "/patient-list",
    hyperlinkTarget: linkTarget,
    listLinkTarget: "/webpatientchart",
  };
  const hyperLinkDataS = {
    hyperlinkText: "show more",
    hrefHyperlink: "/organizer",
    hyperlinkTarget: linkTarget,
    listLinkTarget: "/win64patientchart",
  };
  const [initialMsgArray, setInitialMsgArray] = useState(messagesArr);
  useEffect(() => {
    let newInitiaMsgArray = [];
    if (countsMsg > 0) {
      newInitiaMsgArray = [
        ...messagesArr2.slice(0, countsMsg),
        ...initialMsgArray,
      ];

      setArrayNumberSch(arrayNumberSch + countsSch);
      if (newInitiaMsgArray.length < 6) {
        setInitialMsgArray(newInitiaMsgArray);
        setArrayNumberMsg(newInitiaMsgArray.length);
      }
    }
  }, [numberOfCounts, countsMsg]);

  return (
    <ContentContainer customClassContainer="glances-container">
      <ContainerGlance
        glanceTitle="Schedule"
        hyperLinkData={hyperLinkDataS}
        customClassSectHeader="glances-section-header"
        customClassIndividualGlance="schedule-glance"
        newMessagesCount={countsSch}
      >
        <div>
          <ul>
            {[...Array(arrayNumberSch)].map((ele, i) => (
              <Lists
                key={i}
                listLinkData={hyperLinkDataS}
                customClassList="schedule-list"
                activePatient={activePatient[i]}
                patientName={patientName[i]}
              >
                <PatientCard
                  patientName={patientName[i]}
                  patientInfo1="F 34y DOB: 3/24/1987"
                  patientInfo2="MRN: 0987654321"
                  patientInfo3={patHour[i]}
                  patientInfo4="Reason visit"
                />
              </Lists>
            ))}
          </ul>
        </div>
      </ContainerGlance>
      <ContainerGlance
        glanceTitle="Applications"
        customClassSectHeader="glances-section-header"
        customClassIndividualGlance="chats-glance"
      >
        <div className="apps-recents">
          <div className="apps-recents-title">Recents</div>
          <ul>
            <li>
              <span className="apps-recent-badge">R</span> RadNet
            </li>
            <li>
              <span className="apps-recent-badge2">M</span>Message Center
            </li>
            <li>
              <span className="apps-recent-badge3">R</span>RevCycle
            </li>
          </ul>
        </div>
        <div className="apps-recents">
          <div className="apps-recents-title">Pinned</div>
          <ul>
            <li>
              <span className="apps-recent-badge">P</span>PowerChart
            </li>
            <li>
              <span className="apps-recent-badge4">C</span>Connect Messenger
            </li>
            <li>
              <span className="apps-recent-badge2">M</span>Message Center
            </li>
            <li>
              <span className="apps-recent-badge3">H</span>HealtheRegistries
            </li>
          </ul>
        </div>
      </ContainerGlance>
      <ContainerGlance
        glanceTitle="Messages"
        customClassSectHeader="glances-section-header"
        customClassIndividualGlance="messages-glance"
        icon1On={false}
        icon2On={false}
        newMessagesCount={countsMsg}
      >
        <div>
          <ul>
            {[...Array(arrayNumberMsg)].map((ele, i) => {
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
              } = initialMsgArray[i];
              return (
                <Lists key={i}>
                  <MessagesCard
                    messageCard={messageCard}
                    messageCard1={messageCard1}
                    messageCard2={messageCard2}
                    messageCard3={messageCard3}
                    messageCard4={messageCard4}
                    messageCardIcon1={messageCardIcon1}
                    messageCardIcon2={messageCardIcon2}
                    messageCardIcon3={messageCardIcon3}
                    newMessage={newMessage}
                    toggleModalEmailRead={toggleModalEmailRead}
                  />
                </Lists>
              );
            })}
          </ul>
        </div>
      </ContainerGlance>
      <ContainerGlance
        glanceTitle="Patient List"
        hyperLinkData={hyperLinkDataV}
        customClassSectHeader="glances-section-header"
        customClassIndividualGlance="patientList-glance"
      >
        <div>
          <ul>
            {[...Array(14)].map((ele, i) => (
              <Lists
                key={i}
                listLinkData={hyperLinkDataV}
                customClassList="patient-list"
                activePatient={activePatient[i]}
                patientName={patientName[i]}
              >
                <PatientCard
                  patientName={patientName[i]}
                  patientInfo1="F 34y DOB: 3/24/1987"
                  patientInfo2="MRN: 0987654321"
                  patientInfo3={"Room 347"}
                  patientInfo4="Condition"
                />
              </Lists>
            ))}
          </ul>
        </div>
      </ContainerGlance>
    </ContentContainer>
  );
}
