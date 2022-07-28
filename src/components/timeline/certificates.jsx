/* eslint-disable import/no-unresolved */

import SwiperCore, { Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import test from '../../images/certification/test.png';
import carrefour from '../../images/carrefour.png';
import './certifications.css';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, EffectCoverflow]);

function Certif() {
  return (
    <div className="bg-certificats">
      <p className="heading">Certificates</p>
      <p className="text">My certificates from one of the biggest blockchain academies - Moralis Academy.</p>
      <div className="slideshow">
        <Swiper
          grabCursor
          centeredSlides
          coverflowEffect={{
            rotate: 5,
            stretch: 20,
            depth: 75,
            modifier: 6,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            type: 'fraction',
          }}
        >
          <SwiperSlide>
            <img src={test} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carrefour} alt="Certificate" className="certificate-img" />
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
}

export default Certif;
