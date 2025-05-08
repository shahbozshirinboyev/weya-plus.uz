import { useEffect, useState } from "react";
import BuyModal from "../../components/modals/BuyModal"

const courses = [
  {
    title: " Backend",
    progress: 40,
    lessons: [
      { name: "Lesson 1", progress: 0, locked: false },
      { name: "Lesson 2", price: "30 000", locked: true },
      { name: "Lesson 3", price: "30 000", locked: true },
      { name: "Lesson 4", price: "30 000", locked: true },
    ],
  },
  {
    title: "Backend",
    progress: 30,
    lessons: [
      { name: "Lesson 5", price: "30 000", locked: true },
      { name: "Lesson 6", price: "30 000", locked: true },
      { name: "Lesson 7", price: "30 000", locked: true },
      { name: "Lesson 8", price: "30 000", locked: true },
    ],
  },
  {
    title: "Backend",
    progress: 10,
    lessons: [
      { name: "Lesson 9", price: "30 000", locked: true },
      { name: "Lesson 10", price: "30 000", locked: true },
      { name: "Lesson 11", price: "30 000", locked: true },
      { name: "Lesson 12", price: "30 000", locked: true },
    ],
  },
  {
    title: "Backend",
    progress: 0,
    lessons: [
      { name: "Lesson 13", price: "30 000", locked: true },
      { name: "Lesson 14", price: "30 000", locked: true },
      { name: "Lesson 15", price: "30 000", locked: true },
      { name: "Lesson 16", price: "30 000", locked: true },
    ],
  },
  {
    title: "Backend",
    progress: 0,
    lessons: [
      { name: "Lesson 17", price: "30 000", locked: true },
      { name: "Lesson 18", price: "30 000", locked: true },
      { name: "Lesson 19", price: "30 000", locked: true },
      { name: "Lesson 20", price: "30 000", locked: true },
    ],
  },
];

