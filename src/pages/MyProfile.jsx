import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

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
    }
  ];
  const [selectMenu, setSelectMenu] = useState("my-info");
  return (
    <section className="container mx-auto flex px-3 mt-4 gap-4">

      <div className="lg:w-72 bg-white lg:rounded-lg absolute lg:static bottom-0 left-0 w-[100%] border">
        <ul className="flex justify-between lg:flex-col gap-3 m-3 lg:p-0 border">
          {menus.map(({ to, icon, label }) => (
            <li key={to} className="w-full">
              <button
                onClick={() => { setSelectMenu(to); }}
                className={`w-full flex flex-col lg:flex-row justify-start items-center gap-2 px-1 lg:px-3 py-1 lg:py-2 rounded-lg lg:rounded-full text-[#333]
                ${ selectMenu === to ? "bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20 border-[#333]" : "border-transparent" }`}
              >
                <i className={`bi ${icon} text-lg flex justify-center items-center`} ></i>
                <span className="text-[10px] md:text-[12px] text-nowrap">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 rounded-lg border border-gray-300 w-[100%]">
        {/* My Information */}
        <div
          className={`flex flex-col gap-4 ${
            selectMenu === "my-info" ? "block" : "hidden"
          }`}
        >
          <div className="w-ful rounded-2xl p-2 bg-white">
            <div className="bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20 h-24 rounded-2xl"></div>

            <div className="flex flex-col items-start m -mt-[70px] p-5 ">
              <div className="w-24 h-24 bg-gray-100 border-[7px] border-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-gray-700 text-2xl font-semibold">ZJ</span>
              </div>

              <p className="mt-4 text-gray-700 text-lg font-semibold">
                Zerda Jursinova
              </p>
              <button className="mt-4 btn rounded-full bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20 border-[#333] text-[#333] shadow-md  transition">
                Ma’lumotlarni o‘zgartirish
              </button>
            </div>
          </div>

          <div className="flex justify-between p-4 bg-white rounded-2xl">
            <div className="">
              <p className="mb-1.5 text-[#434D54]">Telefon raqamingiz</p>
              <h1 className="font-semibold text-[#434D54]">+998991449406</h1>
            </div>
            <div>
              <p className="text-[#434D54]">Elektron manzilingiz</p>
            </div>
          </div>

          <div className="flex justify-between p-4 bg-white rounded-2xl">
            <div className="">
              <h1 className="font-semibold mb-1.5 text-[#434D54]">
                Change Password
              </h1>
              <p className="text-[#7F868B]">
                Bu yerda hisobingiz parolini oʻzgartirishingiz mumkin
              </p>
            </div>
            <div>
              <button className="btn rounded-full bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20 border-[#333] text-[#333] flex justify-center items-center gap-2">
                <p>Change Password</p>
                <i className="bi bi-box-arrow-up-right flex justify-center items-center"></i>
              </button>
            </div>
          </div>

          <div className="flex justify-between p-4 bg-white rounded-2xl">
            <div className="">
              <h1 className="font-semibold mb-1.5 text-[#434D54]">
                Maolumatlarni Korsatish
              </h1>
              <p className="text-[#7F868B] text-sm">
                Bu yerda hisobingiz parolini oʻzgartirishingiz mumkin
              </p>
            </div>
            <div>
              <input
                type="checkbox"
                className="toggle toggle-primary mt-4 peer checked:bg-blue-500 bg-gray-500"
              />
            </div>
          </div>
        </div>

        {/* My experience */}
        <div
          className={`${selectMenu === "my-experience" ? "block" : "hidden"}`}
        >
          <div className="w-full p-3 bg-white rounded-lg text-center mb-6">
            <div className="flex flex-col items-center justify-center p-8">
              <i className="bi bi-book-fill text-white px-2 py-1 rounded-lg text-2xl bg-[#c9c9c9] mb-8"></i>
              <div>
                <h1 className="font-semibold   mb-1.5">
                  Sizda hali ta'lim tajribasi mavjud emas
                </h1>
                <p className="text-[#7F868B] mb-6">
                  Bu yerda sizning ta'lim tajribalaringiz ko’rinib turadi.
                </p>
              </div>

              <button
                className="btn rounded-full bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20 border-[#333] text-[#333]"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Ta'lim qo'shish
              </button>

              <dialog id="my_modal_1" className="modal">
                <div className="modal-box p-5 text-left flex flex-col items-start">
                  <h3 className="font-bold text-lg">Ta'lim qo'shish</h3>

                  <fieldset className="fieldset w-full mt-5">
                    <legend className="fieldset-legend text-sm flex items-center gap-1">
                      Yonalish nomi
                      <span className="text-red-500">*</span>
                    </legend>

                    <div className="relative w-full mt-2">
                      <input
                        type="text"
                        className="input border border-slate-300 bg-[#F5F7FA] w-full pr-10 py-2"
                        placeholder="Yonalishingizni yozing"
                        required
                      />
                      <i className="bi bi-book absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-gray-400 px-1 rounded-lg"></i>
                    </div>
                  </fieldset>

                  <fieldset className="fieldset w-full mt-5">
                    <legend className="fieldset-legend text-sm flex items-center gap-1">
                      Oʻquv muassasasi nomi
                      <span className="text-red-500">*</span>
                    </legend>
                    <div className="relative w-full mt-2">
                      <input
                        type="text"
                        className="input border border-slate-300 bg-[#F5F7FA] w-full pr-10 py-2"
                        placeholder=" Oʻquv muassasasi nomini kiriting"
                        required
                      />
                      <i className="bi bi-buildings absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-gray-400 px-1 rounded-lg"></i>
                    </div>
                  </fieldset>

                  <legend className="fieldset-legend text-sm flex items-center gap-1 mt-5">
                    Taʼlim turi
                    <span className="text-red-500">*</span>
                  </legend>

                  <select className="select select-bordered w-full mt-2 border border-slate-300 bg-[#F5F7FA] ">
                    <option className="text-gray-950">Kollej</option>
                    <option className="text-gray-500">Mactab</option>
                    <option className="text-gray-500">Universitet</option>
                  </select>

                  <fieldset className="fieldset w-full mt-5">
                    <legend className="fieldset-legend text-sm flex items-center gap-1">
                      Muassasa veb sahifasi
                    </legend>

                    <div className="relative w-full mt-2">
                      <input
                        type="text"
                        className="input border border-slate-300 bg-[#F5F7FA] w-full pr-10 py-2"
                        placeholder="https://"
                        required
                      />
                      <i className="bi bi-link absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-gray-400 px-1 rounded-lg"></i>
                    </div>
                  </fieldset>

                  <fieldset className="fieldset w-full mt-5">
                    <legend className="fieldset-legend text-sm flex items-center gap-1">
                      Muassasa veb sahifasi
                    </legend>

                    <div className="relative w-full mt-2">
                      <div className="relative">
                        <input
                          type="date"
                          id="my-experience-date"
                          className="input border border-slate-300 bg-[#F5F7FA] w-full pr-3 text-gray-500"
                          required
                        />
                        <i className="bi bi-calendar absolute top-3 right-3 bg-gray-400 text-white px-1 rounded-lg"></i>
                      </div>
                    </div>
                  </fieldset>

                  <div className="modal-action w-full flex justify-end">
                    <form method="dialog">
                      <button className="bg-gray-400 rounded-lg px-2 py-1 text-white hover:bg-gray-500">
                        Yopish
                      </button>
                    </form>
                    <button className="bg-blue-400 rounded-lg px-2 py-1 text-white hover:bg-blue-500">
                      Qoshish
                    </button>
                  </div>
                </div>
              </dialog>
            </div>
          </div>

          <div className="w-full p-3 bg-white rounded-lg text-center">
            <div className="flex flex-col items-center justify-center p-8">
              <i className="bi bi-briefcase-fill text-4xl text-[#c9c9c9] px-2 py-2 rounded-lg  mb-8"></i>

              <div>
                <h1 className="font-semibold text-[#263039] mb-1.5">
                  Sizda hali ish tajribasi mavjud emas
                </h1>
                <p className="text-[#7F868B] mb-6">
                  Bu yerda sizning ta'lim tajribalaringiz ko’rinib turadi.
                </p>
              </div>

              <button
                className="btn rounded-full bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20 border-[#333] text-[#333]"
                onClick={() => document.getElementById("my_modal").showModal()}
              >
                Ish tajribasi koshish
              </button>

              <dialog id="my_modal" className="modal">
                <div className="modal-box p-5 text-left flex flex-col items-start">
                  <h3 className="font-bold text-lg">
                    Ish tarjimasini qo'shish
                  </h3>

                  <fieldset className="fieldset w-full mt-5">
                    <legend className="fieldset-legend text-sm flex items-center gap-1">
                      Lovozim
                      <span className="text-red-500">*</span>
                    </legend>
                    <div className="relative w-full mt-2">
                      <input
                        type="text"
                        className="input border border-slate-300 bg-[#F5F7FA] w-full pr-10 py-2"
                        placeholder="Lovozimingizni yozing"
                        required
                      />
                      <i className="bi bi-briefcase-fill absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-gray-400 px-1 rounded-lg"></i>
                    </div>
                  </fieldset>

                  <fieldset className="fieldset w-full mt-5">
                    <legend className="fieldset-legend text-sm flex items-center gap-1">
                      Kompaniya nomi
                      <span className="text-red-500">*</span>
                    </legend>
                    <div className="relative w-full mt-2">
                      <input
                        type="text"
                        className="input border border-slate-300 bg-[#F5F7FA] w-full pr-10 py-2"
                        placeholder=" Ish joigiz nomi"
                        required
                      />
                      <i className="bi bi-buildings absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-gray-400 px-1 rounded-lg"></i>
                    </div>
                  </fieldset>

                  <fieldset className="fieldset w-full mt-5">
                    <legend className="fieldset-legend text-sm flex items-center gap-1">
                      Kompaniya veb sahifasi
                    </legend>

                    <div className="relative w-full mt-2">
                      <input
                        type="text"
                        className="input border border-slate-300 bg-[#F5F7FA] w-full pr-10 py-2"
                        placeholder="https://"
                        required
                      />
                      <i className="bi bi-link absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-gray-400 px-1 rounded-lg"></i>
                    </div>
                  </fieldset>

                  <fieldset className="fieldset w-full mt-5">
                    <legend className="fieldset-legend text-sm flex items-center gap-1">
                      Bilim va k'onikmalar
                      <span className="text-red-500">*</span>
                    </legend>
                    <div className="relative w-full mt-2">
                      <input
                        type="text"
                        className="input border border-slate-300 bg-[#F5F7FA] w-full pr-10 py-2"
                        placeholder="Bilimingiz haqida yozing"
                        required
                      />
                      <i className="bi bi-book absolute right-3 top-1/2 transform -translate-y-1/2 text-white bg-gray-400 px-1 rounded-lg"></i>
                    </div>
                  </fieldset>

                  <fieldset className="fieldset w-full mt-5">
                    <legend className="fieldset-legend text-sm flex items-center gap-1">
                      Muddati
                      <span className="text-red-500">*</span>
                    </legend>

                    <div className="relative w-full mt-2">
                      <div className="relative">
                        <input
                          type="date"
                          id="my-experience-date"
                          className="input border border-slate-300 bg-[#F5F7FA] w-full pr-3 text-gray-500"
                          required
                        />
                        <i className="bi bi-calendar absolute top-3 right-3 bg-gray-400 text-white px-1 rounded-lg"></i>
                      </div>
                    </div>
                  </fieldset>

                  <div className="modal-action w-full flex justify-end">
                    <form method="dialog">
                      <button className="bg-gray-400 rounded-lg px-2 py-1 text-white hover:bg-gray-500">
                        Yopish
                      </button>
                    </form>
                    <button className="bg-blue-400 rounded-lg px-2 py-1 text-white hover:bg-blue-500">
                      Qoshish
                    </button>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>

        {/* My Certificate */}
        <div
          className={`w-full p-3 bg-white rounded-lg ${
            selectMenu === "my-certificate" ? "block" : "hidden"
          }`}
        >
          <div className="w-full p-3 bg-white rounded-lg text-center">
            <div className="flex flex-col items-center justify-center p-8">
              <i className="bi bi-award-fill text-4xl text-[#c9c9c9] px-2 py-2 rounded-lg  mb-8"></i>

              <div>
                <h1 className="font-semibold text-[#263039] mb-1.5">
                  Sizda hali sertifikatlar mavjud emas
                </h1>
                <p className="text-[#7F868B] mb-6">
                  Bu yerda kurslaringizni muvaffaqiyatli tamomlaganingiz uchun
                  berilgan sertifikatlarni ko’rishingiz mumkin bo’ladi.
                </p>
              </div>
              <button className="btn rounded-full bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20 border-[#333] text-[#333]">
                Kurs sotib ilish
              </button>
            </div>
          </div>
        </div>

        {/* Payment History */}
        <div
          className={`w-full p-8 bg-white rounded-lg ${
            selectMenu === "my-paymenthistory" ? "block" : "hidden"
          }`}
        >
          <h1 className="font-semibold p-2 text-xl">Tolovlar tarixi</h1>
          <div className="overflow-x-auto">
            <table className="table mt-4 p-6">
              <thead className="bg-[#F5FAFF] rounded-xl boeder-none">
                <tr className="text-[#3F9CFB] border-none rounded-xl ">
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
                    Professional Node.js: noldan boshlab eʼlonlar sayti <br />{" "}
                    yaratishni oʻrganing
                  </td>
                  <td>28.11.2024</td>
                  <td className="text-[#3F9CFB]">247,000 so'm</td>
                  <td>Bir martalik toʻlov</td>
                  <td className="text-[#FDC724]">Jarayonda</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* My Devices */}
        <div
          className={`w-full p-8 bg-white rounded-lg ${
            selectMenu === "my-devices" ? "block" : "hidden"
          }`}
        >
          <div>
            <h1 className="font-semibold text-xl">Faol qurilmalar</h1>
            <p className="text-[#7F868B] text-base mt-4 font-light">
              Siz bir vaqtning oʻzida faqat 2ta qurilma orqali taʻlim olishingiz
              mumkin. Ilovalarni uchinchi qurilmada <br /> faollashtirish uchun
              avval mavjud ikkita qurilmalardan birini oʻchirishingiz kerak.
            </p>
          </div>

          <div className="bg-[#FFFCED] px-2 py-2 rounded-xl mt-4 flex">
            <i className="bi bi-exclamation-circle-fill text-yellow-300 mr-3"></i>
            <h1 className="text-[#1A202C]">
              Faqatgina 2ta qurilmadan kirishingiz mumkun{" "}
            </h1>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="table table-zebra mt-4">
              <thead className="bg-[#F5FAFF] rounded-xl ">
                <tr className=" text-[#3F9CFB] border-none rounded-xl">
                  <th>QURUIMA NOMI</th>
                  <th>FAILLASHTIRILGAAN SANA </th>
                  <th>HARAKARLAR</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="flex">
                    <i className="bi bi-laptop bg-[#3F9CFB] text-white px-2 rounded-md text-xl inline-flex items-center justify-center"></i>
                    <div className="ml-3">
                      <h1 className="font-medium">
                        {" "}
                        Mac OS 10.15.7, Chrome 133
                      </h1>
                      <p className="text-green-500 text-xs">Mazkur qurilma</p>
                    </div>
                  </td>

                  <td>11:05:01, 04.03.2025</td>
                  <td></td>
                </tr>

                <tr>
                  <td className="flex items-center">
                    <i className="bi bi-phone bg-[#3F9CFB] text-white px-2 p-2 rounded-md text-xl inline-flex items-center justify-center"></i>
                    <div className="ml-3">
                      <h1 className="font-medium text-center">
                        {" "}
                        Mac OS 10.15.7, Chrome 133
                      </h1>
                    </div>
                  </td>
                  <td>13:38:34, 01.03.2025</td>
                  <td>
                    <button>
                      <i className="bi bi-trash-fill text-red-500 hover:bg-red-200 "></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyProfile;
