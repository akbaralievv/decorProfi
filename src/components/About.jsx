import React, { useContext } from 'react';

import location from '../assets/images/location.svg';
import app from '../assets/images/app.svg';
import diamond from '../assets/images/diamond.svg';
import internet from '../assets/images/internet.svg';
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
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
