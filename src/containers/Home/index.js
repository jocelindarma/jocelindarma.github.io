import "./App.css";
import { useState } from "react";

import { Mode } from "../../components/Mode/Mode";
import { Header } from "../../components/Header/Header";
import { About } from "../../components/About/About";
import { Bio } from "../../components/Bio/Bio";
import { Footer } from "../../components/Footer/Footer";

function Home() {
  const [darkMode, setMode] = useState(true);

  const handleModeChange = () => {
    setMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Mode setMode={darkMode} handleModeChange={handleModeChange} />
      <Header />
      <About />
      <Bio />
      <Footer />
    </div>
  );
}

export default Home;
