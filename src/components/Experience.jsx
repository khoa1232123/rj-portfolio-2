import React from "react";
import {
  IkoCard,
  IkoCol,
  IkoContainer,
  IkoRow,
  IkoTitle,
} from "../ikoComponents";
import BoxIcon from "./BoxIcon";
import Title from "./Title";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <IkoContainer>
        <IkoRow>
          <IkoCol col={12}>
            <Title
              sub="What Skill I Have"
              tag="h2"
              className="experience__title"
            >
              My Experience
            </Title>
          </IkoCol>
          <IkoCol col={6} mdCol={12} style={{ marginBottom: 15 }}>
            <IkoCard className="experience__card">
              <IkoCard.Body>
                <IkoTitle center className="experience__card__title">
                  Frontend Development
                </IkoTitle>
                <IkoRow>
                  <IkoCol col={6} smCol={12}>
                    <BoxIcon
                      icon={"fa-solid fa-circle-check"}
                      title="HTML"
                      desc="Experienced"
                    />
                    <BoxIcon
                      icon={"fa-solid fa-circle-check"}
                      title="CSS"
                      desc="Experienced"
                    />
                    <BoxIcon
                      icon={"fa-solid fa-circle-check"}
                      title="Javascript"
                      desc="Intermediate"
                    />
                  </IkoCol>
                  <IkoCol col={6} smCol={12}>
                    <BoxIcon
                      icon={"fa-solid fa-circle-check"}
                      title="Bootstrap"
                      desc="Experienced"
                    />
                    <BoxIcon
                      icon={"fa-solid fa-circle-check"}
                      title="Wordpress"
                      desc="Experienced"
                    />
                    <BoxIcon
                      icon={"fa-solid fa-circle-check"}
                      title="ReactJS"
                      desc="Intermediate"
                    />
                  </IkoCol>
                </IkoRow>
              </IkoCard.Body>
            </IkoCard>
          </IkoCol>
          <IkoCol col={6} mdCol={12}>
            <IkoCard className="experience__card">
              <IkoCard.Body>
                <IkoTitle center className="experience__card__title">
                  Backend Development
                </IkoTitle>
                <IkoRow>
                  <IkoCol col={6} smCol={12}>
                    <BoxIcon
                      icon={"fa-solid fa-circle-check"}
                      title="NodeJS"
                      desc="Intermediate"
                    />
                    <BoxIcon
                      icon={"fa-solid fa-circle-check"}
                      title="MongoDB"
                      desc="Intermediate"
                    />
                    <BoxIcon
                      icon={"fa-solid fa-circle-check"}
                      title="PHP"
                      desc="Experienced"
                    />
                  </IkoCol>
                  <IkoCol col={6} smCol={12}>
                    <BoxIcon
                      icon={"fa-solid fa-circle-check"}
                      title="MySQL"
                      desc="Intermediate"
                    />
                    <BoxIcon
                      icon={"fa-solid fa-circle-check"}
                      title="FireBase"
                      desc="Basic"
                    />
                  </IkoCol>
                </IkoRow>
              </IkoCard.Body>
            </IkoCard>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </section>
  );
};

export default Experience;
