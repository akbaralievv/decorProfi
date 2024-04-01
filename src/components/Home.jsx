import React, { useContext } from 'react';

import { ScrollToContext } from '../App';

function Home() {
  const { catalogRef, aboutRef } = useContext(ScrollToContext);

  const scrollToCatalog = (e) => {
    e.preventDefault();
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="home">
      <div className="container">
        <div className="inner">
          <div className="title">
            <h1>Мебельная фурнитура для вашего комфорта</h1>
            <p>
              Мы предлагаем вам стать нашим постоянным клиентом и партнером. Со своей стороны мы
              гарантируем ответственное отношение к сотрудничеству
            </p>
            <div className="buttons">
              <a href="" className="orange" onClick={scrollToCatalog}>
                Каталог
              </a>
              <a href="" className="transparent" onClick={scrollToAbout}>
                О нас
              </a>
            </div>
          </div>
          <div className="numbers">
            <div className="card">
              <h3>16</h3>
              <p>Лет опыта</p>
            </div>
            <div className="card">
              <h3>18500+</h3>
              <p>Довольных клиентов</p>
            </div>
            <div className="card">
              <h3>2500+</h3>
              <p>Товаров</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
