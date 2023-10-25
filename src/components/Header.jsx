import React, { useContext, useState } from 'react';

import { ScrollToContext } from '../App';

import search from '../assets/icons/search.svg';
import close from '../assets/icons/closeIcon.png';
import telegram from '../assets/icons/telegram.svg';
import instagram from '../assets/icons/instagram.svg';
import burger from '../assets/icons/burger-menu.svg';

function Header() {
  const { catalogRef, advantagesRef, contactsRef, setTextCatalog, aboutRef } =
    useContext(ScrollToContext);

  const [searchValue, setSearchValue] = useState('');
  const [menuActive, setMenuActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionRef, sectionName) => {
    setActiveSection(sectionName);
    if (sectionRef.current) {
      setTimeout(() => {
        sectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        setTextCatalog('');
      }, 0);
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
            style={{ display: searchActive ? 'block' : 'none' }}
            onSubmit={handleSubmit}>
            <img src={search} alt="search" onClick={handleSubmit} />
            <input type="text" placeholder="Поиск" onChange={handleChange} value={searchValue} />
          </form>
          <nav className="nav" style={{ display: !searchActive ? 'block' : 'none' }}>
            <ul>
              <li>
                <a
                  href="#"
                  onClick={() => scrollToSection(aboutRef, 'about')}
                  className={activeSection === 'about' ? 'active' : ''}>
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => scrollToSection(catalogRef, 'catalogs')}
                  className={activeSection === 'catalogs' ? 'active' : ''}>
                  Каталог
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => scrollToSection(advantagesRef, 'advantages')}
                  className={activeSection === 'advantages' ? 'active' : ''}>
                  Преимущества
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => scrollToSection(contactsRef, 'contacts')}
                  className={activeSection === 'contacts' ? 'active' : ''}>
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
              onClick={() => setSearchActive(!searchActive)}
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
          <div className="social social_burger-menu">
            <a href="https://t.me/decorprofiuz" target="_blank">
              <img src={telegram} alt="telegram" />
            </a>
            <a href="https://instagram.com/decorprofi.kg?igshid=MzRlODBiNWFlZA==" target="_blank">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
          {menuActive && (
            <div className="menu-options">
              <nav className="nav navOptions">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={() => scrollToSection(aboutRef, 'about')}
                      className={activeSection === 'about' ? 'active' : ''}>
                      О нас
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => scrollToSection(catalogRef, 'catalogs')}
                      className={activeSection === 'catalogs' ? 'active' : ''}>
                      Каталог
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => scrollToSection(advantagesRef, 'advantages')}
                      className={activeSection === 'advantages' ? 'active' : ''}>
                      Преимущества
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => scrollToSection(contactsRef, 'contacts')}
                      className={activeSection === 'contacts' ? 'active' : ''}>
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
