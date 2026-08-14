"use client";

// Modules
import { IPhotoList1 } from "./PhotoList1.interface";
import { SwiperSlide, Swiper } from "swiper/react";
import AppConfig from "@/logic/configs/AppConfig";

// Components
import Container from "@/components/Container";
import PhotoList from "./PhotoList1Photo";
import { Button } from "@/components/ui/button";
import Anchor from "@/components/Anchor/Anchor";

const PhotoList1 = ({ title1, longText, photoList, padding = "both", ctaButton, quoteText }: IPhotoList1) => {
  // Hooks
  // Variables
  // Functions
  const getPadding = AppConfig.getWidgetPadding;

  // Effects
  return (
    <div className={`pl-6 py-[60px] lg:py-20 lg:px-10 overflow-hidden ${getPadding(padding, "lg")}`}>
      <Container>
        {/* Headers */}
        {title1 && (
          <h3 className="font-bold text-[22px] lg:text-[28px] text-center leading-tight mt-5 max-w-[956px] mx-auto mb-4">
            {title1}
          </h3>
        )}
        {longText && (
          <h4 className="text-[14px] lg:text-[16px] text-center leading-tight mt-5 max-w-[956px] mx-auto">
            {longText}
          </h4>
        )}
      </Container>
      
      {/* Photolist */}
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
              slidesPerView: 4,
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

      {ctaButton && (
        <div className="text-center max-w-[956px] mx-auto">
          <Anchor href={ctaButton.url}>
            <Button
              size="lg"
              variant="secondary"
              className="mt-1 mb-4">
                {ctaButton.label}
            </Button>
          </Anchor>
        </div>
      )}

      {quoteText && (
        <div className="italic text-[11px] lg:text-[13px] text-gray-500 text-center max-w-[956px] mx-auto">
          {quoteText}
        </div>
      )}
    </div>
  );
};

export default PhotoList1;
