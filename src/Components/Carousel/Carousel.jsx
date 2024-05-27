import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
  return (
    <div className='bg-slate-900 min-h-[15vh]'>
      <div className="main-container">
        <div className="relative flex justify-center">
          <div className="absolute top-8 mr-auto w-[100%] sm:w-[80%] h-auto bg-white py-4 px-6 md:p-10">
            <div className="flex justify-center mb-3">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Choose the subject.</h3>
            </div>
            <center>
              <div className="flex justify-center">

                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  breakpoints={{
                    448: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                  }}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="card items-center flex flex-col gap-4 w-[10rem] bg-[#eaf0f3] p-3 min-h-[184px]">
                      <div className="p-4 bg-fuchsia-500 rounded-full">
                        <img src="/ai.png" alt="minicard-img" className="" />
                      </div>
                      <center>
                        <p className="font-semibold">Generative AI in Practice</p>
                      </center>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card items-center flex flex-col gap-4 w-[10rem] bg-[#eaf0f3] p-3 min-h-[184px]">
                      <div className="p-4 bg-[#f08c38] rounded-full">
                        <img src="/coding.png" alt="minicard-img" className="" />
                      </div>
                      <center>
                        <p className="font-semibold">Web Development</p>
                      </center>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card items-center flex flex-col gap-4 w-[10rem] bg-[#eaf0f3] p-3 min-h-[184px]">
                      <div className="p-4 bg-[#317ce2] rounded-full">
                        <img src="/python.png" alt="minicard-img" className="" />
                      </div>
                      <center>
                        <p className="font-semibold">Python Developer</p>
                      </center>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card items-center flex flex-col gap-4 w-[10rem] bg-[#eaf0f3] p-3 min-h-[184px]">
                      <div className="p-4 bg-[#40af0d] rounded-full">
                        <img src="/layers.png" alt="minicard-img" className="" />
                      </div>
                      <center>
                        <p className="font-semibold">Coding Foundations</p>
                      </center>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card items-center flex flex-col gap-4 w-[10rem] bg-[#eaf0f3] p-3 min-h-[184px]">
                      <div className="p-4 bg-[#8252dd] rounded-full">
                        <img src="/big-data.png" alt="minicard-img" className="" />
                      </div>
                      <center>
                        <p className="font-semibold">Coding for Data</p>
                      </center>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel