// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper";

export const PressSlider = ({ data }) => {
  //   console.log("Abkeis", data);

  return (
    <div className="pressslider ">
      <h2 className="matro">{data.headline_h2}</h2>
      <div className="swiper container">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          className="mySwiper"
          modules={[Autoplay]}
        >
          {data.slides.map((element, i) => {
            return (
              <SwiperSlide key={`slide-press-${i}`}>
                <Image
                  alt={element.image.alt}
                  src={element.image.url}
                  width={element.image.width}
                  height={element.image.height}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="footer-image has-text-centered">
        <Image
          alt={data.footer_image.title}
          src={data.footer_image.url}
          width={402}
          height={187}
        />
      </div>
    </div>
  );
};
