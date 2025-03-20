import { useEffect } from "react";
import "./index.scss";
import imgsource from "../../../images/Close Up Shots/view-of-a-modern-lounge-room-2024-05-27-19-05-26-utc.jpg";
import img1 from "../../../images/Close Up Shots/view-of-a-modern-lounge-room-2023-11-28-03-19-28-utc.jpg";
import img2 from "../../../images/Close Up Shots/lounge-room-2024-01-22-18-27-58-utc.jpg";
import img3 from "../../../images/Close Up Shots/1.jpg";
import img4 from "../../../images/Close Up Shots/lounge-room-2024-01-22-18-27-58-utc (1).jpg";
import img5 from "../../../images/Close Up Shots/lounge-room-2024-01-22-18-27-58-utc (2).jpg";
import img6 from "../../../images/Close Up Shots/screw-for-furniture-assembly-close-up-2023-11-27-04-51-33-utc.jpg";
import img7 from "../../../images/Close Up Shots/stylish-chest-of-drawers-close-up-furniture-for-2024-01-18-18-28-52-utc.jpg";
import img8 from "../../../images/Close Up Shots/2.jpg";

type Props = {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CloseUpModal = ({ isModal, setIsModal }: Props) => {
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
    <div className="modal-closeUp">
      <div className="overlay-closeUp" onClick={handleCloseModal}>
        <div className="modal-content-closeUp">
          <div className="closeUp-background">
            <div className="closeUp-background-wrapper">
              <div className="closeUp-info">
                <img src={imgsource} alt="Image of sofa and table" />
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  voluptatum sint.
                </p>
              </div>
              <div className="images-flex">
                <div className="images-flex-row-1 row">
                  <img className="img1" src={img1} alt="image" />
                  <img className="img2" src={img2} alt="image" />
                </div>
                <div className="images-flex-row-2 row">
                  <img className="img3" src={img3} alt="image" />
                  <img className="img4" src={img4} alt="image" />
                </div>
                <div className="images-flex-row-3 row">
                  <img className="img5" src={img5} alt="image" />
                </div>
                <div className="images-flex-row-4 row">
                  <img className="img6" src={img6} alt="image" />
                  <img className="img7" src={img7} alt="image" />
                </div>
                <div className="images-flex-row-5 row">
                  <img className="img8" src={img8} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloseUpModal;
