import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './Swpier.css'
// import required modules
import './Swpier2.css'
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FreeMode, Navigation, Autoplay } from "swiper/modules";

export default function Swipe2() {
const slides =[
  {title:<p> قرفة  <br /> ₪10</p>, img:"/قرفة.jpg"  , id:"1"},
  {title:<p> لوز حب <br /> ₪20</p>, img:"/لوز.jpg"  , id:"2"},
  {title:<p> بابريكا <br /> ₪12</p>, img:"/بابريكا.jpg"  , id:"3"},
  {title:<p> قرفة  <br /> ₪10</p>, img:"/قرفة.jpg"  , id:"4"},
  {title:<p> لوز حب <br /> ₪20</p>, img:"/لوز.jpg"  , id:"5"},
  {title:<p> بابريكا <br /> ₪12</p>, img:"/بابريكا.jpg"  , id:"6"},

]
 




  return (
    <div style={{backgroundColor:"#59725cb9" ,padding:"40px 0"}}>
                    <h2 className='py-5 mx-auto text-center'> الوصفات  </h2>

      <Swiper
        effect={'coverflow'}
        dir='ltr'
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 50,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
      //   pagination={true}
        modules={[ Pagination ,FreeMode, Autoplay, Navigation
      ]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          639: {
            slidesPerView: 2,
          },
          865: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 4,
          },
          1700: {
            slidesPerView: 4,
          },
        }}
        navigation={true}
        freeMode={true}
      
        className="mySwiper2"
      >
{slides.map((slide)=>

        <SwiperSlide key={slide.id} className='mb-5'>
          <img src={slide.img} alt='' />
          <p className='text-center ' style={{fontSize:"30px"}}> {slide.title} </p>
        </SwiperSlide>
)}

      </Swiper>
    </div>
  );
}
