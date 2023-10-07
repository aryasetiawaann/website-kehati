import React from "react";
import "./header.css";

import { ParallaxLayer } from "@react-spring/parallax";
import Cloud1 from "../../assets/header/Cloud1.png";
import Island from "../../assets/header/LabuanBajo.png";
import ElangFlores from "../../assets/header/ElangFlores.png";
import Cloud from "../../assets/header/Cloud.png";
import Komodo from "../../assets/header/Komodo.png";
import { Button, Navbar } from "../../components";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <ParallaxLayer offset={0} speed={0.05} horizontal style={{ maxHeight: "100vh" }}>
        <img src={Cloud1} alt="cloud1" className="cloud1" />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.1}>
        <p className="header-title">TENTANG APLIKASI</p>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.01}
        speed={0}
        style={{
          backgroundImage: `url(${Island})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "110vh",
        }}
      />

      <ParallaxLayer offset={0} speed={-0.05} horizontal style={{ maxHeight: "100vh" }}>
        <img src={Cloud} alt="Cloud" className="cloud" />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-0.1} horizontal style={{ zIndex: "99", maxHeight: "100vh" }}>
        <img src={ElangFlores} alt="ElangFlores" className="elang-flores" />
        <div className="button-elang">
          <Button title="Elang Flores" scientific="Nisaetus floris" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.1} horizontal style={{ maxHeight: "100vh" }}>
        <img src={Komodo} alt="Komodo" className="komodo" />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0}>
        <div className="gradient"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.15} horizontal style={{ zIndex: "99", maxHeight: "100vh" }}>
        <div className="button-komodo">
          <Button title="Komodo" scientific="Varanus komodoensis" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.01} speed={0.05} style={{ zIndex: "98", maxHeight: "100vh" }}>
        <div className="button-bajo">
          <Button title="Labuan Bajo" scientific="Nusa Tenggara Timur" />
        </div>
      </ParallaxLayer>
    </div>
  );
};

export default Header;
