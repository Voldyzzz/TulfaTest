import "./virtual.scss";
import imageSource from "../../images/Banner Video/modern-scandinavian-yellow-sofa-isolated-over-whit-2023-11-27-05-20-00-utc.jpg";

type Props = {
  isVideoEnd: Boolean;
};

const VirtualProduct = ({ isVideoEnd }: Props) => {
  const classAnimation =
    " animate__animated animate__slideInUp animate__slow animate-delay-2s";

  return (
    <div className={`virtual-wrapper${isVideoEnd ? classAnimation : ""}`}>
      <div className="container">
        <h2 className="virtual-wrapper__title">Virtual Product Photography</h2>
        <img className="virtual-wrapper__image" src={imageSource} alt="Sofa" />
      </div>
    </div>
  );
};

export default VirtualProduct;
