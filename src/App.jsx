import React from "react";
import GlobalResetStyles from "./styles/GlobalResetStyled";
import AppLayOut from "./ui/AppLayOut";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";
import sampleProducts from "./data/product-cart";

function App() {
  return (
    <>
      <GlobalResetStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayOut />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/products"
              element={
                <Products products={sampleProducts} title="جدیدترین محصولات" />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
