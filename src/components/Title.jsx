import React from "react";
import { IkoTitle } from "../ikoComponents";

const Title = ({ tag, sub, desc, className, children }) => {
  let txtClass = "title";

  if (className) {
    txtClass += " " + className;
  }

  return (
    <div className={txtClass}>
      {sub && (
        <IkoTitle tag="div" className="title__sub">
          {sub}
        </IkoTitle>
      )}
      <IkoTitle className="title__main" tag={tag}>
        {children}
      </IkoTitle>
      {desc && (
        <IkoTitle tag="div" className="title__desc">
          {desc}
        </IkoTitle>
      )}
    </div>
  );
};

export default Title;
