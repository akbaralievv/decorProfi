import React, { useContext } from 'react';

import location from '../assets/images/location.svg';
import app from '../assets/images/app.svg';
import diamond from '../assets/images/diamond.svg';
import internet from '../assets/images/internet.svg';
import furniture from '../assets/images/furniture.svg';
import lamp from '../assets/images/lamp.svg';
import { ScrollToContext } from '../App';

function About() {
  const { aboutRef } = useContext(ScrollToContext);
  return (
    <section className="about" ref={aboutRef}>
      <div className="container">
        <div className="inner">
          <h2>О нас</h2>
          <div className="title">
            <div className="circle">
              <h3>Decor Profi</h3>
            </div>
            <div className="description">
              <p>
                Компания <b>Decor Profi</b> основана в 2007 году. Вот уже 16 лет мы предоставляем
                уникальные, высококачественные
              </p>
              <hr />
              <p>
                и современные решения в сфере мебели и дизайна интерьера. За годы работы{' '}
                <b>Decor Profi</b> не стоит на месте и стремится к большим достижениям.
              </p>
            </div>
          </div>
          <div className="title">
            <div className="circle">
              <h3>
                <img src={location} alt="location" />
              </h3>
            </div>
            <div className="description">
              <p></p>
              <hr />
              <p>
                Компания имеет сеть шоурумов по ЦА, это - Казахстан, Кыргызстан, Таджикистан и
                Узбекистан.
              </p>
            </div>
          </div>
          <div className="title">
            <div className="circle">
              <h3>
                <img src={app} alt="app" />
              </h3>
            </div>
            <div className="description">
              <p>
                Широкий ассортимент качественных и эксклюзивных материалов для производства мебели!
              </p>
              <hr />
              <p></p>
            </div>
          </div>
          <div className="title">
            <div className="circle">
              <h3>
                <img src={internet} alt="internet" />
              </h3>
            </div>
            <div className="description">
              <p></p>
              <hr />
              <p>
                Мы имеем эксклюзивные контракты со многими европейскими компаниями, это такие страны
                как: Австрия, Италия, Испания, Турция, Россия
              </p>
            </div>
          </div>
          <div className="title">
            <div className="circle">
              <h3>
                <img src={diamond} alt="diamond" />
              </h3>
            </div>
            <div className="description">
              <p>
                У нас в ассортименте имеется: ЛДСП, МДФ, столешницы и скинали, мебельная фурнитура,
                мебельные ручки и различные механизмы для мебели. Также <b>Decor Profi</b> имеет
                собственное производство моек из искусственного камня
              </p>
              <hr />
              <p>
                Decor Profi специализируется на предоставлении самых качественных материалов для
                мебели и интерьера. Наша компания предлагает широкий ассортимент материалов для
                мебели и другие инновационные решения, которые придадут вашим мебельным проектам
                неповторимый стиль и функциональность
              </p>
            </div>
          </div>
          <div className="title">
            <div className="circle">
              <h3>
                <img src={lamp} alt="diamond" />
              </h3>
            </div>
            <div className="description">
              <p>
                Мы стремимся к тому, чтобы каждый клиент получил высококлассное обслуживание и
                непревзойденное качество продукции. Наша команда профессионалов всегда готова помочь
                вам в выборе и приобретении идеальных материалов для воплощения ваших мебельных идей
                в жизнь.
              </p>
              <hr />
              <p>
                Мы приглашаем вас на увлекательное путешествие по миру стилей и текстур, чтобы
                создать мебельные шедевры, отражающие ваш неповторимый вкус и индивидуальность.
              </p>
            </div>
          </div>
          <div className="title">
            <div className="circle">
              <h3>
                <img src={furniture} alt="diamond" />
              </h3>
            </div>
            <div className="description">
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
