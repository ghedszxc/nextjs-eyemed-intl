const Swiper = ({ children }: { children: React.ReactNode }) => {
  return <div className="mock-swiper">{children}</div>;
};

const SwiperSlide = ({ children }: { children: React.ReactNode }) => {
  return <div className="mock-swiper-slide">{children}</div>;
};

export { Swiper, SwiperSlide };
