import React from "react";
import logo from '../../public/assets/logo/weya_plus.png'

function Navbar() {
  return (
    <div className="container mx-auto mt-4">
      <div className="w-full bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20 rounded-full px-[25px] flex justify-between items-center h-[50px]">
        <img src={logo} alt="LOGO" className="w-[100px]" />
        <div>
          <ul className="flex gap-5 font-medium">
            <li>Home</li>
            <li>EDU</li>
            <li>Talk</li>
            <li>Webtoon</li>
            <li>Game</li>
            <li>Media</li>
            <li>Contest</li>
          </ul>
        </div>
        <div className="flex gap-2 items-center">
        <button className="btn border-0 btn-sm bg-[#333] text-white  btn-circle w-[81px] flex justify-center items-center">Login</button>
        <button className=""><i class="bi bi-list text-[25px]"></i></button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
