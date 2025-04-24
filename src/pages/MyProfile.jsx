import { useState } from "react";
import MyProfileInfoUpdate from "../components/MyProfileInfoUpdate";
import AddEducation from "../components/AddEducation";
import AddWorkExperience from "../components/AddWorkExperience";
import DeleteDevice from "../components/DeleteDevice";

function MyProfile() {
  const menus = [
    {
      to: "my-info",
      icon: "bi-person-circle",
      label: "My information",
    },
    {
      to: "my-experience",
      icon: "bi-briefcase",
      label: "My experiences",
    },
    {
      to: "my-certificate",
      icon: "bi-patch-check",
      label: "My certificates",
    },
    {
      to: "my-paymenthistory",
      icon: "bi-clock-history",
      label: "Payment history",
    },
    {
      to: "my-devices",
      icon: "bi-tv",
      label: "My devices",
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
        <div className="md:w-52 xl:w-72 border border-gray-200 dark:border-gray-600 p-1 md:p-2 bg-base-200 bg-gradient-to-r to-[#eed9ed]/20 from-[#2ec05a]/5 dark:to-[#eed9ed]/10 rounded-md absolute md:static bottom-3 left-3 right-3">
          <ul className="flex justify-between md:flex-col gap-2">
            {menus.map(({ to, icon, label }) => (
              <li key={to} className="w-full">
                <button
                  onClick={() => {
                    setSelectMenu(to);
                  }}
                  className={`w-full cursor-pointer hover:border flex flex-col md:flex-row border justify-start items-center gap-2 px-1 md:px-3 py-1 md:py-2 rounded-md md:rounded-full hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300
                ${
                  selectMenu === to
                    ? "bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20  dark:border-gray-600 dark:from-[#eed9ed]/10 border-gray-400"
                    : "border-transparent"
                }`}
                >
                  <i
                    className={`bi ${icon} text-lg flex justify-center items-center`}
                  ></i>
                  <span className="text-[8px] md:text-[14px] text-nowrap">
                    {label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[100%] p-4 flex-1 overflow-x-auto border border-gray-200 dark:border-gray-600 bg-base-200 bg-gradient-to-r to-[#eed9ed]/40 from-[#2ec05a]/10 dark:to-[#eed9ed]/10 rounded-md">
          {/* My Information */}
          <div
            className={`flex flex-col gap-2 ${
              selectMenu === "my-info" ? "block" : "hidden"
            }`}
          >
            <div className="w-ful rounded-2xl p-2 bg-white dark:bg-[#111728]">
              <div className="bg-gradient-to-r from-[#eed9ed]/50 dark:from-[#eed9ed]/10 to-[#2ec05a]/20 h-24 rounded-2xl"></div>

              <div className="flex flex-col items-start m -mt-[70px] p-5 ">
                <div className="w-24 h-24 bg-gray-100 dark:bg-[#111728] dark:border-gray-600 border-[7px] border-white rounded-full flex items-center justify-center shadow-md">
                  <span className=" text-2xl font-semibold">ZJ</span>
                </div>

                <p className="mt-4  text-lg font-semibold">Zerda Jursinova</p>
                <button
                  onClick={() =>
                    document
                      .getElementById("my_profile_info_update")
                      .showModal()
                  }
                  className="mt-4 btn rounded-full bg-gradient-to-r from-[#eed9ed]/50 dark:from-[#eed9ed]/10 to-[#2ec05a]/20 dark:border-gray-600 border-[#333] shadow-md  transition"
                >
                  Ma’lumotlarni o‘zgartirish
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-2 p-4 bg-white rounded-2xl dark:bg-[#111728]">
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

            <div className="flex justify-between p-4 bg-white dark:bg-[#111728] rounded-2xl">
              <div className="">
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
                <button className="btn btn-sm rounded-full bg-gradient-to-r from-[#eed9ed]/50 dark:from-[#eed9ed]/10 to-[#2ec05a]/20 border-[#333] dark:border-gray-600 flex justify-center items-center gap-2">
                  <p className="text-nowrap">Change Password</p>
                  <i className="bi bi-box-arrow-up-right flex justify-center items-center"></i>
                </button>
              </div>
            </div>

            <div className="flex justify-between p-4 bg-white dark:bg-[#111728] rounded-2xl">
              <div className="">
                <h1 className="text-sm font-light opacity-80">
                  Ma'lumotlarni ko'rsatish
                </h1>
                <p className="font-semibold text-md">
                  Maʻlumotlaringizni saytda rezyume sifatida koʻrsatishingiz
                  mumkin.
                </p>
              </div>
              <div>
                <label className="toggle text-base-content bg-gradient-to-r from-[#eed9ed]/50 dark:from-[#eed9ed]/10 to-[#2ec05a]/20 border-[#333] dark:border-gray-600">
                  <input type="checkbox" />
                  <svg
                    aria-label="enabled"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                  <svg
                    aria-label="disabled"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="4"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </g>
                  </svg>
                </label>
              </div>
            </div>
          </div>

          {/* My experience */}
          <div
            className={`${selectMenu === "my-experience" ? "block" : "hidden"}`}
          >
            <div className="w-full p-3 bg-white dark:bg-[#111728] rounded-lg text-center mb-6">
              <div className="flex flex-col items-center justify-center p-8">
                <i className="bi bi-book-fill px-2 py-1 rounded-lg text-2xl mb-8"></i>
                <div>
                  <h1 className="font-semibold   mb-1.5">
                    Sizda hali ta'lim tajribasi mavjud emas.
                  </h1>
                  <p className="mb-6 opacity-50">
                    Bu yerda sizning ta'lim tajribalaringiz ko’rinib turadi.
                  </p>
                </div>

                <button
                  className="btn rounded-full bg-gradient-to-r from-[#eed9ed]/50 dark:from-[#eed9ed]/10 to-[#2ec05a]/20 border-[#333] dark:border-gray-600 "
                  onClick={() =>
                    document.getElementById("add_education").showModal()
                  }
                >
                  Ta'lim qo'shish
                </button>
              </div>
            </div>

            <div className="w-full p-3 bg-white dark:bg-[#111728] rounded-lg text-center">
              <div className="flex flex-col items-center justify-center p-8">
                <i className="bi bi-briefcase-fill text-4xl px-2 py-2 rounded-lg  mb-8"></i>

                <div>
                  <h1 className="font-semibold mb-1.5">
                    Sizda hali ish tajribasi mavjud emas
                  </h1>
                  <p className="mb-6 opacity-50">
                    Bu yerda sizning ta'lim tajribalaringiz ko’rinib turadi.
                  </p>
                </div>

                <button
                  className="btn rounded-full bg-gradient-to-r from-[#eed9ed]/50 dark:from-[#eed9ed]/10 to-[#2ec05a]/20 border-[#333] dark:border-gray-600 "
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
            <div className="w-full p-3 dark:bg-[#111728] bg-white rounded-lg text-center">
              <div className="flex flex-col items-center justify-center p-8">
                <i className="bi bi-award-fill text-4xl text-[#c9c9c9] px-2 py-2 rounded-lg  mb-8"></i>

                <div>
                  <h1 className="font-semibold mb-1.5">
                    Sizda hali sertifikatlar mavjud emas
                  </h1>
                  <p className="text-[#7F868B] mb-6">
                    Bu yerda kurslaringizni muvaffaqiyatli tamomlaganingiz uchun
                    berilgan sertifikatlarni ko’rishingiz mumkin bo’ladi.
                  </p>
                </div>
                <button className="btn rounded-full bg-gradient-to-r from-[#eed9ed]/50 dark:from-[#eed9ed]/10 to-[#2ec05a]/20 border-[#333] dark:border-gray-600 ">
                  Kurs sotib olish
                </button>
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div
            className={`${
              selectMenu === "my-paymenthistory" ? "block" : "hidden"
            }`}
          >
            <h1 className="font-semibold p-2 text-xl">To'lovlar tarixi</h1>
            <div className="">
              <table className="table mt-4 p-6">
                <thead className="bg-[#F5FAFF] dark:bg-[#2b3656] rounded-xl boeder-none">
                  <tr className="text-[#6eb4fb] border-none rounded-xl ">
                    <th>
                      KURS NOMI
                      <i className="bi bi-caret-down-fill"></i>
                    </th>
                    <th>
                      SANA
                      <i className="bi bi-caret-down-fill"></i>
                    </th>
                    <th>
                      QIYMAT
                      <i className="bi bi-caret-down-fill"></i>
                    </th>
                    <th>
                      TO'LOV TURI
                      <i className="bi bi-caret-down-fill"></i>
                    </th>
                    <th>
                      STATUS
                      <i className="bi bi-caret-down-fill"></i>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-none">
                    <td>
                      <span className="block text-nowrap">
                        Professional Node.JS
                      </span>
                      <span className="text-nowrap">
                        Noldan boshlab eʼlonlar sayti yaratishni oʻrganing!
                      </span>
                    </td>
                    <td>
                      <span className="text-nowrap">28.11.2024</span>
                    </td>
                    <td className="text-[#3F9CFB]">
                      <span className="text-nowrap">247.000 so'm</span>
                    </td>
                    <td className="text-nowrap">Bir martalik toʻlov</td>
                    <td className="text-[#FDC724]">Jarayonda</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* My Devices */}
          <div
            className={`${selectMenu === "my-devices" ? "block" : "hidden"}`}
          >
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
        </div>
      </section>
    </>
  );
}

export default MyProfile;
