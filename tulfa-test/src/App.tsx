import "./styles/reset.scss";
import "./App.scss";
import "animate.css";
import Hero from "./components/hero";
import InfoText from "./components/infoText";
import ProductSilos from "./components/productSilos";

function App() {
  return (
    <>
      <Hero />
      <InfoText />
      <ProductSilos />
    </>
  );
}

export default App;
