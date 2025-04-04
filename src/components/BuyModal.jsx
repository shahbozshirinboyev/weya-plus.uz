import { useState } from "react"

function BuyModal() {
  const [buttonPosition, setButtonPosition] = useState('left')

  return (
    <>
      <dialog id="buy_modal" className="modal">
        <div className="modal-box">
          <form method="dialog" className='relative flex justify-between items-center'>
            <div className='flex justify-start items-center'>
              <div className='flex relative border border-gray-300 rounded-full overflow-hidden'>
                <span className={`btn btn-sm border-0 rounded-full w-30 absolute transform transition-all duration-300 ease-in-out backdrop-sepia-0 bg-gradient-to-r bg-white/95 from-[#eed9ed]/70 to-[#2ec05a]/30 ${buttonPosition === 'left' ? 'left-0' : 'left-1/2'}`} ></span>
                <button type="button" onClick={() => setButtonPosition('left')} className="btn btn-sm w-30 border-0 bg-transparent z-10 text-gray-800">Darsni sotib olish</button>
                <button type="button" onClick={() => setButtonPosition('right')} className="btn btn-sm w-30 border-0 bg-transparent z-10 text-gray-800">Kursni sotib olish</button>
              </div>
            </div>
            <button className="btn btn-sm btn-circle flex justify-center items-center">
              <span>✕</span>
            </button>
          </form>

          {/* CARD CONTENT - only one visible at a time */}
          <div className="mt-8 relative min-h-[156px]">
            <div className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${buttonPosition === 'left' ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
              {/* Dars Card */}
              <div className="bg-gray-100 rounded-md p-4">
                <p className="font-semibold">Dars narxi:</p>
                <div className="flex justify-start items-end gap-1">
                  <h1 className="text-2xl font-bold">30.000 so'm</h1>
                  <h2 className="line-through font-bold">50.000 so'm</h2>
                </div>
                <button className='btn rounded-full w-full mt-6 border-transparent active:border-black flex justify-between items-center backdrop-sepia-0 bg-gradient-to-r bg-white/95 from-[#eed9ed]/80 to-[#2ec05a]/40'>
                  <span>Buy Now</span>
                  <span className='flex gap-1'>
                    <img src="/assets/payment_icon/Humo.svg" className='w-8 h-5 p-[2px] rounded-sm border-none' alt='' />
                    <img src="/assets/payment_icon/Uzcard.svg" className='w-8 h-5 p-[2px] rounded-sm border-none' alt='' />
                    <img src="/assets/payment_icon/Payme.svg" className='w-8 h-5 p-[2px] rounded-sm border-none' alt='' />
                  </span>
                </button>
              </div>
            </div>

            <div className={`absolute top-0 left-0 w-full transition-opacity duration-300 ${buttonPosition === 'right' ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
              {/* Kurs Card */}
              <div className="bg-gray-100 rounded-md p-4">
                <p className="font-semibold">Kurs narxi:</p>
                <div className="flex justify-start items-end gap-1">
                  <h1 className="text-2xl font-bold">2 300.000 so'm</h1>
                  <h2 className="line-through font-bold">2 500.000 so'm</h2>
                </div>
                <button className='btn rounded-full w-full mt-6 border-transparent active:border-black flex justify-between items-center backdrop-sepia-0 bg-gradient-to-r bg-white/95 from-[#eed9ed]/80 to-[#2ec05a]/40'>
                  <span>Buy Now</span>
                  <span className='flex gap-1'>
                    <img src="/assets/payment_icon/Humo.svg" className='w-8 h-5 p-[2px] rounded-sm border-none' alt='' />
                    <img src="/assets/payment_icon/Uzcard.svg" className='w-8 h-5 p-[2px] rounded-sm border-none' alt='' />
                    <img src="/assets/payment_icon/Payme.svg" className='w-8 h-5 p-[2px] rounded-sm border-none' alt='' />
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
