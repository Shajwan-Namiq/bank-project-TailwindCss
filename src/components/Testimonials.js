// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
import { useSwiper } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";
import  "../slider.css";
 
SwiperCore.use([EffectCoverflow, Pagination]);

const Testimonials = () => {
  const swiper = useSwiper();

  return (
    <>
      <header class="  ">
        <div class="container px-6 py-16 mx-auto">
          <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
              <div class="lg:max-w-lg">
                <h1 class="text-3xl font-semibold text-color lg:text-6xl">
                  What people are saying about us{" "}
                </h1>
              </div>
            </div>

            <div class="flex lg:mr-10 items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <p class="lg:max-w-md mt-0 lg:mt-6 text-lg text-section">
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-5 lg:mx-14 ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          grabCursor={true}
          navigation
          style={{
            "--swiper-navigation-size": "15px",
          }}
          spaceBetween={2}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetweenSlides: 150,
            },
            768: {
              slidesPerView: 2,
             
            },
            1060: {
              slidesPerView: 3,
               
            },
          }}
          className="parent"
        >
          {feedback.map((card) => (
            <SwiperSlide key={card.id} className=" ">
              <div className="mx-10   lg:mx-14">
                <FeedbackCard key={card.id} {...card} />
              </div>
            </SwiperSlide>
          ))}

         
        </Swiper>
      </div>
    </>
  );
};
export default Testimonials;
