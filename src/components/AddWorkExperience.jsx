import React from "react";

function AddWorkExperience() {
  return (
    <>
      <dialog id="add_work_experience" className="modal">
        <div className="modal-box p-5 text-left flex flex-col items-start border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 ">
          <h3 className="font-bold text-lg">Ish tarjimasini qo'shish</h3>

          <fieldset className="fieldset w-full mt-3">
            <legend className="fieldset-legend text-sm flex items-center gap-1">
              Lovozim
              <span className="text-red-500">*</span>
            </legend>
            <div className="relative w-full">
              <input
                type="text"
                className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10  w-full pr-10 py-2 px-1.5"
                placeholder="Lovozimingizni yozing"
                required
              />
              <i className="bi bi-briefcase absolute right-3 top-1/2 transform -translate-y-1/2 px-1 "></i>
            </div>
          </fieldset>

          <fieldset className="fieldset w-full mt-3">
            <legend className="fieldset-legend text-sm flex items-center gap-1">
              Kompaniya nomi
              <span className="text-red-500">*</span>
            </legend>
            <div className="relative w-full">
              <input
                type="text"
                className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10  w-full pr-10 py-2 px-1"
                placeholder=" Ish joigiz nomi"
                required
              />
              <i className="bi bi-buildings absolute right-3 top-1/2 transform -translate-y-1/2 "></i>
            </div>
          </fieldset>

          <fieldset className="fieldset w-full mt-3">
            <legend className="fieldset-legend text-sm flex items-center gap-1">
              Kompaniya veb sahifasi
            </legend>

            <div className="relative w-full">
              <input
                type="text"
                className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10  w-full pr-10 py-2 px-1.5"
                placeholder="https://"
                required
              />
              <i className="bi bi-link absolute right-3 top-1/2 transform -translate-y-1/2 px-1 "></i>
            </div>
          </fieldset>

          <fieldset className="fieldset w-full mt-3">
            <legend className="fieldset-legend text-sm flex items-center gap-1">
              Bilim va k'onikmalar
              <span className="text-red-500">*</span>
            </legend>
            <div className="relative w-full">
              <input
                type="text"
                className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10  w-full pr-10 py-2 px-1.5"
                placeholder="Bilimingiz haqida yozing"
                required
              />
              <i className="bi bi-book absolute right-3 top-1/2 transform -translate-y-1/2 px-1"></i>
            </div>
          </fieldset>

          <fieldset className="fieldset w-full mt-3">
            <legend className="fieldset-legend text-sm flex items-center gap-1">
              Muddati
              <span className="text-red-500">*</span>
            </legend>

            <div className="relative w-full">
              <div className="relative">
                <input
                  type="date"
                  id="my-experience-date"
                  className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10  w-full pr-3 text-gray-500 px-1.5"
                  required
                />
                {/* <i className="bi bi-calendar absolute top-3 right-3  px-1 "></i> */}
              </div>
            </div>
          </fieldset>

          <div className="modal-action w-full flex justify-end">
          <button className="btn w-24 rounded-full bg-gradient-to-r from-[#eed9ed]/50 dark:from-[#eed9ed]/10 to-[#2ec05a]/20 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600" > Save </button>
          <button onClick={()=> { document.getElementById("add_work_experience").close() }} className="btn w-24 rounded-full bg-gradient-to-r from-[#eed9ed]/50 dark:from-[#eed9ed]/10 to-[#2ec05a]/20 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600" > Close </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
      </dialog>
    </>
  );
}

export default AddWorkExperience;
