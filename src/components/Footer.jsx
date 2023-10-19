import React, { useContext } from 'react';

import maps from '../assets/images/maps.png';
import { ScrollToContext } from '../App';
import Maps from './Maps';

function Footer() {
  const { contactsRef } = useContext(ScrollToContext);
  return (
    <footer className="footer" ref={contactsRef}>
      <div className="container">
        <div className="inner">
          <h2>Контакты</h2>
          <div className="content">
            <div className="links">
              <ul>
                <li className="address">
                  <p>Адрес:</p>
                  <ul>
                    <li>
                      <a href="https://2gis.ru/tashkent/geo/70000001061157502" target="_blank">
                        <h3>Рынок Джами ул. Широк 120а </h3>
                      </a>
                    </li>
                    <li>
                      <h3 className="time">ПН-СБ 09:00-18:00 </h3>
                    </li>
                    <li>
                      <h3 className="time">ВС - выходной</h3>
                    </li>
                  </ul>
                </li>
                <li className="phone_number">
                  <p>Номер телефона:</p>
                  <ul>
                    <li>
                      <h3>+998 90 111 47 00 </h3>
                    </li>
                  </ul>
                </li>
                <li className="email">
                  <p>Email:</p>
                  <ul>
                    <li>
                      <a href="mailto:decor_profi@mail.rudecor_profi@mail.ru" target="_blank">
                        <h3>decor_profi@mail.rudecor_profi@mail.ru</h3>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* <div className="maps">
              <a href="https://2gis.ru/tashkent/geo/70000001061157502" target="_blank">
                <img src={maps} alt="maps" />
              </a>
            </div> */}
            <Maps />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
