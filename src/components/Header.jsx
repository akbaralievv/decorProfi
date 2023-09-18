import { useContext, useRef, useState } from 'react';

import search from '../assets/icons/search.svg';
import close from '../assets/icons/closeIcon.png';
import telegram from '../assets/icons/telegram.svg';
import instagram from '../assets/icons/instagram.svg';
import burger from '../assets/icons/burger-menu.svg';

import { ScrollToContext } from '../App';

function Header() {
  const { catalogRef, advantagesRef, contactsRef, setTextCatalog, textCatalog, aboutRef } =
    useContext(ScrollToContext);

  const [searchValue, setSearchValue] = useState('');

  const [isCatalogActive, setIsCatalogActive] = useState(false);
  const [isAdvantagesActive, setIsAdvantagesActive] = useState(false);
  const [isContactsActive, setIsContactsActive] = useState(false);
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [searchActive, setSeacrhActive] = useState(false);
  const [disabled, setDisabled] = useState('');

  const scrollToCatalog = (e) => {
    e.preventDefault();
    setIsCatalogActive(true);
    setIsAdvantagesActive(false);
    setIsContactsActive(false);
    setIsAboutActive(false);
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  };

  const scrollToAdvantages = (e) => {
    e.preventDefault();
    setIsCatalogActive(false);
    setIsAdvantagesActive(true);
    setIsContactsActive(false);
    setIsAboutActive(false);
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
    setIsAboutActive(false);
    if (contactsRef.current) {
      contactsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    setIsCatalogActive(false);
    setIsAdvantagesActive(false);
    setIsContactsActive(false);
    setIsAboutActive(true);
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({
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
          <form
            className="search"
            style={{ display: `${searchActive ? 'block' : 'none'}` }}
            onSubmit={handleSubmit}>
            <img src={search} alt="search" onClick={handleSubmit} />
            <input type="text" placeholder="Поиск" onChange={handleChange} value={searchValue} />
          </form>
          <nav className="nav" style={{ display: `${!searchActive ? 'block' : 'none'}` }}>
            <ul>
              <li>
                <a href="" onClick={scrollToAbout} className={isAboutActive ? 'active' : ''}>
                  О нас
                </a>
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
            <img
              src={searchActive ? close : search}
              alt="search"
              className="searchIcon"
              onClick={() => setSeacrhActive(!searchActive)}
            />
            <a href="https://t.me/decorprofiuz" target="_blank">
              <img src={telegram} alt="telegram" />
            </a>
            <a href="https://instagram.com/decorprofi.kg?igshid=MzRlODBiNWFlZA==" target="_blank">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
          <div className="burger-menu" onClick={() => setMenuActive(!menuActive)}>
            <img src={burger} alt="burger" />
          </div>
          {menuActive && (
            <div className="menu-options">
              <nav className="nav navOptions">
                <ul>
                  <li>
                    <a href="" onClick={scrollToAbout} className={isAboutActive ? 'active' : ''}>
                      О нас
                    </a>
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
