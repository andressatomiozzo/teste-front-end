import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import Header from "./components/Header/Heather";
import Home from "./Pages/Home/Home";
import ErrorNoPageFound from "./Pages/Error/ErrorNoPageFound";
import Footer from "./components/Footer/Footer";
import { ProductsPortal } from "./context/ProductsContext";

const App = () => {
  return (
    <ProductsPortal>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rastreio" element={<ErrorNoPageFound />} />
          <Route path="favoritos" element={<ErrorNoPageFound />} />
          <Route path="usuario" element={<ErrorNoPageFound />} />
          <Route path="carrinho" element={<ErrorNoPageFound />} />
          <Route path="*" element={<ErrorNoPageFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ProductsPortal>
  );
};

export default App;
