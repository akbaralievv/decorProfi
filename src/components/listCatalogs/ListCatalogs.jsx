import React, { useContext } from 'react';
import SwipeToSlide from './SwipeToSlide';
import { ScrollToContext } from '../../App';

function ListCatalogs({ types, catalogName, shouldScroll }) {
  const { tableTopsRef, textCatalog, catalogs } = useContext(ScrollToContext);

  const contains =
    (shouldScroll && catalogName && catalogName.name.toLowerCase() === textCatalog.toLowerCase()) ||
    types.name.toLowerCase() === textCatalog.toLowerCase();

  return (
    <section className="list-catalogs">
      <div className="container">
        <div className="inner" ref={contains ? tableTopsRef : null}>
          {types.type && (
            <h2>
              Каталог <strong>{types.type}</strong>
            </h2>
          )}
          <h3>{types.name}</h3>
          <SwipeToSlide catalogs={types.products} />
        </div>
      </div>
    </section>
  );
}

export default ListCatalogs;
