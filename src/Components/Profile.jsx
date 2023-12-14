import React from "react";

function Profile() {
  return (
    <div className="flex justify-center bg-[#F6F6F6]">
      <div className="w-[1200px] mt-[8rem] mb-[4rem]">
        <div className="border-[1px] bg-[#fff] rounded-[8px] flex">
          <div className="py-[4.5rem] px-[8rem]">
            <div>
              <div>
                <h2 className="text-[20px] text-[#0a0b0c] mb-[1rem] font-bold text-right">
                  ورود یا ثبت‌نام
                </h2>
                <span className="text-[20px] font-bold flex justify-center text-right text-[#2b2f33] my-[22px] ">
                  برای ادامه شماره موبایل خود را وارد کنید.
                </span>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-between border-[1px] border-[#BEC6CC] w-[370px] mb-6 py-[9px] px-[8px] rounded-[8px]">
                  <input
                    type="tel"
                    placeholder="شماره موبایل"
                    maxLength={10}
                    className="text-right outline-none"
                  />
                  <span className="text-[#959ea6] border-r-[1px] px-2">
                    ۹۸+
                  </span>
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
                  </span>{" "}
                  <br />
                  این سرویس است.
                </span>
              </div>
              <div className="flex justify-center flex-wrap flex-col">
                <button className="w-full bg-[#0077DB] rounded-[8px] mb-3 py-[12px] px-[16px] text-[#fff] mb-3">
                  تایید و دریافت کد
                </button>
                <button className="text-[#0077DB] font-bold">
                  ورود با کلمه عبور
                </button>
              </div>
            </div>
          </div>

          <span className="mt-[6rem] mb-[6rem] w-[1px] bg-[#0000001f] "></span>
          <div className="flex flex-col items-center text-center  px-[6rem] ">
            <div className="mt-[4rem]">
              <img
                src="https://cdn.alibaba.ir/h2/desktop/assets/login-8b648bbd.svg"
                alt=""
                className="w-[384px] h-[233px]"
              />
            </div>
            <div className="my-[12px]">
              <h2 className="text-[18px] font-bold mb-[12px]">علی‌بابا رتبه یک سفر</h2>
              <p className="text-[16px] text-[#6c7680]">
                برای خرید آسان و امن و مشاهده تخفیف‌های ویژه علی‌بابا، عضو <br /> شوید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
