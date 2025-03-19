import imgSmallBlueSofa from "../../images/Fabric Var/blue-sofa-on-white-background-2023-11-27-05-35-36-utc-Photoroom.png";
import imgCloseBlueSofa from "../../images/Fabric Var/сlose-blue-sofa.png";
import imgBlue from "../../images/Fabric Var/blue-sofa.png";
import imgGrey from "../../images/Fabric Var/grey-sofa.png";
import imgViolet from "../../images/Fabric Var/violet-sofa.png";

const SmallSofas = () => {
  return (
    <div className="furnitures-section__small-sofas">
      <img src={imgSmallBlueSofa} alt="Blue sofa" />
      <div className="img-big-wrapper">
        <img src={imgCloseBlueSofa} alt="Blue sofa" />
        <div className="furnitures-section__small-sofas__block">
          <div className="furnitures-section__small-sofas__block__wrapper">
            <p>Prints</p>
            <img className="close-img" src={imgBlue} alt="imgBlue" />
          </div>
          <div className="furnitures-section__small-sofas__block__wrapper">
            <p>Leathers</p>
            <img className="close-img" src={imgGrey} alt="imgGrey" />
          </div>
          <div className="furnitures-section__small-sofas__block__wrapper">
            <p>Embroidery</p>
            <img className="close-img" src={imgViolet} alt="imgGrey" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallSofas;
