import { useState } from "react";
import GoogleIcon from "@/assets/icons/google.png";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center dark:text-gray-50 ">
        <div className="absolute top-5 right-5">
          <ThemeSwitcher />
        </div>

        <div className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-2xl px-10 py-12 shadow sm:w-[450px]">
          <div className="text-center mb-12">
            <h1 className="font-medium text-3xl mb-2">Hisobingizga kiring</h1>
            <p className="text-md font-light">
              Xush kelibsiz!
              <br />
              Quyidagilar orqali hisobingizga kiring
            </p>
          </div>

          <div className="mb-3">
            <button className="btn border-[.1px] border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 w-full shadow-xs">
              <img src={GoogleIcon} className="w-4" alt="google_logo" />
              <span>Google</span>
            </button>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <hr className="flex-grow border-gray-300 dark:border-gray-600" />
            <p className="text-center text-xs opacity-50">Yoki</p>
            <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          </div>

          <div className="mb-3">
            <p className="text-xs font-medium mb-1">Emailingizni kiriting</p>
            <label className="input w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900">
              <i className="bi bi-envelope opacity-50"></i>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>

          <div>
            <p className="text-xs font-medium mb-1">Parolni kiriting</p>
            <label className="input w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 flex items-center gap-2 px-3 py-2">
              <i className="bi bi-lock opacity-50"></i>
              <input
                type={showPassword ? "text" : "password"}
                className="grow bg-transparent outline-none"
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
                  } opacity-50`}
                ></i>
              </button>
            </label>
          </div>

          <div className=" flex justify-between mt-4 ">
            <div className="flex ">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox opacity-50 border w-4.5 h-4.5 mr-1.5 rounded-sm "
              />
              <p className="text-xs opacity-50">Eslab qolish</p>
            </div>
            <p className="text-xs font-medium bg-gradient-to-r from-[#8360C3] to-[#2EBF91] bg-clip-text text-transparent">
              Parolni unitdingizmi?
            </p>
          </div>

          <button className="btn w-full border-none  bg-gradient-to-r from-[#8360C3] to-[#2EBF91] text-white mt-4 rounded-lg">
            Kirish
          </button>

          <div className="flex justify-between gap-10 mt-3">
            <p className="text-xs opacity-50">Hisobingiz yo’qmi?</p>
            <NavLink
              to="/registration"
              className="text-xs font-medium bg-gradient-to-r from-[#8360C3] to-[#2EBF91] bg-clip-text text-transparent"
            >
              Ro’yxatdan o’tish
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
