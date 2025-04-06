import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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

function SelectLesson() {
  const [activeLesson, setActiveLesson] = useState(null);

  const handleLessonClick = (lessonName, locked) => {
    if (!locked) {
      setActiveLesson(lessonName);
    }
  };

  return (
    <div className='container mx-auto px-3 items-start flex gap-4 mt-4'>
      {/* Левая панель */}
      <div className='w-1/3 rounded-2xl p-4 bg-gradient-to-r from-[#2ec05a]/20 to-[#eed9ed]/70 hover:bg-pink-100'>
        <div className='flex justify-between items-center mb-4'>
          <div>
            <h3 className='font-medium'>Express Backend</h3>
            <p className='text-sm'>You have completed 34% of this course</p>
          </div>
          <button>
            <i className='bi bi-chevron-right bg-gray-300 rounded-full p-1'></i>
          </button>
        </div>

        {courses.map((course, index) => (
          <div key={index} className="border border-[#ccc] rounded-lg mb-2 backdrop-sepia-0 bg-gradient-to-r bg-white/95  from-[#2ec05a]/20 to-[#eed9ed]/30">
            <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
              <input type="checkbox" id={`course-toggle-${index}`} />
              <div className="collapse-title font-semibold backdrop-sepia-0 bg-gradient-to-r bg-white/95  from-[#eed9ed]/80 to-[#2ec05a]/30">
                {course.title}
                <div>
                  <p className='text-sm font-medium'>12/3 | 260 min</p>
                </div>
              </div>

              <div className="collapse-content p-0 backdrop-sepia-0 bg-gradient-to-r bg-white/95  from-[#2ec05a]/20 to-[#eed9ed]/30">
                {course.lessons.map((lesson, idx) => (
                  <NavLink to="select-lesson" key={idx} className={`flex items-center justify-between px-3 py-2 cursor-pointer mt-2 font-medium hover:bg-[#eed9ed]/40 ${lesson.locked ? '' : 'text-black'} ${activeLesson === lesson.name ? 'backdrop-sepia-0 bg-gradient-to-r bg-white/95 from-[#eed9ed]/70 to-[#2ec05a]/30' : ''}`} onClick={() => handleLessonClick(lesson.name, lesson.locked)}    >
                    <span className='flex items-center'>
                      <i className={lesson.locked ? 'bi bi-lock flex justify-center items-center mr-2' : 'bi bi-play border rounded-full text-sm flex justify-center items-center mr-2'}></i>{lesson.name}
                    </span>
                    {lesson.locked ? (
                      <button onClick={(e) => { e.preventDefault(); document.getElementById('buy_modal')?.showModal(); }}
                        className="btn border px-3 py-1 rounded-full text-xs backdrop-sepia-0 bg-gradient-to-r bg-white/95 from-[#eed9ed]/70 to-[#2ec05a]/30"   >
                        {lesson.price} so’m
                      </button>
                    ) : (
                      <span className="border text-xs px-3 py-1 w-40 rounded-full text-center backdrop-sepia-0 bg-gradient-to-r bg-white/95 from-[#eed9ed]/70 to-[#2ec05a]/30">
                        {lesson.progress ?? 0}%
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        ))}


      </div>

      {/* Правая часть */}
      <div className='w-2/3 border border-[#ccc] p-4 rounded-2xl bg-white/95 backdrop-blur'>
        <div className='flex justify-between items-center mb-4'>
          <div>
            <h3 className='text-xl font-semibold'>1. Express Backend</h3>
            <p className='text-md'>12/3 | 260 min</p>
          </div>

          <button className='btn bg-gradient-to-r from-[#2ec05a]/20 to-[#eed9ed]/70 hover:bg-pink-100'>
            Next lesson
          </button>

        </div>

        <div className='w-full h-[300px] rounded-2xl border border-[#ccc] flex items-center justify-center  bg-gradient-to-r from-[#2ec05a]/20 to-[#eed9ed]/70 '>
          <i className="bi bi-camera-video text-3xl text-gray-600"></i>
        </div>

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift mt-4">
          <label className="tab flex justify-center items-center gap-2">
            <input type="radio" name="my_tabs_4" />
            <i class="bi bi-patch-question flex justify-center items-center text-[16px]"></i>
            <span className='text-[16px] leading-none'>Q & A</span>
          </label>
          <div className="tab-content bg-base-100 border-base-300 p-6">Questions and Answers</div>

          <label className="tab flex justify-center items-center gap-2">
            <input type="radio" name="my_tabs_4" defaultChecked />
            <i class="bi bi-files flex justify-center items-center text-[16px]"></i>
            <span className='text-[16px] leading-none'>Sources</span>
          </label>
          <div className="tab-content bg-base-100 border-base-300 p-6">Files...</div>

          <label className="tab flex justify-center items-center gap-2">
            <input type="radio" name="my_tabs_4" />
            <i class="bi bi-chat-right-text flex justify-center items-center text-[16px]"></i>
            <span className='text-[16px] leading-none'>Comments</span>
          </label>
          <div className="tab-content bg-base-100 border-base-300 p-6">Comments...</div>
        </div>


      </div>
    </div>
  );
}

export default SelectLesson;