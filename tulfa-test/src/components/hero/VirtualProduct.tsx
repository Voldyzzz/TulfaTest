import "./virtual.scss";
import imageSource from "../../images/Banner Video/modern-scandinavian-yellow-sofa-isolated-over-whit-2023-11-27-05-20-00-utc.jpg";

const VirtualProduct = () => {
  return (
    <div
      className={`virtual-wrapper animate__animated animate__slow animate__slideInUp`}
    >
      <div className="container">
        <h2 className="virtual-wrapper__title">Virtual Product Photography</h2>
        <img className="virtual-wrapper__image" src={imageSource} alt="Sofa" />
      </div>
    </div>
  );
};

export default VirtualProduct;
