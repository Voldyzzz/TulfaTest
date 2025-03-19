import "./index.scss";
import { dimensionUrls, installationUrls, closeUpUrls } from "../../data/URLS";
import TextInformation from "./TextInformation";
import ImageSlider from "./ImageSlider";

const Installation = () => {
  return (
    <section className="instalattion-section">
      <div className="container">
        <TextInformation isTitle={true} />
        <ImageSlider slides={installationUrls} />
        <TextInformation isTitle={true} />
        <ImageSlider slides={dimensionUrls} />
        <TextInformation isTitle={true} />
        <ImageSlider slides={closeUpUrls} />
        <TextInformation isTitle={false} />
      </div>
    </section>
  );
};

export default Installation;
