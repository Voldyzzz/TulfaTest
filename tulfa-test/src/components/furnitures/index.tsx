import "./index.scss";
import Sizes from "./Sizes";
import Sofas from "./Sofas";
import SmallSofas from "./SmallSofas";

const Furnitures = () => {
  return (
    <section className="furnitures-section">
      <div className="container">
        <Sizes />
        <Sofas />
        <SmallSofas />
      </div>
    </section>
  );
};

export default Furnitures;
