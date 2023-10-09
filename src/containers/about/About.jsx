import React, { useEffect } from "react";
import "./about.css";
import { Button } from "../../components";
import Logo1 from "../../assets/about/Logo Partner.webp";
import Logo2 from "../../assets/about/Logo Partner-2.webp";
import Logo3 from "../../assets/about/Logo Partner-3.webp";
import Logo4 from "../../assets/about/Logo Partner-4.webp";
import Logo5 from "../../assets/about/Logo Partner-5.webp";
import Logo6 from "../../assets/about/Logo Partner-6.webp";
import Logo7 from "../../assets/about/Logo Partner-7.webp";
import turtle from "../../assets/about/Turtle.webp";
import icon1 from "../../assets/about/Icon1.webp";
import icon2 from "../../assets/about/Icon2.webp";
import { ParallaxLayer } from "@react-spring/parallax";

const About = () => {
  return (
    <>
      <div className="about">
        {/* LEFT SECTION START */}
        <div className="about-left">
          <div className="about-info">
            <h5 className="about-title">TENTANG KEHATI</h5>
            <h5 className="about-colaboration">Platform Kolaborasi Bersama Pantau Pengelolaan Keanekaragaman Hayati Indonesia</h5>
          </div>

          <div className="about-instantion">
            <img className="instantion-logo" src={Logo1} alt="logo" />
            <img className="instantion-logo" src={Logo2} alt="logo" />
            <img className="instantion-logo" src={Logo3} alt="logo" />
            <img className="instantion-logo" src={Logo4} alt="logo" />
            <img className="instantion-logo" src={Logo5} alt="logo" />
            <img className="instantion-logo" src={Logo6} alt="logo" />
            <img className="instantion-logo" src={Logo7} alt="logo" />
          </div>
          <div className="about-parallax">
            <ParallaxLayer offset={0} speed={-0.05} horizontal style={{ maxHeight: "100vh" }}>
              <div className="about-turtle">
                <img src={turtle} alt="turtle" />
                <div className="about-card">
                  <Button title="Penyu Hijau" scientific="Chelonia Midas" arrow={true} />
                </div>
              </div>
            </ParallaxLayer>
          </div>
        </div>
        {/* LEFT SECTION END */}

        {/* RIGHT SECTION START */}
        <div className="about-right">
          <div className="about-description">
            <p>
              Aplikasi Pemantauan Aksi Pengelolaan Kehati adalah sebuah solusi digital yang dirancang untuk memantau dan mengelola berbagai tindakan atau langkah-langkah yang terkait dengan
              pelestarian lingkungan dan keanekaragaman hayati. Aplikasi ini bertujuan untuk memberikan sarana efisien dalam mengawasi dan mengkoordinasikan aktivitas-aktivitas yang berkontribusi pada
              perlindungan alam dan ekosistem.
            </p>
          </div>
          <div className="about-feature">
            {/* SUB SECTION 1 START */}
            <div className="feature1">
              <img src={icon1} alt="icon" />
              <div className="feature1-content">
                <h3>
                  <b>Pantau Aksi Pengelolaan Kehati</b>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae, totam ducimus aut repellendus explicabo ab enim veniam quae sequi atque</p>
              </div>
            </div>
            {/* SUB SECTION 1 END */}

            {/* SUB SECTION 2 START */}
            <div className="feature2">
              <img src={icon2} alt="icon" />
              <div className="feature2-content">
                <h3>
                  <b>Pantau Indeks Pengelolaan Kehati</b>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae, totam ducimus aut repellendus explicabo ab enim veniam quae sequi atque</p>
              </div>
            </div>
            {/* SUB SECTION 2 END */}
          </div>
        </div>
        {/* RIGHT SECTION END */}
      </div>
    </>
  );
};

export default About;
