import React from "react";

function Footer() {
  return (
    <>
     

      {/* erfam */}
      <div className="flex justify-center ">
        <div className="w-[1200px] flex justify-between  border-b-[1px] pb-9 border-t-[1px] pt-8">
          <div>
            <h4 className="font-bold pb-3 cursor-pointer ">علی بابا</h4>
            <ul>
              <li className="text-[14px] mb-2 cursor-pointer">درباره ما</li>
              <li className="text-[14px] mb-2 cursor-pointer">تماس با ما</li>
              <li className="text-[14px] mb-2 cursor-pointer">چرا علی بابا</li>
              <li className="text-[14px] mb-2 cursor-pointer">علی بابا پلاس</li>
              <li className="text-[14px] mb-2 cursor-pointer">بیمه مسافرتی</li>
              <li className="text-[14px] mb-2 cursor-pointer">مجله علی بابا</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold pb-3 cursor-pointer">خدمات مشتریان</h4>
            <ul className="">
              <li className="text-[14px] mb-2 cursor-pointer">
                مرکز پشتیبانی آنلاین
              </li>
              <li className="text-[14px] mb-2 cursor-pointer">راهنمای خرید</li>
              <li className="text-[14px] mb-2 cursor-pointer">
                راهنمای استرداد
              </li>
              <li className="text-[14px] mb-2 cursor-pointer">
                قوانین و مقررات
              </li>
              <li className="text-[14px] mb-2 cursor-pointer">پرسخ و پاسخ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold pb-3 cursor-pointer">اطلاعات تکمیلی</h4>
            <ul>
              <li className="text-[14px] mb-2 cursor-pointer">فروش سازمانی</li>
              <li className="text-[14px] mb-2 cursor-pointer">
                همکاری با آژانس ها
              </li>
              <li className="text-[14px] mb-2 cursor-pointer">فرصت های شغلی</li>
              <li className="text-[14px] mb-2 cursor-pointer">
                سنجش رضایتمندی
              </li>
            </ul>
          </div>
          <div className="w-[552px] items-end flex flex-col">
            <div>
              <img
                className="w-[160px] h-[48px] mb-4"
                src="https://cdn.alibaba.ir/h2/desktop/assets/images/shawl_logotype-d6b14ca0.svg"
                alt=""
              />
            </div>
            <div className="items-end text-end">
              <span className="text-[#2b2f33]  text-[14px] mb-2">
                {" "}
                تلفن پشتیبانی: ۴۳۹۰۰۰۰۰ - ۰۲۱{" "}
              </span>
              <p className="text-[#2b2f33] mt-3 mb-[48px] text-[14px]">
                دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه
                چهارم، بن‌بست گل‌ها، پلاک ۱
              </p>
            </div>
            <div className="relative">
              <ul className="flex items-center ">
                <li className="p-[4px] border-[1px] rounded-[8px] cursor-pointer">
                  <img
                    className="w-[69px] h-[69px]"
                    src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/state-airline-f45c55b2.svg"
                    alt=""
                  />
                </li>
                <li className="p-[4px] border-[1px] rounded-[8px] mr-3 cursor-pointer">
                  <img
                    className="w-[69px] h-[69px]"
                    src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/aira-682b7c43.png"
                    alt=""
                  />
                </li>
                <li className="p-[4px] border-[1px] rounded-[8px] mr-3 cursor-pointer">
                  <img
                    className="w-[69px] h-[69px]"
                    src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/passenger-rights-48368f81.svg"
                    alt=""
                  />
                </li>

                <li className="p-[4px] border-[1px] rounded-[8px] mr-3 cursor-pointer">
                  <img
                    className="w-[69px] h-[69px]"
                    src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/samandehi-6e2b448a.png"
                    alt=""
                  />
                </li>
                <li className="p-[4px] border-[1px] rounded-[8px] mr-3 cursor-pointer">
                  <img
                    className="w-[69px] h-[69px]"
                    src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/ecunion-8b792f56.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-7">
        <div className="flex justify-between w-[1200px]">
          <div>
            <span className="text-[12px] text-[#6c7680]">
              کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق
              به شرکت سفرهای علی‌بابا می‌باشد. (نسخه 2.69.14)
            </span>
          </div>

          <div className="flex items-center ">
            <a href="" className="mx-[16px] text-[#6c7680]">
              <svg
                viewBox="0 0 32 32"
                width="24"
                height="24"
                fill="currentColor"
                class="block"
                title="Linkedin logo"
              >
                <path
                  d="M25.333 0A6.667 6.667 0 0132 6.667v18.666A6.667 6.667 0 0125.333 32H6.667A6.667 6.667 0 010 25.333V6.667A6.667 6.667 0 016.667 0h18.666zm-8.637 11.13h-4.174v15.305h4.174v-7.797c0-4.331 5.565-4.686 5.565 0v7.797h4.174V17.03c0-7.309-7.797-7.043-9.74-3.445V11.13h.001zm-6.957 0H5.565v15.305H9.74V11.13h-.001zM7.652 4.458a2.445 2.445 0 00-2.435 2.454 2.445 2.445 0 002.435 2.454 2.444 2.444 0 002.435-2.454 2.444 2.444 0 00-2.435-2.454z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="" className="mx-[16px] text-[#6c7680]">
              <svg
                viewBox="0 0 32 32"
                width="24"
                height="24"
                fill="currentColor"
                class="block"
                title="Instagram logo"
              >
                <path
                  d="M17.638.001c2.88.005 3.49.028 4.951.095 1.703.078 2.866.348 3.883.743a7.841 7.841 0 012.833 1.845 7.842 7.842 0 011.845 2.833c.395 1.018.666 2.18.743 3.883.072 1.56.093 2.149.096 5.558v2.073c-.003 3.41-.024 3.999-.096 5.558-.077 1.703-.348 2.866-.743 3.883a7.844 7.844 0 01-1.845 2.833 7.842 7.842 0 01-2.833 1.845c-1.017.395-2.18.666-3.883.743-1.56.072-2.148.093-5.558.096h-2.073c-3.41-.003-3.998-.024-5.558-.096-1.702-.077-2.865-.348-3.883-.743a7.841 7.841 0 01-2.833-1.845A7.84 7.84 0 01.84 26.472c-.395-1.017-.665-2.18-.743-3.883-.067-1.462-.09-2.071-.095-4.95V14.35c.005-2.88.028-3.489.095-4.951.078-1.702.348-2.865.743-3.883a7.84 7.84 0 011.845-2.833A7.84 7.84 0 015.517.84C6.535.444 7.697.174 9.4.096c1.462-.067 2.071-.09 4.951-.095h3.287zm-.947 2.88h-1.392l-.323.001h-.596c-2.825.006-3.403.027-4.85.093-1.559.071-2.405.332-2.969.55a4.95 4.95 0 00-1.84 1.197 4.955 4.955 0 00-1.195 1.84c-.22.563-.48 1.41-.551 2.97-.066 1.445-.087 2.023-.092 4.848v.596l-.001.323v2.31c.006 2.825.027 3.403.093 4.849.07 1.56.332 2.406.55 2.97.29.747.638 1.28 1.197 1.84.56.559 1.093.906 1.84 1.196.563.219 1.41.48 2.97.55.385.018.709.032 1.03.044l.241.009c.769.024 1.605.035 3.302.039l.565.001h2.649l.565-.001c1.876-.004 2.7-.017 3.544-.048l.242-.01c.245-.009.499-.02.788-.034 1.56-.07 2.406-.331 2.97-.55a4.956 4.956 0 001.84-1.197 4.96 4.96 0 001.196-1.839c.219-.564.48-1.41.55-2.97.014-.29.025-.544.035-.788l.01-.243c.03-.843.043-1.668.047-3.543l.001-.565v-2.648l-.001-.566c.003-1.1-.01-2.202-.04-3.302l-.008-.241a108.34 108.34 0 00-.044-1.03c-.07-1.56-.331-2.407-.55-2.97a4.957 4.957 0 00-1.197-1.84 4.956 4.956 0 00-1.839-1.196c-.564-.22-1.41-.48-2.97-.551-1.446-.066-2.024-.087-4.849-.092h-.596l-.322-.001v-.001zm-.696 4.9a8.214 8.214 0 11.181 16.426 8.214 8.214 0 01-.181-16.426zm0 2.882a5.331 5.331 0 10-.146 10.662 5.331 5.331 0 00.146-10.662zm8.538-5.126a1.92 1.92 0 11.088 3.84 1.92 1.92 0 01-.088-3.84z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="" className="mx-[16px] text-[#6c7680]">
              <svg
                viewBox="0 0 32 32"
                width="24"
                height="24"
                fill="currentColor"
                class="block"
                title="Aparat logo"
              >
                <path
                  d="M28.057 25.12l-.853 3.202a4.955 4.955 0 01-6.06 3.515l-3.02-.814a15.185 15.185 0 009.933-5.904v.001zM16.007 2.127c7.66.004 13.871 6.214 13.871 13.873a13.873 13.873 0 01-16.586 13.604A13.881 13.881 0 012.39 18.703a13.867 13.867 0 015.905-14.24 13.877 13.877 0 017.71-2.335l.002-.001zM.892 18.415a15.172 15.172 0 005.606 9.527l-2.81-.749A4.952 4.952 0 01.17 21.135l.722-2.72zm19.825-.112a3.96 3.96 0 10-1.497 7.779 3.96 3.96 0 001.497-7.779zm-9.943-1.915a3.96 3.96 0 10-1.506 7.775 3.96 3.96 0 001.506-7.775zm5.48-2.02a1.76 1.76 0 10-.656 3.46 1.76 1.76 0 00.657-3.46zm6.482-6.544a3.961 3.961 0 00-1.5 7.778 3.94 3.94 0 002.974-.607 3.96 3.96 0 001.658-4.08 3.96 3.96 0 00-3.132-3.091zm2.43-3.86l3.152.837a4.953 4.953 0 013.522 6.044l-.866 3.277a15.168 15.168 0 00-5.808-10.159v.001zm-12.38 1.945a3.962 3.962 0 10-1.496 7.782 3.962 3.962 0 001.496-7.782zM7.107.673A4.957 4.957 0 0110.868.17l2.946.768a15.176 15.176 0 00-9.746 5.524l.735-2.776A4.953 4.953 0 017.107.673z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="" className="mx-[16px] text-[#6c7680]">
              <svg
                viewBox="0 0 32 32"
                width="24"
                height="24"
                fill="currentColor"
                class="block"
                title="Twitter logo"
              >
                <path
                  d="M32 5.745a13.14 13.14 0 01-3.77 1.034 6.585 6.585 0 002.886-3.632 13.148 13.148 0 01-4.169 1.593 6.557 6.557 0 00-4.792-2.073 6.565 6.565 0 00-6.395 8.061 18.638 18.638 0 01-13.532-6.86 6.534 6.534 0 00-.89 3.301 6.562 6.562 0 002.922 5.464 6.539 6.539 0 01-2.974-.82v.082a6.569 6.569 0 005.266 6.437 6.574 6.574 0 01-2.965.113 6.572 6.572 0 006.133 4.56 13.173 13.173 0 01-8.154 2.81c-.53 0-1.052-.032-1.566-.092a18.583 18.583 0 0010.064 2.95c12.076 0 18.679-10.004 18.679-18.68 0-.285-.006-.568-.019-.85A13.343 13.343 0 0032 5.746"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="" className="mx-[16px] text-[#6c7680]">
              <svg
                viewBox="0 0 24 24"
                width="36"
                height="36"
                fill="currentColor"
                class="block"
                title="youtube logo"
              >
                <path
                  d="M19.128 6.858c.248.248.427.558.519.897.528 2.127.406 5.487.01 7.696a2.012 2.012 0 0 1-1.416 1.416c-1.241.338-6.239.338-6.239.338s-4.997 0-6.239-.338a2.012 2.012 0 0 1-1.416-1.416c-.531-2.118-.386-5.48-.01-7.686a2.011 2.011 0 0 1 1.416-1.416C6.995 6.01 11.992 6 11.992 6s4.997 0 6.239.339c.339.091.648.27.897.519Zm-4.581 4.745-4.146 2.4v-4.8l4.146 2.4Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="" className="mx-[16px] text-[#6c7680]">
              <svg
                viewBox="0 0 25 25"
                width="35"
                height="35"
                fill="currentColor"
                class="block"
                title="Telegram logo"
              >
                <path d="m10.282 13.788-.264 3.722c.379 0 .542-.162.74-.358l1.775-1.696 3.679 2.694c.674.376 1.15.178 1.332-.621l2.414-11.315c.215-.998-.36-1.388-1.018-1.143L4.747 10.504c-.969.377-.953.916-.165 1.16l3.63 1.13L16.64 7.52c.397-.263.758-.117.46.145l-6.818 6.123Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
