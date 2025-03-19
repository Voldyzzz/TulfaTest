import imgSource from "../../images/Lifestyle CTA/modern-living-room-with-soft-furniture-2023-11-27-05-04-10-utc.jpg";
import "./index.scss";

const LifestyleScenes = () => {
  return (
    <section className="lifestyleScenes-section">
      <div className="container">
        <img src={imgSource} alt="Lyfestyle Scenes" />
        <h2 className="lifestyleScenes-section-title">Lifestyle Scenes</h2>
      </div>
    </section>
  );
};

export default LifestyleScenes;
