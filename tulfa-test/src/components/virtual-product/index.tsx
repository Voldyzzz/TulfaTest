import "./virtual.scss";

type Props = {
  isHeroSectionVisible: Boolean;
};

const VirtualProduct = ({ isHeroSectionVisible }: Props) => {
  const classAnimation = " animate__animated animate__slideInUp animate__slow";

  return (
    <section
      className={`virtual-section` + isHeroSectionVisible ? classAnimation : ""}
    >
      <div className="container">
        <h2>Virtual Product Photography</h2>
      </div>
    </section>
  );
};

export default VirtualProduct;
