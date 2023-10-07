import React from 'react';
import {Card} from '../../components/';
import './proses.css';

const Proses = () => {
  return (
    <div className="process">
      {/* BACKGROUND IMAGE */}
      <div className="bubble-container">
        <img src="./assets/section3/Bubble.png" alt="" />
      </div>

      {/* CONTENT START */}
      <div className="process-content">
        <h1 className="process-title">Proses dalam KEHATI</h1>
        <p className="process-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        {/* CARD SECTION START */}
        <div className="report">
          <Card
            title="Perencanaan Aksi Pengelolaan Kehati"
            content="Modul yang dirancang khusus untuk membantu pengguna dalam merencanakan, mengatur, dan mengelola berbagai tindakan atau langkah-langkah yang berkaitan dengan pelestarian lingkungan dan keanekaragaman hayati selaras dengan IBSAP."
          />
          <Card
            title="Perencanaan Aksi Pengelolaan Kehati"
            content="Modul yang dirancang khusus untuk membantu pengguna dalam merencanakan, mengatur, dan mengelola berbagai tindakan atau langkah-langkah yang berkaitan dengan pelestarian lingkungan dan keanekaragaman hayati selaras dengan IBSAP."
          />
          <Card
            title="Perencanaan Aksi Pengelolaan Kehati"
            content="Modul yang dirancang khusus untuk membantu pengguna dalam merencanakan, mengatur, dan mengelola berbagai tindakan atau langkah-langkah yang berkaitan dengan pelestarian lingkungan dan keanekaragaman hayati selaras dengan IBSAP."
          />
        </div>
        {/* CARD SECTION END */}
      </div>
      {/* CONTENT END */}
    </div>
  );
};

export default Proses;
