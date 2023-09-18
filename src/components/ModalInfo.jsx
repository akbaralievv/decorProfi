import general from '../assets/images/modalImg.png';
import small from '../assets/images/smallModalImg.png';

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
            <a href="https://t.me/+998901114700" target="_blank">
              Связаться
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default App;
