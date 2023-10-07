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

const Target = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/target.json"); // LINK API
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
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
      <div>
        <div className="swiper-padding">
          {/* <Swiper className="mySwiper" slidesPerView={4.5} spaceBetween={30} grabCursor={true} freeMode={true}>
            <SwiperSlide> */}
          {data.map((item, index) => (
            <Card id="target-card" key={index} title={item.title} content={item.content} url={item.url} imgUrl={item.imgUrl} />
          ))}
          {/* </SwiperSlide>
          </Swiper> */}
        </div>

        <div className="swiper-button">
          <div className="button-arrow">
            <IoMdArrowBack style={{ color: "white" }} />
          </div>

          <div className="button-arrow">
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
