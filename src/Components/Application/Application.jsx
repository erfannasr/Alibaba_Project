import React from "react";

function Application() {
  return (
    <div className="flex justify-center">
      <div className="w-[1200px] flex items-center justify-between px-[4rem] pt-[0.5rem] border-[1px] rounded-[8px]">
        <div>
          <img
            className="w-[148px] h-[185px]"
            src="https://cdn.alibaba.ir/h2/desktop/assets/images/app-mobile/qrcode-56155e39.png"
            alt=""
          />
        </div>
        <div className="flex flex-col pl-[192px]">
          <div className="mb-4">
            <h3 className=" text-[20px] text-[#000000] mb-2.5 font-black">اپلیکشین علی بابا</h3>
            <span className="text-[18px] text-[#000000] font-medium">سریع‌تر و مطمئن‌تر به سفر بروید </span>
          </div>
          <div className="flex items-center p-[0.5rem] mb-5 cursor-pointer">
            <span className="text-[#0077db] text-[16px]">مشاهده لینک های دانلود</span>
            <span className="text-[#0077db] mr-[7px]">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
                class="mr-2"
              >
                <path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path>
              </svg>
            </span>
          </div>
          <div className="flex items-center">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAALVBMVEVHcEzJ0Nq/x82/x83Ax83Ey9K/x83Ayc6/x82/x82/x82/x83AyM3Cys6+xswvwGblAAAADnRSTlMACu+yYRZyON3EooVNJ2sjt+sAAAEuSURBVDjLY2BAAVWtDFhB8LunWMV59d4pYJUIevduAlYJu3fvHLCJs79790gAmwTXu3fPsJrE9O6dAVaJuHePsZrEcO+FA3bvhRQwEA8YawrBtEyaO4q4SN+7d1MEGBid3717p4VkII/eO5CIyyIQ9e4Vwmn73qEAeNBzo4q/ewnTcg5dIgAizqqHJmEI1cCGyyQONAlVBhxWJOBw7DsBpAhFBo/h3utDlXgNl0Bz7TOSJV7jsgNh+TxUCUTSWofmD3iKyEOTaIRJ1KFJvIJJyKFJvNsAlWBGl3gFjSgWdIl3OtA0hR6D757jcO+7BlhifocjqtBth/udF03iCa6UiMi5EqgmXUDO+FhjioHBD1kCOYNyY0uI8KA3qa0BZRBT1ELBSDMVFDrOHVOgIgDdWvhBf9f4lgAAAABJRU5ErkJggg=="
              alt=""
              className="w-[20] h-[20px] ml-2 "
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAKlBMVEVHcEy/x87CzM2/x83O09bByc/AyM6/x82/x82/x82/x83AyM7Ax82+xswqLt8wAAAADXRSTlMAdhjeBi1L78CulV+HMiPrHwAAAPlJREFUOMtjYBgFpAA24wTsfOa7RSgS6ncNYBK3UCTWwiQY794NQBJnvXtXAMJisb3bgCTBcfeyA5SZe/caUDpso3SqA4yHUJPTexcIbhxF0Q80dfJdKDB0RLZx7V0EKEd2Y+5dZIDwFSOK+N0JMHGWuagSN2Gu9biLBlqgEr3oElAtXHcxwAKwxF5MidsgcaZaTInrCkAJzrtYAMjFsSCGkCJMCMK6CpQAeeIiA4MsRBzKugkOwLt3LzEw6EIkYKwABh7sEgeAEY7NKGCsx97FZjnQ9r13sYLbKHGEBG5hhiAE3GCwxS5xmaEWu8R1hrs4AG4dOCXoAAAsa7wb0fLE0wAAAABJRU5ErkJggg=="
              alt=""
              className="w-[20] h-[20px] ml-2"
            />
            <span className="text-[12px] text-[#959ea6] mt-[12px]">قابلیت نصب روی Android و iOS</span>
            
          </div>
        </div>
        <div>
          <img
            className="w-[334px] h-[294px] ml-[2.25rem]"
            src="https://cdn.alibaba.ir/h2/desktop/assets/images/app-mobile/app-mobile@4x-e3e3b7dc.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Application;
