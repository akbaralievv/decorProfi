import './css/app.css';
import Header from './components/Header';

import Home from './components/Home';
import Catalog from './components/Catalog';
import Advantages from './components/Advantages';
import ListCatalogs from './components/listCatalogs/ListCatalogs';
import Footer from './components/Footer';
import ModalInfo from './components/ModalInfo';
import products from './products.json';
import { createContext, useState, useRef } from 'react';
import About from './components/About';

export const ModalContext = createContext('');
export const ScrollToContext = createContext('');
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productInfo, setProductInfo] = useState({});
  const catalogRef = useRef(null);
  const advantagesRef = useRef(null);
  const contactsRef = useRef(null);
  const aboutRef = useRef(null);

  const tableTopsRef = useRef(null);
  const [textCatalog, setTextCatalog] = useState('');

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
        }}>
        <Header />
        <Home />
        <Catalog />
        <Advantages />
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen, setProductInfo, productInfo }}>
          {products.types.map((item, id) => (
            <ListCatalogs types={item} key={id} />
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
