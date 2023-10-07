import React from "react";
import "./about.css";
import { Button } from "../../components";

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
            <img className="instantion-logo" src="../assets/logo/logo Partner.png" alt="mamang" />
            <img className="instantion-logo" src="../assets/logo/logo Partner-1.png" alt="mamang" />
            <img className="instantion-logo" src="../assets/logo/logo Partner-2.png" alt="mamang" />
            <img className="instantion-logo" src="../assets/logo/logo Partner-3.png" alt="mamang" />
            <img className="instantion-logo" src="../assets/logo/logo Partner-4.png" alt="mamang" />
            <img className="instantion-logo" src="../assets/logo/logo Partner-5.png" alt="mamang" />
            <img className="instantion-logo" src="../assets/logo/image 5.png" alt="mamang" />
          </div>

          <div className="about-turtle">
            <img src="../assets/section1/Kura.png" alt="turtle" />
            <div className="about-card">
              <Button title="Penyu Hijau" scientific="Chelonia Midas" />
            </div>
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
              <img src="../assets/section1/Group (4).png" alt="icon" />
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
              <img src="../assets/section1/Group (4).png" alt="icon" />
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
