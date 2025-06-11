import React from "react";

function AddEducation() {
  return (
    <>
      <dialog id="add_education" className="modal">
        <div className="modal-box p-5 text-left flex flex-col items-start border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 ">
          <h3 className="font-bold text-lg">Ta'lim qo'shish</h3>

          <fieldset className="fieldset w-full mt-3">
            <legend className="fieldset-legend text-sm flex items-center gap-1">
              Yonalish nomi
              <span className="text-red-500">*</span>
            </legend>

            <div className="relative w-full">
              <input
                type="text"
                className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10  w-full pr-10 py-2"
                placeholder="Yonalishingizni yozing"
                required
              />
              <i className="bi bi-book-fill absolute right-3 top-1/2 transform -translate-y-1/2  px-1"></i>
            </div>
          </fieldset>

          <fieldset className="fieldset w-full mt-3">
            <legend className="fieldset-legend text-sm flex items-center gap-1">
              Oʻquv muassasasi nomi
              <span className="text-red-500">*</span>
            </legend>
            <div className="relative w-full">
              <input
                type="text"
                className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10  w-full pr-10 py-2"
                placeholder=" Oʻquv muassasasi nomini kiriting"
                required
              />
              <i className="bi bi-buildings absolute right-3 top-1/2 transform -translate-y-1/2  px-1"></i>
            </div>
          </fieldset>

          <legend className="fieldset-legend text-sm flex items-center gap-1 mt-3">
            Taʼlim turi
            <span className="text-red-500">*</span>
          </legend>

          <div className="w-full rounded-md   bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 ">
            <select defaultValue="" className="select w-full ...">
              <option value="" disabled>
                Taʼlim turini tanlang
              </option>
              <option value="crimson">Crimson</option>
              <option value="amber">Amber</option>
              <option value="velvet">Velvet</option>
            </select>
          </div>

          <fieldset className="fieldset w-full mt-3">
            <legend className="fieldset-legend text-sm flex items-center gap-1">
              Muassasa veb sahifasi
            </legend>

            <div className="relative w-full">
              <input
                type="text"
                className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10  w-full pr-10 py-2"
                placeholder="https://"
                required
              />
              <i className="bi bi-link absolute right-3 top-1/2 transform -translate-y-1/2  px-1"></i>
            </div>
          </fieldset>

          <fieldset className="fieldset w-full mt-3">
            <legend className="fieldset-legend text-sm flex items-center gap-1">
              Muassasa veb sahifasi
            </legend>

            <div className="relative w-full">
              <div className="relative">
                <input
                  type="date"
                  id="my-experience-date"
                  className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10  w-full pr-3 text-gray-500"
                  required
                />
                {/* <i className="bi bi-calendar absolute top-3 right-3 px-1"></i> */}
              </div>
            </div>
          </fieldset>

          <div className="modal-action w-full flex justify-end">
            <button className="btn w-24 rounded-full bg-gradient-to-r from-[#eed9ed]/50 dark:from-[#eed9ed]/10 to-[#2ec05a]/20 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600">
              {" "}
              Save{" "}
            </button>
            <button
              onClick={() => {
                document.getElementById("add_education").close();
              }}
              className="btn w-24 rounded-full bg-gradient-to-r from-[#eed9ed]/50 dark:from-[#eed9ed]/10 to-[#2ec05a]/20 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
            >
              {" "}
              Close{" "}
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default AddEducation;
