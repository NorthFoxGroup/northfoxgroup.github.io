import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import { Home } from "./Screens";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
