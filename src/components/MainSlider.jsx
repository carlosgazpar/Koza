import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade'

import MainSliderItem from "../common/MainSliderItem";

import MainSlider1 from "../assets/img/MainSlider-1.webp";
import MainSlider2 from "../assets/img/MainSlider-2.webp";
import MainSlider3 from "../assets/img/MainSlider-3.webp";

import "../styles/components/main-slider.scss";

const MainSlider = () => {
  return (
    <div className="main-slider">
      <Swiper
        effect="fade"
        modules={[Autoplay, Navigation, EffectFade]}
        navigation={{
          enabled: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        speed={1000}
      >
        <SwiperSlide>
          <MainSliderItem
            backgroundImage={MainSlider1}
            title="Latest Collection Of"
            description={{
              first: "Well Bloomed",
              second: " Designs",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MainSliderItem
            backgroundImage={MainSlider2}
            title="Latest Collection Of"
            description={{
              first: "The Style",
              second: "Perfectionist",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MainSliderItem
            backgroundImage={MainSlider3}
            title="latest Collection Of"
            description={{
              first: "Distinctly",
              second: "Modern Shoes",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
