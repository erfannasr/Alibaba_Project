import React from "react";
import "./Login.css";
function LoginFrorm({ isOpen, onClose }) {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="w-[656px] bg-[#ffff] rounded-[8px] relative ">
        <div className=" flex mr-3 absolute left-[20px] mt-6">
          <button onClick={onClose}>
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              fill="currentColor"
              data-v-54b431dc=""
            >
              <path d="m5.335 4.282.07.063L12 10.939l6.595-6.594a.75.75 0 0 1 1.123.99l-.063.07L13.061 12l6.594 6.595a.75.75 0 0 1-.99 1.123l-.07-.063L12 13.061l-6.595 6.594a.75.75 0 0 1-1.123-.99l.063-.07L10.939 12 4.345 5.405a.75.75 0 0 1 .99-1.123Z"></path>
            </svg>
          </button>
        </div>
        <div className="py-[4.5rem] px-[8rem]">
          <div>
            <div>
              <h2 className="text-[20px] text-[#0a0b0c] mb-[1rem] font-bold text-center">
                ورود یا ثبت‌نام
              </h2>
              <span className="flex justify-center text-center text-[#2b2f33] ml-[-4rem] mr-[-4rem] mb-[3rem] text-base">
                برای ادامه شماره موبایل خود را وارد کنید.
              </span>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-between border-[1px] border-[#BEC6CC] w-[302px] mb-6 py-[6px] px-[8px] rounded-[8px]">
                <input
                  type="tel"
                  placeholder="شماره موبایل"
                  maxLength={10}
                  className="text-right outline-none"
                />
                <span className="text-[#959ea6] border-r-[1px] px-2">۹۸+</span>
              </div>
            </div>
            <div className="flex justify-center text-[0.75rem] mb-[1rem]">
              <span className="text-[#4b5259]">
                <svg
                  viewBox="0 0 24 24"
                  width="1.5em"
                  height="1.5em"
                  fill="currentColor"
                  class="align-top ml-2 shrink-0"
                >
                  <path d="M12 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5ZM12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 6a.75.75 0 0 1 .745.663l.005.087v7.5a.75.75 0 0 1-1.495.087l-.005-.087v-7.5A.75.75 0 0 1 12 9Zm0-3a.75.75 0 0 1 .745.663l.005.087v.75a.75.75 0 0 1-1.495.087L11.25 7.5v-.75A.75.75 0 0 1 12 6Z"></path>
                </svg>
              </span>
              <span className="text-[#4b5259] text-[12px] font-bold mb-5">
                استفاده از علی‌بابا به معنی پذیرش
                <span className="text-[#0077db] font-bold text-[12px] py-[2px] px-[5px] hover:border-[#C9E3F8] hover:bg-[#F2F9FF] hover:rounded-[8px] hover:border-[1px]">
                  {" "}
                  قوانین و مقررات
                </span> <br />
                این سرویس است.
              </span>
            </div>
            <div className="flex justify-center flex-wrap">
                <button className="w-[302px] bg-[#0077DB] rounded-[8px] py-[12px] px-[16px] text-[#fff] mb-3">تایید و دریافت کد</button>
                <button className="text-[#0077DB] font-bold">ورود با کلمه عبور</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default LoginFrorm;
