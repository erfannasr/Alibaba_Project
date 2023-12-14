import React from "react";
import { useState } from "react";


function YourQuestions() {
  const [details1, setDetails1] = useState(false);
  const [details2, setDetails2] = useState(false);
  const [details3, setDetails3] = useState(false);
  const [details4, setDetails4] = useState(false);
  const [details5, setDetails5] = useState(false);
  const [details6, setDetails6] = useState(false);
  const [details7, setDetails7] = useState(false);

  const detailsHandler1 = () => {
    setDetails1(!details1);
  };

  const detailsHandler2 = () => {
    setDetails2(!details2);
  };

  const detailsHandler3 = () => {
    setDetails3(!details3);
  };

  const detailsHandler4 = () => {
    setDetails4(!details4);
  };

  const detailsHandler5 = () => {
    setDetails5(!details5);
  };

  const detailsHandler6 = () => {
    setDetails6(!details6);
  };

  const detailsHandler7 = () => {
    setDetails7(!details7);
  };

  return (
    <div className="erfan, justify-center flex mt-[2rem] ">
      <div className="w-[1200px] flex flex-col  ">
        <div className="mb-[19px] ">
          <h2 className="text-[24px] text-[#2b2f33] font-black">
            پرسش های شما
          </h2>
        </div>
        <div className=" border-[1px] rounded-[8px] mb-[3rem]">
          <div>
            {/*  q 1 */}
            <div
              onClick={detailsHandler1}
              className="container_hover py-4 px-4   flex gap-2 border-b-[1px] items-center justify-between flex-wrap"
            >
              <span className="text-[#17A2B8] bg-[#E8F9FC] ml-[12px] inline p-[5px] rounded-full">
                <svg
                  viewBox="0 0 24 24"
                  width="32px"
                  height="32px"
                  fill="currentColor"
                  class="a-accordion__icon"
                >
                  <path d="M14.442 16.905c0-1.427-.177-2.564-.531-3.411-.322-.77-.931-1.612-1.827-2.525l-.734-.726c-.787-.786-1.298-1.361-1.533-1.726a3.775 3.775 0 0 1-.646-2.126c0-1.005.249-1.776.747-2.312.498-.536 1.23-.804 2.197-.804.93 0 1.676.26 2.241.782.565.522.847 1.233.847 2.133h3.921c-.028-1.905-.68-3.413-1.953-4.524C15.898.556 14.212 0 12.115 0 9.951 0 8.266.548 7.06 1.645 5.853 2.74 5.25 4.275 5.25 6.248c0 1.752.814 3.476 2.442 5.17l1.996 1.954c.709.813 1.072 1.991 1.092 3.533h3.662Zm.273 5.027c0-.642-.199-1.159-.596-1.551-.397-.393-.936-.59-1.616-.59-.69 0-1.233.204-1.63.611-.397.407-.596.917-.596 1.53 0 .584.194 1.075.582 1.472.387.397.936.596 1.644.596.709 0 1.255-.199 1.637-.596.384-.397.575-.888.575-1.472Z"></path>
                </svg>
              </span>
              <span className="flex-grow-10 font-bold">
                چند روز قبل از پرواز، بلیط هواپیما را بخریم؟
              </span>
              <button className="text-[#6c7680] ml-1 p-[7px] rounded-full">
                {details1 ? (
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="block"
                  >
                    <path d="M21.266 16.698a.75.75 0 0 0 1.037-1.08l-.069-.066-9.75-8.25a.75.75 0 0 0-.89-.058l-.078.058-9.75 8.25a.75.75 0 0 0 .893 1.202l.075-.056L12 8.858l9.266 7.84Z"></path>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="block"
                  >
                    <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                  </svg>
                )}
              </button>
              {details1 && (
                <div className="px-8">
                  <p className="text-[#6c7680] mr-6 leading-[2.3]">
                    امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی
                    اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر
                    می‌شود. بنابراین در صورتی که شرایطتان اجازه <br /> می‌دهد،
                    رزرو آنلاین بلیط هواپیما را به روزهای نزدیک پرواز موکول
                    کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات را دارید،
                    باید هر چه زودتر رزرو بلیط هواپیما را <br /> انجام دهید.
                  </p>
                </div>
              )}
            </div>
            {/*  q 2  */}
            <div
              onClick={detailsHandler2}
              className="container_hover py-4 px-4 flex gap-2 border-b-[1px] items-center justify-between flex-wrap "
            >
              <span className="text-[#17A2B8] bg-[#E8F9FC] ml-[12px] inline p-[5px] rounded-full">
                <svg
                  viewBox="0 0 24 24"
                  width="32px"
                  height="32px"
                  fill="currentColor"
                  class="a-accordion__icon"
                >
                  <path d="M14.442 16.905c0-1.427-.177-2.564-.531-3.411-.322-.77-.931-1.612-1.827-2.525l-.734-.726c-.787-.786-1.298-1.361-1.533-1.726a3.775 3.775 0 0 1-.646-2.126c0-1.005.249-1.776.747-2.312.498-.536 1.23-.804 2.197-.804.93 0 1.676.26 2.241.782.565.522.847 1.233.847 2.133h3.921c-.028-1.905-.68-3.413-1.953-4.524C15.898.556 14.212 0 12.115 0 9.951 0 8.266.548 7.06 1.645 5.853 2.74 5.25 4.275 5.25 6.248c0 1.752.814 3.476 2.442 5.17l1.996 1.954c.709.813 1.072 1.991 1.092 3.533h3.662Zm.273 5.027c0-.642-.199-1.159-.596-1.551-.397-.393-.936-.59-1.616-.59-.69 0-1.233.204-1.63.611-.397.407-.596.917-.596 1.53 0 .584.194 1.075.582 1.472.387.397.936.596 1.644.596.709 0 1.255-.199 1.637-.596.384-.397.575-.888.575-1.472Z"></path>
                </svg>
              </span>
              <span className=" flex-grow-10 font-bold">
                در هر پرواز، میزان بار مجاز چقدر است؟
              </span>
              <button className=" text-[#6c7680] ml-1 p-[7px] rounded-full">
                {details2 ? (
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="block"
                  >
                    <path d="M21.266 16.698a.75.75 0 0 0 1.037-1.08l-.069-.066-9.75-8.25a.75.75 0 0 0-.89-.058l-.078.058-9.75 8.25a.75.75 0 0 0 .893 1.202l.075-.056L12 8.858l9.266 7.84Z"></path>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="block"
                  >
                    <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                  </svg>
                )}
              </button>
              {details2 && (
                <div className="px-8 ">
                  <p className="text-[#6c7680] mr-6 leading-[2.3]">
                    میزان مجاز بار به کلاس پرواز و کلاس نرخی بلیط بستگی دارد.
                    هنگام خرید آنلاین بلیط هواپیما می‌توانید میزان بار مجاز را
                    در اطلاعات بلیط ببینید. طبیعی است که اگر میزان بارتان بیش از
                    حد مجاز باشد، باید جریمه پرداخت کنید.
                  </p>
                </div>
              )}
            </div>
            {/*  q 3  */}
            <div
              onClick={detailsHandler3}
              className="container_hover py-4 px-4 flex gap-2 border-b-[1px] items-center justify-between flex-wrap"
            >
              <span className="text-[#17A2B8] bg-[#E8F9FC] ml-[12px] inline p-[5px] rounded-full">
                <svg
                  viewBox="0 0 24 24"
                  width="32px"
                  height="32px"
                  fill="currentColor"
                  class="a-accordion__icon"
                >
                  <path d="M14.442 16.905c0-1.427-.177-2.564-.531-3.411-.322-.77-.931-1.612-1.827-2.525l-.734-.726c-.787-.786-1.298-1.361-1.533-1.726a3.775 3.775 0 0 1-.646-2.126c0-1.005.249-1.776.747-2.312.498-.536 1.23-.804 2.197-.804.93 0 1.676.26 2.241.782.565.522.847 1.233.847 2.133h3.921c-.028-1.905-.68-3.413-1.953-4.524C15.898.556 14.212 0 12.115 0 9.951 0 8.266.548 7.06 1.645 5.853 2.74 5.25 4.275 5.25 6.248c0 1.752.814 3.476 2.442 5.17l1.996 1.954c.709.813 1.072 1.991 1.092 3.533h3.662Zm.273 5.027c0-.642-.199-1.159-.596-1.551-.397-.393-.936-.59-1.616-.59-.69 0-1.233.204-1.63.611-.397.407-.596.917-.596 1.53 0 .584.194 1.075.582 1.472.387.397.936.596 1.644.596.709 0 1.255-.199 1.637-.596.384-.397.575-.888.575-1.472Z"></path>
                </svg>
              </span>
              <span className="flex-grow-10 font-bold">
                نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟
              </span>
              <button className="text-[#6c7680] ml-1 p-[7px] rounded-full">
                {details3 ? (
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="block"
                  >
                    <path d="M21.266 16.698a.75.75 0 0 0 1.037-1.08l-.069-.066-9.75-8.25a.75.75 0 0 0-.89-.058l-.078.058-9.75 8.25a.75.75 0 0 0 .893 1.202l.075-.056L12 8.858l9.266 7.84Z"></path>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="block"
                  >
                    <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                  </svg>
                )}
              </button>
              {details3 && (
                <div className="px-8">
                  <p className="text-[#6c7680] mr-6 leading-[2.3]">
                    نرخ بلیط کودکان و نوزادان به کلاس پرواز و کلاس نرخی بستگی
                    دارد. به صورت کلی، قیمت بلیط مسافر کودک (2 الی 12 سال) معادل
                    50 الی 100 درصد بلیط بزرگسال، و قیمت بلیط مسافر نوزاد (تا دو
                    سال) 10 درصد بلیط بزرگسال است. هنگام تهیه بلیط هواپیما به
                    این نکته توجه داشته باشید.
                  </p>
                </div>
              )}
            </div>
            {/* q 4 */}
            <div
              onClick={detailsHandler4}
              className="container_hover py-4 px-4 flex gap-2 border-b-[1px] items-center justify-between flex-wrap"
            >
              <span className="text-[#17A2B8] bg-[#E8F9FC] ml-[12px] inline p-[5px] rounded-full">
                <svg
                  viewBox="0 0 24 24"
                  width="32px"
                  height="32px"
                  fill="currentColor"
                  class="a-accordion__icon"
                >
                  <path d="M14.442 16.905c0-1.427-.177-2.564-.531-3.411-.322-.77-.931-1.612-1.827-2.525l-.734-.726c-.787-.786-1.298-1.361-1.533-1.726a3.775 3.775 0 0 1-.646-2.126c0-1.005.249-1.776.747-2.312.498-.536 1.23-.804 2.197-.804.93 0 1.676.26 2.241.782.565.522.847 1.233.847 2.133h3.921c-.028-1.905-.68-3.413-1.953-4.524C15.898.556 14.212 0 12.115 0 9.951 0 8.266.548 7.06 1.645 5.853 2.74 5.25 4.275 5.25 6.248c0 1.752.814 3.476 2.442 5.17l1.996 1.954c.709.813 1.072 1.991 1.092 3.533h3.662Zm.273 5.027c0-.642-.199-1.159-.596-1.551-.397-.393-.936-.59-1.616-.59-.69 0-1.233.204-1.63.611-.397.407-.596.917-.596 1.53 0 .584.194 1.075.582 1.472.387.397.936.596 1.644.596.709 0 1.255-.199 1.637-.596.384-.397.575-.888.575-1.472Z"></path>
                </svg>
              </span>
              <span className="flex-grow-10 font-bold">
                رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟
              </span>
              <button className="text-[#6c7680] ml-1 p-[7px] rounded-full">
                {details4 ? (
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="block"
                  >
                    <path d="M21.266 16.698a.75.75 0 0 0 1.037-1.08l-.069-.066-9.75-8.25a.75.75 0 0 0-.89-.058l-.078.058-9.75 8.25a.75.75 0 0 0 .893 1.202l.075-.056L12 8.858l9.266 7.84Z"></path>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="block"
                  >
                    <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                  </svg>
                )}
              </button>
              {details4 && (
                <div className="px-8">
                  <p className="text-[#6c7680] mr-6 leading-[2.3]">
                    خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به
                    خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن
                    است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از
                    پشتیبانی نیز برخودار هستید.
                  </p>
                </div>
              )}
            </div>
            {/* q 5 */}
            <div
              onClick={detailsHandler5}
              className="container_hover py-4 px-4 flex gap-2 border-b-[1px] items-center justify-between flex-wrap"
            >
              <span className="text-[#17A2B8] bg-[#E8F9FC] ml-[12px] inline p-[5px] rounded-full">
                <svg
                  viewBox="0 0 24 24"
                  width="32px"
                  height="32px"
                  fill="currentColor"
                  class="a-accordion__icon"
                >
                  <path d="M14.442 16.905c0-1.427-.177-2.564-.531-3.411-.322-.77-.931-1.612-1.827-2.525l-.734-.726c-.787-.786-1.298-1.361-1.533-1.726a3.775 3.775 0 0 1-.646-2.126c0-1.005.249-1.776.747-2.312.498-.536 1.23-.804 2.197-.804.93 0 1.676.26 2.241.782.565.522.847 1.233.847 2.133h3.921c-.028-1.905-.68-3.413-1.953-4.524C15.898.556 14.212 0 12.115 0 9.951 0 8.266.548 7.06 1.645 5.853 2.74 5.25 4.275 5.25 6.248c0 1.752.814 3.476 2.442 5.17l1.996 1.954c.709.813 1.072 1.991 1.092 3.533h3.662Zm.273 5.027c0-.642-.199-1.159-.596-1.551-.397-.393-.936-.59-1.616-.59-.69 0-1.233.204-1.63.611-.397.407-.596.917-.596 1.53 0 .584.194 1.075.582 1.472.387.397.936.596 1.644.596.709 0 1.255-.199 1.637-.596.384-.397.575-.888.575-1.472Z"></path>
                </svg>
              </span>
              <span className="flex-grow-10 font-bold">
                آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟
              </span>
              <button className="text-[#6c7680] ml-1 p-[7px] rounded-full">
                {details5 ? (
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="block"
                  >
                    <path d="M21.266 16.698a.75.75 0 0 0 1.037-1.08l-.069-.066-9.75-8.25a.75.75 0 0 0-.89-.058l-.078.058-9.75 8.25a.75.75 0 0 0 .893 1.202l.075-.056L12 8.858l9.266 7.84Z"></path>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="block"
                  >
                    <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                  </svg>
                )}
              </button>
              {details5 && (
                <div className="px-8">
                  <p className="text-[#6c7680] mr-6">
                    وقتی از علی‌بابا یعنی بهترین سایت خرید بلیط هواپیما ،
                    بلیطتان را رزرو می‌کنید، خیالتان آسوده است که امکان استرداد
                    وجه در صورت کنسل کردن بلیط وجود دارد. میزان جریمه را هم
                    هنگام رزرو آنلاین بلیط هواپیما در قسمت قوانین استرداد
                    بخوانید. میزان جریمه به نوع بلیط، کلاس پروازی، کلاس نرخی
                    و... بستگی دارد.
                  </p>
                </div>
              )}
            </div>
            {/* q 6 */}
            <div
              onClick={detailsHandler6}
              className="container_hover py-4 px-4 flex gap-2 border-b-[1px] items-center justify-between flex-wrap"
            >
              <span className="text-[#17A2B8] bg-[#E8F9FC] ml-[12px] inline p-[5px] rounded-full">
                <svg
                  viewBox="0 0 24 24"
                  width="32px"
                  height="32px"
                  fill="currentColor"
                  class="a-accordion__icon"
                >
                  <path d="M14.442 16.905c0-1.427-.177-2.564-.531-3.411-.322-.77-.931-1.612-1.827-2.525l-.734-.726c-.787-.786-1.298-1.361-1.533-1.726a3.775 3.775 0 0 1-.646-2.126c0-1.005.249-1.776.747-2.312.498-.536 1.23-.804 2.197-.804.93 0 1.676.26 2.241.782.565.522.847 1.233.847 2.133h3.921c-.028-1.905-.68-3.413-1.953-4.524C15.898.556 14.212 0 12.115 0 9.951 0 8.266.548 7.06 1.645 5.853 2.74 5.25 4.275 5.25 6.248c0 1.752.814 3.476 2.442 5.17l1.996 1.954c.709.813 1.072 1.991 1.092 3.533h3.662Zm.273 5.027c0-.642-.199-1.159-.596-1.551-.397-.393-.936-.59-1.616-.59-.69 0-1.233.204-1.63.611-.397.407-.596.917-.596 1.53 0 .584.194 1.075.582 1.472.387.397.936.596 1.644.596.709 0 1.255-.199 1.637-.596.384-.397.575-.888.575-1.472Z"></path>
                </svg>
              </span>
              <span className="flex-grow-10 font-bold">
                آیا پس از خرید بلیط هواپیما، امکان تغییر نام یا نام خانوادگی
                وجود دارد؟
              </span>
              <button className="text-[#6c7680] ml-1 p-[7px] rounded-full">
                {details6 ? (
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="block"
                  >
                    <path d="M21.266 16.698a.75.75 0 0 0 1.037-1.08l-.069-.066-9.75-8.25a.75.75 0 0 0-.89-.058l-.078.058-9.75 8.25a.75.75 0 0 0 .893 1.202l.075-.056L12 8.858l9.266 7.84Z"></path>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="block"
                  >
                    <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                  </svg>
                )}
              </button>
              {details6 && (
                <div className="px-8">
                  <p className="text-[#6c7680] mr-6 leading-[2.3]" >
                    در پرواز داخلی یا خارجی، امکان تغییر نام و نام خانوادگی در
                    بلیط سیستمی وجود ندارد. اما در بلیط چارتر، برخی از
                    چارترکننده‌ها این تغییر را می‌پذیرند.
                  </p>
                </div>
              )}
            </div>
            {/* q 7 */}
            <div
              onClick={detailsHandler7}
              className="container_hover py-4 px-4 flex gap-2 items-center justify-between flex-wrap"
            >
              <span className="text-[#17A2B8] bg-[#E8F9FC] ml-[12px] inline p-[5px] rounded-full">
                <svg
                  viewBox="0 0 24 24"
                  width="32px"
                  height="32px"
                  fill="currentColor"
                  class="a-accordion__icon"
                >
                  <path d="M14.442 16.905c0-1.427-.177-2.564-.531-3.411-.322-.77-.931-1.612-1.827-2.525l-.734-.726c-.787-.786-1.298-1.361-1.533-1.726a3.775 3.775 0 0 1-.646-2.126c0-1.005.249-1.776.747-2.312.498-.536 1.23-.804 2.197-.804.93 0 1.676.26 2.241.782.565.522.847 1.233.847 2.133h3.921c-.028-1.905-.68-3.413-1.953-4.524C15.898.556 14.212 0 12.115 0 9.951 0 8.266.548 7.06 1.645 5.853 2.74 5.25 4.275 5.25 6.248c0 1.752.814 3.476 2.442 5.17l1.996 1.954c.709.813 1.072 1.991 1.092 3.533h3.662Zm.273 5.027c0-.642-.199-1.159-.596-1.551-.397-.393-.936-.59-1.616-.59-.69 0-1.233.204-1.63.611-.397.407-.596.917-.596 1.53 0 .584.194 1.075.582 1.472.387.397.936.596 1.644.596.709 0 1.255-.199 1.637-.596.384-.397.575-.888.575-1.472Z"></path>
                </svg>
              </span>
              <span className="flex-grow-10 font-bold">
                هنگامی که از سایت خرید بلیط هواپیما رزرو بلیط را انجام می‌دهیم،
                امکان انتخاب صندلی مورد نظرمان وجود دارد؟
              </span>
              <button className="text-[#6c7680] ml-1 p-[7px] rounded-full">
                {details7 ? (
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="block"
                  >
                    <path d="M21.266 16.698a.75.75 0 0 0 1.037-1.08l-.069-.066-9.75-8.25a.75.75 0 0 0-.89-.058l-.078.058-9.75 8.25a.75.75 0 0 0 .893 1.202l.075-.056L12 8.858l9.266 7.84Z"></path>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    class="block"
                  >
                    <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                  </svg>
                )}
              </button>
              {details7 && (
                <div className="px-8">
                  <p className="text-[#6c7680] mr-6 leading-[2.3]">
                    خیر؛ هنگام رزرو بلیط هواپیما داخلی یا خارجی امکان انتخاب
                    صندلی وجود ندارد. البته در زمان چک‌این انتخاب محدوده صندلی
                    امکان‌پذیر است.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourQuestions;
