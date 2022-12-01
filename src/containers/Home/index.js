import "./App.css";
import { useState } from "react";

import Mode from "../../components/Mode/Mode";
import { Header } from "../../components/Header/Header";
import { About } from "../../components/About/About";
import { Bio } from "../../components/Bio/Bio";
import { Footer } from "../../components/Footer/Footer";

function Home() {
  const [lightMode, setMode] = useState(false);

  const handleModeChange = () => {
    setMode(!lightMode);
  };

  return (
    <div className={lightMode ? "light-mode" : "dark-mode"}>
      <Mode setMode={lightMode} handleModeChange={handleModeChange} />
      <Header />
      <About />
      <Bio />
      <Footer />
    </div>
  );
}

export default Home;
