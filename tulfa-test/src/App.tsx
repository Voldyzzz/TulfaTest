import "./styles/reset.scss";
import "./App.scss";
import "animate.css";
import Hero from "./components/hero";
import InfoText from "./components/infoText";
import ProductSilos from "./components/productSilos";
import Furnitures from "./components/furnitures";
import LifestyleScenes from "./components/lifestyleScenes";
import BackgroundCarousels from "./components/backgroundCarousels";
import CloseUpShots from "./components/closeUpShots";
import Installation from "./components/installation";

function App() {
  return (
    <>
      <Hero />
      <InfoText />
      <ProductSilos />
      <Furnitures />
      <BackgroundCarousels>
        <LifestyleScenes />
        <CloseUpShots />
        <Installation />
      </BackgroundCarousels>
    </>
  );
}

export default App;
