
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const images = [
  '/src/assets/carousel_1.jpg',
  '/src/assets/carousel_2.jpg',
  '/src/assets/carousel_3.jpg',
  '/src/assets/carousel_4.jpg',
  '/src/assets/carousel_5.jpg',
];


const Hero = () => {
  return (
    <section className="relative w-full mt-10">
      <Swiper
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1000,       // 4 seconds per slide
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // pause on hover
        }}
        speed={1500}          // smooth transition duration
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Link to="#">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full max-h-100 object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero