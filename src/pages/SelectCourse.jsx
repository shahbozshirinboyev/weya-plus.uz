import React, { useState } from 'react';
import LeftDrawer from '../components/LeftDrawer';

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
    <div className='container mx-auto flex items-start mt-4 gap-8'>
      <div className='w-72 lg:w-92 rounded-lg backdrop-sepia-0 bg-gradient-to-r bg-white/95  from-[#2ec05a]/20 to-[#eed9ed]/30 overflow-hidden'>
        <img src="https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75" alt="Course_Title" />
        <div className='p-3 font-semibold text-[#333]'>
          <h1 className='text-2xl'>Express Backend</h1>
          <span className='text-[14px] opacity-90 leading-[.8]'>Mentor: Azimjon Po'latov</span>
        </div>
        <div className='p-4 rounded-lg flex flex-col backdrop-sepia-0 bg-gradient-to-r bg-white/55  from-[#eed9ed]/30 to-[#2ec05a]/20'>
          {/* <b className='uppercase'>Course Price:</b> */}
          <span className='text-[14px] line-through font-semibold opacity-60 text-red-600'>1 480 000 so'm</span>
          <p className='text-2xl font-semibold leading-[.7]'>1 200 000 so'm</p>

          <label htmlFor="my-drawer" className='btn rounded-full mt-4 border active:border-black flex justify-start items-center backdrop-sepia-0 bg-gradient-to-r bg-white/95  from-[#2ec05a]/40 to-[#eed9ed]/80'>Learn More</label>
          <button className='btn rounded-full mt-3 border active:border-black flex justify-between items-center backdrop-sepia-0 bg-gradient-to-r bg-white/95  from-[#eed9ed]/80 to-[#2ec05a]/40'>
            <span>Buy Now</span>
            <span className='flex gap-1'>
              <img src="/assets/payment_icon/Humo.svg" className='border w-8 h-5 p-[2px] rounded-sm border-[#ccc] border-none' alt='' />
              <img src="/assets/payment_icon/Uzcard.svg" className='border w-8 h-5 p-[2px] rounded-sm border-[#ccc] border-none' alt='' />
              <img src="/assets/payment_icon/Payme.svg" className='border w-8 h-5 p-[2px] rounded-sm border-[#ccc] border-none' alt='' />
            </span>
          </button>
        </div>
      </div>

      <div className='flex-1'>
        {courses.map((course, index) => (

          <div key={index} className="border border-[#CCCCCC] rounded-lg mb-2 backdrop-sepia-0 bg-gradient-to-r bg-white/95  from-[#2ec05a]/20 to-[#eed9ed]/30">
            <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
              <input type="checkbox" id={`course-toggle-${index}`} />
              <div className="collapse-title font-semibold backdrop-sepia-0 bg-gradient-to-r bg-white/95  from-[#eed9ed]/80 to-[#2ec05a]/30">
                {course.title}
              </div>

              <div className="collapse-content p-0 backdrop-sepia-0 bg-gradient-to-r bg-white/95  from-[#2ec05a]/20 to-[#eed9ed]/30">
                {course.lessons.map((lesson, idx) => (
                  <div key={idx} className={`flex items-center justify-between px-3 py-2 cursor-pointer mt-2 font-medium hover:bg-[#eed9ed]/40 ${lesson.locked ? '' : 'text-black'}
                      ${activeLesson === lesson.name ? ' backdrop-sepia-0 bg-gradient-to-r bg-white/95  from-[#eed9ed]/70 to-[#2ec05a]/30' : ''}`} onClick={() => handleLessonClick(lesson.name, lesson.locked)}>
                    <span className='flex items-center'>
                      <i className={lesson.locked ? 'bi bi-lock mr-3 ' : 'bi bi-play border rounded-full px-0.5 py-0 text-sm  mr-2'}></i> {lesson.name}
                    </span>
                    {lesson.locked ? (
                      <button className="border px-3 py-1 rounded-full text-xs  backdrop-sepia-0 bg-gradient-to-r bg-white/95  from-[#eed9ed]/70 to-[#2ec05a]/30 ">
                        {lesson.price} so’m BUY NOW
                      </button>
                    ) : (
                      <span className="border text-xs px-3 py-1 w-40 rounded-full text-center backdrop-sepia-0 bg-gradient-to-r bg-white/95  from-[#eed9ed]/70 to-[#2ec05a]/30">{lesson.progress}%</span>
                    )}
                  </div>
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
