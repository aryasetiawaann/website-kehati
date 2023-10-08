import React, { useState, useEffect } from "react";
import "./target.css";
import { Card, Button } from "../../components/";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import Bubble from "../../assets/target/Bubble.png";
import Coral from "../../assets/target/coral1.png";
import Coral2 from "../../assets/target/coral2.png";
import Starfish from "../../assets/target/binlaut.png";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { ParallaxLayer } from "@react-spring/parallax";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";

const Target = () => {
  const [data, setData] = useState([]);
  const [slideView, setSlideView] = useState(6);
  const windowWidth = window.innerWidth;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/target.json"); // LINK API
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    const updateSize = () => {
      if (windowWidth <= 1300) {
        setSlideView(3.5);
      } else if (windowWidth <= 1500) {
        setSlideView(4.5);
      } else {
        setSlideView(6);
      }
    };

    fetchData();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <div className="target">
      {/* BACKGROUND IMAGE */}
      <ParallaxLayer offset={0} speed={-0.05} horizontal style={{ maxHeight: "100vh" }}>
        <div className="target-bubble">
          <img src={Bubble} alt="" />
        </div>
      </ParallaxLayer>

      <div className="target-header">
        <h1>Sasaran Pengguna</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>

      {/* CARD SECTION START */}
      <div className="swiper-container">
        <div id="card-mobile">
          <div className="swiper-padding">
            {data.map((item, index) => (
              <Card id="target-card" key={index} title={item.title} content={item.content} url={item.url} icon={item.icon} />
            ))}
          </div>
        </div>

        <div id="card-desktop">
          <Swiper
            freeMode={true}
            modules={[FreeMode, Navigation]}
            navigation={{ nextEl: ".button-arrow-right", prevEl: ".button-arrow-left", clickable: true }}
            grabCursor={true}
            className="mySwiper"
            breakpoints={{
              900: {
                slidesPerView: 3.2,
              },

              1400: {
                slidesPerView: 4.5,
              },
              1500: {
                slidesPerView: 6,
              },
            }}
          >
            <div className="swiper-padding">
              {data.map((item, index) => (
                <SwiperSlide>
                  <Card id="target-card" key={index} title={item.title} content={item.content} url={item.url} icon={item.icon} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>

        <div className="swiper-button">
          <div className="button-arrow-left">
            <IoMdArrowBack style={{ color: "white" }} />
          </div>

          <div className="button-arrow-right">
            <IoMdArrowForward style={{ color: "white" }} />
          </div>
        </div>
      </div>
      {/* CARD SECTION END */}

      {/* BACKGROUNG IMAGE */}
      <div className="karang">
        <img className="coral" src={Coral} alt="" />
        <img className="coral2" src={Coral2} alt="www" />
        <Button title="Taman Nasional Bunaken" scientific="Sulawesi Utara" />
      </div>

      <ParallaxLayer offset={0} speed={0.05} style={{ maxHeight: "100vh" }}>
        <div className="bintang">
          <img src={Starfish} alt="starfish" />
          <Button title="Bintang Laut" scientific="Linckia laevigata" />
        </div>
      </ParallaxLayer>
      <div className="target-gradient"></div>
    </div>
  );
};

export default Target;
