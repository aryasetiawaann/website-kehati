import React, { useState, useEffect } from 'react';
import './target.css';
import {Card, Button} from '../../components/';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

const Target = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/target.json'); // LINK API
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="target">
      {/* BACKGROUND IMAGE */}
      <div className="target-bubble">
        <img src="./assets/section4/Bubble.png" alt="" />
      </div>

      <div className="target-header">
        <h1>Sasaran Pengguna</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>

      {/* CARD SECTION START */}
      <div className="swiper-card">
        <div className='swiper-padding'>
          <Swiper className="mySwiper" slidesPerView={'auto'} spaceBetween={30} grabCursor={true} freeMode={true} navigation={true}>
            <div className="target-card">
              {data.map((item, index) => (
                <SwiperSlide>
                  <Card id="target-card" key={index} title={item.title} content={item.content} url={item.url} imgUrl={item.imgUrl} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>

        <div className="swiper-button">
          <div className="button-arrow">
            <img className="arrow-left-line-icon" alt="" src="./assets/section4/Arrow-Left.svg" />
          </div>

          <div className="button-arrow">
            <img className="arrow-right-line-icon" alt="" src="./assets/section4/Arrow-Right.svg" />
          </div>
        </div>
      </div>
      {/* CARD SECTION END */}

      {/* BACKGROUNG IMAGE */}
      <div className="karang">
        <img className="coral" src="./assets/section4/Coral.png" alt="" />
        <img className="coral2" src="./assets/section4/Coral2.png" alt="www" />
        <Button title="Bintang Laut" scientific="Linckia laevigata" />
      </div>

      <div className="bintang">
        <img src="./assets/section4/Bintang.png" alt="" />
        <Button title="Bintang Laut" scientific="Linckia laevigata" />
      </div>
      <div className="target-gradient"></div>
    </div>
  );
};

export default Target;
