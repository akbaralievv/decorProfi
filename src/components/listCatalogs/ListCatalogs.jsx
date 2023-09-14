import React, { useContext } from 'react';
import SwipeToSlide from './SwipeToSlide';
import { ScrollToContext } from '../../App';

function ListCatalogs({ types }) {
  const { tableTopsRef, textCatalog } = useContext(ScrollToContext);

  return (
    <section className="list-catalogs">
      <div className="container">
        <div className="inner">
          <h2>
            Каталог <strong>{types.name}</strong>
          </h2>
          {types.catalogs.map((item, id) => (
            <div
              key={id}
              ref={item.name.toLowerCase() === textCatalog.toLowerCase() ? tableTopsRef : null}>
              <h3>{item.name}</h3>
              <SwipeToSlide catalogs={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListCatalogs;
