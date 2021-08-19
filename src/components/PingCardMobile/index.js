import React, { useState } from "react";
import emailjs from "emailjs-com";

import {
  PingContainer,
  PingHeader,
  PingH3,
  PingContent,
  FaTime,
  Square,
} from "./PingCardMobileElements";

const PingCardMobile = ({ isOpen, toggle }) => {
  const [pingData, setPingData] = useState({
    from_name: "",
    from_message: "",
    from_email: "",
  });

  const [pingLoading, setPingLoading] = useState(false);
  const [pingRes, setPingRes] = useState("");

  const userId = process.env.REACT_APP_USER_ID;
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;

  const inputHandler = (e) => {
    const value = e.target.value;
    setPingData({
      ...pingData,
      [e.target.name]: value,
    });
  };

  const clearMessage = () => {
    setTimeout(() => {
      setPingRes("");
    }, 4000);
  };

  const submitHandler = (e) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (
      pingData.from_name === "" ||
      pingData.from_email ||
      pingData.from_message
    ) {
      setPingRes("Sending failed, all fields are required 👾");
      clearMessage();
      return;
    }
    if (reg.test(pingData.email) === false) {
      setPingRes("Sending failed, invalid email 🤖");
      clearMessage();
      return;
    }
    setPingLoading(true);
    emailjs
      .send(serviceId, templateID, pingData, userId)
      .then((response) => {
        if (response.status === 200) {
          setPingRes("Message Sent 👌");
          setPingLoading(false);
        } else {
          setPingRes("Message Sending Failed 👽");
        }
      })
      .catch((e) => {
        console.log(e);
        setPingRes("Message Sending Failed 👽");
      });
    clearMessage();
  };
  return (
    <PingContainer isOpen={isOpen}>
      <PingHeader>
        <FaTime onClick={toggle} />
        <PingH3>Ping Card </PingH3>
      </PingHeader>
      <PingContent>
        <form>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              onChange={inputHandler}
              value={pingData.name}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={inputHandler}
              value={pingData.email}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="from_message">Message</label>
            <textarea
              onChange={inputHandler}
              value={pingData.message}
              type="text"
              name="message"
              rows="8"
              placeholder="Enter your message here ..."
              required
            />
          </div>
        </form>
        <p>{pingRes}</p>
        <input
          id="submit-btn"
          type="submit"
          value={pingLoading ? "Loading" : "Send"}
          onClick={submitHandler}
        />
      </PingContent>
    </PingContainer>
  );
};

export default PingCardMobile;
