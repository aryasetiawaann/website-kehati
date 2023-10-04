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
      <Parallax pages={1} style={{ overflow: "hidden" }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            backgroundImage: `url(${Cloud1})`,
          }}
        />

        <ParallaxLayer offset={0} speed={2.5}>
          <h1 className="header-title">TENTANG APLIKASI</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            backgroundImage: `url(${Island})`,
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            backgroundImage: `url(${ElangFlores})`,
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            backgroundImage: `url(${Cloud})`,
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            backgroundImage: `url(${Komodo})`,
          }}
        />
      </Parallax>
    </div>
  );
};

export default Header;
