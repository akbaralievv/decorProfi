// import React from 'react';

import general from '../assets/images/modalImg.png';
import small from '../assets/images/smallModalImg.png';

// function ModalInfo() {
//   return (
//     <div className="container">
//       <div className="modal">
{
  /* <div className="inner">
  <div className="images">
    <div className="general-img">
      <img src={general} alt="img" />
    </div>
    <div className="small-img">
      <img src={small} alt="img" />
    </div>
  </div>
  <div className="title">
    <h3>Навес для шкафа СH04</h3>
    <ul>
      <li>Цвет изделия - GR - Серый</li>
      <li>Количество в упаковке - 100</li>
      <li>Вес упоковки - 12.57 кг</li>
      <li>Объем упаковки - 0.23171 м.куб.</li>
    </ul>
    <div className="description">
      <h4>Описание</h4>
      <p>
        СН04 - классический крепёжный элемент для верхних баз мебели. Навес выдерживает нагрузку на
        пару до 80 кг и допускает возможность регулировки по вертикали +7 мм и по горизонтали от
        плоскости стены +20 мм
      </p>
    </div>
    <a href="">Связаться</a>
  </div>
</div>; */
}
//       </div>
//     </div>
//   );
// }

// export default ModalInfo;

import React, { useState, useContext, useEffect } from 'react';
import { Button, Modal } from 'antd';
import { ModalContext } from '../App';
const App = () => {
  const { isModalOpen, setIsModalOpen, productInfo } = useContext(ModalContext);
  const [dataInfo, setDataInfo] = useState({});
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (productInfo.hasOwnProperty('name')) {
      setDataInfo(productInfo);
    }
    return () => {
      setDataInfo({});
    };
  }, [productInfo]);
  return (
    <>
      <Modal open={isModalOpen} onCancel={handleCancel}>
        <div className="inner">
          <div className="images">
            <div className="general-img">
              <img src={general} alt="img" />
            </div>
            <div className="small-img">
              <img src={small} alt="img" />
            </div>
          </div>
          <div className="title">
            <h3>
              {dataInfo.title} {dataInfo.name}
            </h3>
            <ul>
              <li>Цвет изделия - {dataInfo.color}</li>
              <li>Количество в упаковке - {dataInfo.count}</li>
              <li>Вес упоковки - {dataInfo.weight} кг</li>
              <li>Объем упаковки - {dataInfo.volume} м.куб.</li>
            </ul>
            <div className="description">
              <h4>Описание</h4>
              <p>{dataInfo.description}</p>
            </div>
            <a href="" onClick={(e) => e.preventDefault()}>
              Связаться
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default App;
