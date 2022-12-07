import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home/index";
import PageNotFound from "../containers/PageNotFound/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
