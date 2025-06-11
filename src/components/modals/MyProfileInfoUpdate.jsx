function MyProfileInfoUpdate() {
  return (
    <>
      <dialog id="my_profile_info_update" className="modal">
        <div className="modal-box border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
          <div className="items-start flex gap-4 mt-4">
            <div className="avatar avatar-placeholder">
              <div className="bg-gray-500 dark:bg-gray-900 text-neutral-content w-18 rounded-full border border-gray-400 dark:border-gray-600">
                <span className="text-3xl">ZJ</span>
              </div>
            </div>

            <div className="">
              <div className="flex gap-2">
                <button className="btn btn-sm w-20 rounded-full bg-gradient-to-r from-[#eed9ed]/50 dark:from-[#eed9ed]/10 to-[#2ec05a]/20 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600">
                  Upload
                </button>
                <button className="btn btn-sm w-20 rounded-full bg-gradient-to-r from-[#eed9ed]/50 dark:from-[#eed9ed]/10 to-[#2ec05a]/20 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600">
                  Delete
                </button>
              </div>
              <p className="text-xs opacity-50 mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                unde laudantium ab odio, voluptatem quam.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Имя</legend>
              <input
                type="text"
                className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 "
                placeholder="My awesome page"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Фамилия</legend>
              <input
                type="text"
                className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 "
                placeholder="My awesome page"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Возрост</legend>
              <input
                type="text"
                className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 "
                placeholder="My awesome page"
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Пол</legend>

              <div className="w-full rounded-md   bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 ">
                <select
                  defaultValue=""
                  className="select w-full bg-transparent rounded-md border border-gray-300 dark:border-gray-600"
                >
                  <option disabled value="" className="bg-gray-900">
                    Pick a color
                  </option>
                  <option className="bg-gray-900 text-gray-50">Crimson</option>
                  <option className="bg-gray-900 text-gray-50">Amber</option>
                  <option className="bg-gray-900 text-gray-50">Velvet</option>
                </select>
              </div>
            </fieldset>
          </div>

          <div>
            <fieldset className="fieldset ">
              <legend className="fieldset-legend">Страна</legend>
              <div className="w-full rounded-md   bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 ">
                <select
                  defaultValue=""
                  className="select w-full bg-transparent rounded-md border border-gray-300 dark:border-gray-600"
                >
                  <option disabled value="" className="bg-gray-900">
                    Pick a color
                  </option>
                  <option className="bg-gray-900 text-gray-50">Crimson</option>
                  <option className="bg-gray-900 text-gray-50">Amber</option>
                  <option className="bg-gray-900 text-gray-50">Velvet</option>
                </select>
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Your bio</legend>
              <textarea
                className="textarea h-24 w-full border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10"
                placeholder="Bio"
              ></textarea>
            </fieldset>
          </div>
          <div className="modal-action w-full flex justify-end">
            <button className="btn w-24 rounded-full bg-gradient-to-r from-[#eed9ed]/50 dark:from-[#eed9ed]/10 to-[#2ec05a]/20 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600">
              Save
            </button>
            <button
              onClick={() => {
                document.getElementById("my_profile_info_update").close();
              }}
              className="btn w-24 rounded-full bg-gradient-to-r from-[#eed9ed]/50 dark:from-[#eed9ed]/10 to-[#2ec05a]/20 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
            >
              Close
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

export default MyProfileInfoUpdate;
