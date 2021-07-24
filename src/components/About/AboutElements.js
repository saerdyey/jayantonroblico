import styled from "styled-components";

export const AboutContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
  background-color: #fff;
  /* color: #051f20; */
`;

export const AboutH1 = styled.h1`
  font-size: 42px;
  font-family: "Tourney", cursive;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const AboutWrapper = styled.div`
  display: flex;
  padding-top: 60px;
  padding-bottom: 30px;
  border-bottom: 2px solid #051f20;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    padding-top: 20px;

    &:nth-child(2) {
      flex-direction: column-reverse !important;
    }
  }
`;

export const AboutText = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AboutP = styled.p`
  width: 90%;
  font-size: 20px;
  margin-top: 20px;
`;

export const AboutH3 = styled.h3`
  font-size: 22px;
  color: #27a361;
  width: 90%;
  margin-top: 40px;
`;

export const AboutH4 = styled.h4`
  width: 90%;
  font-size: 20px;
  margin-top: 20px;
`;

export const AboutImgWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    padding-top: 20px;
  }
`;

export const HexWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  transform-origin: 50% 50%;
  overflow: hidden;
  text-align: center;
  margin: 0;
  width: 500px;
  height: 250px;
  transform: rotate(120deg);
`;

export const HexWrapperInner1 = styled.div`
  margin: 0 auto;
  transform-origin: 50% 50%;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transform: rotate(-60deg);
  /* border: 3px solid red; */
`;
export const HexWrapperInner2 = styled.div`
  margin: 0 auto;
  transform-origin: 50% 50%;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transform: rotate(-60deg);
  /* border: 3px solid red; */
`;

export const AboutImg = styled.img`
  width: 300px;
  height: auto;
  margin-top: -5px;
`;

export const Spotify = styled.div`
  width: 90%;
  align-self: center;
  padding-right: 100px;
  @media only screen and (max-width: 720px) {
    padding: 0;
  }
`;
