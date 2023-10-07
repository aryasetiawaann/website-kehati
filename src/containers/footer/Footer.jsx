import React from 'react';
import './footer.css';

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
          <img src="./assets/section5/Karang.png" alt="" srcset="" />
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
              Email: <u>info@kehati.go.id</u>
            </h5>
            <p>Berikan masukan dan saran ataupun pertanyaan terkait Kehati untuk pengembangan platform yang lebih baik</p>
          </div>
          {/* SUB SECTION 1 END */}

          {/* SUB SECTION 2 START */}
          <div className="footer-menu">
            <h5>Tentang Kami</h5>
            <h5>Data dan Informasi</h5>
            <h5>Metode Pengkajian</h5>
          </div>
          {/* SUB SECTION 2 END */}
        </div>

        <div className="footer-copyright">&copy; 2022 Keanekaragaman Hayati Indonesia</div>
      </div>
      {/* RIGHT SECTION END */}
    </div>
  );
};

export default Footer;
