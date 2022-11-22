import React from "react";
import Link from "next/link";
import HeadLine from "../headLine";
import { teamData } from "../../data/teamData";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Team = () => {
  return (
    <div>
      <div className="dark:bg-jacarta-800 bg-light-base">
        <div className="container mt-16 py-10">
          <HeadLine
            text="Team"
            classes="font-display text-jacarta-700 text-center text-3xl dark:text-white"
          />
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1100: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className=" card-slider-4-columns !py-5"
            >
              {teamData.map((item) => {
                const { id, image } = item;

                return (
                  <SwiperSlide key={id}>
                    <article>
                      <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                        <div className="flex space-x-[0.625rem]">
                          <figure className="w-full h-full">
                            <Image
                              src={image}
                              alt="item 1"
                              className="rounded-[0.625rem]"
                              width={150}
                              height={240}
                              objectFit="cover"
                              layout="responsive"
                            />
                          </figure>
                        </div>
                      </div>
                    </article>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* <!-- Slider Navigation --> */}
            <div className="group swiper-button-prev shadow-white-volume absolute !top-1/2 !-left-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-left-6 after:hidden">
              <MdKeyboardArrowLeft />
            </div>
            <div className="group swiper-button-next shadow-white-volume absolute !top-1/2 !-right-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-right-6 after:hidden">
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
