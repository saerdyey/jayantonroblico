import styled from "styled-components";

export const ContactContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
  background-color: #fff;
  width: 90%;
  padding-bottom: 40px;
  position: relative;
`;

export const ContactH1 = styled.h1`
  font-size: 42px;
  font-family: "Tourney", cursive;
`;

export const ContactContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

export const ContactIconContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactIcon = styled.img`
  width: 70%;
  margin: 5px;
`;

export const ContactDetails = styled.div`
  flex: 1;
`;

export const ContactH3 = styled.h3`
  width: 90%;
  font-size: 24px;
  margin-top: 5px;
  font-weight: lighter;
  @media only screen and (max-width: 720px) {
    font-size: 16px;
  }
`;

export const ContactEmail = styled.a`
  width: 100px;
  font-size: 24px;
  color: #01bf71;
  margin-top: 5px;
  @media only screen and (max-width: 720px) {
    font-size: 16px;
  }
`;

export const ContactPs = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
  width: 100%;
  padding: 20px;
`;
export const ContactP = styled.p`
  width: 90%;
  font-size: 20px;
  margin-top: 5px;
  @media only screen and (max-width: 720px) {
    font-size: 16px;
  }
`;
