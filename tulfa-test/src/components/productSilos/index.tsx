import "./index.scss";
import imgSouce from "../../images/Silo Images/6367-beige-basket-isolated-on-a-transparent-backg-2023-11-27-04-51-12-utc.jpg";
import { useState } from "react";
import Modal from "./modal/Modal";

const ProductSilos = () => {
  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => {
    setIsModal(true);
  };

  return (
    <section className="productSilos">
      <div className="container">
        <div className="productSilos__wrapper">
          <h3 className="productSilos__wrapper__title">Product Silos</h3>
          <button
            className="productSilos__wrapper__button"
            onClick={toggleModal}
          >
            <i className="fa-solid fa-plus" style={{ color: "#5b409" }}></i>
            Take a closer look
          </button>
          <img src={imgSouce} alt="Silo" />

          {isModal && <Modal setIsModal={setIsModal} isModal={isModal} />}
        </div>
      </div>
    </section>
  );
};

export default ProductSilos;
