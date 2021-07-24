import React from "react";
import Message from "../../images/message.png";
import Connect from "../../images/connect.png";
import {
  ContactContainer,
  ContactH1,
  ContactContent,
  ContactIconContainer,
  ContactIcon,
  ContactDetails,
  ContactEmail,
  ContactH3,
  ContactP,
  ContactPs,
} from "./ContactElements";

const ContactElements = () => {
  return (
    <ContactContainer id="contact">
      <ContactH1>my contact</ContactH1>
      <ContactContent>
        <ContactIconContainer>
          <ContactIcon src={Message} />
        </ContactIconContainer>
        <ContactDetails>
          <ContactH3>ping me up!</ContactH3>
          <ContactEmail href="mailto: jayantonroblico23@gmail.com">
            jayantonroblico23@gmail.com
          </ContactEmail>
          <ContactH3>Holy Spirit, Quezon City, Philippines</ContactH3>
          {/* <ContactPs>
            <ContactP>Let's grab a cup of coffee!</ContactP>
            <ContactP>...or not, 'coz' we're on quarantine</ContactP>
          </ContactPs> */}
        </ContactDetails>
      </ContactContent>
      <ContactContent>
        <ContactIconContainer>
          <ContactIcon src={Connect} />
        </ContactIconContainer>
        <ContactDetails>
          <ContactH3>connect with me!</ContactH3>
          <ContactEmail href="https://www.linkedin.com/in/jayantonroblico23">
            linkedin.com/in/jayantonroblico23
          </ContactEmail>
        </ContactDetails>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactElements;
