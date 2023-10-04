import React from "react";

import { Navbar } from "./components";
import { Header, About, Proses, Target, Footer } from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <Header />
      </div>
      <About />
      <Proses />
      <Target />
      <Footer />
    </div>
  );
};

export default App;
