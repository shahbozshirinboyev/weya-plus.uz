import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function Registration() {
  const [registrationType, setRegistrationType] = useState("");
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 ">
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
                Xush kelibsiz!
                <br />
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
          <div className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-2xl px-10 py-12 shadow sm:w-[450px]">
            Personal
          </div>
        )}
        {registrationType === "company" && (
          <div className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-2xl px-10 py-12 shadow sm:w-[450px]">
            Company
          </div>
        )}
      </div>
    </>
  );
}

export default Registration;
