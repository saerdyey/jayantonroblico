import React from "react";
import { Link } from "react-router-dom";

const Card = ({ path, label, src, text, className }) => {
  return (
    <>
      <div className={className}>
        <li className="cards__item">
          <a className="cards__item__link" href={path}>
            <figure className="cards__item__pic-wrap" data-category={label}>
              <img className="cards__item__img" alt="Travel Image" src={src} />
            </figure>
            <div className="cards__item__info">
              <h5 className="cards__item__text">{text}</h5>
            </div>
          </a>
        </li>
      </div>
    </>
  );
};

export default Card;