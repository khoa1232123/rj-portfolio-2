import React from "react";
import {
  IkoButton,
  IkoCard,
  IkoCol,
  IkoContainer,
  IkoInput,
  IkoRow,
  IkoTitle,
} from "../ikoComponents";
import Title from "./Title";

const contacts = [
  {
    id: 1,
    icon: "fa-solid fa-envelope",
    name: "Email",
    address: "khoa1232123@gmail.com",
    url: "mailto:khoa1232123@gmail.com",
  },
  {
    id: 2,
    icon: "fa-brands fa-facebook-messenger",
    name: "Messager",
    address: "Nguyễn Đình Khôi",
    url: "http://m.me/trong.nguyen.5811877",
  },
  {
    id: 3,
    icon: "fa-solid fa-phone-flip",
    name: "Phone",
    address: "0364279330",
    url: "tel:0364279330",
  },
];

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <IkoContainer>
        <IkoRow>
          <IkoCol col={12}>
            <Title sub="Get In Touch" className="contact__title">
              Contact Me
            </Title>
          </IkoCol>
        </IkoRow>
        <IkoRow>
          <IkoCol>
            <IkoRow smCol={12}>
              <IkoCol col={2} mdCol={12}></IkoCol>
              <IkoCol col={8} mdCol={12} smCol={12}>
                {contacts.map((item, index) => (
                  <IkoCard className="contact__card" key={index}>
                    <IkoCard.Body>
                      <i className={item.icon}></i>
                      <IkoTitle className="contact__card__title">
                        {item.name}
                      </IkoTitle>
                      <a href={item.url}>{item.address}</a>
                    </IkoCard.Body>
                  </IkoCard>
                ))}
              </IkoCol>
              <IkoCol col={2}></IkoCol>
            </IkoRow>
          </IkoCol>
          <IkoCol col={5} mdCol={7} smCol={12}>
            <IkoInput label="Your Full Name" labelEffect />
            <IkoInput label="Your Email" labelEffect />
            <div class="iko-input">
              <textarea
                type="text"
                placeholder=" "
                class="iko-input__input"
              ></textarea>
              <label class="iko-input__label iko-input__label__effect">
                Your Messager
              </label>
            </div>
            <IkoButton size="lg">Send Message</IkoButton>
          </IkoCol>
          <IkoCol col={1} mdCol={12}></IkoCol>
        </IkoRow>
      </IkoContainer>
    </section>
  );
};

export default Contact;
