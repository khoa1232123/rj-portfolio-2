import React from "react";
import { IkoCard, IkoCol, IkoContainer, IkoRow } from "../ikoComponents";
import BoxIcon from "./BoxIcon";
import Title from "./Title";

const Service = () => {
  return (
    <section className="services" id="services">
      <IkoContainer>
        <IkoRow>
          <IkoCol col={12}>
            <Title sub="What I Offer" className="services__title">
              Services
            </Title>
          </IkoCol>
          <IkoCol col={4} smCol={12} style={{ marginBottom: 15 }}>
            <IkoCard className="services__card">
              <IkoCard.Header>UI/UX Design</IkoCard.Header>
              <IkoCard.Body>
                <BoxIcon
                  icon="fa-solid fa-check"
                  title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                  className="services__item"
                />
                <BoxIcon
                  icon="fa-solid fa-check"
                  title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                  className="services__item"
                />
                <BoxIcon
                  icon="fa-solid fa-check"
                  title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                  className="services__item"
                />
                <BoxIcon
                  icon="fa-solid fa-check"
                  title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                  className="services__item"
                />
                <BoxIcon
                  icon="fa-solid fa-check"
                  title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                  className="services__item"
                />
              </IkoCard.Body>
            </IkoCard>
          </IkoCol>
          <IkoCol col={4} smCol={12} style={{ marginBottom: 15 }}>
            <IkoCard className="services__card">
              <IkoCard.Header>Web Development</IkoCard.Header>
              <IkoCard.Body>
                <BoxIcon
                  icon="fa-solid fa-check"
                  title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                  className="services__item"
                />
                <BoxIcon
                  icon="fa-solid fa-check"
                  title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                  className="services__item"
                />
                <BoxIcon
                  icon="fa-solid fa-check"
                  title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                  className="services__item"
                />
                <BoxIcon
                  icon="fa-solid fa-check"
                  title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                  className="services__item"
                />
                <BoxIcon
                  icon="fa-solid fa-check"
                  title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                  className="services__item"
                />
              </IkoCard.Body>
            </IkoCard>
          </IkoCol>
          <IkoCol col={4} smCol={12}>
            <IkoCard className="services__card">
              <IkoCard.Header>Content Creation</IkoCard.Header>
              <IkoCard.Body>
                <BoxIcon
                  icon="fa-solid fa-check"
                  title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                  className="services__item"
                />
                <BoxIcon
                  icon="fa-solid fa-check"
                  title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                  className="services__item"
                />
                <BoxIcon
                  icon="fa-solid fa-check"
                  title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                  className="services__item"
                />
                <BoxIcon
                  icon="fa-solid fa-check"
                  title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                  className="services__item"
                />
                <BoxIcon
                  icon="fa-solid fa-check"
                  title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                  className="services__item"
                />
              </IkoCard.Body>
            </IkoCard>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </section>
  );
};

export default Service;
