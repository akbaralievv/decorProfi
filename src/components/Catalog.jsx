import React, { useContext, useEffect, useRef } from 'react';

import tableTops from '../assets/images/tableTops.png';
import washings from '../assets/images/washings.png';
import baskets from '../assets/images/baskets.png';
import loops from '../assets/images/loops.png';
import arrow from '../assets/icons/arrow-card.svg';
import handles from '../assets/images/handles.png';
import { ScrollToContext } from '../App';

function Catalog() {
  const { catalogRef, tableTopsRef, setTextCatalog, textCatalog } = useContext(ScrollToContext);

  const scrollToTableTops = (e) => {
    e.preventDefault();
    const cardTitle = e.target.querySelector('h3').textContent;
    setTextCatalog(cardTitle);
  };

  useEffect(() => {
    if (tableTopsRef.current) {
      tableTopsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setTextCatalog('');
    }
  }, [textCatalog]);

  return (
    <section className="catalog" ref={catalogRef}>
      <div className="container">
        <div className="inner">
          <h2>Каталог</h2>
          <div className="cards">
            <div
              className="card"
              style={{
                backgroundImage: `url(${tableTops})`,
              }}
              onClick={scrollToTableTops}>
              <div className="card-inner">
                <h3>Столешницы</h3>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div
              className="card"
              style={{
                backgroundImage: `url(${washings})`,
              }}
              onClick={scrollToTableTops}>
              <div className="card-inner">
                <h3>Мойки</h3>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div
              className="card"
              style={{
                backgroundImage: `url(${baskets})`,
              }}
              onClick={scrollToTableTops}>
              <div className="card-inner">
                <h3>Корзины</h3>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="duble-card">
              <div
                className="card"
                style={{
                  backgroundImage: `url(${handles})`,
                }}
                onClick={scrollToTableTops}>
                <div className="card-inner">
                  <h3>Ручки</h3>
                  <img src={arrow} alt="arrow" />
                </div>
              </div>
              <div
                className="card"
                style={{
                  backgroundImage: `url(${loops})`,
                }}
                onClick={scrollToTableTops}>
                <div className="card-inner">
                  <h3>Петель</h3>
                  <img src={arrow} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
