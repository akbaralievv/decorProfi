import React, { useContext } from 'react';
import SwipeToSlide from './SwipeToSlide';
import { ScrollToContext } from '../../App';

function ListCatalogs({ types }) {
  const { tableTopsRef, textCatalog } = useContext(ScrollToContext);
  console.log(types);
  return (
    <section className="list-catalogs">
      <div className="container">
        <div className="inner">
          <h2>
            Каталог <strong>{types.name}</strong>
          </h2>
          {types.sub_catalogs.map((catalog, id) => {
            const isMatchingCatalog =
              textCatalog &&
              (catalog.name.toLowerCase() === textCatalog.toLowerCase() ||
                catalog.catalog_name.toLowerCase() === textCatalog.toLowerCase() ||
                types.name.toLowerCase() === textCatalog.toLowerCase());

            return (
              <div key={id} className="refDiv" ref={isMatchingCatalog ? tableTopsRef : null}>
                <h3>{catalog.name}</h3>
                <SwipeToSlide catalogs={catalog.products} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ListCatalogs;
