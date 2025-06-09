import { useState } from "react";
import MyProfileInfoUpdate from "../../components/modals/MyProfileInfoUpdate";
import AddEducation from "../../components/modals/AddEducation";
import AddWorkExperience from "../../components/modals/AddWorkExperience";
import DeleteDevice from "../../components/modals/DeleteDevice";

import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { subDays } from "date-fns";

const today = new Date();
const oneYearAgo = new Date();
oneYearAgo.setDate(today.getDate() - 365);

function MyProfile() {
  const values = [
    { date: "2025-01-01", count: 2 },
    { date: "2025-01-02", count: 3 },
    { date: "2025-01-03", count: 5 },
    { date: "2025-02-30", count: 7 },
  ];

  const uzbekMonths = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];
  const uzbekDays = ["Yak", "Du", "Se", "Ch", "Pa", "Ju", "Sh"];

  const menus = [
    {
      to: "my-info",
      icon: "bi-person-circle",
      label: "Mening profilim",
    },
    {
      to: "my-experience",
      icon: "bi-briefcase",
      label: "Tajriba",
    },
    {
      to: "my-certificate",
      icon: "bi-patch-check",
      label: "Sertifikat",
    },
    {
      to: "my-courses",
      icon: "bi-book",
      label: "Kurslarim",
    },
    {
      to: "my-activity",
      icon: "bi-activity",
      label: "Mening faolligim",
    },
    {
      to: "my-year-activity",
      icon: "bi-calendar",
      label: "Yillik faollik jadvali",
    },
    {
      to: "my-paymenthistory",
      icon: "bi-clock-history",
      label: "To’lov tarixi",
    },
    {
      to: "my-devices",
      icon: "bi-tv",
      label: "Qurilma",
    },
  ];
  const [selectMenu, setSelectMenu] = useState("my-info");
  return (
    <>
      <MyProfileInfoUpdate />
      <AddEducation />
      <AddWorkExperience />
      <DeleteDevice />

      <section className="container mx-auto px-3 mt-4 flex items-start gap-4 text-gray-900 dark:text-gray-50">
        <div className="md:w-52 xl:w-72 p-1 md:p-2 rounded-md absolute md:static bottom-3 left-3 right-3 bg-white dark:bg-base-100 border border-base-300">
          <ul className="flex justify-between md:flex-col gap-2 overflow-x-auto">
            {menus.map(({ to, icon, label }) => (
              <li key={to} className="w-full min-w-[70px]">
                <button
                  onClick={() => {
                    setSelectMenu(to);
                  }}
                  className={`w-full cursor-pointer flex flex-col md:flex-row border justify-start items-center gap-2 px-1 md:px-3 py-1 md:py-2 rounded-lg
                ${
                  selectMenu === to
                    ? "bg-sky-100 border-sky-300 text-sky-500 dark:border-sky-300/10 dark:bg-sky-400/10"
                    : "text-slate-600 dark:text-slate-100 border-transparent"
                } hover:bg-sky-100 hover:dark:bg-sky-400/10 hover:text-sky-500 transition-all duration-200`}
                >
                  <i className={`bi ${icon} text-lg flex justify-center items-center`}></i>
                  <span className="text-[8px] md:text-[14px] text-nowrap">
                    {label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[100%]  flex-1 overflow-x-auto rounded-md">
          {/* My Information */}
          <div
            className={`flex flex-col gap-2 ${
              selectMenu === "my-info" ? "block" : "hidden"
            }`}
          >
            <div className="w-ful rounded-2xl p-4 bg-white dark:bg-base-100 border border-base-300">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 justify-center items-center">
                  <div className="avatar">
                    <div className="w-17 h-17 rounded-full">
                      <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-semibold">Zerda Jursinova</p>
                    <span className="text-xs leading-snug opacity-80">
                      Biz bilan 3 oy
                    </span>
                  </div>
                </div>

                <button
                  onClick={() =>
                    document
                      .getElementById("my_profile_info_update")
                      .showModal()
                  }
                  className="btn rounded-md shadow-md bg-sky-500 text-white transition border border-none"
                >
                  Ma’lumotlarni o‘zgartirish
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row bg-white dark:bg-base-100 border border-base-300 gap-4 md:gap-2 p-4 rounded-xl">
              <div className="flex-1">
                <p className="text-sm font-light opacity-80">
                  Telefon raqamingiz:
                </p>
                <span className="font-semibold text-md">+998991449406</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-light opacity-80">
                  Elektron manzilingiz:
                </p>
                <span className="font-semibold text-md">
                  zerdajursinova@gmail.com
                </span>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-base-100 border border-base-300 rounded-2xl flex justify-between items-center">
              <div>
                <h1 className="text-sm font-light opacity-80">
                  Change Password
                </h1>
                <p className="font-semibold text-md">
                  Bu yerda hisobingiz parolini oʻzgartirishingiz mumkin.
                </p>
              </div>
              <div>
                <button className="btn btn-sm rounded-sm border-sky-500  text-sky-500  dark:bg-slate-900 flex justify-center items-center gap-2 hover:bg-sky-100 dark:hover:bg-slate-950">
                  <p className="text-nowrap">Change Password</p>
                  <i className="bi bi-box-arrow-up-right flex justify-center items-center"></i>
                </button>
              </div>
            </div>

            <div className=" p-4 bg-white dark:bg-base-100 border border-base-300 rounded-2xl flex justify-between items-center">
              <div className="">
                <h1 className="text-sm font-light opacity-80">
                  Ma'lumotlarni ko'rsatish
                </h1>
                <p className="font-semibold text-md">
                  Maʻlumotlaringizni saytda rezyume sifatida koʻrsatishingiz
                  mumkin.
                </p>
              </div>

              <label className="toggle text-base-content  border-none bg-gradient-to-r from-[#0EA5E9]  to-[#0EA5E9]">
                <input type="checkbox" />
                <i
                  aria-label="enabled"
                  className="bi bi-x w-5 h-5 flex justify-center items-center"
                ></i>
                <i
                  aria-label="disabled"
                  className="bi bi-check w-5 h-5 flex justify-center items-center"
                ></i>
              </label>
            </div>
          </div>

          {/* My experience */}
          <div
            className={`${selectMenu === "my-experience" ? "block" : "hidden"}`}
          >
            <div className="w-full p-4 bg-white dark:bg-base-100 border border-base-300 rounded-lg text-center mb-6">
              <div className="flex flex-col items-center justify-center p-8">
                <i className="bi bi-book-fill px-2 py-1 rounded-lg text-sky-500 text-2xl mb-8"></i>
                <div>
                  <h1 className="font-semibold   mb-1.5">
                    Sizda hali ta'lim tajribasi mavjud emas.
                  </h1>
                  <p className="mb-6 opacity-50">
                    Bu yerda sizning ta'lim tajribalaringiz ko’rinib turadi.
                  </p>
                </div>

                <button
                  className="btn rounded-full border-none bg-sky-500 text-white "
                  onClick={() =>
                    document.getElementById("add_education").showModal()
                  }
                >
                  Ta'lim qo'shish
                </button>
              </div>
            </div>

            <div className="w-full p-4 bg-white dark:bg-base-100 border border-base-300 rounded-lg text-center">
              <div className="flex flex-col items-center justify-center p-8">
                <i className="bi bi-briefcase-fill text-4xl  text-sky-500  px-2 py-2 rounded-lg  mb-8"></i>
                <div>
                  <h1 className="font-semibold mb-1.5">
                    Sizda hali ish tajribasi mavjud emas
                  </h1>
                  <p className="mb-6 opacity-50">
                    Bu yerda sizning ta'lim tajribalaringiz ko’rinib turadi.
                  </p>
                </div>

                <button
                  className="btn rounded-full border-none bg-sky-500 text-white "
                  onClick={() =>
                    document.getElementById("add_work_experience").showModal()
                  }
                >
                  Ish tajribasi qo'shish
                </button>
              </div>
            </div>
          </div>

          {/* My Certificate */}
          <div
            className={`${
              selectMenu === "my-certificate" ? "block" : "hidden"
            }`}
          >
            <div className="w-full p-4 bg-white dark:bg-base-100 border border-base-300 rounded-lg text-center">
              <div className="flex flex-col items-center justify-center p-8">
                <i className="bi bi-award-fill text-4xl  text-sky-500 px-2 py-2 rounded-lg  mb-8"></i>
                <div>
                  <h1 className="font-semibold mb-1.5">
                    Sizda hali sertifikatlar mavjud emas
                  </h1>
                  <p className="text-[#7F868B] mb-6">
                    Bu yerda kurslaringizni muvaffaqiyatli tamomlaganingiz uchun
                    berilgan sertifikatlarni ko’rishingiz mumkin bo’ladi.
                  </p>
                </div>
                <button className="btn rounded-full  bg-sky-500 text-white border-none">
                  Kurs sotib olish
                </button>
              </div>
            </div>
          </div>

          {/* My courses*/}
          <div
            className={`${selectMenu === "my-courses" ? "block" : "hidden"}`}
          >
            <div className="card bg-white dark:bg-base-100 border border-base-300 w-66 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                  className="w-full h-35 object-cover"
                />
              </figure>
              <div className="card-body p-4 space-y-2">
                <h2 className="card-title">Express Backend</h2>
                <div className="flex items-center gap-2">
                  <progress
                    className="progress progress-info w-full"
                    value="70"
                    max="100"
                  >
                    {""}
                  </progress>
                  <p className="text-sky-500 font-semibold">70%</p>
                </div>

                <button className="btn btn-primary w-full rounded-lg bg-sky-500 border-none shadow-none text-white font-normal">
                  Darsni davom etirish
                </button>
              </div>
            </div>
          </div>

          {/* My activity*/}
          <div
            className={`${selectMenu === "my-activity" ? "block" : "hidden"}`}
          >
            <div className=" space-y-4 ">
              <div className="bg-white dark:bg-base-100 border border-base-300 py-3 px-5 flex justify-between rounded-xl items-center shadow">
                <div className="flex gap-3 items-center ">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    </div>
                  </div>
                  <div>
                    <h1>Shukurillo Abdumannobov</h1>
                    <p className="text-sky-600 text-sm ">6357 daqiqa</p>
                  </div>
                </div>
                <span>1</span>
              </div>
              <div className="bg-white dark:bg-base-100 border border-base-300 py-3 px-5  flex justify-between rounded-xl  items-center shadow">
                <div className="flex gap-3 items-center ">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    </div>
                  </div>
                  <div>
                    <h1>Shukurillo Abdumannobov</h1>
                    <p className="text-sky-600 text-sm ">6357 daqiqa</p>
                  </div>
                </div>
                <span>2</span>
              </div>
              <div className="bg-white dark:bg-base-100 border border-base-300 py-3 px-5  flex justify-between rounded-xl  items-center shadow">
                <div className="flex gap-3 items-center ">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    </div>
                  </div>
                  <div>
                    <h1>Shukurillo Abdumannobov</h1>
                    <p className="text-sky-600 text-sm ">6357 daqiqa</p>
                  </div>
                </div>
                <span>3</span>
              </div>
            </div>
          </div>

          {/* My year activity*/}
          <div
            className={`${
              selectMenu === "my-year-activity" ? "block" : "hidden"
            }`}
          >
            <div className="p-4 bg-white dark:bg-base-100 border border-base-300">
              <div className="flex">
                <div className="flex flex-col space-y-0.5 lg:space-y-0.5 xl:space-y-2 2xl:space-y-3.5 justify-end mr-2 text-slate-800 dark:text-white">
                  {uzbekDays.map((day, index) => (
                    <span key={index} className="h-[16px] text-[11px]">
                      {day}
                    </span>
                  ))}
                </div>

                <div className="overflow-x-auto w-full">
                  <div className="min-w-[700px]">
                    <div className="w-full flex justify-between mb-3 text-slate-800 dark:text-white text-[13px]">
                      {uzbekMonths.map((month, index) => (
                        <span key={index} className=" w-full">
                          {month}
                        </span>
                      ))}
                    </div>

                    <CalendarHeatmap
                      startDate={subDays(today, 266)}
                      endDate={today}
                      values={values}
                      showWeekdayLabels={false}
                      showMonthLabels={false}
                      classForValue={(value) => {
                        if (!value) return "fill-sky-100";
                        if (value.count >= 7) return "fill-sky-200";
                        if (value.count >= 5) return "fill-sky-500";
                        if (value.count >= 3) return "fill-sky-400";
                        if (value.count >= 2) return "fill-sky-300";
                        return "fill-gray-200";
                      }}
                      tooltipDataAttrs={(value) => ({
                        "data-tip": `${value.date}: ${
                          value.count || 0
                        } раз(а) был активен`,
                      })}
                      gutterSize={3}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-between">
                <p className="text-xs text-slate-600 dark:text-white">
                  2025-yil uchun faolliklar
                </p>
                <div className="flex items-center space-x-1">
                  <p className="text-xs text-slate-600 dark:text-white">Kam</p>
                  <div className="w-4 h-4 rounded-sm bg-sky-100"></div>
                  <div className="w-4 h-4 rounded-sm bg-sky-200"></div>
                  <div className="w-4 h-4 rounded-sm bg-sky-300"></div>
                  <div className="w-4 h-4 rounded-sm bg-sky-400"></div>
                  <div className="w-4 h-4 rounded-sm bg-sky-500"></div>
                  <p className="text-xs text-slate-600 dark:text-white">Ko'p</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div
            className={` ${
              selectMenu === "my-paymenthistory" ? "block" : "hidden"
            }`}
          >
            <div className="bg-white dark:bg-base-100 border border-base-300 p-4 rounded-xl">
              <h1 className="font-semibold text-xl mb-3">
                To'lovlar tarixi
              </h1>
              <div className="grid grid-cols-1 md:table w-full gap-3">
                <div className="hidden md:table-header-group  bg-[#F5FAFF] dark:bg-[#2b3656] text-sky-500 rounded-2xl font-semibold">
                  <div className="table-row">
                    <div className="table-cell px-2 py-4">KURS NOMI</div>
                    <div className="table-cell px-2 py-4">SANA</div>
                    <div className="table-cell px-2 py-4">QIYMAT</div>
                    <div className="table-cell px-2 py-4">TO'LOV TURI</div>
                    <div className="table-cell px-2 py-4">STATUS</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 md:table-row space-y-3 p-4 border border-sky-100/80 dark:border-sky-100/10 bg-sky-50/80 dark:bg-sky-50/10 rounded-md">
                  <div className="flex justify-between md:table-cell md:p-2">
                    <span className="text-sky-500 font-semibold md:hidden">
                      KURS NOMI
                    </span>
                    <div>
                      <span className="font-semibold">
                        Professional Node.JS
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between md:table-cell md:p-2">
                    <span className="text-sky-500 font-semibold md:hidden">
                      SANA
                    </span>
                    <span>
                      28.11.2024
                    </span>
                  </div>

                  <div className="flex justify-between md:table-cell md:p-2">
                    <span className="text-sky-500 font-semibold md:hidden">
                      QIYMAT
                    </span>
                    <span>247.000 so'm</span>
                  </div>

                  <div className="flex justify-between md:table-cell md:p-2">
                    <span className="text-sky-500 font-semibold md:hidden">
                      TO'LOV TURI
                    </span>
                    <span>
                      Bir martalik toʻlov
                    </span>
                  </div>

                  <div className="flex justify-between md:table-cell md:p-2">
                    <span className="text-sky-500 font-semibold md:hidden">
                      STATUS
                    </span>
                    <span className="text-amber-500">Jarayonda</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* My Devices */}
          <div
            className={`${selectMenu === "my-devices" ? "block" : "hidden"}`}
          >
            <div className="bg-white dark:bg-base-100 border border-base-300 p-4 rounded-xl ">
              <div>
                <h1 className="font-semibold text-xl">Faol qurilmalar</h1>
                <p className=" mt-4 font-light text-[13px]">
                  Siz bir vaqtning oʻzida faqat 2ta qurilma orqali taʻlim
                  olishingiz mumkin.
                  <br />
                  Ilovalarni uchinchi qurilmada faollashtirish uchun avval
                  mavjud ikkita qurilma lardan birini oʻchirishingiz kerak.
                </p>
              </div>

              <div role="alert" className="alert alert-warning mt-4">
                <i className="bi bi-exclamation-circle-fill mr-3"></i>
                <span>Faqatgina 2ta qurilmadan kirishingiz mumkin.</span>
              </div>

              <div className="mt-4">
                <table className="table">
                  <thead className="hidden md:table-header-group bg-[#F5FAFF] dark:bg-[#2b3656]">
                    <tr className="text-[#3F9CFB]">
                      <th>QURUIMA NOMI</th>
                      <th>FOALLASHTIRILGAAN SANA</th>
                      <th>HARAKARLAR</th>
                    </tr>
                  </thead>

                  <tbody className=" space-y-2">
                    <tr className="flex flex-col md:table-row">
                      <td className="flex flex-col md:flex-row md:items-center md:table-cell p-4">
                        <div className="flex items-start">
                          <i className="bi bi-laptop p-2 rounded-md text-xl inline-flex items-center justify-center bg-sky-500"></i>
                          <div className="ml-3 w-full">
                            <h1 className="font-medium text-nowrap">
                              Mac OS 10.15.7, Chrome 133
                            </h1>
                            <div className="mt-1 gap-2 flex md:items-center md:gap-2">
                              <p className="text-green-500 text-xs">
                                Mazkur qurilma
                              </p>
                              <span className="text-xs md:hidden block">
                                11:05:01, 04.03.2025
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="hidden md:table-cell">
                        11:05:01, 04.03.2025
                      </td>
                      <td className="">
                        <div className="mt-3 md:mt-0 flex md:justify-start justify-end">
                          <button
                            className="btn w-full p-3  flex justify-center items-center border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                            onClick={() =>
                              document
                                .getElementById("delete_device")
                                .showModal()
                            }
                          >
                            <i className="bi bi-trash-fill flex justify-center items-center text-red-500 mr-1"></i>
                            <span>Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="flex flex-col md:table-row  ">
                      <td className="flex flex-col md:flex-row md:items-center md:table-cell p-4">
                        <div className="flex items-start">
                          <i className="bi bi-phone p-2 rounded-md text-xl inline-flex items-center justify-center bg-sky-500"></i>
                          <div className="ml-3 w-full">
                            <h1 className="font-medium text-nowrap">
                              {" "}
                              Iphone 16.15.7, Chrome 133
                            </h1>
                            <div className="mt-1 gap-2 flex md:items-center md:gap-2">
                              <p className="text-green-500 text-xs">
                                Mazkur qurilma
                              </p>
                              <span className="text-xs  md:hidden block">
                                11:05:01, 04.03.2025
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="hidden md:table-cell">
                        11:05:01, 04.03.2025
                      </td>
                      <td className="">
                        <div className="mt-3 md:mt-0 flex md:justify-start justify-end">
                          <button
                            className="btn w-full p-4  flex justify-center items-center border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                            onClick={() =>
                              document
                                .getElementById("delete_device")
                                .showModal()
                            }
                          >
                            <i className="bi bi-trash-fill flex justify-center items-center text-red-500 mr-1"></i>
                            <span>Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyProfile;
