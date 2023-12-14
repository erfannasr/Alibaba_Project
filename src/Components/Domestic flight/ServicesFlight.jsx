import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

function ServicesFlight() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[1200px] mb-[16px]">
          <h3 className="font-bold text-[16px] mr-3">سایر خدمات علی‌بابا</h3>
          <div className="flex justify-between mt-5 ">
            <div className="flex justify-between mx-1 py-3 items-center border-[1px] w-[400px] rounded-[7px]">
              <div className="flex items-center">
                <span className="mx-3">
                  <img
                    src="https://cdn.alibaba.ir/h2/desktop/assets/images/insurance-icon-bb51c425.svg"
                    alt=""
                  />
                </span>
                <span className="text-[14px]">بیمه مسافرتی</span>
              </div>
              <span className="text-[#bec6cc] ml-2">
                <svg
                  viewBox="0 0 24 24"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  class="text-grays-200 mr-1"
                  data-v-496695c7=""
                >
                  <path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path>
                </svg>
              </span>
            </div>
            <div className="flex justify-between mx-1 py-3 items-center border-[1px] w-[400px] rounded-[7px]">
              <div className="flex items-center">
                <span className="mx-3">
                  <img
                    src="	https://cdn.alibaba.ir/h2/desktop/assets/images/visa-icon-d8507c8e.svg"
                    alt=""
                  />
                </span>
                <span className="text-[14px]">ویزای سفر</span>
              </div>
              <span className="text-[#bec6cc] ml-2">
                <svg
                  viewBox="0 0 24 24"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  class="text-grays-200 mr-1"
                  data-v-496695c7=""
                >
                  <path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path>
                </svg>
              </span>
            </div>
            <div className="flex justify-between mx-1 py-3 items-center border-[1px] w-[400px] rounded-[7px]">
              <div className="flex items-center">
                <span className="mx-3">
                  <img
                    src="https://cdn.alibaba.ir/h2/desktop/assets/images/gtour-icon-5e641f1b.svg"
                    alt=""
                  />
                </span>
                <span className="text-[14px]">تور گروهی</span>
              </div>

              <span className="flex items-center">
                <span className="text-[12px] px-[0.5rem] ml-1 bg-[#84e199] rounded-full leading-[180%]">
                  جدید
                </span>
                <svg
                  className="ml-2"
                  color="#bec6cc"
                  viewBox="0 0 24 24"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  class="text-grays-200 mr-1"
                  data-v-496695c7=""
                >
                  <path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="mt-7">
            <div className="mb-2 h-full pb-6 ">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={2}
                autoplay={true}
              >
                <SwiperSlide className="cursor-pointer">
                  <img
                    src="https://cdn.alibaba.ir/cms/uploads/Produckt_Marketing_Telephone_Sales_Cardview_Banner_Desktop_02_06_26_c14b1ff25f.jpg"
                    alt=""
                    className=" rounded-[8px]"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                  <img
                    src="https://cdn.alibaba.ir/cms/uploads/Desktop_4de8d1e76d.png"
                    alt=""
                    className="w-[592px] h-[224px] rounded-[8px]"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                  <img
                    src="https://cdn.alibaba.ir/cms/uploads/Lufthansa_Campaign_Cardview_Banner_Desktop_02_08_23_d10c71d18e.png"
                    alt=""
                    className="w-[592px] h-[224px] rounded-[8px]"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                  <img
                    src="https://cdn.alibaba.ir/cms/uploads/Austrian_Airlines_Cardview_Banner_Desktop_02_08_24_7c3342600e.png"
                    alt=""
                    className="w-[592px] h-[224px] rounded-[8px]"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                  <img
                    src="https://cdn.alibaba.ir/cms/uploads/Produckt_Marketing_Telephone_Sales_Cardview_Banner_Desktop_02_06_26_c14b1ff25f.jpg"
                    alt=""
                    className="w-[592px] h-[224px] rounded-[8px]"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesFlight;
