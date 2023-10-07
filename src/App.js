import React from "react";

import { Card } from "./components";
import { Header, About, Proses, Target, Footer } from "./containers";
import { Parallax } from "@react-spring/parallax";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Parallax pages={"auto"}>
        <Header />
        <About />
        <Proses />
        <Target />
        <Footer />
      </Parallax>
    </div>
  );
};

export default App;
