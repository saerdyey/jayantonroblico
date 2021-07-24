import styled from "styled-components";
import Card from "./Card";

export const WorksContainer = styled.div`
  padding: 40px;
  background-color: #010606;
  color: #fff;
`;

export const WorksH1 = styled.h1`
  font-size: 42px;
  font-family: "Tourney", cursive;
  text-align: center;
`;

export const WorksWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1120px;
  width: 70%;
  margin: 0 auto;
  @media only screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const CardsWrapper = styled.div`
  position: relative;
  margin: 50px 0 45px;
`;

export const Cards = styled.ul`
  margin-bottom: 24px;

  @media only screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const StyledCard = styled(Card)`
  display: flex;
  width: 100%;
  .cards__item {
    display: flex;
    flex: 1;
    margin: 0 1rem;
    border-radius: 10px;
  }

  .cards__item__link {
    display: flex;
    flex-flow: column;
    width: 100%;
    box-shadow: 0 6px 20px rgba(56, 255, 245, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
  }

  .cards__item__pic-wrap {
    position: relative;
    width: 100%;
    padding-top: 67%;
    overflow: hidden;
  }

  .fade-img {
    animation-name: fade-img;
    animation-duration: 2s;
  }

  .cards__item__pic-wrap::after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #010606;
    background-color: #01bf71;
    box-sizing: border-box;
  }

  .cards__item__img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;
  }

  .cards__item__img:hover {
    transform: scale(1.1);
  }

  .cards__item__info {
    padding: 20px 30px 30px;
  }

  .cards__item__text {
    color: #fff;
    font-size: 16px;
    font-weight: lighter;
    line-height: 24px;
    width: 100%;
  }

  @media only screen and (max-width: 1024px) {
    .cards__item {
      margin-bottom: 2rem;
    }
  }
`;
