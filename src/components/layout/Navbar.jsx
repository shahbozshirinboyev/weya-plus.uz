import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import Logo from "../ui/Logo";

function Navbar() {
  return (
    <>
      <div className="container mx-auto px-3 sticky top-1 my-3 z-15 text-gray-900 dark:text-gray-50">
        <div className="w-full rounded-full px-[25px] flex justify-between items-center h-[50px] bg-white dark:bg-base-100 border border-base-300">
          <div>
            {/* <Logo /> */}
            <p className="font-semibold">Logo.</p>
          </div>

          <div>
            <ul className="font-medium hidden md:flex items-center justify-center gap-6 text-[14px] lg:text-[16px]">
              <li>
                <NavLink to="education">EDU</NavLink>
              </li>
              <li className="opacity-50">
                <NavLink to="">Talk</NavLink>
              </li>
              <li className="opacity-50">
                <NavLink to="">Webtoon</NavLink>
              </li>
              <li className="opacity-50">
                <NavLink to="">Game</NavLink>
              </li>
              <li className="opacity-50">
                <NavLink to="">Media</NavLink>
              </li>
            </ul>
          </div>

          <div className="flex gap-2 items-center">
            <NavLink to="login" className="btn btn-sm border-none btn-circle w-[80px] flex justify-center items-center bg-sky-500 text-gray-50">
              <span className="text-[13px]">Login</span>
            </NavLink>

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
                className="dropdown-content menu rounded-md w-72 p-2 mt-2 -mr-6 bg-white dark:bg-base-100 border border-base-300"
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

                <hr className="my-1 border-gray-300 dark:border-gray-600" />

                <li>
                  <NavLink to="/my-profile">
                    <i className="bi bi-person text-[18px] w-5 h-5 flex justify-center items-center"></i>
                    <span>My profile</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="education">
                    <i className="bi bi-columns-gap text-[14px] w-5 h-5 flex justify-center items-center"></i>
                    <span>EDU</span>
                  </NavLink>
                </li>

                <li
                  className="tooltip tooltip-left opacity-50"
                  data-tip="Block"
                >
                  <span>
                    <i className="bi bi-chat-quote text-[18px] flex justify-center items-center"></i>
                    <a>Talk</a>
                  </span>
                </li>

                <li
                  className="tooltip tooltip-left opacity-50"
                  data-tip="Block"
                >
                  <span>
                    <i className="bi bi-people text-[18px] flex justify-center items-center"></i>
                    <a>Webtoon</a>
                  </span>
                </li>

                <li
                  className="tooltip tooltip-left opacity-50"
                  data-tip="Block"
                >
                  <span>
                    <i className="bi bi-controller text-[18px] flex justify-center items-center"></i>
                    <a>Game</a>
                  </span>
                </li>

                <li>
                  <span
                    className="tooltip tooltip-left opacity-50"
                    data-tip="Block"
                  >
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

                <hr className="my-1 border-gray-300 dark:border-gray-600" />

                <div className="p-1 flex gap-0 justify-between items-center mb-1">
                  <span>Theme</span>
                  <ThemeSwitcher />
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
