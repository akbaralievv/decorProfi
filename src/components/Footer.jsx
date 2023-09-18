import React, { useContext } from 'react';

import maps from '../assets/images/maps.png';
import { ScrollToContext } from '../App';

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
                      <h3>ул. Матросова 4</h3>
                    </li>
                  </ul>
                </li>
                <li className="phone_number">
                  <p>Номер телефона:</p>
                  <ul>
                    <li>
                      <h3>0551 300 800</h3>
                    </li>
                    <li>
                      <h3>0775 300 800</h3>
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
            <div className="maps">
              <a href="https://2gis.kg/bishkek/geo/70000001019350893" target="_blank">
                <img src={maps} alt="maps" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
