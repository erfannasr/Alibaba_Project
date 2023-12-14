import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoginFrorm from "../Login/LoginFrorm";
function Navbar() {
  const [isOpenTicket, setIsOpenTicket] = useState(false);
  const [isOpenStay, setIsOpenStay] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);
  const [auth, setAuth] = useState(false);
  // modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
 
  const handleDropdownClickTicket = () => {
    setIsOpenTicket(!isOpenTicket);
  };
  const handleDropdownClickStay = () => {
    setIsOpenStay(!isOpenStay);
  };

  const handleDropdownClickMore = () => {
    setIsOpenMore(!isOpenMore);
  };

  //modal
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  //location
  const location = useLocation();
  return (
    <>
      <div className="w-full fixed bg-[#fff] z-50 flex items-center justify-center  h-16  shadow-[0px_2px_5px_0px_rgb(0_0_0_/_8%)]">
        <div className="w-[1350px] flex items-center justify-between">
          <div>
            {/* right side  */}
            <Link to={"/"}>
              <img
                className="w-[160px] h-[48px] cursor-pointer"
                src="https://cdn.alibaba.ir/h2/desktop/assets/images/shawl_logotype-d6b14ca0.svg"
                alt=""
              />
            </Link>
          </div>

          <div className="flex justify-between ">
            <div className="flex justify-between ">
              <button
                onClick={handleDropdownClickTicket}
                className="flex items-center px-5  cursor-pointer relative hover:bg-[#F8FAFB] rounded-[8px] py-2 ml-1"
              >
                <span className="text-[#4b5259]">بلیط</span>
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="md:mr-3"
                    data-v-75709874=""
                  >
                    <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                  </svg>
                </span>
                {isOpenTicket && (
                  <ul className="absolute top-[50px] right-0 bg-[#fff] p-0 m-0 rounded-lg w-[126px] shadow-[0px_6px_10px_0px_rgba(0,0,0,0.22)]">
                    <Link to={"/"} className="py-3 px-3 cursor-pointer flex justify-start mr-[3px] hover:bg-[#F8FAFB] rounded-[8px]">
                      <span className="text-[14px]">پرواز داخلی</span>
                    </Link>

                    <hr className="m-0 border-0 border-solid border-[#00000010] border-b-17  mr-[5px] ml-[5px]" />

                    <Link to={"/iranout"} className="py-3 px-3 cursor-pointer flex justify-start mr-[3px] hover:bg-[#F8FAFB] rounded-[8px]">
                      <span className="text-[14px]">پرواز خارجی</span>
                    </Link>

                    <hr className="m-0 border-0 border-solid border-[#00000010] border-b-17  mr-[5px] ml-[5px]" />

                    <li className="py-3 px-3 cursor-pointer flex justify-start mr-[3px] hover:bg-[#F8FAFB] rounded-[8px]">
                      <span className="text-[14px] ">قطار</span>
                    </li>

                    <hr className="m-0  border-0  min-h-[1px] border-[#00000010] border-b-17  mr-[8px] ml-[8px]" />

                    <li className="py-3 px-3 cursor-pointer flex justify-start mr-[3px] hover:bg-[#F8FAFB] rounded-[8px]">
                      <span className="text-[14px]">اتوبوس</span>
                    </li>
                  </ul>
                )}
              </button>

              <span className="self-stretch bg-[#0000001f] min-h-[1px] min-w-[1px]"></span>
              <div
                onClick={handleDropdownClickStay}
                className="relative flex items-center  px-5 cursor-pointer hover:bg-[#F8FAFB] rounded-[8px] py-2 ml-1 mr-1"
              >
                <span className="text-[#4b5259]">اقامت</span>
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="md:mr-3"
                    data-v-75709874=""
                  >
                    <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                  </svg>
                </span>

                {isOpenStay && (
                  <ul className="absolute top-[50px] right-0 bg-[#fff] p-0 m-0 rounded-lg w-[126px] shadow-[0px_6px_10px_0px_rgba(0,0,0,0.22)]">
                    <li className="py-3 px-3 cursor-pointer hover:bg-[#F8FAFB] rounded-[8px]">
                      <span className="text-[14px]">پرواز داخلی</span>
                    </li>

                    <hr className="m-0 border-0 border-solid border-[#00000010] border-b-17  mr-[5px] ml-[5px]" />

                    <li className="py-3 px-3 cursor-pointer hover:bg-[#F8FAFB] rounded-[8px]">
                      <span className="text-[14px]">پرواز خارجی</span>
                    </li>
                  </ul>
                )}
              </div>

              <span className="self-stretch bg-[#0000001f] min-h-[1px] min-w-[1px]"></span>

              <div className="flex items-center px-5  cursor-pointer hover:bg-[#F8FAFB] rounded-[8px] py-2 ml-1 mr-1">
                <span className="text-[#4b5259]">تور</span>
              </div>

              <span className="self-stretch bg-[#0000001f] min-h-[1px] min-w-[1px]"></span>

              <div
                onClick={handleDropdownClickMore}
                className="relative flex items-center px-5  cursor-pointer hover:bg-[#F8FAFB] rounded-[8px] py-2 mr-1 ml-1"
              >
                <span className="text-[#4b5259]">بیشتر</span>
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="md:mr-3"
                    data-v-75709874=""
                  >
                    <path d="M21.266 7.302a.75.75 0 0 1 1.037 1.08l-.069.066-9.75 8.25a.75.75 0 0 1-.89.058l-.078-.058-9.75-8.25a.75.75 0 0 1 .893-1.202l.075.056L12 15.142l9.266-7.84Z"></path>
                  </svg>
                </span>

                {isOpenMore && (
                  <ul className="absolute top-[50px] right-0 bg-[#fff] p-0 m-0 rounded-lg w-[126px] shadow-[0px_6px_10px_0px_rgba(0,0,0,0.22)]">
                    <li className="py-3 px-3 cursor-pointer hover:bg-[#F8FAFB] rounded-[8px] ">
                      <span className="text-[14px]">علی بابا پلاس</span>
                    </li>

                    <hr className="m-0 border-0 border-solid border-[#00000010] border-b-17  mr-[5px] ml-[5px]" />

                    <li className="py-3 px-3 cursor-pointer hover:bg-[#F8FAFB] rounded-[8px]">
                      <span className="text-[14px]">مجله علی بابا</span>
                    </li>

                    <hr className="m-0 border-0 border-solid border-[#00000010] border-b-17  mr-[5px] ml-[5px]" />

                    <li className="py-3 px-3 cursor-pointer hover:bg-[#F8FAFB] rounded-[8px]">
                      <span className="text-[14px]">بیمه مسافرتی</span>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          {location.pathname === "/profile" ? null : (
            <div className="flex items-center">
              {/* left side */}
              <div className="flex ml-9 px-[10px] py-[8px] cursor-pointer hover:bg-[#F8FAFB] rounded-[8px]">
                <span className="ml-[3px] text-gray-500">
                  <svg
                    viewBox="0 0 24 24"
                    width="1.5em"
                    fill="currentColor"
                    data-v-fee17fe2=""
                  >
                    <path
                      d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5ZM12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9Zm.242 12.634a.72.72 0 0 0-.72.72v.36a.72.72 0 0 0 .636.715l.084.005a.72.72 0 0 0 .72-.72v-.36a.72.72 0 0 0-.72-.72Zm-.285-9.068c-.5 0-.943.07-1.33.208a2.664 2.664 0 0 0-.98.592c-.264.258-.467.57-.605.937a3.48 3.48 0 0 0-.206 1.229c0 .354.054.683.164.99.108.308.257.6.441.878.185.279.394.541.629.788.232.247.475.488.724.721.286.266.48.565.578.897.1.334.147.693.147 1.078h1.445a6.226 6.226 0 0 0-.079-.96 2.803 2.803 0 0 0-.226-.726 3.122 3.122 0 0 0-.41-.636 11.256 11.256 0 0 0-.627-.69 56.686 56.686 0 0 0-.511-.519 3.796 3.796 0 0 1-.43-.507 2.073 2.073 0 0 1-.403-1.268c0-.546.144-.973.43-1.283.287-.31.703-.464 1.25-.464.228 0 .448.03.659.09.21.059.396.153.56.28a1.4 1.4 0 0 1 .395.484c.1.195.148.428.148.698h1.444a2.797 2.797 0 0 0-.258-1.186 2.65 2.65 0 0 0-.678-.885 3.035 3.035 0 0 0-1.01-.555 4.033 4.033 0 0 0-1.26-.191Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </span>
               <Link to={"/help-center"}>
                <span className="text-gray-500 ">مرکز پشتیبانی آنلاین</span>
                </Link>
              </div>

              <div className="flex ml-9 px-[10px] py-[8px] cursor-pointer hover:bg-[#F8FAFB] rounded-[8px]">
                <span className="ml-[3px] text-gray-500 font-medium text-base">
                  <svg
                    viewBox="0 0 24 24"
                    width="1.5em"
                    fill="currentColor"
                    data-v-fee17fe2=""
                  >
                    <path
                      d="M13.875 1.5a1.5 1.5 0 0 1 1.496 1.388l.004.112v1.5h1.875a2.25 2.25 0 0 1 2.246 2.118l.004.132V18a2.25 2.25 0 0 1-2.118 2.246l-.132.004h-.375V21a.75.75 0 0 1-1.495.087L15.375 21v-.75h-4.97a3.001 3.001 0 0 1-2.755 2.246l-.15.004a3 3 0 0 1-2.25-4.984V6.75a2.25 2.25 0 0 1 2.118-2.246L7.5 4.5h1.875V3a1.5 1.5 0 0 1 1.388-1.496l.112-.004h3ZM7.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9.75-12H7.5a.75.75 0 0 0-.745.663l-.005.087v9.845a3.004 3.004 0 0 1 3.655 2.155h6.845a.75.75 0 0 0 .745-.663L18 18V6.75a.75.75 0 0 0-.663-.745L17.25 6Zm-3 2.25a.75.75 0 0 1 .745.663L15 9v6.75a.75.75 0 0 1-1.495.088l-.005-.088V9a.75.75 0 0 1 .75-.75Zm-3.75 0a.75.75 0 0 1 .745.663L11.25 9v6.75a.75.75 0 0 1-1.495.088l-.005-.088V9a.75.75 0 0 1 .75-.75ZM13.875 3h-3v1.5h3V3Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <Link to={"/profile"}>
                  <span className="text-gray-500 font-medium text-base">
                    سفر های من
                  </span>
                </Link>
              </div>

              <div className="flex ml-9 cursor-pointer px-[10px] py-[8px]  hover:bg-[#F8FAFB] rounded-[8px]">
                <span className="ml-[3px] text-gray-500">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="ml-1 text-grays-500"
                    data-v-fee17fe2=""
                  >
                    <path
                      d="M17.25 12.75A3.75 3.75 0 0 1 21 16.5v3.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V16.5a3.75 3.75 0 0 1 3.75-3.75h10.5Zm0 1.5H6.75A2.25 2.25 0 0 0 4.5 16.5v3h15v-3a2.25 2.25 0 0 0-2.118-2.246l-.132-.004ZM12 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 1 1 0-9Zm0 1.5a3 3 0 1 0-.001 5.999A3 3 0 0 0 12 4.5Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <Link onClick={handleOpenModal}>
                  <span className="text-gray-500 font-medium text-base">
                    ورود یا ثبت نام
                  </span>
                </Link>
                <LoginFrorm onClose={handleCloseModal} isOpen={modalIsOpen} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
