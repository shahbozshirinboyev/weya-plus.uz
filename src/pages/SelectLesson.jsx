import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BuyModal from '../components/BuyModal';

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
    <>
    <BuyModal />
    <div className='container mx-auto px-3 items-start flex gap-4 mt-4'>
      {/* Левая панель */}
      <div className='w-1/3 rounded-2xl p-4 bg-gradient-to-r from-[#2ec05a]/20 to-[#eed9ed]/70 hover:bg-pink-100'>
        <div className='flex justify-between items-center mb-4'>
          <div>
            <h3 className='font-medium'>Express Backend</h3>
            <p className='text-sm'>You have completed 34% of this course</p>
          </div>
          <button className='btn btn-xs bg-white border-0'>
            <i className='bi bi-chevron-right flex justify-center items-center'></i>
          </button>
        </div>

        {courses.map((course, index) => (
          <div key={index} className="border border-[#ccc] rounded-lg mb-2 backdrop-sepia-0 bg-gradient-to-r bg-white/95  from-[#2ec05a]/20 to-[#eed9ed]/30">
            <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
              <input type="checkbox" id={`course-toggle-${index}`} />
              <div className="collapse-title font-semibold backdrop-sepia-0 bg-gradient-to-r bg-white/95  from-[#eed9ed]/80 to-[#2ec05a]/30">
                {course.title}
                <div>
                  <p className='text-xs font-medium'>12/3 | 260 min</p>
                </div>
              </div>

              <div className="collapse-content p-0 backdrop-sepia-0 bg-gradient-to-r bg-white/95  from-[#2ec05a]/20 to-[#eed9ed]/30">
                {course.lessons.map((lesson, idx) => (
                  <div key={idx} className={`flex items-center justify-between px-3 py-2 cursor-pointer mt-2 font-medium hover:bg-[#eed9ed]/40 ${lesson.locked ? '' : 'text-black'} ${activeLesson === lesson.name ? 'backdrop-sepia-0 bg-gradient-to-r bg-white/95 from-[#eed9ed]/70 to-[#2ec05a]/30' : ''}`} onClick={() => handleLessonClick(lesson.name, lesson.locked)}    >
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
                  </div>
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

        <div className='w-full h-[300px] rounded-2xl border border-[#ccc] flex items-center justify-center  bg-gradient-to-r from-[#2ec05a]/20 to-[#eed9ed]/70'>
          <i className="bi bi-camera-video text-3xl text-gray-600"></i>
        </div>

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift mt-4">
          <label className="tab flex justify-center items-center gap-2">
            <input type="radio" name="my_tabs_4" />
            <i class="bi bi-patch-question flex justify-center items-center text-[16px]"></i>
            <span className='text-[16px] leading-none'>Q & A</span>
          </label>
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <span className='text-xl font-semibold'>Questions and Answers</span>
            <p className='mt-2'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga libero dolorem ratione inventore, totam consectetur quod alias quasi consequatur repudiandae deserunt hic sapiente. Magni quaerat qui porro soluta ipsa voluptas fuga ipsum at ea inventore laboriosam expedita assumenda deleniti quos vel quod illum eius iusto, deserunt nostrum debitis optio culpa. Deserunt aperiam doloribus quo sapiente excepturi. Placeat sequi doloremque vitae amet ducimus autem tempora quos? Totam quisquam nesciunt voluptate labore, suscipit pariatur voluptates eum obcaecati! Odio hic quasi accusamus quae dolorum sed optio consequatur possimus assumenda ullam sint veniam sunt tenetur earum, dolorem cum suscipit adipisci recusandae, sequi voluptatem?
            </p>
          </div>

          <label className="tab flex justify-center items-center gap-2">
            <input type="radio" name="my_tabs_4" defaultChecked />
            <i class="bi bi-files flex justify-center items-center text-[16px]"></i>
            <span className='text-[16px] leading-none'>Sources</span>
          </label>
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <span className='text-xl font-semibold'>Files...</span>
            <p className='mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestiae, fuga quod tempore dolor ut, numquam dignissimos rem nulla iure corporis, ex porro. Iure quam a tempore sunt dignissimos quasi nam natus repellat omnis quidem recusandae delectus cumque dolor, placeat sequi ipsa assumenda quaerat numquam fugiat libero! Corporis, maiores hic.
            </p>
          </div>

          <label className="tab flex justify-center items-center gap-2">
            <input type="radio" name="my_tabs_4" />
            <i class="bi bi-chat-right-text flex justify-center items-center text-[16px]"></i>
            <span className='text-[16px] leading-none'>Comments</span>
          </label>
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <span className='text-xl font-semibold'>Comments...</span>
            <p className='mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fuga consequatur necessitatibus quam deserunt eaque dolores eum libero quae cupiditate et ipsum omnis voluptatem minus quas officia error sapiente. Fugit nulla vero necessitatibus obcaecati commodi, hic tempore sit doloremque consequuntur eaque optio, expedita veritatis vel voluptas voluptate nam laboriosam facere id. Harum accusamus illum odio nostrum adipisci, omnis atque assumenda in sunt ipsam velit quasi, temporibus error, quidem veniam modi? Accusamus itaque excepturi temporibus corrupti odit, perferendis, repellat deleniti delectus recusandae molestias earum eveniet omnis quam distinctio voluptate qui pariatur modi nihil laboriosam explicabo necessitatibus. Ducimus ipsum, perferendis suscipit accusamus, ipsam sed officiis magnam cumque dicta quis necessitatibus mollitia consequuntur fuga perspiciatis doloremque. Est sapiente asperiores, iste distinctio mollitia pariatur vitae fugiat tempore nisi eaque quaerat consequuntur saepe et exercitationem sint repellat eligendi aliquid quam ratione error odio nam perspiciatis totam! Hic labore porro eos eum quia ea modi officiis.
            </p>
          </div>
        </div>


      </div>
    </div>
    </>
  );
}

export default SelectLesson;