import { useState } from "react";
import imgSofaOrange from "../../images/Color Var/orange-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-12-utc-Photoroom.png";
import imgSofaViolet from "../../images/Color Var/violet-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-01-16-utc-Photoroom.png";
import imgSofaYellow from "../../images/Color Var/yellow-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-07-utc-Photoroom.png";

const sofaColors = ["orange", "violet", "yellow"];

const Sofas = () => {
  const [selectedColor, setSelectedColor] = useState("orange");

  const selectSofa = (colorOfSofa: string): string => {
    switch (colorOfSofa) {
      case "violet":
        return imgSofaViolet;
      case "yellow":
        return imgSofaYellow;
      default:
        return imgSofaOrange;
    }
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };
  return (
    <div className="furnitures-section__sofas">
      <div className="furnitures-section__sofas-colors">
        <div className="furnitures-section__sofas-colors-images-wrapper">
          <img src={selectSofa(selectedColor)} alt={`${selectedColor} sofa`} />
          <div className="img-big-wrapper">
            <img
              src={selectSofa(selectedColor)}
              alt={`${selectedColor} sofa`}
            />
          </div>
        </div>
        <div className="furnitures-section__sofas-colors-controls">
          {sofaColors.map((sofaColor) => (
            <label key={sofaColor}>
              <input
                type="radio"
                name="sofaColor"
                value={sofaColor}
                checked={selectedColor === sofaColor}
                onChange={handleColorChange}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sofas;
