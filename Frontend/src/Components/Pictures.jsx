import React from 'react'
import Pic1 from'../assets/Images/Dalle1.webp' 
import Pic2 from '../assets/Images/Dalle2.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Pictures() {
  return (
    <>
    <div className="flex jus- min-h-screen bg-yellow-100 p-6">
      <div className="w-full max-w-lg">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="rounded-lg shadow-lg"
        >
          <SwiperSlide>
            <img src={Pic1} alt="Picture 1" className="w-full h-120 object-cover rounded-lg" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={Pic2} alt="Picture 2" className="w-full h-120 object-cover rounded-lg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    </>
  )
}

export default Pictures