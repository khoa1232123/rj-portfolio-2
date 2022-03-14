import React from "react";

const BoxIcon = ({ icon, title, desc, className }) => {
  let txtClass = "box-icon";

  if (className) {
    txtClass += " " + className;
  }

  return (
    <div className={txtClass}>
      <div className="box-icon__icon">{icon && <i className={icon}></i>}</div>
      <div className="box-icon__content">
        <div className="box-icon__title">{title}</div>
        <div className="box-icon__desc">{desc}</div>
      </div>
    </div>
  );
};

export default BoxIcon;
