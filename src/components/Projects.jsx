import React from "react";
import {
  IkoCard,
  IkoCol,
  IkoContainer,
  IkoRow,
  IkoTitle,
} from "../ikoComponents";
import project1 from "../imgs/projects/project-1.png";
import project2 from "../imgs/projects/project-2.png";
import project3 from "../imgs/projects/project-3.png";
import project4 from "../imgs/projects/project-4.png";
import project5 from "../imgs/projects/project-5.png";
import Title from "./Title";

const projectData = [
  {
    id: 1,
    img: project1,
    name: "khám bệnh",
    github: "",
    live: "",
  },
  {
    id: 2,
    img: project2,
    name: "Shop cây cảnh",
    github: "",
    live: "",
  },
  {
    id: 3,
    img: project3,
    name: "Pet Food",
    github: "",
    live: "",
  },
  {
    id: 4,
    img: project4,
    name: "Job Application",
    github: "",
    live: "",
  },
  {
    id: 5,
    img: project5,
    name: "iKo Music",
    github: "",
    live: "",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <IkoContainer>
        <IkoRow>
          <IkoCol col={12}>
            <Title sub="My Recent Work" className="projects__title">
              Projects
            </Title>
          </IkoCol>
        </IkoRow>

        <IkoRow>
          {projectData.map((item, index) => (
            <IkoCol
              col={4}
              mdCol={6}
              smCol={12}
              key={index}
              style={{ marginBottom: 30 }}
            >
              <IkoCard className="projects__card">
                <IkoCard.Body>
                  <div className="projects__card__img">
                    <img src={item.img} alt="" />
                  </div>
                  <IkoTitle className="projects__card__title">
                    {item.name}
                  </IkoTitle>
                  <div className="projects__card__actions">
                    <a href={item.github} className="projects__card__github">
                      Github
                    </a>
                    <a href={item.live} className="projects__card__live">
                      Live Demo
                    </a>
                  </div>
                </IkoCard.Body>
              </IkoCard>
            </IkoCol>
          ))}
        </IkoRow>
      </IkoContainer>
    </section>
  );
};

export default Projects;
