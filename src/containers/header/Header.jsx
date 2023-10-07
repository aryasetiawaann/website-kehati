import React from "react";
import "./header.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Cloud1 from "../../assets/header/Cloud1.png";
import Island from "../../assets/header/LabuanBajo.png";
import ElangFlores from "../../assets/header/ElangFlores.png";
import Cloud from "../../assets/header/Cloud.png";
import Komodo from "../../assets/header/Komodo.png";

const Header = () => {
  return (
    <div className="header">
      <Parallax pages={2} style={{ overflow: "hidden", height: "130vh" }}>
        <ParallaxLayer offset={0} speed={0.5}>
          <img src={Cloud1} alt="cloud1" className="cloud1" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.02}>
          <p className="header-title">TENTANG APLIKASI</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            backgroundImage: `url(${Island})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <ParallaxLayer offset={0} speed={0.8}>
          <img src={Cloud} alt="Cloud" className="cloud" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.7}>
          <img src={ElangFlores} alt="ElangFlores" className="elang-flores" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.6}>
          <img src={Komodo} alt="Komodo" className="komodo" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0}>
          <div className="gradient"></div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Header;
