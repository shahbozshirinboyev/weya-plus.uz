import React, { useState } from 'react';
import LeftDrawer from '../components/LeftDrawer';
import { NavLink } from 'react-router-dom';
import BuyModal from '../components/BuyModal';
import { span } from 'framer-motion/client';

function SelectCourse() {
  const [activeLesson, setActiveLesson] = useState(null);

  const courses = [
    {
      title: "1. Access to the Backend",
      lessons: [
        { name: "Lesson 1", progress: 0, locked: false },
        { name: "Lesson 2", price: "30 000", locked: true },
        { name: "Lesson 3", price: "30 000", locked: true },
        { name: "Lesson 4", price: "30 000", locked: true },
      ],
    },
    {
      title: "2. Access to the Backend",
      lessons: [
        { name: "Lesson 5", price: "30 000", locked: true },
        { name: "Lesson 6", price: "30 000", locked: true },
        { name: "Lesson 7", price: "30 000", locked: true },
        { name: "Lesson 8", price: "30 000", locked: true },
      ],
    },
    {
      title: "3. Access to the Backend",
      lessons: [
        { name: "Lesson 9", price: "30 000", locked: true },
        { name: "Lesson 10", price: "30 000", locked: true },
        { name: "Lesson 11", price: "30 000", locked: true },
        { name: "Lesson 12", price: "30 000", locked: true },
      ],
    },
    {
      title: "4. Access to the Backend",
      lessons: [
        { name: "Lesson 13", price: "30 000", locked: true },
        { name: "Lesson 14", price: "30 000", locked: true },
        { name: "Lesson 15", price: "30 000", locked: true },
        { name: "Lesson 16", price: "30 000", locked: true },
      ],
    },
    {
      title: "5. Access to the Backend",
      lessons: [
        { name: "Lesson 17", price: "30 000", locked: true },
        { name: "Lesson 18", price: "30 000", locked: true },
        { name: "Lesson 19", price: "30 000", locked: true },
        { name: "Lesson 20", price: "30 000", locked: true },
      ],
    },
  ];

  const handleLessonClick = (lessonName, locked) => {
    if (!locked) {
      setActiveLesson(prev => (prev === lessonName ? null : lessonName));
    }
  };

  return (
    <>
      <LeftDrawer />
      <BuyModal />
      <div className='container mx-auto px-3 flex flex-col md:flex-row items-start mt-4 gap-4 md:gap-8 text-gray-900 dark:text-gray-50'>
        <div className='w-full md:w-72 lg:w-92 rounded-lg border border-gray-200 dark:border-gray-800 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 overflow-hidden'>
          <img src="https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75" alt="Course_Title" />
          <div className='p-3 font-semibold '>
            <h1 className='text-2xl'>Express Backend</h1>
            <p className='text-[14px] opacity-90'>Mentor: Azimjon Po'latov</p>
            <span className='text-[14px] opacity-90 dark:bg-gray-50 text-gray-50 bg-gray-900 dark:text-gray-900 leading-snug px-2'>8 / 56 / 876 min</span>
          </div>
          <div className='p-4 rounded-lg flex flex-col border border-gray-200 dark:border-gray-800 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10'>
            {/* <b className='uppercase'>Course Price:</b> */}
            <span className='text-[14px] line-through font-semibold opacity-60 text-red-600'>1 480 000 so'm</span>
            <p className='text-2xl font-semibold leading-[.7]'>1 200 000 so'm</p>

            <button onClick={(e) => { e.preventDefault(), document.getElementById('buy_modal').showModal() }} className='btn rounded-full mt-4 border hover:border-gray-400 dark:hover:border-gray-600 border-gray-300 dark:border-gray-700 flex justify-between items-center bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10'>
              <span>Buy Now</span>
              <span className='flex gap-1'>
                <img src="/assets/payment_icon/Humo.svg" className='border w-8 h-5 p-[2px] rounded-sm border-[#ccc] border-none' alt='' />
                <img src="/assets/payment_icon/Uzcard.svg" className='border w-8 h-5 p-[2px] rounded-sm border-[#ccc] border-none' alt='' />
                <img src="/assets/payment_icon/Payme.svg" className='border w-8 h-5 p-[2px] rounded-sm border-[#ccc] border-none' alt='' />
              </span>
            </button>
            <label htmlFor="my-drawer" className='btn rounded-full mt-2 border border-gray-300 hover:border-gray-400 dark:hover:border-gray-600 dark:border-gray-700 flex justify-start items-center bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10'>Learn More</label>
          </div>
        </div>

        <div className='w-full md:flex-1'>
          {courses.map((course, index) => (

            <div key={index} className="mb-2">
              <div className="collapse collapse-arrow">

                <input type="checkbox" id={`course-toggle-${index}`} defaultChecked={index === 0 || index === 1} />
                <div className="collapse-title font-semibold bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
                  {course.title}
                </div>

                <div className="collapse-content p-0 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
                  {course.lessons.map((lesson, idx) => (
                    <NavLink to="select-lesson" key={idx} className={`flex items-center justify-between px-3 py-2 cursor-pointer mt-2 font-medium hover:bg-[#eed9ed]/40 dark:hover:bg-[#eed9ed]/20 ${lesson.locked ? '' : ''}
                      ${activeLesson === lesson.name ? ' backdrop-sepia-0 bg-gradient-to-r bg-white/95 dark:bg-white/5  from-[#eed9ed]/70 dark:from-[#eed9ed]/20 to-[#2ec05a]/30' : ''}`} onClick={() => handleLessonClick(lesson.name, lesson.locked)}>
                      <span className='flex items-center'>
                        {/* <i className={lesson.locked ? 'bi bi-lock flex justify-center items-center mr-2' : 'bi bi-play border rounded-full text-sm flex justify-center items-center mr-2'}></i> */}
                        {lesson.locked ?
                          <svg width="20" height="20" viewBox="0 0 512 512" className='' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fxemoji" preserveAspectRatio="xMidYMid meet"><path fill="#B1B4B5" d="M376.749 349.097c-13.531 0-24.5-10.969-24.5-24.5V181.932c0-48.083-39.119-87.203-87.203-87.203c-48.083 0-87.203 39.119-87.203 87.203v82.977c0 13.531-10.969 24.5-24.5 24.5s-24.5-10.969-24.5-24.5v-82.977c0-75.103 61.1-136.203 136.203-136.203s136.203 61.1 136.203 136.203v142.665c0 13.531-10.969 24.5-24.5 24.5z"></path><path fill="#FFB636" d="M414.115 497.459H115.977c-27.835 0-50.4-22.565-50.4-50.4V274.691c0-27.835 22.565-50.4 50.4-50.4h298.138c27.835 0 50.4 22.565 50.4 50.4v172.367c0 27.836-22.565 50.401-50.4 50.401z"></path><path fill="#FFD469" d="M109.311 456.841h-2.525c-7.953 0-14.4-6.447-14.4-14.4V279.309c0-7.953 6.447-14.4 14.4-14.4h2.525c7.953 0 14.4 6.447 14.4 14.4v163.132c0 7.953-6.447 14.4-14.4 14.4z"></path></svg>
                          :
                          <i className="bi bi-play-circle flex justify-center items-center"></i>
                        }
                        <span className='ml-2'>{lesson.name}</span>
                      </span>
                      {lesson.locked ? (
                        <button onClick={(e) => { e.preventDefault(), document.getElementById('buy_modal').showModal() }} className="btn btn-sm border-gray-300 dark:border-gray-400  active:border-black px-3 py-1 rounded-full text-xs  backdrop-sepia-0 bg-gradient-to-r bg-white/95  dark:bg-white/0  from-[#eed9ed]/70 dark:from-[#eed9ed]/10 to-[#2ec05a]/30 ">
                          {lesson.price} so’m
                        </button>
                      ) : (
                        <span className="border dark:border-gray-400 text-xs px-3 py-1 w-40 rounded-full text-center backdrop-sepia-0 bg-gradient-to-r bg-white/95 dark:bg-white/5 from-[#eed9ed]/70 dark:from-[#eed9ed]/20 to-[#2ec05a]/30">{lesson.progress}%</span>
                      )}
                    </NavLink>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SelectCourse;
