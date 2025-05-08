import { useState, useEffect } from "react";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import GoogleIcon from "@/assets/icons/google.png";
import { NavLink } from "react-router-dom";

function Registration() {
  const [step, setStep] = useState(1);
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
      <div className="w-full h-screen flex justify-center items-center">
        <div className="absolute top-5 right-5">
          <ThemeSwitcher />
        </div>

        {registrationType === "" && (
          <div className="flex items-center justify-center w-full h-screen">
            <div className=" border-none bg-white dark:bg-gray-900 rounded-2xl px-10 py-12 sm:w-[450px] shadow">
              <div className="text-center mb-12">
                <h1 className="font-medium text-3xl mb-2 uppercase">
                  Hisobingizga kiring
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
          </div>
        )}

        {registrationType === "personal" && (
          <div className=" h-screen w-full flex items-center justify-center ">
            <div className=" bg-white  dark:bg-gray-800 rounded-2xl px-10 py-12 shadow sm:w-[450px] dark:text-gray-50">
              <div className="text-center mb-4">
                <h1 className="font-medium text-3xl mb-2">Ro’yxatdan o’tish</h1>
              </div>

              <div className="mb-3">
                <p className="text-xs font-medium mb-1">Ism familya</p>
                <label className="input w-full border-none dark:bg-[#020617]  bg-[#F7F8F9] shadow">
                  <input
                    type="text"
                    className="placeholder:text-black/50 dark:placeholder:text-gray-50"
                    placeholder="Yozing"
                  />
                </label>
              </div>

              <div className="mb-3">
                <p className="text-xs font-medium mb-1">
                  Emailingizni kiriting
                </p>
                <label className="input w-full  bg-[#F7F8F9] border-none dark:bg-[#020617] shadow">
                  <i className="bi bi-envelope text-black/50 dark:text-gray-50"></i>
                  <input
                    type="text"
                    className="placeholder:text-black/50 dark:placeholder:text-gray-50"
                    placeholder="Email"
                  />
                </label>
              </div>

              <div className="mb-3">
                <p className="text-xs font-medium mb-1">Parol o’ylab toping</p>
                <label className="input w-full bg-[#F7F8F9] border-none flex items-center gap-2 px-3 py-2 rounded dark:bg-[#020617] shadow">
                  <i className="bi bi-lock text-black/50 dark:text-gray-50"></i>
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
                      } text-black/50 dark:text-gray-50`}
                    ></i>
                  </button>
                </label>
              </div>

              <div className="mb-3">
                <p className="text-xs font-medium mb-1">Parolni tasdiqlang</p>
                <label className="input w-full  bg-[#F7F8F9] flex items-center gap-2 px-3 py-2 rounded border-none dark:bg-[#020617] shadow ">
                  <i className="bi bi-lock text-black/50 dark:text-gray-50"></i>
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
                      } text-black/50 dark:text-gray-50`}
                    ></i>
                  </button>
                </label>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <hr className="flex-grow border-[#F5F5F5]" />
                <p className="text-black/50 dark:text-gray-50 text-center text-xs">
                  Yoki
                </p>
                <hr className="flex-grow border-[#F5F5F5]" />
              </div>

              <div className=" mb-3">
                <button className="btn bg-white w-full shadow border-none dark:bg-[#020617]">
                  <img src={GoogleIcon} className="w-4" alt="" />
                  Google
                </button>
              </div>

              <button className="btn w-full border-none bg-[#0EA5E9] text-white mt-4 rounded-lg">
                Davom etish
              </button>

              <div className="flex justify-between gap-10 mt-3">
                <p className="text-xs text-black/50 dark:text-gray-50">
                  Sizning hisobingiz mavjudmi?
                </p>
                <NavLink
                  to="/login"
                  className="text-xs font-medium text-[#0EA5E9]"
                >
                  Hisobga kirish
                </NavLink>
              </div>
            </div>
          </div>
        )}

        {registrationType === "company" && (
          <div className=" h-screen w-full flex items-center justify-center ">
            <div className="max-w-md mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h2 className="text-2xl font-medium text-center mb-6">
                Ro’yxatdan o’tish
              </h2>

              <ul className="steps w-full ">
                <li
                  onClick={() => setStep(1)}
                  className={`step cursor-pointer ${
                    step >= 1
                      ? "step-primary before:!bg-sky-500 after:!bg-sky-500 before:!border-none after:!border-none !border-none before:!text-white after:!text-white"
                      : ""
                  }`}
                >
                  Kontakt ma’lumotlari
                </li>
                <li
                  onClick={() => setStep(2)}
                  className={`step cursor-pointer ${
                    step >= 2
                      ? "step-primary before:!bg-sky-500  after:!bg-sky-500 before:!border-none after:!border-none !border-none  before:!text-white after:!text-white"
                      : ""
                  }`}
                >
                  Kompaniya ma’lumotlari
                </li>
              </ul>

              {step === 1 && (
                <div>
                  <div className="mt-3">
                    <p className="text-xs font-medium mb-1">Kompaniya nomi</p>
                    <label className="input w-full border-none bg-[#F7F8F9] dark:bg-[#020617] shadow">
                      <input
                        type="text"
                        className="placeholder:text-black/50 dark:placeholder:text-gray-50"
                        placeholder="Example"
                      />
                    </label>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs font-medium mb-1">
                      Kompaniya manzili
                    </p>
                    <label className="input w-full border-none bg-[#F7F8F9] dark:bg-[#020617] shadow">
                      <input
                        type="text"
                        className="placeholder:text-black/50 dark:placeholder:text-gray-50"
                        placeholder="Example"
                      />
                    </label>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs font-medium mb-1">Biznes raqami</p>
                    <label className="input w-full border-none bg-[#F7F8F9] dark:bg-[#020617] shadow">
                      <input
                        type="text"
                        className="placeholder:text-black/50 dark:placeholder:text-gray-50"
                        placeholder="Yozing"
                      />
                    </label>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs font-medium mb-1">
                      Ma’sul shaxsning ismi
                    </p>
                    <label className="input w-full border-none bg-[#F7F8F9] dark:bg-[#020617] shadow">
                      <input
                        type="text"
                        className="placeholder:text-black/50 dark:placeholder:text-gray-50"
                        placeholder="Yozing"
                      />
                    </label>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs font-medium mb-1">Telefon raqam</p>
                    <label className="input w-full border-none bg-[#F7F8F9] dark:bg-[#020617] shadow">
                      <input
                        type="text"
                        className="placeholder:text-black/50 dark:placeholder:text-gray-50"
                        placeholder="+998 90 000 00 00"
                      />
                    </label>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs font-medium mb-1">Telegram ID</p>
                    <label className="input w-full border-none bg-[#F7F8F9] dark:bg-[#020617] shadow">
                      <input
                        type="text"
                        className="placeholder:text-black/50 dark:placeholder:text-gray-50"
                        placeholder="51723456"
                      />
                    </label>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className=" ">
                  <div className=" mt-3">
                    <p className="text-xs font-medium mb-1">Email</p>
                    <label className="input w-full border-none bg-[#F7F8F9] dark:bg-[#020617] shadow">
                      <i className="bi bi-envelope text-black/50 dark:text-gray-50"></i>
                      <input
                        type="text"
                        className="placeholder:text-black/50 dark:placeholder:text-gray-50"
                        placeholder="Example@gmail.com"
                      />
                    </label>
                  </div>

                  <div className=" mt-3">
                    <p className="text-xs font-medium mb-1">
                      Kompaniya xujjat raqami
                    </p>
                    <label className="input w-full border-none bg-[#F7F8F9] dark:bg-[#020617] shadow">
                      <input
                        type="text"
                        className="placeholder:text-black/50 dark:placeholder:text-gray-50"
                        placeholder="00000000000"
                      />
                    </label>
                  </div>

                  <div className="mt-3 ">
                    <p className="text-xs font-medium mb-1">
                      Sertificat raqami
                    </p>
                    <label className="input w-full border-none bg-[#F7F8F9] dark:bg-[#020617] shadow">
                      <input
                        type="text"
                        className="placeholder:text-black/50 dark:placeholder:text-gray-50"
                        placeholder="00000000000"
                      />
                    </label>
                  </div>

                  <div className="mt-3 ">
                    <p className="text-xs font-medium mb-1">
                      Kompaniya web sayti
                    </p>
                    <label className="input w-full border-none bg-[#F7F8F9] dark:bg-[#020617] shadow">
                      <i className="bi bi-envelope text-black/50 dark:text-gray-50"></i>
                      <input
                        type="text"
                        className="placeholder:text-black/50 dark:placeholder:text-gray-50"
                        placeholder="htps//misol.com"
                      />
                    </label>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs font-medium mb-1">
                      Parolingiz o’rnating
                    </p>
                    <label className="input w-full border-none bg-[#F7F8F9] dark:bg-[#020617] flex items-center gap-2 px-3 py-2 rounded shadow">
                      <i className="bi bi-lock text-black/50 dark:text-gray-50"></i>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="placeholder:text-black/50 dark:placeholder:text-gray-50 bg-transparent outline-none"
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
                          } text-black/50 dark:text-gray-50`}
                        ></i>
                      </button>
                    </label>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs font-medium mb-1">
                      Parolingizni qayta tasdiqlang
                    </p>
                    <label className="input w-full border-none bg-[#F7F8F9] dark:bg-[#020617] flex items-center gap-2 px-3 py-2 rounded shadow">
                      <i className="bi bi-lock text-black/50 dark:text-gray-50"></i>
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
                          } text-black/50 dark:text-gray-50`}
                        ></i>
                      </button>
                    </label>
                  </div>
                </div>
              )}

              <div className={`${showInfo === true ? "hidden" : ""}`}>
                <div className="flex items-center gap-4 mb-4 mt-3">
                  <hr className="flex-grow border-[#F5F5F5]" />
                  <p className="text-black/50 dark:text-gray-50 text-center text-xs">
                    Yoki
                  </p>
                  <hr className="flex-grow border-[#F5F5F5]" />
                </div>

                <div className=" mb-3">
                  <button className="btn border-none bg-white dark:bg-[#020617] w-full shadow">
                    <img src={GoogleIcon} className="w-4" alt="" />
                    Google
                  </button>
                </div>
              </div>
              <div className="w-full flex gap-2 mt-4">
                <button
                  onClick={() => setStep(step === 1 ? 2 : 1)}
                  className={`w-full py-2 rounded ${
                    step === 1
                      ? "bg-[#0EA5E9] text-white"
                      : "bg-[#E0F2FE] text-[#0EA5E9]"
                  }`}
                >
                  {step === 1 ? "Keyingisi" : "Orqaga"}
                </button>

                {step === 2 && (
                  <button
                    onClick={() => {}}
                    className="w-full bg-[#0EA5E9] text-white py-2 rounded"
                  >
                    Davom etish
                  </button>
                )}
              </div>

              <div
                className={`flex justify-between gap-30 mt-3  ${
                  showInfo === true ? "hidden" : ""
                }`}
              >
                <p className="text-xs text-black/50 dark:text-gray-50">
                  Sizning hisobingiz mavjudmi?
                </p>
                <NavLink
                  to="/login"
                  className="text-xs font-medium text-[#0EA5E9]"
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
