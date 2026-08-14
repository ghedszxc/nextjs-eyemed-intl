"use client";

// Modules
import { IPhotoList3 } from "./PhotoList3.interface";
import { SwiperSlide, Swiper } from "swiper/react";
import AppConfig from "@/logic/configs/AppConfig";

// Components
import Container from "@/components/Container";
import PhotoList from "./PhotoList3Photo";
import AnimateSwipe from "@/components/utils/AnimateSwipe";

const PhotoList3 = ({
  header1,
  header2,
  photoList,
  padding = "both",
}: IPhotoList3) => {
  // Hooks
  // Variables
  // Functions
  const getPadding = AppConfig.getWidgetPadding;

  // Effects

  return (
    <div
      className={`pl-5 py-[60px] lg:py-20 lg:px-10 overflow-hidden ${getPadding(padding, "lg")}`}
    >
      <Container>
        {/* Headers */}
        <AnimateSwipe>
          {header1 && (
            <h2 className="font-normal text-[24px] lg:text-[28px] text-center leading-tight mt-5 max-w-[956px] mx-auto pr-6">
              {header1}
            </h2>
          )}
          {header2 && (
            <h3 className="text-[22px] lg:text-[28px] text-center leading-tight mt-5 max-w-[956px] mx-auto pr-6 mb-4">
              {header2}
            </h3>
          )}
        </AnimateSwipe>
      </Container>

      {/* Photolist */}
      <AnimateSwipe>
        <div className="mb-4 mt-3 md:mt-5">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={16}
            observer={true}
            breakpoints={{
              420: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2.4,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
          >
            {(photoList || []).map((photoL, key) => (
              <SwiperSlide key={key}>
                <PhotoList {...photoL} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </AnimateSwipe>
    </div>
  );
};

export default PhotoList3;
