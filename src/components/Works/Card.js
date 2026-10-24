import React from "react";
import { Link } from "react-router-dom";
import { Window } from "../Retro";

const accents = ["var(--mustard)", "var(--mint)", "var(--orange)"];

const Card = ({
  path,
  label,
  src,
  text,
  stack,
  featured,
  reverse,
  badge,
  cta,
  offline,
  index = 0,
  className,
}) => {
  const fileName = label.toLowerCase().replace(/\s+/g, "_") + ".exe";
  // offline projects still look clickable but land on the 404 page
  let Wrapper = "div";
  let linkProps = {};
  if (offline) {
    Wrapper = Link;
    linkProps = { to: `/404?project=${encodeURIComponent(label)}` };
  } else if (path) {
    Wrapper = "a";
    linkProps = { href: path, target: "_blank", rel: "noopener noreferrer" };
  }

  return (
    <li
      className={`${className}${featured ? " card--featured" : ""}${
        reverse ? " card--reverse" : ""
      }`}
    >
      <Wrapper className="card__link" {...linkProps}>
        <Window title={fileName} accent={accents[index % accents.length]} flush>
          <figure className="card__pic">
            <img alt={label} src={src} />
          </figure>
          <div className="card__info">
            {badge && <span className="card__badge">{badge}</span>}
            <h3 className="card__label">{label}</h3>
            <p className="card__text">{text}</p>
            {stack && <p className="card__stack">{stack}</p>}
            <span className="card__cta">
              {cta || (path || offline ? "open project ↗" : "you are here ●")}
            </span>
          </div>
        </Window>
      </Wrapper>
    </li>
  );
};

export default Card;
