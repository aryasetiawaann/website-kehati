import React from "react";
import "./header.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { ParallaxLayer } from "@react-spring/parallax";
import Cloud1 from "../../assets/header/Cloud1.png";
import Island from "../../assets/header/LabuanBajo.png";
import ElangFlores from "../../assets/header/ElangFlores.png";
import Cloud from "../../assets/header/Cloud.png";
import Komodo from "../../assets/header/Komodo.png";
import { Button, Navbar } from "../../components";

const Header = () => {
  AOS.init({
    once: true,
  });

  return (
    <div className="header">
      <Navbar />

      <ParallaxLayer offset={0} speed={0.05} horizontal style={{ maxHeight: "100vh" }}>
        <img src={Cloud1} alt="cloud1" className="cloud1" />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.05} style={{ maxHeight: "50vh" }}>
        <div data-aos="slide-up" data-aos-easing="ease-in-sine" data-aos-duration="700">
          <p className="header-title">TENTANG APLIKASI</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0}
        style={{
          backgroundImage: `url(${Island})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          height: "110vh",
        }}
        className="header-background"
      />

      <ParallaxLayer offset={0} speed={-0.05} horizontal style={{ maxHeight: "100vh", zIndex: "97" }}>
        <img src={Cloud} alt="Cloud" className="cloud" data-aos="fade-up-left" data-aos-easing="ease-in-sine" data-aos-duration="500" />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-0.1} horizontal style={{ zIndex: "100", maxHeight: "30vh", top: "20vh" }} className="elang-flores-container">
        <div data-aos="fade-up-left" data-aos-easing="ease-in-sine" data-aos-duration="500">
          <img src={ElangFlores} alt="ElangFlores" className="elang-flores" />
          <div className="button-elang">
            <Button title="Elang Flores" scientific="Nisaetus floris" />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.05} horizontal style={{ maxHeight: "100vh" }}>
        <div data-aos="zoom-out-down" data-aos-easing="ease-in-sine" data-aos-duration="500">
          <img src={Komodo} alt="Komodo" className="komodo" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0}>
        <div className="gradient"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.05} horizontal style={{ zIndex: "97", maxHeight: "100vh" }}>
        <div data-aos="fade-up-right" data-aos-easing="ease-in-sine" data-aos-duration="500">
          <div className="button-komodo">
            <Button title="Komodo" scientific="Varanus komodoensis" />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.01} speed={0.05} style={{ zIndex: "98", maxHeight: "30vh" }}>
        <div className="button-bajo">
          <Button title="Labuan Bajo" scientific="Nusa Tenggara Timur" />
        </div>
      </ParallaxLayer>
    </div>
  );
};

export default Header;
