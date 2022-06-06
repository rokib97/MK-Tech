import React from "react";
// import required module
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <div className="mt-16 px-12">
      <h2 className="text-4xl font-bold text-secondary text-center">
        What Our Clients Say
      </h2>
      <p className="text-center mt-2 mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
        temporibus, officiis eveniet delectus harum pariatur.
      </p>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={50}
        loop={true}
        loopFillGroupWithBlank={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        coverflowEffect={{
          rotate: 100,
          stretch: 0,
          depth: 100,
          modifier: 0,
          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam est neque quasi consequuntur. Accusantium sed nesciunt
                tempora adipisci dolores placeat.
              </p>
            </div>
            <div class="avatar mb-5">
              <div class="w-24 mx-auto mt-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://api.lorem.space/image/face?hash=3174"
                  alt=""
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center">Trent Hayes </h2>
            <p className="text-center mb-4">Artist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam est neque quasi consequuntur. Accusantium sed nesciunt
                tempora adipisci dolores placeat.
              </p>
            </div>
            <div class="avatar mb-5">
              <div class="w-24 mx-auto mt-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://api.lorem.space/image/face?hash=3174"
                  alt=""
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center">James Okland </h2>
            <p className="text-center mb-4">Designer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam est neque quasi consequuntur. Accusantium sed nesciunt
                tempora adipisci dolores placeat.
              </p>
            </div>
            <div class="avatar mb-5">
              <div class="w-24 mx-auto mt-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://api.lorem.space/image/face?hash=28212"
                  alt=""
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center">Sara Pintan</h2>
            <p className="text-center mb-4">Artist</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
