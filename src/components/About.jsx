import React from "react";
import {
  IkoButton,
  IkoCard,
  IkoCol,
  IkoContainer,
  IkoRow,
} from "../ikoComponents";
import Title from "./Title";
import avatar from "../imgs/avatar.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <IkoContainer>
        <IkoRow>
          <IkoCol col={12}>
            <Title sub="Get To Know" tag="h2" className="about__title">
              About Me
            </Title>
          </IkoCol>
          <IkoCol col={6} mdCol={12} smCol={12}>
            <IkoRow>
              <IkoCol col={12} mdCol={2} smCol={1}></IkoCol>
              <IkoCol col={8} mdCol={8} smCol={10}>
                <div className="about__img" style={{ marginBottom: 20 }}>
                  <img src={avatar} alt="" />
                </div>
              </IkoCol>
            </IkoRow>
          </IkoCol>
          <IkoCol col={6} mdCol={12} smCol={12}>
            <IkoRow className="about__cards">
              <IkoCol col={4} mdCol={4} smCol={12}>
                <IkoCard>
                  <IkoCard.Body>
                    <div className="about__icon">
                      <i className="fa-solid fa-medal"></i>
                    </div>
                    <Title desc="+7 Years Workings">Experience</Title>
                  </IkoCard.Body>
                </IkoCard>
              </IkoCol>
              <IkoCol col={4} mdCol={4} smCol={12}>
                <IkoCard>
                  <IkoCard.Body>
                    <div className="about__icon">
                      <i className="fa-solid fa-user-group"></i>
                    </div>
                    <Title desc="300+ Worldwide">Clients</Title>
                  </IkoCard.Body>
                </IkoCard>
              </IkoCol>
              <IkoCol col={4} mdCol={4} smCol={12}>
                <IkoCard>
                  <IkoCard.Body>
                    <div className="about__icon">
                      <i className="fa-solid fa-diagram-project"></i>
                    </div>
                    <Title desc="40+ Completed">Projects</Title>
                  </IkoCard.Body>
                </IkoCard>
              </IkoCol>
            </IkoRow>
            <IkoRow>
              <IkoCol col={12} className="about__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias odio minima illo. Porro, dolores voluptates nam sunt
                facilis ipsam iste, quae debitis fugit optio, eligendi deserunt
                libero cum odio fugiat.
              </IkoCol>
              <IkoCol col={12}>
                <IkoButton size="lg">Let's Task</IkoButton>
              </IkoCol>
            </IkoRow>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </section>
  );
};

export default About;
