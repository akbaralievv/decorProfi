import { useContext, useRef, useState } from 'react';

import search from '../assets/icons/search.svg';
import telegram from '../assets/icons/telegram.svg';
import instagram from '../assets/icons/instagram.svg';
import burger from '../assets/icons/burger-menu.svg';

import { ScrollToContext } from '../App';

function Header() {
  const { catalogRef, advantagesRef, contactsRef, setTextCatalog, textCatalog } =
    useContext(ScrollToContext);

  const [searchValue, setSearchValue] = useState('');

  const [isCatalogActive, setIsCatalogActive] = useState(false);
  const [isAdvantagesActive, setIsAdvantagesActive] = useState(false);
  const [isContactsActive, setIsContactsActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const scrollToCatalog = (e) => {
    e.preventDefault();
    setIsCatalogActive(true);
    setIsAdvantagesActive(false);
    setIsContactsActive(false);
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToAdvantages = (e) => {
    e.preventDefault();
    setIsCatalogActive(false);
    setIsAdvantagesActive(true);
    setIsContactsActive(false);
    if (advantagesRef.current) {
      advantagesRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToContacts = (e) => {
    e.preventDefault();
    setIsCatalogActive(false);
    setIsAdvantagesActive(false);
    setIsContactsActive(true);
    if (contactsRef.current) {
      contactsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      setTextCatalog(searchValue);
      setSearchValue('');
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  console.log(menuActive);

  return (
    <header className={`header`}>
      <div className="container">
        <div className={`inner ${menuActive ? 'menuActive' : ''}`}>
          <div className="logo">
            <h2>
              Decor <br className="br" />
              Profi
            </h2>
          </div>
          <form className="search" onSubmit={handleSubmit}>
            <img src={search} alt="search" onClick={handleSubmit} />
            <input type="text" placeholder="Поиск" onChange={handleChange} value={searchValue} />
          </form>
          <nav className="nav">
            <ul>
              <li>
                <a href="">О нас</a>
              </li>
              <li>
                <a href="" onClick={scrollToCatalog} className={isCatalogActive ? 'active' : ''}>
                  Каталог
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={scrollToAdvantages}
                  className={isAdvantagesActive ? 'active' : ''}>
                  Преимущества
                </a>
              </li>
              <li>
                <a href="" onClick={scrollToContacts} className={isContactsActive ? 'active' : ''}>
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
          <div className="social">
            <img src={telegram} alt="telegram" />
            <img src={instagram} alt="instagram" />
          </div>
          <div className="burger-menu" onClick={() => setMenuActive(!menuActive)}>
            <img src={burger} alt="burger" />
          </div>
          {menuActive && (
            <div className="menu-options">
              <nav className="nav">
                <ul>
                  <li>
                    <a href="">О нас</a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={scrollToCatalog}
                      className={isCatalogActive ? 'active' : ''}>
                      Каталог
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={scrollToAdvantages}
                      className={isAdvantagesActive ? 'active' : ''}>
                      Преимущества
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      onClick={scrollToContacts}
                      className={isContactsActive ? 'active' : ''}>
                      Контакты
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
