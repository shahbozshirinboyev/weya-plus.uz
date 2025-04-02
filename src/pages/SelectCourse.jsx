import React from 'react'

function SelectCourse() {
  return (
    <div className='container mx-auto flex mt-4 gap-8'>

      <div className='w-72 lg:w-92 bg-white rounded-lg border overflow-hidden'>

        <img className='' src="https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75" alt="Course_Title" />

        <div className='p-3 font-semibold text-[#333]'>
          <h1 className='text-2xl'>Express Backend</h1>
          <span className='text-[14px] opacity-80'>Mentor: Azimjon Po'latov</span>
        </div>

        <div className='px-3 py-2 border rounded-lg flex flex-col'>
          <b className='uppercase'>Course Price:</b>
          <span className='text-[13px] line-through font-semibold opacity-60'>1 480 000 so'm</span>
          <p className='text-xl font-semibold'>1 200 000 so'm</p>

          <button className='btn rounded-full mt-4 flex justify-start items-center'>Learn More</button>
          <button className='btn rounded-full mt-2 flex justify-between items-center'>
            <span>Buy Now</span>


              <span className='flex gap-1'>
                <img src="/assets/payment_icon/Humo.svg" className='border w-8 h-5 p-[2px] rounded-sm border-[#ccc] border-none' alt="" />
                <img src="/assets/payment_icon/Uzcard.svg" className='border w-8 h-5 p-[2px] rounded-sm border-[#ccc] border-none' alt="" />
                <img src="/assets/payment_icon/Payme.svg" className='border w-8 h-5 p-[2px] rounded-sm border-[#ccc] border-none' alt="" />
              </span>

          </button>

        </div>

      </div>

      <div className='flex-1 rounded-lg border border-gray-300'></div>

    </div>
  )
}

export default SelectCourse