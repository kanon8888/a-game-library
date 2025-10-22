import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


import game1 from "../assets/image-3.jpg";
import game2 from "../assets/image-4.jpeg";
import game3 from "../assets/image-5.jpg";
import game4 from "../assets/images-2.png";

const Home = () => {
    return (
        <div className="container mx-auto px-4 my-6">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{ delay: 3000 }}
                loop={true}
                pagination={{ clickable: true }}
                navigation
                className="rounded-xl"
            >
                
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center justify-between h-[400px]">
                        <div className="w-full md:w-1/2 p-2">
                            <img
                                src={game1}
                                alt="Game 1"
                                className="w-full h-[400px] object-cover rounded-xl"
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-2">
                            <img
                                src={game2}
                                alt="Game 2"
                                className="w-full h-[400px] object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </SwiperSlide>

                
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center justify-between h-[400px]">
                        <div className="w-full md:w-1/2 p-2">
                            <img
                                src={game3}
                                alt="Game 3"
                                className="w-full h-[400px] object-cover rounded-xl"
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-2">
                            <img
                                src={game4}
                                alt="Game 4"
                                className="w-full h-[400px] object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;

