import { NavLink } from "react-router-dom";
import logo from "../../public/assets/logo/weya_plus.png";
import { useState } from "react";
import Login from "../components/Login";

function Navbar() {
  const [themeController, setThemeController] = useState(0);
  const changeTheme = (value) => {
    setThemeController(value);
  };

  return (
    <>
      <Login />
      <div className="container mx-auto sticky top-1 my-4">
        <div className="w-full bg-white/95 backdrop-sepia-0 shadow-none border-0 bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20 rounded-full px-[25px] flex justify-between items-center h-[50px]">
          <NavLink to="/">
            <img src={logo} alt="LOGO" className="w-[85px] cursor-pointer" />
          </NavLink>

          <div>
            <ul className="gap-5 font-medium hidden md:flex text-[13px] lg:text-[16px]">
              {/* <li className="opacity-60 cursor-pointer">
              <i className="bi bi-lock"></i> Home
            </li> */}
              <li className="cursor-pointer">
                <NavLink to="education">EDU</NavLink>
              </li>
              <li className="opacity-60 cursor-pointer">
                <i className="bi bi-lock"></i> Talk
              </li>
              <li className="opacity-60 cursor-pointer">
                <i className="bi bi-lock"></i> Webtoon
              </li>
              <li className="opacity-60 cursor-pointer">
                <i className="bi bi-lock"></i> Game
              </li>
              <li className="opacity-60 cursor-pointer">
                <i className="bi bi-lock"></i> Media
              </li>
              {/* <li className="opacity-60 cursor-pointer">
              <i className="bi bi-lock"></i> Contest
            </li> */}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => document.getElementById("login").showModal()}
              className="btn btn-sm border-0 btn-circle w-[80px] bg-[#333] text-white flex justify-center items-center"
            >
              <span className="text-[13px]">Login</span>
            </button>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-circle bg-transparent border-none shadow-none"
              >
                <i className="bi bi-list text-[24px] flex justify-center items-center"></i>
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-10 w-62 p-2 mt-1 shadow-sm"
              >
                <div className="p-2 flex gap-2">
                  <img
                    className="w-[40px] h-[40px] rounded-full"
                    src="https://vynphoto.com/wp-content/uploads/elementor/thumbs/portfolio-fashion-circle-ozj9iftyanrcvw9stexcawh63x1f60koze1v30hig0.png"
                    alt="logo"
                  />
                  <div>
                    <h2 className="font-medium">Shahboz Shirinboyev</h2>
                    <p className="text-[12px]">+998 93 009 11 66</p>
                  </div>
                </div>

                <hr className="my-1 border-gray-300" />

                <li>
                  <NavLink to="/my-profile">
                    <i className="bi bi-person text-[18px] w-5 h-5 flex justify-center items-center"></i>
                    <a>My profile</a>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="education">
                      <i className="bi bi-columns-gap text-[14px] w-5 h-5 flex justify-center items-center"></i>
                      <a>EDU</a>
                  </NavLink>
                </li>

                <li className="tooltip tooltip-left" data-tip="Block">
                  <span>
                    <i className="bi bi-chat-quote text-[18px] flex justify-center items-center"></i>
                    <a>Talk</a>
                  </span>
                </li>

                <li className="tooltip tooltip-left" data-tip="Block">
                  <span>
                    <i className="bi bi-people text-[18px] flex justify-center items-center"></i>
                    <a>Webtoon</a>
                  </span>
                </li>

                <li className="tooltip tooltip-left" data-tip="Block">
                  <span>
                    <i className="bi bi-controller text-[18px] flex justify-center items-center"></i>
                    <a>Game</a>
                  </span>
                </li>

                <li>
                  <span className="tooltip tooltip-left" data-tip="Block">
                    <i className="bi bi-cast text-[18px] flex justify-center items-center"></i>
                    <a>Media</a>
                  </span>
                </li>

                <li>
                  <span>
                    <i className="bi bi-box-arrow-left text-[18px] flex justify-center items-center"></i>
                    <a>Logout</a>
                  </span>
                </li>

                <hr className="my-1 border-gray-300" />

                <div className="p-1 flex gap-0 justify-between items-center mb-1">
                  <span>Theme</span>

                  <div className="flex gap-2 justify-center items-center border border-gray-300 relative p-1 rounded-md">
                    <div
                      className="absolute bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20 top-0 w-[33.333%] h-full rounded-md transition-all duration-300"
                      style={{ left: `${themeController}%` }}
                    ></div>

                    <div
                      onClick={() => changeTheme(0)}
                      className="w-5 h-5 flex justify-center items-center p-2 z-10 cursor-pointer"
                    >
                      <i className="bi bi-sun flex justify-center items-center"></i>
                    </div>

                    <div
                      onClick={() => changeTheme(33.333)}
                      className="w-5 h-5 flex justify-center items-center p-2 z-10 cursor-pointer"
                    >
                      <i className="bi bi-moon flex justify-center items-center"></i>
                    </div>

                    <div
                      onClick={() => changeTheme(66.666)}
                      className="w-5 h-5 flex justify-center items-center p-2 z-10 cursor-pointer"
                    >
                      <i className="bi bi-tv flex justify-center items-center"></i>
                    </div>
                  </div>
                </div>

                <select
                  defaultValue="Pick a color"
                  className="select pl-3 focus:outline-none h-8 flex justify-center items-center"
                >
                  <option disabled={true}>Language</option>
                  <option>O'zbek</option>
                  <option>English</option>
                  <option>Russian</option>
                </select>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
