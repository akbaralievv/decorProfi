import React, { createContext, useState, useRef, useEffect, useCallback } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Advantages from './components/Advantages';
import ListCatalogs from './components/listCatalogs/ListCatalogs';
import Footer from './components/Footer';
import ModalInfo from './components/ModalInfo';
import About from './components/About';

import './css/app.css';

const api_url = import.meta.env.VITE_REACT_APP_DECOR_PROFI_API_URL;

export const ModalContext = createContext({});
export const ScrollToContext = createContext({});

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productInfo, setProductInfo] = useState({});
  const [modalData, setModalData] = useState({});
  const [textCatalog, setTextCatalog] = useState('');
  const [dataProducts, setDataProducts] = useState([]);
  const [catalogNamesV1, setCatalogNamesV1] = useState([]);
  const [organizedDatas, setOrganizedDatas] = useState([]);

  const catalogRef = useRef(null);
  const advantagesRef = useRef(null);
  const contactsRef = useRef(null);
  const aboutRef = useRef(null);
  const tableTopsRef = useRef(null);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(api_url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setDataProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const getUniqueCatalogs = (dataArray) => {
      const uniqueCatalogs = {};

      dataArray.forEach((item) => {
        const { catalog_name, catalog_image } = item;

        if (!uniqueCatalogs[catalog_name]) {
          uniqueCatalogs[catalog_name] = { catalog_name, catalog_image };
        }
      });

      return Object.values(uniqueCatalogs);
    };

    const uniqueCatalogNamesAndImages = getUniqueCatalogs(dataProducts);
    setCatalogNamesV1(uniqueCatalogNamesAndImages);
  }, [dataProducts]);

  useEffect(() => {
    if (dataProducts.length > 0) {
      const organizedData = dataProducts.reduce((result, item) => {
        const { brand_name, sub_catalog_name, catalog_name } = item;

        let brandEntry = result.find((entry) => entry.name === brand_name);
        if (!brandEntry) {
          brandEntry = { name: brand_name, sub_catalogs: [] };
          result.push(brandEntry);
        }

        let subCatalogEntry = brandEntry.sub_catalogs.find(
          (entry) => entry.name === sub_catalog_name,
        );
        if (!subCatalogEntry) {
          subCatalogEntry = { name: sub_catalog_name, catalog_name, products: [] };
          brandEntry.sub_catalogs.push(subCatalogEntry);
        }

        subCatalogEntry.products.push(item);

        return result;
      }, []);

      setOrganizedDatas(organizedData);
    }
  }, [dataProducts]);

  return (
    <main>
      <ScrollToContext.Provider
        value={{
          aboutRef,
          catalogRef,
          advantagesRef,
          contactsRef,
          tableTopsRef,
          setTextCatalog,
          textCatalog,
          catalogNamesV1,
        }}>
        <Header />
        <Home />
        <Catalog />
        <Advantages />
        <ModalContext.Provider
          value={{
            isModalOpen,
            setIsModalOpen,
            setProductInfo,
            productInfo,
            setModalData,
            modalData,
          }}>
          {organizedDatas.map((types, id) => (
            <ListCatalogs types={types} key={id} />
          ))}
          <ModalInfo />
        </ModalContext.Provider>
        <About />
        <Footer />
      </ScrollToContext.Provider>
    </main>
  );
}

export default App;
