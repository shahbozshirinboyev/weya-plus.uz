import { useState } from "react"
import Humo from "@/assets/icons/Humo.svg";
import Payme from "@/assets/icons/Payme.svg";
import Uzcard from "@/assets/icons/Uzcard.svg";

function BuyModal() {
  const [buttonPosition, setButtonPosition] = useState('left')

  return (
    <>
      <dialog id="buy_modal" className="modal text-gray-900 dark:text-gray-50 glass">
        <div className="modal-box">
          <form method="dialog" className='relative flex justify-between items-center'>
            <div className='flex justify-start items-center'>
              <div className='flex relative border border-gray-300 dark:border-gray-800 rounded-full overflow-hidden'>
                <span className={`btn btn-sm rounded-full w-30 absolute transform transition-all duration-300 ease-in-out border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 ${buttonPosition === 'left' ? 'left-0' : 'left-1/2'}`} ></span>
                <button type="button" onClick={() => setButtonPosition('left')} className="btn btn-sm w-30 border-0 bg-transparent z-10">Darsni sotib olish</button>
                <button type="button" onClick={() => setButtonPosition('right')} className="btn btn-sm w-30 border-0 bg-transparent z-10">Kursni sotib olish</button>
              </div>
            </div>
            <button className="btn btn-sm btn-circle flex justify-center items-center border-gray-300 dark:border-gray-800 bg-transparent">
              <span>✕</span>
            </button>
          </form>

          {/* CARD CONTENT - only one visible at a time */}
          <div className="mt-8 relative min-h-[156px]">
            <div className={`absolute top-0 left-0 w-full transition-opacity duration-300  ${buttonPosition === 'left' ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
              {/* Dars Card */}
              <div className="border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 rounded-md p-4">
                <p className="font-semibold">Dars narxi:</p>
                <div className="flex justify-start items-end gap-1">
                  <h1 className="text-2xl font-bold">30.000 so'm</h1>
                  <h2 className="line-through font-semibold text-red-400">50.000 so'm</h2>
                </div>
                <button className='btn rounded-full w-full mt-6 flex justify-between items-center border border-gray-300 hover:border-gray-600 dark:hover:border-gray-400 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10'>
                  <span>Xarid qilish</span>
                  <span className='flex gap-1'>
                    <img src={Humo} className='w-8 h-5 p-[2px] rounded-sm border-none' alt='' />
                    <img src={Uzcard} className='w-8 h-5 p-[2px] rounded-sm border-none' alt='' />
                    <img src={Payme} className='w-8 h-5 p-[2px] rounded-sm border-none' alt='' />
                  </span>
                </button>
              </div>
            </div>

            <div className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${buttonPosition === 'right' ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
              {/* Kurs Card */}
              <div className="border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 rounded-md p-4">
                <p className="font-semibold">Kurs narxi:</p>
                <div className="flex justify-start items-end gap-1">
                  <h1 className="text-2xl font-bold">2 300.000 so'm</h1>
                  <h2 className="line-through font-semibold text-red-400">2 500.000 so'm</h2>
                </div>
                <button className='btn rounded-full w-full mt-6 flex justify-between items-center border border-gray-300 hover:border-gray-600 dark:hover:border-gray-400 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10'>
                  <span>Xarid qilish</span>
                  <span className='flex gap-1'>
                    <img src={Humo} className='w-8 h-5 p-[2px] rounded-sm border-none' alt='' />
                    <img src={Uzcard} className='w-8 h-5 p-[2px] rounded-sm border-none' alt='' />
                    <img src={Payme} className='w-8 h-5 p-[2px] rounded-sm border-none' alt='' />
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}

export default BuyModal
