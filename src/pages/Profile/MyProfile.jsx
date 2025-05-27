import { useState } from "react";
import MyProfileInfoUpdate from "../../components/modals/MyProfileInfoUpdate";
import AddEducation from "../../components/modals/AddEducation";
import AddWorkExperience from "../../components/modals/AddWorkExperience";
import DeleteDevice from "../../components/modals/DeleteDevice";

import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { subDays } from 'date-fns';

const today = new Date();
const oneYearAgo = new Date();
oneYearAgo.setDate(today.getDate() - 365);

function MyProfile() {
  const values = [
    { date: '2025-01-01', count: 2 },
    { date: '2025-01-02', count: 3 },
    { date: '2025-01-03', count: 5 },
    { date: '2025-02-30', count: 7 },

  ]

  const uzbekMonths = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
  const uzbekDays = ['Yak', 'Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh'];

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
        <div className="md:w-52 xl:w-72 bg-white dark:bg-slate-800 shadow-xs p-1 md:p-2 rounded-md absolute md:static bottom-3 left-3 right-3">
          <ul className="flex justify-between md:flex-col gap-2">
            {menus.map(({ to, icon, label }) => (
              <li key={to} className="w-full">
                <button onClick={() => { setSelectMenu(to); }} className={`w-full cursor-pointer hover:border flex flex-col md:flex-row border justify-start items-center gap-2 px-1 md:px-3 py-1 md:py-2 rounded-lg
                ${selectMenu === to
                    ? " bg-sky-100 dark:bg-slate-950 text-sky-500 font-semibold border-none"
                    : "border-transparent text-slate-600 dark:text-slate-100"
                  }`} >
                  <i className={`bi ${icon} text-lg flex justify-center items-center`} ></i>
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
          <div className={`flex flex-col gap-2 ${selectMenu === "my-info" ? "block" : "hidden"}`}  >
            <div className="w-ful rounded-2xl p-3 bg-white dark:bg-slate-800">
              <div className=" bg-sky-100 dark:bg-slate-950 rounded-2xl p-4 flex justify-between">
                <div className="flex gap-4">
                  <div className="avatar">
                    <div className="w-15 rounded-full">
                      <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                    </div>
                  </div>
                  <p className="mt-4  text-lg font-semibold">Zerda Jursinova</p>
                </div>

                <button onClick={() => document.getElementById("my_profile_info_update").showModal()}
                  className="mt-4 btn rounded-md shadow-md bg-[#0EA5E9] text-white transition border border-none"  >
                  Ma’lumotlarni o‘zgartirish
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row dark:bg-slate-800 gap-4 md:gap-2 bg-white p-4 rounded-xl">
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

            <div className=" p-4 bg-white  dark:bg-slate-800 rounded-2xl flex justify-between items-center ">
              <div>
                <h1 className="text-sm font-light opacity-80">
                  {" "}
                  Change Password
                </h1>
                <p className="font-semibold text-md">
                  {" "}
                  Bu yerda hisobingiz parolini oʻzgartirishingiz mumkin.{" "}
                </p>
              </div>
              <div>
                <button className="btn btn-sm rounded-sm border-sky-500  text-sky-500  dark:bg-slate-900 flex justify-center items-center gap-2 hover:bg-sky-100 dark:hover:bg-slate-950">
                  <p className="text-nowrap">Change Password</p>
                  <i className="bi bi-box-arrow-up-right flex justify-center items-center"></i>
                </button>
              </div>
            </div>

            <div className=" p-4 bg-white dark:bg-slate-800 rounded-2xl flex justify-between items-center">
              <div className="">
                <h1 className="text-sm font-light opacity-80">
                  Ma'lumotlarni ko'rsatish
                </h1>
                <p className="font-semibold text-md">
                  Maʻlumotlaringizni saytda rezyume sifatida koʻrsatishingiz
                  mumkin.
                </p>
              </div>

              <label className="toggle text-base-content  border-none  bg-gradient-to-r from-[#0EA5E9]  to-[#0EA5E9]">
                <input type="checkbox" />
                <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"  >
                  <path d="M18 6 6 18" />  <path d="m6 6 12 12" />
                </svg>
                <svg aria-label="disabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="4" fill="none" stroke="currentColor" >
                    <path d="M20 6 9 17l-5-5"></path>
                  </g>
                </svg>
              </label>
            </div>
          </div>

          {/* My experience */}
          <div className={`${selectMenu === "my-experience" ? "block" : "hidden"}`} >
            <div className="w-full p-3 bg-white dark:bg-slate-800 rounded-lg text-center mb-6">
              <div className="flex flex-col items-center justify-center p-8">
                <i className="bi bi-book-fill px-2 py-1 rounded-lg text-[#0EA5E9] text-2xl mb-8"></i>
                <div>
                  <h1 className="font-semibold   mb-1.5">
                    Sizda hali ta'lim tajribasi mavjud emas.
                  </h1>
                  <p className="mb-6 opacity-50">
                    Bu yerda sizning ta'lim tajribalaringiz ko’rinib turadi.
                  </p>
                </div>

                <button className="btn rounded-full border-none bg-[#0EA5E9] text-white "
                  onClick={() => document.getElementById("add_education").showModal()} >
                  Ta'lim qo'shish
                </button>
              </div>
            </div>

            <div className="w-full p-3 bg-white dark:bg-slate-800 rounded-lg text-center">
              <div className="flex flex-col items-center justify-center p-8">
                <i className="bi bi-briefcase-fill text-4xl  text-[#0EA5E9]  px-2 py-2 rounded-lg  mb-8"></i>
                <div>
                  <h1 className="font-semibold mb-1.5">
                    Sizda hali ish tajribasi mavjud emas
                  </h1>
                  <p className="mb-6 opacity-50">
                    Bu yerda sizning ta'lim tajribalaringiz ko’rinib turadi.
                  </p>
                </div>

                <button className="btn rounded-full border-none bg-[#0EA5E9] text-white "
                  onClick={() => document.getElementById("add_work_experience").showModal()} >
                  Ish tajribasi qo'shish
                </button>
              </div>
            </div>
          </div>

          {/* My Certificate */}
          <div className={`${selectMenu === "my-certificate" ? "block" : "hidden"}`} >
            <div className="w-full p-3 dark:bg-slate-800 bg-white rounded-lg text-center">
              <div className="flex flex-col items-center justify-center p-8">
                <i className="bi bi-award-fill text-4xl  text-[#0EA5E9] px-2 py-2 rounded-lg  mb-8"></i>
                <div>
                  <h1 className="font-semibold mb-1.5">
                    Sizda hali sertifikatlar mavjud emas
                  </h1>
                  <p className="text-[#7F868B] mb-6">
                    Bu yerda kurslaringizni muvaffaqiyatli tamomlaganingiz uchun
                    berilgan sertifikatlarni ko’rishingiz mumkin bo’ladi.
                  </p>
                </div>
                <button className="btn rounded-full  bg-[#0EA5E9] text-white border-none">
                  Kurs sotib olish
                </button>
              </div>
            </div>
          </div>

          {/* My courses*/}
          <div className={`${selectMenu === "my-courses" ? "block" : "hidden"}`}  >
            <div className="card bg-base-100 dark:bg-slate-800 w-66 shadow-sm">
              <figure>
                <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" className="w-full h-35" />
              </figure>
              <div className="card-body p-4 space-y-2">
                <h2 className="card-title">Express Backend</h2>
                <div className="flex items-center gap-2">
                  <progress className="progress progress-info w-full" value="70" max="100"> </progress>
                  <p className="text-sky-500 font-semibold">  20%</p>
                </div>

                <button className="btn btn-primary w-full rounded-lg bg-sky-500 border-none shadow-none text-white font-normal">Darsni davom etirish</button>
              </div>
            </div>
          </div>

          {/* My activity*/}
          <div className={`${selectMenu === "my-activity" ? "block" : "hidden"}`}  >

            <div className=" space-y-4 h-screen">
              <div className="bg-white dark:bg-slate-800 py-3 px-5 flex justify-between rounded-xl items-center shadow">
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
              <div className="bg-white dark:bg-slate-800 py-3 px-5  flex justify-between rounded-xl  items-center shadow">
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
              <div className="bg-white dark:bg-slate-800 py-3 px-5  flex justify-between rounded-xl  items-center shadow">
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
          <div className={`${selectMenu === "my-year-activity" ? "block" : "hidden"}`} >
            <div className="p-4 bg-white dark:bg-slate-800">
              <div className="flex justify-between mb-3 text-slate-800 dark:text-white pl-6 pr-5 ">
                {uzbekMonths.map((month, index) => (
                  <span key={index} className="w-[32px] text-center text-[8px] md:text-[13px]">{month}</span>
                ))}
              </div>

              <div className="flex overflow-x-auto">
                <div className="flex flex-col  space-y-1 lg:space-y-1.5 xl:space-y-2  2xl:space-y-4 justify-end mr-2 text-slate-800 dark:text-white">
                  {uzbekDays.map((day, index) => (
                    <span key={index} className="h-[16px] text-[11px]">{day}</span>
                  ))}
                </div>

                <div className="min-w-[790px] w-full lg:max-w-none ">
                  <CalendarHeatmap
                    startDate={subDays(today, 266)}
                    endDate={today}
                    values={values}
                    showWeekdayLabels={false}
                    showMonthLabels={false}
                    classForValue={(value) => {
                      if (!value) return 'fill-sky-100';
                      if (value.count >= 7) return 'fill-sky-200';
                      if (value.count >= 5) return 'fill-sky-500';
                      if (value.count >= 3) return 'fill-sky-400';
                      if (value.count >= 2) return 'fill-sky-300';
                      return 'fill-gray-200 ';
                    }}
                    tooltipDataAttrs={(value) => ({
                      'data-tip': `${value.date}: ${value.count || 0} раз(а) был активен`,
                    })}
                    gutterSize={3}
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-between">
                <p className="text-xs text-slate-600 dark:text-white">2025-yil uchun faolliklar</p>

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
          <div className={` ${selectMenu === "my-paymenthistory" ? "block" : "hidden"}`} >

            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl">
              <h1 className="font-semibold text-xl mb-4">To'lovlar tarixi</h1>
              <div className="grid grid-cols-1  md:table w-full">

                <div className="hidden md:table-header-group  bg-[#F5FAFF] dark:bg-[#2b3656] text-[#6eb4fb] rounded-2xl font-semibold">
                  <div className="table-row ">
                    <div className="table-cell px-2 py-4">KURS NOMI</div>
                    <div className="table-cell px-2 py-4">SANA</div>
                    <div className="table-cell px-2 py-4">QIYMAT</div>
                    <div className="table-cell px-2 py-4">TO'LOV TURI</div>
                    <div className="table-cell px-2 py-4">STATUS</div>
                  </div>
                </div>

                <div className="grid grid-cols-1  gap-2 md:table-row space-y-3 md:p-0 rounded-xl">

                  <div className="flex justify-between md:table-cell md:p-2">
                    <span className="text-[#6eb4fb] font-semibold md:hidden">KURS NOMI:</span>
                    <div>
                      <div className="text-black dark:text-white font-medium">Professional Node.JS</div>
                    </div>
                  </div>

                  <div className="flex justify-between md:table-cell md:p-2">
                    <span className="text-[#6eb4fb] font-semibold md:hidden">SANA:</span>
                    <span className="text-black dark:text-white">28.11.2024</span>
                  </div>

                  <div className="flex justify-between md:table-cell md:p-2">
                    <span className="text-[#6eb4fb] font-semibold md:hidden">QIYMAT:</span>
                    <span className="text-[#3F9CFB]">247.000 so'm</span>
                  </div>

                  <div className="flex justify-between md:table-cell md:p-2">
                    <span className="text-[#6eb4fb] font-semibold md:hidden">TO'LOV TURI:</span>
                    <span className="text-black dark:text-white">Bir martalik toʻlov</span>
                  </div>

                  <div className="flex justify-between md:table-cell md:p-2">
                    <span className="text-[#6eb4fb] font-semibold md:hidden">STATUS:</span>
                    <span className="text-[#FDC724]">Jarayonda</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* My Devices */}
          <div className={`${selectMenu === "my-devices" ? "block" : "hidden"}`}  >

            <div className="bg-white dark:bg-slate-800 p-3 rounded-xl hidden md:block ">
              <div>
                <h1 className="font-semibold text-xl">Faol qurilmalar</h1>
                <p className="text-[#7F868B] mt-4 font-light text-[13px]">
                  Siz bir vaqtning oʻzida faqat 2ta qurilma orqali taʻlim
                  olishingiz mumkin.
                  <br />
                  Ilovalarni uchinchi qurilmada faollashtirish uchun avval mavjud
                  ikkita qurilmalardan birini oʻchirishingiz kerak.
                </p>
              </div>

              <div className="bg-[#FFFCED] dark:bg-[#f8e588] px-3 py-2 rounded-xl mt-4 flex">
                <i className="bi bi-exclamation-circle-fill text-yellow-300 dark:text-yellow-500 mr-3"></i>
                <h1 className="text-[#1A202C]">
                  Faqatgina 2ta qurilmadan kirishingiz mumkin.
                </h1>
              </div>

              <div className="mt-4">
                <table className="table table-zebra mt-4">
                  <thead className="bg-[#F5FAFF] dark:bg-[#2b3656]">
                    <tr className="text-[#3F9CFB]">
                      <th>QURUIMA NOMI</th>
                      <th>FOALLASHTIRILGAAN SANA</th>
                      <th>HARAKARLAR</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="flex">
                        <i className="bi bi-laptop p-2 rounded-md text-xl inline-flex items-center justify-center"></i>
                        <div className="ml-3">
                          <h1 className="font-medium text-nowrap">
                            Mac OS 10.15.7, Chrome 133
                          </h1>
                          <p className="text-green-500 text-xs">Mazkur qurilma</p>
                        </div>
                      </td>
                      <td>11:05:01, 04.03.2025</td>
                      <td>
                        <button className="btn btn-sm flex justify-center items-center border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600" onClick={() => document.getElementById("delete_device").showModal()} >
                          <i className="bi bi-trash-fill flex justify-center items-center text-red-500"></i>
                          <span>Delete</span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="flex items-center">
                        <i className="bi bi-phone p-2 rounded-md text-xl inline-flex items-center justify-center"></i>
                        <div className="ml-3">
                          <h1 className="font-medium text-center text-nowrap">
                            Iphone 16.15.7, Chrome 133
                          </h1>
                          <p className="text-xs">2 days ago</p>
                        </div>
                      </td>
                      <td>13:38:34, 01.03.2025</td>
                      <td>
                        <button className="btn btn-sm flex justify-center items-center border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600" onClick={() => document.getElementById("delete_device").showModal()} >
                          <i className="bi bi-trash-fill flex justify-center items-center text-red-500"></i>
                          <span>Delete</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 block md:hidden">
              <div>
                <h1 className="font-semibold text-xl">Faol qurilmalar</h1>
                <p className="text-slate-500 dark:text-slate-100 mt-4 font-light text-[13px]">
                  Siz bir vaqtning oʻzida faqat 2ta qurilma orqali taʻlim
                  olishingiz mumkin.
                  Ilovalarni uchinchi qurilmada faollashtirish uchun avval mavjud
                  ikkita qurilmalardan birini oʻchirishingiz kerak.
                </p>
              </div>

              <div className="bg-[#FFFCF9] dark:bg-[#FFE1C4] px-3 py-2 rounded-xl mt-4 flex">
                <i className="bi bi-exclamation-octagon text-2xl flex items-center text-[#FF7A00]  mr-3"></i>
                <h1 className="text-[#1A202C]">
                  Faqatgina <span className="text-sky-500 font-medium">2 ta </span>  qurilmadan <br /> kirishingiz mumkin.
                </h1>
              </div>

              <div className="mt-6 border border-slate-200 border-sl px-4 py-4 rounded-xl">
                <div className="flex ">
                  <i className="bi bi-laptop p-4 rounded-md text-xl inline-flex items-center justify-center text-white bg-sky-500 "></i>
                  <div className="ml-3">
                    <h1 className="font-medium text-nowrap">
                      Mac OS 10.15.7, Chrome 133
                    </h1>
                    <p className="text-slate-500 dark:text-slate-100 text-xs">Mazkur qurilma : <span>17:02:18, 05.05.2025</span></p>
                  </div>
                </div>

                <div className="mt-4">
                  <button className="btn border-none flex justify-center items-center w-full bg-[#FFEEEE] dark:bg-[#FFD3D3]" onClick={() => document.getElementById("delete_device").showModal()} >
                    <i className="bi bi-trash-fill flex justify-center items-center text-[#E52A12] md:text-md"></i>
                    <span className="text-[#E52A12] md:text-xl font-normal">Delete</span>
                  </button>
                </div>
              </div>

              <div className="mt-6 border border-slate-200 border-sl px-4 py-4 rounded-xl">
                <div className="flex ">
                  <i className="bi bi-phone p-4 rounded-md text-xl inline-flex items-center justify-center text-white bg-sky-500 "></i>
                  <div className="ml-3">
                    <h1 className="font-medium text-nowrap">
                      Mac OS 10.15.7, Chrome 133
                    </h1>
                    <p className="text-slate-500 dark:text-slate-100 text-xs">Mazkur qurilma : <span>17:02:18, 05.05.2025</span></p>
                  </div>
                </div>

                <div className="mt-4">
                  <button className="btn border-none flex justify-center items-center w-full bg-[#FFEEEE] dark:bg-[#FFD3D3]" onClick={() => document.getElementById("delete_device").showModal()} >
                    <i className="bi bi-trash-fill flex justify-center items-center text-[#E52A12] md:text-md"></i>
                    <span className="text-[#E52A12] md:text-xl font-normal">Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>


        </div >
      </section >
    </>
  );
}

export default MyProfile;






















// <div className=" block md:hidden space-y-3">
//   <table class=" min-w-full border border-gray-200">
//     <tbody>
//       <tr class="border-b border-gray-200">
//         <td class="px-4 py-2 font-medium text-right border-r border-gray-200">Kurs nomi</td>
//         <td class="px-4 py-2 dark:text-slate-100 ">Proffesional node.JS</td>
//       </tr>
//       <tr class="border-b border-gray-200">
//         <td class="px-4 py-2 font-medium text-right border-r border-gray-200">Sanasi</td>
//         <td class="px-4 py-2 dark:text-slate-100 ">28-11-2024</td>
//       </tr>
//       <tr class="border-b border-gray-200">
//         <td class="px-4 py-2 font-medium text-right border-r border-gray-200">Qiymati</td>
//         <td class="px-4 py-2 text-green-500">247.900 so’m</td>
//       </tr>
//       <tr class="border-b border-gray-200">
//         <td class="px-4 py-2 font-medium text-right border-r border-gray-200">To’lov turi</td>
//         <td class="px-4 py-2 dark:text-slate-100 ">Bir martalik to’lov</td>
//       </tr>
//       <tr>
//         <td class="px-4 py-2 font-medium text-right border-r border-gray-200">Status</td>
//         <td class="px-4 py-2 text-yellow-500">Jarayonda</td>
//       </tr>
//     </tbody>
//   </table>

//   <table class=" min-w-full border border-gray-200">
//     <tbody>
//       <tr class="border-b border-gray-200">
//         <td class="px-4 py-2 font-medium text-right border-r border-gray-200">Kurs nomi</td>
//         <td class="px-4 py-2 dark:text-slate-100 ">Proffesional node.JS</td>
//       </tr>
//       <tr class="border-b border-gray-200">
//         <td class="px-4 py-2 font-medium text-right border-r border-gray-200">Sanasi</td>
//         <td class="px-4 py-2 dark:text-slate-100 ">28-11-2024</td>
//       </tr>
//       <tr class="border-b border-gray-200">
//         <td class="px-4 py-2 font-medium text-right border-r border-gray-200">Qiymati</td>
//         <td class="px-4 py-2 text-green-500">247.900 so’m</td>
//       </tr>
//       <tr class="border-b border-gray-200">
//         <td class="px-4 py-2 font-medium text-right border-r border-gray-200">To’lov turi</td>
//         <td class="px-4 py-2 dark:text-slate-100 ">Bir martalik to’lov</td>
//       </tr>
//       <tr>
//         <td class="px-4 py-2 font-medium text-right border-r border-gray-200">Status</td>
//         <td class="px-4 py-2 text-yellow-500">Jarayonda</td>
//       </tr>
//     </tbody>
//   </table>

//   <table class=" min-w-full border border-gray-200">
//     <tbody>
//       <tr class="border-b border-gray-200">
//         <td class="px-4 py-2 font-medium text-right border-r border-gray-200">Kurs nomi</td>
//         <td class="px-4 py-2 dark:text-slate-100 ">Proffesional node.JS</td>
//       </tr>
//       <tr class="border-b border-gray-200">
//         <td class="px-4 py-2 font-medium text-right border-r border-gray-200">Sanasi</td>
//         <td class="px-4 py-2 dark:text-slate-100 ">28-11-2024</td>
//       </tr>
//       <tr class="border-b border-gray-200">
//         <td class="px-4 py-2 font-medium text-right border-r border-gray-200">Qiymati</td>
//         <td class="px-4 py-2 text-green-500">247.900 so’m</td>
//       </tr>
//       <tr class="border-b border-gray-200">
//         <td class="px-4 py-2 font-medium text-right border-r border-gray-200">To’lov turi</td>
//         <td class="px-4 py-2 dark:text-slate-100 ">Bir martalik to’lov</td>
//       </tr>
//       <tr>
//         <td class="px-4 py-2 font-medium text-right border-r border-gray-200">Status</td>
//         <td class="px-4 py-2 text-yellow-500">Jarayonda</td>
//       </tr>
//     </tbody>
//   </table>

// </div>