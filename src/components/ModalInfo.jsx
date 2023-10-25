import React, { useContext, useEffect, useState } from 'react';
import { Modal } from 'antd';
import { ModalContext } from '../App';

const App = () => {
  const { isModalOpen, setIsModalOpen, productInfo } = useContext(ModalContext);
  const [dataInfo, setDataInfo] = useState({});

  useEffect(() => {
    if (productInfo && productInfo.hasOwnProperty('name')) {
      setDataInfo(productInfo);
    } else {
      setDataInfo({});
    }
  }, [productInfo]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal open={isModalOpen} onCancel={handleCancel}>
        <div className="inner">
          <div className="images">
            <figure className="general-img">
              {dataInfo.image1 && <img src={dataInfo.image1} alt="img" />}
            </figure>
            <figure className="small-img">
              {dataInfo.image2 && <img key="image2" src={dataInfo.image2} alt="img" />}
              {dataInfo.image3 && <img key="image3" src={dataInfo.image3} alt="img" />}
              {dataInfo.image4 && <img key="image4" src={dataInfo.image4} alt="img" />}
              {dataInfo.image5 && <img key="image5" src={dataInfo.image5} alt="img" />}
            </figure>
          </div>
          <div className="title">
            <h3>{dataInfo.name}</h3>
            <h4>{dataInfo.articul}</h4>
            <h5>{dataInfo.model}</h5>
            <div>
              {dataInfo.color && <p className="information">Цвет изделия - {dataInfo.color}</p>}
              <div className="information">{dataInfo.information}</div>
            </div>
            {dataInfo.description && (
              <div className="description">
                <h6>Описание</h6>
                <p className="desc-text">{dataInfo.description}</p>
              </div>
            )}
            <div className="modalInfo-footer">
              <a href="https://t.me/+998901114700" target="_blank" rel="noopener noreferrer">
                Связаться
              </a>
              {dataInfo.price ? <p>{dataInfo.price} сум</p> : <p>Цена не написано</p>}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default App;
