import React from 'react'

function AddWorkExperience() {
  return (
    <>
    <dialog id="add_work_experience" className="modal">
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
                          className="input border border-slate-300 dark:border-gray-600 bg-[#F5F7FA] w-full pr-10 py-2"
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
                          className="input border border-slate-300 dark:border-gray-600 bg-[#F5F7FA] w-full pr-10 py-2"
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
                          className="input border border-slate-300 dark:border-gray-600 bg-[#F5F7FA] w-full pr-10 py-2"
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
                          className="input border dark:border-gray-600 border-slate-300 bg-[#F5F7FA] w-full pr-10 py-2"
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
                            className="input border border-slate-300 dark:border-gray-600 bg-[#F5F7FA] w-full pr-3 text-gray-500"
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
    </>
  )
}

export default AddWorkExperience