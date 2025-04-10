import React from "react";

function DeleteDevice() {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="delete_device" className="modal text-gray-900 dark:text-gray-50">
        <div className="modal-box border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">

          <h3 className="font-semibold text-lg flex items-center justify-start gap-2">
            <i className="bi bi-trash-fill flex items-center justify-center"></i>
            <span>Qurilmani o’chirmoqchimisiz?</span>
          </h3>

          <div className="flex items-center border border-gray-200 dark:border-gray-700 my-5 p-2 rounded-md bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
            <i className="bi bi-phone p-2 rounded-md text-xl inline-flex items-center justify-center"></i>
            <div className="ml-3">
              <h1 className="font-medium text-center text-nowrap">
                Iphone 16.15.7, Chrome 133
              </h1>
              <p className="text-xs opacity-50">2 days ago</p>
            </div>
          </div>

          <div className="flex justify-end items-center gap-2">
            <button onClick={() => document.getElementById("delete_device").close()} className="btn hover:border-gray-200 dark:hover:border-gray-700">Yo'q</button>
            <button className="btn hover:border-gray-200 dark:hover:border-gray-700">Ha</button>
          </div>

        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default DeleteDevice;
