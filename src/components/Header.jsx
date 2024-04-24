import React, { useContext, useEffect, useRef, useState } from 'react';

import { ScrollToContext } from '../App';

import search from '../assets/icons/search.svg';
import searchBlack from '../assets/icons/search black.svg';
import burgerBlack from '../assets/icons/burger-menu black.svg';
import close from '../assets/icons/closeIcon.png';
import telegram from '../assets/icons/telegram.svg';
import instagram from '../assets/icons/instagram.svg';
import telegramBlack from '../assets/icons/telegram black.png';
import instagramBlack from '../assets/icons/instagram black.png';
import burger from '../assets/icons/burger-menu.svg';
import logo from '../assets/images/logo 2.png';
import logoBlack from '../assets/images/logo.png';

function Header() {
  const { catalogRef, advantagesRef, contactsRef, setTextCatalog, aboutRef } =
    useContext(ScrollToContext);

  const [searchValue, setSearchValue] = useState('');
  const [menuActive, setMenuActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const scrollToSection = (sectionRef, sectionName, e) => {
    e.preventDefault();
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

  useEffect(() => {
    const handleResize = () => {
      if (
        (window.innerWidth > 1200 || (window.innerWidth < 1200 && window.innerWidth > 600)) &&
        searchActive
      ) {
        setSearchActive(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [searchActive]);

  let lastScrollTop = 0;

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuActive(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentScroll = window.scrollY;
      if (currentScroll > lastScrollTop && headerRef.current) {
        headerRef.current.classList.remove('visible');
      } else if (headerRef.current) {
        headerRef.current.classList.add('visible');
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header visible" ref={headerRef}>
      <div className="container">
        <div className={`inner ${menuActive ? 'menuActive' : ''}`} ref={menuRef}>
          <div className="logo">
            <img src={menuActive ? logoBlack : logo} alt="logo" />
          </div>
          <form
            className="search"
            style={{ display: searchActive ? 'block' : 'none' }}
            onSubmit={handleSubmit}>
            <img src={menuActive ? searchBlack : search} alt="search" onClick={handleSubmit} />
            <input type="text" placeholder="Поиск" onChange={handleChange} value={searchValue} />
          </form>
          <nav className="nav" style={{ display: !searchActive ? 'block' : 'none' }}>
            <ul>
              <li>
                <a
                  href=""
                  onClick={(e) => scrollToSection(aboutRef, 'about', e)}
                  className={activeSection === 'about' ? 'active' : ''}>
                  О нас
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => scrollToSection(catalogRef, 'catalogs', e)}
                  className={activeSection === 'catalogs' ? 'active' : ''}>
                  Каталог
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => scrollToSection(advantagesRef, 'advantages', e)}
                  className={activeSection === 'advantages' ? 'active' : ''}>
                  Преимущества
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => scrollToSection(contactsRef, 'contacts', e)}
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
            <a
              href="https://www.instagram.com/decorprofi.uz?igsh=MWwzbnBwNW42d3B3cw=="
              target="_blank">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
          <div className="burger-menu" onClick={() => setMenuActive(!menuActive)}>
            <img src={menuActive ? burgerBlack : burger} alt="burger" />
          </div>
          <div className="social social_burger-menu">
            <a href="https://t.me/decorprofiuz" target="_blank">
              <img src={menuActive ? telegramBlack : telegram} alt="telegram" />
            </a>
            <a
              href="https://www.instagram.com/decorprofi.uz?igsh=MWwzbnBwNW42d3B3cw=="
              target="_blank">
              <img src={menuActive ? instagramBlack : instagram} alt="instagram" />
            </a>
          </div>
          {menuActive && (
            <div className="menu-options">
              <nav className="nav navOptions">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => scrollToSection(aboutRef, 'about', e)}
                      className={activeSection === 'about' ? 'active' : ''}>
                      О нас
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => scrollToSection(catalogRef, 'catalogs', e)}
                      className={activeSection === 'catalogs' ? 'active' : ''}>
                      Каталог
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => scrollToSection(advantagesRef, 'advantages', e)}
                      className={activeSection === 'advantages' ? 'active' : ''}>
                      Преимущества
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => scrollToSection(contactsRef, 'contacts', e)}
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
