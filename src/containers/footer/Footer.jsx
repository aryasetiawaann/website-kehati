import React from "react";
import "./footer.css";

import Karang from "../../assets/footer/Coral.webp";
import Turtle from "../../assets/footer/image 30.webp";
import { BsArrowUpRight } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      {/* LEFT SECTION START */}
      <div className="footer-left">
        <div className="footer-hashtag">
          <h5>KEANEKARAGAMAN HAYATI</h5>
          <h1>#KitaButuhMereka</h1>
        </div>

        <div className="footer-image">
          <img className="footer-karang" src={Karang} alt="" srcset="" />
          <img className="footer-turtle" src={Turtle} alt="" />
        </div>
      </div>
      {/* LEFT SECTION END */}

      {/* RIGHT SECTION START */}
      <div className="footer-right">
        <div className="footer-info">
          {/* SUB SECTION 1 START */}
          <div className="footer-contact">
            <h5>Hubungi kami melalui:</h5>
            <h5>
              Email:{" "}
              <a href="#">
                <u>
                  info@kehati.go.id
                  <BsArrowUpRight style={{ marginLeft: "2px" }} />
                </u>
              </a>
            </h5>
            <p>Berikan masukan dan saran ataupun pertanyaan terkait Kehati untuk pengembangan platform yang lebih baik</p>
          </div>
          {/* SUB SECTION 1 END */}

          <hr />

          {/* SUB SECTION 2 START */}
          <div className="footer-menu">
            <h5>
              <a href="#navbar">Tentang Kami</a>
            </h5>
            <h5>
              <a href="#">Data dan Informasi</a>
            </h5>
            <h5>
              <a href="#">Metode Pengkajian</a>
            </h5>
          </div>
          {/* SUB SECTION 2 END */}

          <hr />
        </div>

        <div className="footer-copyright">&copy; 2022 Keanekaragaman Hayati Indonesia</div>
      </div>
      {/* RIGHT SECTION END */}
    </div>
  );
};

export default Footer;
