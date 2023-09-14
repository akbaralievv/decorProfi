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
        <g clipPath="url(#clip0_93_697)">
          <path
            d="M38.0821 3.36918L65.6301 36.1997C66.239 36.9253 66.5347 37.863 66.4521 38.8066C66.3695 39.7502 65.9155 40.6224 65.1899 41.2312L32.3595 68.7792"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_93_697">
            <rect
              width="50"
              height="50"
              fill="white"
              transform="translate(0 32.9928) rotate(-40)"
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
        {catalogs.products.map((item, id) => (
          <div className="card" key={id}>
            <div className="content" onClick={() => handleClick(item)}>
              <div className="img">
                <img src={catalogTableTops} alt="catalogTableTops" />
              </div>
              <h4>{item.name}</h4>
              <p>{item.price} Сум</p>
            </div>
            <a href="">Связаться</a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SwipeToSlide;
