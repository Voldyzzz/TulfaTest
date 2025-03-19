import imgSizeVar from "../../images/Size Var/6412-brown-storage-cabinet-isolated-on-a-transpar-2023-11-27-05-08-49-utc-Photoroom.png";
const Sizes = () => {
  return (
    <div className="furnitures-section__sizes">
      <div className="furnitures-section__sizes__wrapper">
        <div className="img-wrapper">
          <span className="img-label label-L">L</span>
          <img className="img-L" src={imgSizeVar} alt="size L" />
        </div>
        <div className="img-wrapper">
          <span className="img-label label-M">M</span>
          <img className="img-M" src={imgSizeVar} alt="size M" />
        </div>

        <div className="img-wrapper">
          <span className="img-label label-S">S</span>
          <img className="img-S" src={imgSizeVar} alt="size S" />
        </div>
      </div>

      <p className="furnitures-section__sizes__wrapper-title">
        Lorem Ipsum Dolor Sit Amet.
      </p>
    </div>
  );
};

export default Sizes;
