import "./styles/reset.scss";
import "./App.scss";
import "animate.css";
import Hero from "./components/hero";
import VirtualProduct from "./components/virtual-product";
import { useState } from "react";

function App() {
  const [isHeroSectionVisible, setIsHeroSectionVisible] =
    useState<Boolean>(true);
  return (
    <>
      {isHeroSectionVisible && (
        <Hero setIsHeroSectionVisible={setIsHeroSectionVisible} />
      )}
      <VirtualProduct isHeroSectionVisible={isHeroSectionVisible} />
    </>
  );
}

export default App;