function SelectLesson() {
  const [view, setView] = useState("both");

  useEffect(() => {
    const updateView = () => {
      const isTablet = window.innerWidth < 1025;
      setView((prev) => {
        if (isTablet && prev !== "right") return "right";
        if (!isTablet && prev !== "both") return "both";
        return prev;
      });
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);


  const [activeLesson, setActiveLesson] = useState(null);

  const handleLessonClick = (lessonName, locked) => {
    if (!locked) {
      setActiveLesson(lessonName);
    }
  };

  return (
    <>
      <BuyModal />
      <div className="container mx-auto px-3 items-start flex gap-4 mt-4 text-gray-900 dark:text-gray-50 bg-[#F8FAFC]">
        {/* Левая панель */}
        <div className={`w-3/3 lg:w-1/3 rounded-2xl p-4 shadow ${view === "right" ? "hidden" : "block"}`}>
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-3">

              <div className="flex items-center justify-center relative h-[50px] w-[50px]">
                <div className="radial-progress text-gray-200 h-[50px] w-[50px] absolute [--thickness:3px] noround"
                  style={{ "--value": 100, }}>
                </div>

                <div
                  className="radial-progress text-sky-500 h-[50px] w-[50px] absolute [--thickness:4px] noround"
                  style={{ "--value": 20, }}>
                  20%
                </div>
              </div>

              <div>
                <h3 className="font-medium"> Backend</h3>
                <p className="text-sm">Backend kursini 20% tugatdingiz</p>
              </div>
            </div>

            <button className="btn btn-xs bg-white dark:bg-gray-600 border-0 block lg:hidden" onClick={() => setView("right")} >
              <i className="bi bi-x-lg"></i>
            </button>

          </div>

          {courses.map((course, index) => (
            <div key={index} className=" mb-2 ">
              <div className="collapse collapse-arrow bg-slate-100 ">
                <input type="checkbox" id={`course-toggle-${index}`} defaultChecked={index === 0 || index === 1} />
                <div className="collapse-title  flex gap-2 ">
                  <div className="flex items-center justify-center relative h-[50px] w-[50px]">
                    <div className="radial-progress text-gray-100 h-[50px] w-[50px] absolute [--thickness:3px] noround"
                      style={{ "--value": 100, }}>
                    </div>

                    <div
                      className="radial-progress text-sky-500 h-[50px] w-[50px] absolute [--thickness:4px] noround"
                      style={{ "--value": course.progress }}>
                      {course.progress}%
                    </div>
                  </div>
                  <div>
                    {course.title}
                    <div>
                      <p className="text-xs font-medium">12/3 | 260 min</p>
                    </div>
                  </div>
                </div>

                <div className="collapse-content px-3 space-y-1.5  ">
                  {course.lessons.map((lesson, idx) => (
                    <div className="flex items-center justify-between border-l-4 border-sky-500 rounded-xs  bg-white px-1 py-2 cursor-pointer  font-medium hover:bg-sky-50 dark:hover:bg-[#eed9ed]/20"
                      onClick={() => handleLessonClick(lesson.name, lesson.locked)}>

                      <span className='flex items-center'>
                        <i className="bi bi-check2-circle px-1.5 text-sky-500"></i>
                        <span className='ml-2 font-normal'>{lesson.name}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Правая часть */}
        <div className={`w-3/3 lg:w-2/3 shadow p-4 rounded-2xl backdrop-blur ${view === "left" ? "hidden" : "block"}`}>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold"> Express Backend</h3>
            </div>

            <div className="flex gap-1">
              <button className="btn border-none bg-sky-500 text-white">
                <span>Next lesson</span>
                <i className="bi bi-chevron-right flex justify-center items-center text-xs"></i>
              </button>
              <button className="btn border-none bg-sky-500 rounded-full block lg:hidden"
                onClick={() => setView("left")} >
                <i class="bi bi-list-nested text-white"></i>
              </button>
            </div>

          </div>

          <div className="w-full h-[300px] rounded-2xl border border-[#ccc] dark:border-gray-600 flex items-center justify-center  bg-gradient-to-r from-[#2ec05a]/20 dark:to-[#eed9ed]/30 to-[#eed9ed]/70">
            <i className="bi bi-camera-video text-3xl text-gray-600 dark:text-gray-300"></i>
          </div>

          <div className="tabs tabs-lift mt-4 dark:border-white">
            <label className="tab flex justify-center items-center gap-2  hover:text-sky-500 ">
              <input type="radio" name="my_tabs_4" />
              <i class="bi bi-patch-question flex justify-center items-center text-[16px]"></i>
              <span className=" text-[16px] leading-none ">Q & A</span>
            </label>
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <div>
              <span className="text-xl font-semibold">
                Savol va javoblar
              </span>
              </div>

              <p className="mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias fuga libero dolorem ratione inventore, totam
                consectetur quod alias quasi consequatur repudiandae deserunt
                hic sapiente. Magni quaerat qui porro soluta ipsa voluptas fuga
                ipsum at ea inventore laboriosam expedita assumenda deleniti
                quos vel quod illum eius iusto, deserunt nostrum debitis optio
                culpa. Deserunt aperiam doloribus quo sapiente excepturi.
                Placeat sequi doloremque vitae amet ducimus autem tempora quos?
                Totam quisquam nesciunt voluptate labore, suscipit pariatur
                voluptates eum obcaecati! Odio hic quasi accusamus quae dolorum
                sed optio consequatur possimus assumenda ullam sint veniam sunt
                tenetur earum, dolorem cum suscipit adipisci recusandae, sequi
                voluptatem?
              </p>
            </div>

            <label className="tab flex justify-center items-center gap-2 hover:text-sky-500 ">
              <input type="radio" name="my_tabs_4" defaultChecked />
              <i class="bi bi-files flex justify-center items-center text-[16px]"></i>
              <span className="text-[16px] leading-none">Sources</span>
            </label>
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <span className="text-xl font-semibold">Files...</span>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente molestiae, fuga quod tempore dolor ut, numquam
                dignissimos rem nulla iure corporis, ex porro. Iure quam a
                tempore sunt dignissimos quasi nam natus repellat omnis quidem
                recusandae delectus cumque dolor, placeat sequi ipsa assumenda
                quaerat numquam fugiat libero! Corporis, maiores hic.
              </p>
            </div>

            <label className="tab flex justify-center items-center gap-2  hover:text-sky-500">
              <input type="radio" name="my_tabs_4" />
              <i class="bi bi-chat-right-text flex justify-center items-center text-[16px]"></i>
              <span className="text-[16px] leading-none">Comments</span>
            </label>
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <span className="text-xl font-semibold">Comments...</span>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, fuga consequatur necessitatibus quam deserunt eaque
                dolores eum libero quae cupiditate et ipsum omnis voluptatem
                minus quas officia error sapiente. Fugit nulla vero
                necessitatibus obcaecati commodi, hic tempore sit doloremque
                consequuntur eaque optio, expedita veritatis vel voluptas
                voluptate nam laboriosam facere id. Harum accusamus illum odio
                nostrum adipisci, omnis atque assumenda in sunt ipsam velit
                quasi, temporibus error, quidem veniam modi? Accusamus itaque
                excepturi temporibus corrupti odit, perferendis, repellat
                deleniti delectus recusandae molestias earum eveniet omnis quam
                distinctio voluptate qui pariatur modi nihil laboriosam
                explicabo necessitatibus. Ducimus ipsum, perferendis suscipit
                accusamus, ipsam sed officiis magnam cumque dicta quis
                necessitatibus mollitia consequuntur fuga perspiciatis
                doloremque. Est sapiente asperiores, iste distinctio mollitia
                pariatur vitae fugiat tempore nisi eaque quaerat consequuntur
                saepe et exercitationem sint repellat eligendi aliquid quam
                ratione error odio nam perspiciatis totam! Hic labore porro eos
                eum quia ea modi officiis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectLesson;
