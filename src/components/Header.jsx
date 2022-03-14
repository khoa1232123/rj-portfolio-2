import React from "react";
import { IkoButton, IkoCol, IkoContainer, IkoRow } from "../ikoComponents";
import avatar from "../imgs/avatar.jpg";
import Title from "./Title";

const Header = () => {
  return (
    <header className="header" id="header">
      <IkoContainer>
        <IkoRow>
          <IkoCol col={12} style={{ marginTop: 50 }}>
            <Title
              sub="Hello, I'm"
              desc="Fullstack Developer"
              className="header__title"
              tag="h1"
            >
              Nguyễn Đình Khôi
            </Title>
          </IkoCol>
          <IkoCol col={12} style={{ textAlign: "center" }}>
            <div className="header__actions">
              <IkoButton outline color="white">
                Download CV
              </IkoButton>
              <IkoButton style={{ marginLeft: 10 }}>Let's Talk</IkoButton>
            </div>
          </IkoCol>
          <IkoCol>
            <img src={avatar} alt="" className="header__avatar" />
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </header>
  );
};

export default Header;
