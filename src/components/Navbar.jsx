import React from "react";
import logo from "../../public/assets/logo/weya_plus.png";

function Navbar() {
  return (
    <div className="container mx-auto sticky top-2 my-4">
      <div className="w-full bg-white/95 backdrop-sepia-0 shadow-none border-0 bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20 rounded-full px-[25px] flex justify-between items-center h-[50px]">
        <img src={logo} alt="LOGO" className="w-[85px] cursor-pointer" />
        <div>
          <ul className="gap-5 font-medium hidden md:flex text-[13px] lg:text-[16px]">
            <li className="opacity-60 cursor-pointer"> <i class="bi bi-lock"></i> Home</li>
            <li className="cursor-pointer">EDU</li>
            <li className="opacity-60 cursor-pointer"> <i class="bi bi-lock"></i> Talk</li>
            <li className="opacity-60 cursor-pointer"> <i class="bi bi-lock"></i> Webtoon</li>
            <li className="opacity-60 cursor-pointer"> <i class="bi bi-lock"></i> Game</li>
            <li className="opacity-60 cursor-pointer"> <i class="bi bi-lock"></i> Media</li>
            <li className="opacity-60 cursor-pointer"> <i class="bi bi-lock"></i> Contest</li>
          </ul>
        </div>
        <div className="flex gap-2 items-center">

          <button className="btn btn-sm border-0 btn-circle w-[80px] bg-[#333] text-white flex justify-center items-center">
            <span className="text-[13px]">Login</span>
          </button>

          <div className="dropdown dropdown-end">

            <div tabIndex={0} role="button" className="btn btn-circle bg-transparent border-none shadow-none">
              <i class="bi bi-list text-[24px] flex justify-center items-center"></i>
            </div>

            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 mt-1 shadow-sm" >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
