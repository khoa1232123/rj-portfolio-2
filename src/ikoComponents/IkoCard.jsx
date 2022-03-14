import React from "react";

const IkoCard = ({ className, children }) => {
  let txtClass = "iko-card";
  if (className) {
    txtClass += " " + className;
  }
  return <div className={txtClass}>{children}</div>;
};

const Header = ({ children }) => {
  return <div className="iko-card__header">{children}</div>;
};

const Footer = ({ children }) => {
  return <div className="iko-card__footer">{children}</div>;
};

const Body = ({ children }) => {
  return <div className="iko-card__body">{children}</div>;
};

export default Object.assign(IkoCard, {
  Header,
  Body,
  Footer,
});
