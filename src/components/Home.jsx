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
            <h1>Материалы для мебели и дизайна</h1>
            <p>
              Подбирая качественные материалы для мебели и дизайна, вы вкладываете не только в ваш
              дом, но и в комфорт вашей семьи. Осознанно делайте свой выбор, чтобы наслаждаться
              стильным и функциональным интерьером каждый день!
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
