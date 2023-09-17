import React, { useContext, useEffect, useRef } from 'react';

import tableTops from '../assets/images/tableTops.png';
import washings from '../assets/images/washings.png';
import baskets from '../assets/images/baskets.png';
import loops from '../assets/images/loops.png';
import arrow from '../assets/icons/arrow-card.svg';
import handles from '../assets/images/handles.png';
import faceFurniture from '../assets/images/faceFurniture.png';
import functionFurniture from '../assets/images/functionFurniture.png';
import mdf from '../assets/images/mdf.png';
import ldsp from '../assets/images/ldsp.png';
import { ScrollToContext } from '../App';
import a from '../assets/images/tableTops/tableTops.png';

function Catalog() {
  const { catalogRef, tableTopsRef, setTextCatalog, textCatalog, catalogV2 } =
    useContext(ScrollToContext);

  const scrollToTableTops = (e) => {
    e && setTextCatalog(e);
    // if (e.target.querySelector('h3')) {
    //   const cardTitle = e.target.querySelector('h3').textContent;
    //   setTextCatalog(cardTitle);
    // }
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
            {catalogV2.map((catalog, id) => (
              <div
                key={id}
                className="card"
                style={{
                  backgroundImage: `url(${tableTops})`,
                }}
                onClick={() => scrollToTableTops(catalog.name)}>
                <div className="card-inner">
                  <h3>{catalog.name}</h3>
                  <img src={arrow} alt="arrow" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
