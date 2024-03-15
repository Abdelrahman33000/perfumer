import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Swpier.css'
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FreeMode, Navigation, Autoplay } from "swiper/modules";

export default function Swipe() {
const slides =[
  {title:" بهارات   " , img:"/بهارت.jpg"  , id:"1"},
  {title:"بقوليات " , img:"/بقوليات.png"  , id:"2"},
  {title:"مكسرات" , img:"/المكسرات .png"  , id:"3"},
  {title:"أعشاب" , img:"/اعشاب.jpg"  , id:"4"},
  {title:"بذور" , img:"/بذور.jpg"  , id:"5"},
  {title:"اللبن" , img:"/اللبن.jpg"  , id:"6"},
  {title:"زيوت طبيعية    " , img:"/زيوت.jpg"  , id:"7"},
  {title:"مواد غذائية   " , img:"/المواد الغذئيه.jpeg"  , id:"8"},
  {title:" أنواع من الشاي و القهوة   " , img:"/انواع من الشاي و القهوة .png"  , id:"9"},
  {title:" فواكه مجففة  " , img:"/فواكه مجففة.jpg"  , id:"10"},
]
 




  return (
    <div style={{backgroundColor:"#98a199b8"}}>
                    <h2 className='py-5 mx-auto text-center'> الأصناف </h2>

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
      
        className="mySwiper1"
      >
{slides.map((slide)=>

        <SwiperSlide key={slide.id} className='mb-5' >
          <img src={slide.img} alt='' />
          <p className='text-center ' style={{fontSize:"30px"}}> {slide.title} </p>
        </SwiperSlide>
)}

      </Swiper>
    </div>
  );
}
