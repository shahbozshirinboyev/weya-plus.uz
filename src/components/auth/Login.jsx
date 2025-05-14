import { useState } from "react";
import GoogleIcon from "@/assets/icons/google.png";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../ui/ThemeSwitcher";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center dark:text-gray-50 ">
        <div className="absolute top-5 right-5">
          <ThemeSwitcher />
        </div>

        <div className="flex items-center justify-center w-full">
          <div className="border-none bg-white dark:bg-gray-800 rounded-2xl px-10 py-12 shadow sm:w-[450px]">
            <div className="text-center mb-12">
              <h1 className="font-medium text-3xl mb-2">Hisobingizga kiring</h1>
              <p className="text-md font-light">
                Xush kelibsiz!
                <br />
                Quyidagilar orqali hisobingizga kiring
              </p>
            </div>

            <div className="mb-3">
              <button className="btn border-none  bg-gray-50 dark:bg-[#020617] w-full shadow">
                <img src={GoogleIcon} className="w-4" alt="google_logo" />
                <span>Google</span>
              </button>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <hr className="flex-grow border-gray-300 dark:border-gray-600 " />
              <p className="text-center text-xs text-black/50 dark:text-gray-50">
                Yoki
              </p>
              <hr className="flex-grow border-gray-300 dark:border-gray-600" />
            </div>

            <div className="mb-3">
              <p className="text-xs font-medium mb-1">Emailingizni kiriting</p>
              <label className="input w-full border-none  bg-gray-50 dark:bg-[#020617] shadow">
                <i className="bi bi-envelope text-black/50 dark:text-gray-50"></i>
                <input
                  type="text"
                  className="placeholder:text-black/50 dark:placeholder:text-gray-50"
                  placeholder="Email"
                />
              </label>
            </div>

            <div>
              <p className="text-xs font-medium mb-1">Parolni kiriting</p>
              <label className="input w-full border-none bg-gray-50 dark:bg-[#020617] flex items-center gap-2 px-3 py-2 shadow">
                <i className="bi bi-lock text-black/50 dark:text-gray-50 "></i>
                <input
                  type={showPassword ? "text" : "password"}
                  className="placeholder:text-black/50 dark:placeholder:text-gray-50"
                  placeholder="Parol"
                />

                <button
                  type="button"
                  onClick={togglePassword}
                  className="focus:outline-none"
                >
                  <i
                    className={`bi ${
                      showPassword ? "bi-eye" : "bi-eye-slash"
                    } text-black/50 dark:text-gray-50 `}
                  ></i>
                </button>
              </label>
            </div>

            <div className=" flex justify-between mt-4 ">
              <div className="flex ">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox text-black/50 dark:text-gray-50 border-none  w-4.5 h-4.5 mr-1.5 rounded-sm shadow"
                />
                <p className="text-xs text-black/50 dark:text-gray-50">
                  Eslab qolish
                </p>
              </div>
              <p className="text-xs font-medium text-[#0EA5E9]">
                Parolni unitdingizmi?
              </p>
            </div>

            <div className="flex justify-between gap-2">
              <button className="btn border-none bg-[#E0F2FE] dark:bg-[#0C4A6E] mt-4 rounded-lg px-2 sm:px-6">
                <h1 className="text-[#0EA5E9] dark:text-gray-50 ">
                  {" "}
                  Bosh sahifaga qaytish
                </h1>
              </button>
              <button className="btn border-none bg-[#0EA5E9] text-white mt-4 px-9 sm:px-16 rounded-lg">
                Kirish
              </button>
            </div>

            <div className="flex justify-between  mt-3">
              <p className="text-xs text-black/50 dark:text-gray-50 ">
                Sizning hisobingiz yo’qmi?
              </p>
              <NavLink
                to="/registration"
                className="text-xs font-medium text-[#0EA5E9]"
              >
                Ro’yxatdan o’tish
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
