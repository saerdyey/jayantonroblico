import styled from "styled-components";

export const TechsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  background-color: #fff;
  padding-bottom: 40px;
`;

export const TechsH1 = styled.h1`
  font-size: 42px;
  font-family: "Tourney", cursive;
  @media only screen and (max-width: 720px) {
  }
  @media only screen and (max-width: 480px) {
    font-size: 32px;
    width: 90%;
    text-align: center;
  }
`;

export const TechsContent = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto auto auto auto;
  width: 90%;
  padding: 10px;

  @media only screen and (max-width: 720px) {
    grid-template-columns: auto auto auto auto;
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: auto auto auto;
    padding: 5px;
  }
`;

export const TechBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px;
  @media only screen and (max-width: 480px) {
    margin: 8px;
  }
`;

export const TechIcon = styled.img`
  width: 120px;
  height: auto;

  &:hover {
    filter: invert(62%) sepia(68%) saturate(4484%) hue-rotate(121deg)
      drop-shadow(0 0 10px #1b5e20);
    /* filter: drop-shadow(0 0 20px #1b5e20); */
    transform: scale(1.2);
  }
  transition: all 0.1s;
  transform-origin: 50% 50%;

  @media only screen and (max-width: 480px) {
    width: 60px;
  }
`;

export const TechH3 = styled.h3`
  font-size: 24px;
  @media only screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
