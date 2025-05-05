import { useEffect, useState } from "react";
import BuyModal from "../../components/modals/BuyModal"

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
      <div className="container mx-auto px-3 items-start flex gap-4 mt-4 text-gray-900 dark:text-gray-50">
        {/* Левая панель */}
        <div
          className={`w-3/3 lg:w-1/3 rounded-2xl p-4 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 ${
            view === "right" ? "hidden" : "block"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2">
              <div>
                <div
                  className="radial-progress border border-gray-600"
                  style={{
                    "--value": "25",
                    "--size": "3rem",
                    "--thickness": "2px",
                  }}
                  aria-valuenow={70}
                  role="progressbar"
                >
                  <span className="text-sm">25%</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium">Express Backend</h3>
                <p className="text-sm">You have completed 34% of this course</p>
              </div>
            </div>

            <button
              className="btn btn-xs bg-white dark:bg-gray-600 border-0 block lg:hidden"
              onClick={() => setView("right")}
            >
              <i class="bi bi-x-lg"></i>
            </button>
          </div>

          {courses.map((course, index) => (
            <div key={index} className=" mb-2 ">
              <div className="collapse collapse-arrow bg-base-100 border-base-300 border dark:border-gray-600">
                <input
                  type="checkbox"
                  id={`course-toggle-${index}`}
                  defaultChecked={index === 0 || index === 1}
                />
                <div className="collapse-title font-semibold backdrop-sepia-0 bg-gradient-to-r  from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
                  {course.title}
                  <div>
                    <p className="text-xs font-medium">12/3 | 260 min</p>
                  </div>
                </div>

                <div className="collapse-content p-0 backdrop-sepia-0 bg-gradient-to-r  from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
                  {course.lessons.map((lesson, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between px-3 py-2 cursor-pointer mt-2 font-medium hover:bg-[#eed9ed]/40 dark:hover:bg-[#eed9ed]/20 ${
                        lesson.locked ? "" : ""
                      } ${
                        activeLesson === lesson.name
                          ? "backdrop-sepia-0 bg-gradient-to-r from-[#eed9ed]/70 to-[#2ec05a]/30"
                          : ""
                      }`}
                      onClick={() =>
                        handleLessonClick(lesson.name, lesson.locked)
                      }
                    >
                      <span className="flex items-center">
                        {/* <i className={lesson.locked ? 'bi bi-lock flex justify-center items-center mr-2' : 'bi bi-play border rounded-full text-sm flex justify-center items-center mr-2'}></i> */}
                        {lesson.locked ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 512 512"
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            class="iconify iconify--fxemoji"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <path
                              fill="#B1B4B5"
                              d="M376.749 349.097c-13.531 0-24.5-10.969-24.5-24.5V181.932c0-48.083-39.119-87.203-87.203-87.203c-48.083 0-87.203 39.119-87.203 87.203v82.977c0 13.531-10.969 24.5-24.5 24.5s-24.5-10.969-24.5-24.5v-82.977c0-75.103 61.1-136.203 136.203-136.203s136.203 61.1 136.203 136.203v142.665c0 13.531-10.969 24.5-24.5 24.5z"
                            ></path>
                            <path
                              fill="#FFB636"
                              d="M414.115 497.459H115.977c-27.835 0-50.4-22.565-50.4-50.4V274.691c0-27.835 22.565-50.4 50.4-50.4h298.138c27.835 0 50.4 22.565 50.4 50.4v172.367c0 27.836-22.565 50.401-50.4 50.401z"
                            ></path>
                            <path
                              fill="#FFD469"
                              d="M109.311 456.841h-2.525c-7.953 0-14.4-6.447-14.4-14.4V279.309c0-7.953 6.447-14.4 14.4-14.4h2.525c7.953 0 14.4 6.447 14.4 14.4v163.132c0 7.953-6.447 14.4-14.4 14.4z"
                            ></path>
                          </svg>
                        ) : (
                          <i className="bi bi-play-circle flex justify-center items-center"></i>
                        )}
                        <span className="ml-2">{lesson.name}</span>
                      </span>
                      {lesson.locked ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("buy_modal")?.showModal();
                          }}
                          className="btn border dark:border-gray-500 px-3 py-1 rounded-full text-xs backdrop-sepia-0 bg-gradient-to-r from-[#eed9ed]/70 dark:from-[#eed9ed]/20 to-[#2ec05a]/30"
                        >
                          {lesson.price} so’m
                        </button>
                      ) : (
                        <span className="border dark:border-gray-500  text-xs px-3 py-1 w-40 rounded-full text-center backdrop-sepia-0 from-[#eed9ed]/70 dark:from-[#eed9ed]/20 to-[#2ec05a]/30">
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
        <div
          className={`w-3/3 lg:w-2/3 border border-[#ccc] dark:border-gray-600 p-4 rounded-2xl backdrop-blur ${
            view === "left" ? "hidden" : "block"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold">1. Express Backend</h3>
              <p className="text-md">12/3 | 260 min</p>
            </div>

            <div className="flex gap-1">
              <button
                className="flex justify-center items-center gap-2 btn bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 rounded-full border border-gray-300 hover:border-gray-400 dark:border-gray-600 lg:hidden"
                onClick={() => setView("left")}
              >
                <i class="bi bi-list-nested flex justify-center items-center text-xs"></i>
                <span className="text-xs hidden md:block">
                  Mavzular ro'yxati
                </span>
              </button>
              <button className="flex justify-center items-center gap-2 btn bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 rounded-full border border-gray-300 hover:border-gray-400 dark:border-gray-600 ">
                <span className="text-xs">Next lesson</span>
                <i className="bi bi-chevron-right flex justify-center items-center text-xs"></i>
              </button>
            </div>
          </div>

          <div className="w-full h-[300px] rounded-2xl border border-[#ccc] dark:border-gray-600 flex items-center justify-center  bg-gradient-to-r from-[#2ec05a]/20 dark:to-[#eed9ed]/30 to-[#eed9ed]/70">
            <i className="bi bi-camera-video text-3xl text-gray-600 dark:text-gray-300"></i>
          </div>

          <div className="tabs tabs-lift mt-4 dark:border-white">
            <label className="tab flex justify-center items-center gap-2 ">
              <input type="radio" name="my_tabs_4" />
              <i class="bi bi-patch-question flex justify-center items-center text-[16px]"></i>
              <span className="text-[16px] leading-none">Q & A</span>
            </label>
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <span className="text-xl font-semibold">
                Questions and Answers
              </span>
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

            <label className="tab flex justify-center items-center gap-2 ">
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

            <label className="tab flex justify-center items-center gap-2">
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
