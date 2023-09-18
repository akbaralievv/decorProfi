import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import catalogTableTops from '../../assets/images/catalog-tableTops.png';
import { ModalContext } from '../../App';

function CustomNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div className={className} style={{ ...style, cursor: 'pointer' }} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="71"
        height="72"
        viewBox="0 0 71 72"
        fill="none">
        <g clipPath="url(#clip0_238_1294)">
          <path
            d="M38.082 3.36869L65.63 36.1992C66.2389 36.9248 66.5345 37.8625 66.452 38.8061C66.3694 39.7497 65.9154 40.6219 65.1898 41.2307L32.3593 68.7788"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_238_1294">
            <rect
              width="50"
              height="50"
              fill="white"
              transform="translate(0 32.9923) rotate(-40)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SwipeToSlide({ catalogs }) {
  const { setIsModalOpen, setProductInfo } = useContext(ModalContext);
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    swipeToSlide: true,
    nextArrow: <CustomNextArrow />,
    afterChange: (index) => {
      // console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    },
  };

  const handleClick = (product) => {
    setIsModalOpen(true);
    setProductInfo(product);
  };

  return (
    <div className="wrapper-slider">
      <Slider {...settings}>
        {catalogs.map((item, id) => (
          <div className="card" key={id}>
            <div className="content" onClick={() => handleClick(item)}>
              <div className="img">
                <img src={catalogTableTops} alt="catalogTableTops" />
              </div>
              <h4>{item.name}</h4>
              <p>{item.price} Сум</p>
            </div>
            <a href="https://t.me/+998901114700" target="_blank">
              Связаться
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SwipeToSlide;
