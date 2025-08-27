// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import useCrouses from "../Hooks/Data";
import CourseList from "../Course/CourseList";
import { useEffect, useState } from "react";

const Home = () => {
  const [crouses] = useCrouses();
  const [geo, setGeo] = useState({
    lat: "",
    lng: "",
  });

  useEffect(() => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          const latitude = position?.coords?.latitude;
          const longitude = position?.coords?.longitude;
          setGeo({
            lat: latitude,
            lng: longitude,
          });
        },
        (error) => {
          console.log("error from geolocation", error);
        }
      );
    } else {
      console.log("Geolocation is not woking in this enviroment");
    }
  }, []);

  return (
    <div className="max-w-screen-xl m-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={true}
        navigation={true}
        effect="fade"
      >
        <SwiperSlide>
          <div className="aspect-w-16 aspect-h-9">
            <img
              id="slider-img"
              className="w-full"
              src="/image/slider1.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-w-16 aspect-h-9">
            <img
              id="slider-img"
              className="w-full"
              src="/image/slider2.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-w-16 aspect-h-9">
            <img
              id="slider-img"
              className="w-full"
              src="/image/slider3.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <CourseList crouses={crouses.slice(0, 4)} />

      {/* <div>
        <p>lat: {geo?.lat}</p>
        <p>lng: {geo?.lng}</p>
      </div> */}
    </div>
  );
};

export default Home;
