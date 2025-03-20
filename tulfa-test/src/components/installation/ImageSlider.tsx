import { useState } from "react";
import "./imageSlider.scss";

type Props = {
  slides: String[];
};

const ImageSlider = ({ slides }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="containerSlider">
      <div className="slider">
        <div className="upArrow" onClick={goToNext}>
          <i className="fa-solid fa-arrow-up"></i>
        </div>
        <div className="downArrow" onClick={goToPrevious}>
          <i className="fa-solid fa-arrow-down"></i>
        </div>
        <div
          className="slide animate__slideInUp"
          style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        ></div>
      </div>
    </div>
  );
};

export default ImageSlider;
