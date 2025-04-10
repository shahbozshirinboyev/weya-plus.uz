import React from 'react'

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

            <div className=''>
              <div className='flex gap-2'>
                <button className="btn btn-sm rounded-full w-20 hover:bg-gray-200 dark:hover:bg-gray-800  border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#2ec05a]/10 dark:from-[#eed9ed]/10 to-[#eed9ed]/20 ">Upload</button>
                <button className="btn btn-sm rounded-full w-20 hover:bg-gray-200 dark:hover:bg-gray-800  border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#2ec05a]/10 dark:from-[#eed9ed]/10 to-[#eed9ed]/20 ">Delete</button>
              </div>
              <p className='text-xs opacity-50 mt-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius unde laudantium ab odio, voluptatem quam.
              </p>
            </div>

          </div>

          <div className='grid grid-cols-2 gap-1 mt-4'>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Имя</legend>
              <input type="text" className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 " placeholder="My awesome page" />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Фамилия</legend>
              <input type="text" className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 " placeholder="My awesome page" />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Возрост</legend>
              <input type="text" className="input border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 " placeholder="My awesome page" />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Пол</legend>
              <select defaultValue="Pick a browser" className="select border border-gray-300 dark:border-gray-600">
                <option disabled={true}>Pick a browser</option>
                <option>Chrome</option>
                <option>FireFox</option>
                <option>Safari</option>
              </select>

            </fieldset>

          </div>

          <div className=' '>
            <fieldset className="fieldset ">
              <legend className="fieldset-legend">Страна</legend>
              <select defaultValue="Pick a browser " className="select w-full border border-gray-300 dark:border-gray-600">
                <option disabled={true}>Pick a browser</option>
                <option>Chrome</option>
                <option>FireFox</option>
                <option>Safari</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Your bio</legend>
              <textarea className="textarea h-24 w-full border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10" placeholder="Bio"></textarea>
            </fieldset>

          </div>
          <div className=' flex gap-3 mt-2'>
            <button className="btn hover:bg-gray-200 dark:hover:bg-gray-800  border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#2ec05a]/10 dark:from-[#eed9ed]/10 to-[#eed9ed]/20 ">Сохранить изменения</button>
            <form method="dialog">
              <button className="btn hover:bg-gray-200 dark:hover:bg-gray-800  border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#2ec05a]/10 dark:from-[#eed9ed]/10 to-[#eed9ed]/20 ">Отменить</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

    </>
  )
}

export default MyProfileInfoUpdate