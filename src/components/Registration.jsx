import { useState, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import GoogleIcon from "@/assets/icons/google.png";
import { NavLink } from "react-router-dom";

function Registration() {
  const [showInfo, setShowInfo] = useState();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setShowInfo(false);
      } else {
        setShowInfo(undefined);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleShowInfo = () => {
    if (showInfo === true) setShowInfo(false);
    else if (showInfo === false) setShowInfo(true);
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [registrationType, setRegistrationType] = useState("");
  return (
    <>
      <div className="  w-full h-screen flex justify-center items-center">
        <div className="absolute top-5 right-5">
          <ThemeSwitcher />
        </div>

        {registrationType === "" && (
          <div className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-2xl px-10 py-12 shadow sm:w-[450px]">
            <div className="text-center mb-12">
              <h1 className="font-medium text-3xl mb-2">
                Hisobingizga kiring!
              </h1>
              <p className="text-md font-light">
                Quyidagilar orqali hisobingizga kiring.
              </p>
            </div>

            <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-4 flex gap-5">
              <div
                onClick={() => {
                  setRegistrationType("personal");
                }}
                className="border border-gray-300 dark:border-gray-600 rounded-xl p-3 w-full text-center flex flex-col gap-3 hover:bg-base-200 cursor-pointer"
              >
                <i className="bi bi-person text-5xl"></i>
                <p>Jismoniy shaxs</p>
              </div>
              <div
                onClick={() => {
                  setRegistrationType("company");
                }}
                className="border border-gray-300 dark:border-gray-600 rounded-xl p-3 w-full text-center flex flex-col gap-3 hover:bg-base-200 cursor-pointer"
              >
                <i className="bi bi-buildings text-5xl"></i>
                <p>Yuridik shaxs</p>
              </div>
            </div>
          </div>
        )}

        {registrationType === "personal" && (
          <div className="">
            <div className="border border-black/12 bg-white rounded-2xl px-10 py-12 shadow sm:w-[450px]">
              <div className="text-center mb-4">
                <h1 className="font-medium text-3xl mb-2">Ro’yxatdan o’tish</h1>
              </div>

              <div className="mb-3">
                <p className="text-xs font-medium mb-1">Ism familya</p>
                <label className="input w-full border-none bg-[#F7F8F9]">
                  <input type="text" className="grow" placeholder="Yozing" />
                </label>
              </div>

              <div className="mb-3">
                <p className="text-xs font-medium mb-1">
                  Emailingizni kiriting
                </p>
                <label className="input w-full border-none bg-[#F7F8F9]">
                  <i className="bi bi-envelope text-[#686868]"></i>
                  <input type="text" className="grow" placeholder="Email" />
                </label>
              </div>

              <div className="mb-3">
                <p className="text-xs font-medium mb-1">Parol o’ylab toping</p>
                <label className="input w-full border-none bg-[#F7F8F9] flex items-center gap-2 px-3 py-2 rounded">
                  <i className="bi bi-lock text-[#686868]"></i>
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
                      } text-[#686868]`}
                    ></i>
                  </button>
                </label>
              </div>

              <div className="mb-3">
                <p className="text-xs font-medium mb-1">Parolni tasdiqlang</p>
                <label className="input w-full border-none bg-[#F7F8F9] flex items-center gap-2 px-3 py-2 rounded">
                  <i className="bi bi-lock text-[#686868]"></i>
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
                      } text-[#686868]`}
                    ></i>
                  </button>
                </label>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <hr className="flex-grow border-[#F5F5F5]" />
                <p className="text-[#686868] text-center text-xs">Yoki</p>
                <hr className="flex-grow border-[#F5F5F5]" />
              </div>

              <div className=" mb-3">
                <button className="btn border-none bg-white w-full shadow">
                  <img src={GoogleIcon} className="w-4" alt="" />
                  Google
                </button>
              </div>

              <button className="btn w-full border-none bg-gradient-to-r from-[#8360C3] to-[#2EBF91] text-white mt-4 rounded-lg">
                Davom etish
              </button>

              <div className="flex justify-between gap-10 mt-3">
                <p className="text-xs text-[#686868]">
                  Sizning hisobingiz mavjudmi?
                </p>
                <NavLink
                  to="/login"
                  className="text-xs font-medium bg-gradient-to-r from-[#8360C3] to-[#2EBF91] bg-clip-text text-transparent"
                >
                  Hisobga kirish
                </NavLink>
              </div>
            </div>
          </div>
        )}
        {registrationType === "company" && (
          <div className="border border-black/12 bg-white rounded-2xl px-10 py-12 shadow w-[400px] md:w-[805px]">
            <div className="text-center mb-4">
              <h1 className="font-medium text-3xl mb-2">Ro’yxatdan o’tish</h1>
            </div>

            <div className=" ">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-5 ${
                  showInfo === true ? "hidden" : ""
                }`}
              >
                <div className="">
                  <p className="text-xs font-medium mb-1">Kompaniya nomi</p>
                  <label className="input w-full border-none bg-[#F7F8F9]">
                    <input type="text" className="grow" placeholder="Example" />
                  </label>
                </div>

                <div className="">
                  <p className="text-xs font-medium mb-1">Kompaniya manzili</p>
                  <label className="input w-full border-none bg-[#F7F8F9]">
                    <input type="text" className="grow" placeholder="Example" />
                  </label>
                </div>

                <div className="">
                  <p className="text-xs font-medium mb-1">Biznes raqami</p>
                  <label className="input w-full border-none bg-[#F7F8F9]">
                    <input type="text" className="grow" placeholder="Yozing" />
                  </label>
                </div>

                <div className="">
                  <p className="text-xs font-medium mb-1">
                    Ma’sul shaxsning ismi
                  </p>
                  <label className="input w-full border-none bg-[#F7F8F9]">
                    <input type="text" className="grow" placeholder="Yozing" />
                  </label>
                </div>

                <div className="">
                  <p className="text-xs font-medium mb-1">Telefon raqam</p>
                  <label className="input w-full border-none bg-[#F7F8F9]">
                    <input
                      type="text"
                      className="grow"
                      placeholder="+998 90 000 00 00"
                    />
                  </label>
                </div>

                <div className=" ">
                  <p className="text-xs font-medium mb-1">Telegram ID</p>
                  <label className="input w-full border-none bg-[#F7F8F9]">
                    <input
                      type="text"
                      className="grow"
                      placeholder="51723456"
                    />
                  </label>
                </div>
              </div>

              <div
                className={` grid grid-cols-1 md:grid-cols-2 gap-5 mt-3 ${
                  showInfo === false ? "hidden" : ""
                }`}
              >
                <div className=" ">
                  <p className="text-xs font-medium mb-1">Email</p>
                  <label className="input w-full border-none bg-[#F7F8F9]">
                    <i className="bi bi-envelope text-[#686868]"></i>
                    <input
                      type="text"
                      className="grow"
                      placeholder="Example@gmail.com"
                    />
                  </label>
                </div>

                <div className=" ">
                  <p className="text-xs font-medium mb-1">
                    Kompaniya xujjat raqami
                  </p>
                  <label className="input w-full border-none bg-[#F7F8F9]">
                    <input
                      type="text"
                      className="grow"
                      placeholder="00000000000"
                    />
                  </label>
                </div>

                <div className=" ">
                  <p className="text-xs font-medium mb-1">Sertificat raqami</p>
                  <label className="input w-full border-none bg-[#F7F8F9]">
                    <input
                      type="text"
                      className="grow"
                      placeholder="00000000000"
                    />
                  </label>
                </div>

                <div className=" ">
                  <p className="text-xs font-medium mb-1">
                    Kompaniya web sayti
                  </p>
                  <label className="input w-full border-none bg-[#F7F8F9]">
                    <i className="bi bi-envelope text-[#686868]"></i>
                    <input
                      type="text"
                      className="grow"
                      placeholder="htps//misol.com"
                    />
                  </label>
                </div>

                <div className="mb-3">
                  <p className="text-xs font-medium mb-1">
                    Parolingiz o’rnating
                  </p>
                  <label className="input w-full border-none bg-[#F7F8F9] flex items-center gap-2 px-3 py-2 rounded">
                    <i className="bi bi-lock text-[#686868]"></i>
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
                        } text-[#686868]`}
                      ></i>
                    </button>
                  </label>
                </div>

                <div className="mb-3">
                  <p className="text-xs font-medium mb-1">
                    Parolingizni qayta tasdiqlang
                  </p>
                  <label className="input w-full border-none bg-[#F7F8F9] flex items-center gap-2 px-3 py-2 rounded">
                    <i className="bi bi-lock text-[#686868]"></i>
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
                        } text-[#686868]`}
                      ></i>
                    </button>
                  </label>
                </div>
              </div>

              <div className={`${showInfo === true ? "hidden" : ""}`}>
                <div className="flex items-center gap-4 mb-4 mt-3">
                  <hr className="flex-grow border-[#F5F5F5]" />
                  <p className="text-[#686868] text-center text-xs">Yoki</p>
                  <hr className="flex-grow border-[#F5F5F5]" />
                </div>

                <div className=" mb-3">
                  <button className="btn border-none bg-white w-full shadow">
                    <img src={GoogleIcon} className="w-4" alt="" />
                    Google
                  </button>
                </div>
              </div>

              {showInfo !== true && (
                <button
                  onClick={toggleShowInfo}
                  className="w-full mt-4 btn md:hidden bg-gradient-to-r from-[#8360C3] to-[#2EBF91] text-white"
                >
                  Qo'shimcha ma'lumotlarga o'tish
                </button>
              )}

              {showInfo === true && (
                <button className="w-full mt-4 btn md:hidden bg-gradient-to-r from-[#8360C3] to-[#2EBF91] text-white">
                  Kirish
                </button>
              )}

              <button className="hidden md:block btn w-full border-none bg-gradient-to-r from-[#8360C3] to-[#2EBF91] text-white mt-4 rounded-lg">
                Kirish
              </button>

              <div
                className={`flex justify-between gap-10 mt-3 ${
                  showInfo === true ? "hidden" : ""
                }`}
              >
                <p className="text-xs text-[#686868]">
                  Sizning hisobingiz mavjudmi?
                </p>
                <NavLink
                  to="/login"
                  className="text-xs font-medium bg-gradient-to-r from-[#8360C3] to-[#2EBF91] bg-clip-text text-transparent"
                >
                  Hisobga kirish
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Registration;
