import { useEffect } from "react";
import "./modal.scss";
import Carousels from "../Carousels";
import imgSouce from "../../../images/Silo Images/6367-beige-basket-isolated-on-a-transparent-backg-2023-11-27-04-51-12-utc.png";

type Props = {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ isModal, setIsModal }: Props) => {
  const handleCloseModal = () => {
    setIsModal(!isModal);
  };

  useEffect(() => {
    if (isModal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }

    return () => document.body.classList.remove("active-modal");
  }, [isModal]);

  return (
    <div className="modal">
      <div className="overlay">
        <div className="modal-content">
          <button className="close-modal" onClick={handleCloseModal}>
            Close
          </button>
          <h2 className="title">
            Ultra-high-definition images of your furniture shot from diffent
            angles
          </h2>
          <div className="imagesWrapper">
            <Carousels />
            <img src={imgSouce} alt="Silo image" className="first-image" />
            <img src={imgSouce} alt="Silo image" className="second-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
