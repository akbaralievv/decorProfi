import React, { useContext } from 'react';

import { ScrollToContext } from '../App';
import advantages from '../assets/images/advantages.png';

function Advantages() {
  const { advantagesRef } = useContext(ScrollToContext);
  return (
    <section className="advantages" ref={advantagesRef}>
      <div className="container">
        <div className="inner">
          <h2>Наши преимущества</h2>
          <div className="cards">
            <div className="title">
              <div className="card">
                <h3>Более 2500 товаров</h3>
                <p>
                  В нашем магазине вы можете увидеть множество товаров и разнообразные мебельные
                  решения для вашего интерьера
                </p>
              </div>
              <div className="small-cards">
                <div className="card-small">
                  <h3>34+</h3>
                  <p>Сотрудников работают в нашем офисе</p>
                </div>
                <div className="card-small">
                  <h3>16 лет</h3>
                  <p>Работаем в этой сфере и поставляем мебель</p>
                </div>
              </div>
            </div>
            <div className="images">
              <img src={advantages} alt="advantages" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
