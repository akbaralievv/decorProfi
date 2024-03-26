import React, { useContext, useEffect, useRef } from 'react';
import { ScrollToContext } from '../App';
import arrow from '../assets/icons/arrow-card.svg';

function Catalog() {
  const { catalogRef, tableTopsRef, setTextCatalog, textCatalog, catalogNamesV1 } =
    useContext(ScrollToContext);

  const scrollToTableTops = (e) => {
    setTextCatalog(e);
  };

  useEffect(() => {
    if (tableTopsRef.current && textCatalog) {
      tableTopsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setTextCatalog('');
    }
  }, [textCatalog, tableTopsRef]);

  return (
    <section className="catalog" ref={catalogRef}>
      <div className="container">
        <div className="inner">
          <h2>Каталог</h2>
          <div className="cards">
            {catalogNamesV1.length > 0 &&
              catalogNamesV1.map((catalog, id) => (
                <div
                  key={id}
                  className="card"
                  style={{
                    background: `linear-gradient(to bottom, rgba(0,0,0,0) 60%,rgba(0,0,0,0.4) 100%), url(${catalog.catalog_image})`,
                  }}
                  onClick={() => scrollToTableTops(catalog.catalog_name)}>
                  <div className="card-inner">
                    <h3>{catalog.catalog_name}</h3>
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
