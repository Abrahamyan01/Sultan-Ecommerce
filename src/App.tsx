import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import React from 'react';

function App() {
  const [addedProducts, setAddedProducts] = useState<{ [key: string]: number }>(
    {}
  );
  const getProdsToAdd = (id: number, price: number): void => {
    setAddedProducts({ ...addedProducts, [String(id)]: price });
  };

  useEffect(() => {
    if (localStorage.getItem("products")) {
      const vals = JSON.parse(localStorage.getItem("products") as string);
      setAddedProducts({ ...addedProducts, ...vals });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(addedProducts));
  }, [addedProducts]);

  return (
    <>
      <Header addedProducts={addedProducts} />
      <Outlet context={{ getProdsToAdd, setAddedProducts, addedProducts }} />
      <Footer />
    </>
  );
}

export default App;

