import React from 'react';
import { motion } from "framer-motion";
import { menu_list } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ExploreCategories2 = ({ category, setCategory }) => {
    return (
        <section className="relative w-full mt-20">
            <Swiper
                modules={[Navigation]}

                spaceBetween={20}
                navigation

                breakpoints={{
                    320: { slidesPerView: 4, spaceBetween: 10 },   // mobile
                    480: { slidesPerView: 6, spaceBetween: 15 },
                    768: { slidesPerView: 6, spaceBetween: 15 },
                    1024: { slidesPerView: 7, spaceBetween: 20 },  // desktop
                    1280: { slidesPerView: 9, spaceBetween: 25 }  // large screens
                }}
            >
                {menu_list.map((item, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            key={index}
                            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                            className="flex flex-col items-center cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}          // start slightly below
                            whileInView={{ opacity: 1, y: 0 }}       // animate into view
                            viewport={{ once: false, amount: 0.5 }}  // animate when 50% visible
                            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.02 }} // staggered effect
                        >
                            <img
                                src={item.menu_image}
                                alt={item.menu_name}
                                className={`
                       w-20   md:w-25    lg:w-30  
                        rounded-full transition-all duration-300
                        ${category === item.menu_name ? "border-4 border-tomato p-0.5" : ""}
                      `}
                            />
                            <p className="mt-2 text-rabbit text-sm md:text-lg font-semibold text-center">{item.menu_name}</p>
                        </motion.div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </section>
    );
};

export default ExploreCategories2;
