import React from 'react'

function AddEducation() {
  return (
   <>
   <dialog id="add_education" className="modal">
                  <div className="modal-box p-5 text-left flex flex-col items-start border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 ">
                    <h3 className="font-bold text-lg">Ta'lim qo'shish</h3>

                    <fieldset className="fieldset w-full mt-5">
                      <legend className="fieldset-legend text-sm flex items-center gap-1">
                        Yonalish nomi
                        <span className="text-red-500">*</span>
                      </legend>

                      <div className="relative w-full mt-2">
                        <input
                          type="text"
                          className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10  w-full pr-10 py-2"
                          placeholder="Yonalishingizni yozing"
                          required
                        />
                        <i className="bi bi-book-fill absolute right-3 top-1/2 transform -translate-y-1/2  px-1"></i>
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
                          className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10  w-full pr-10 py-2"
                          placeholder=" Oʻquv muassasasi nomini kiriting"
                          required
                        />
                        <i className="bi bi-buildings absolute right-3 top-1/2 transform -translate-y-1/2  px-1"></i>
                      </div>
                    </fieldset>

                    <legend className="fieldset-legend text-sm flex items-center gap-1 mt-5">
                      Taʼlim turi
                      <span className="text-red-500">*</span>
                    </legend>

                    <select className="select select-bordered w-full mt-2 border dark:border-gray-600 border-slate-300 bg-[#F5F7FA] ">
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
                          className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10  w-full pr-10 py-2"
                          placeholder="https://"
                          required
                        />
                        <i className="bi bi-link absolute right-3 top-1/2 transform -translate-y-1/2  px-1"></i>
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
                            className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10  w-full pr-3 text-gray-500"
                            required
                          />
                          <i className="bi bi-calendar absolute top-3 right-3 px-1"></i>
                        </div>
                      </div>
                    </fieldset>

                    <div className="modal-action w-full flex justify-end">
                      <form method="dialog">
                        <button className="rounded-lg px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-800  border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#2ec05a]/10 dark:from-[#eed9ed]/10 to-[#eed9ed]/20">
                          Yopish
                        </button>
                      </form>
                      <button className=" rounded-lg px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-800  border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#2ec05a]/10 dark:from-[#eed9ed]/10 to-[#eed9ed]/20">
                        Qoshish
                      </button>
                    </div>
                  </div>
                </dialog>
   </>
  )
}

export default AddEducation