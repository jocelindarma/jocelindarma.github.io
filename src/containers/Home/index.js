import { useSelector } from 'react-redux'

import { Mode } from "../../components/Mode/Mode";
import { Header } from "../../components/Header/Header";
import { About } from "../../components/About/About";
import { Bio } from "../../components/Bio/Bio";
import { Footer } from "../../components/Footer/Footer";

function Home() {
  const darkMode = useSelector(state => state.darkMode.darkMode)

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Mode />
      <Header />
      <About />
      <Bio />
      <Footer />
    </div>
  );
}

export default Home;
