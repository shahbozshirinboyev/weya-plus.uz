import { useEffect, useState } from "react";
import BuyModal from "../../components/modals/BuyModal";

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
      <div className="container mx-auto px-3 items-start flex gap-4 mt-4 text-gray-900 dark:text-gray-50 ">
        {/* Левая панель */}
        <div
          className={`w-3/3 lg:w-1/3 rounded-2xl p-4 shadow bg-white dark:bg-slate-800 ${
            view === "right" ? "hidden" : "block"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-3">
              <div className="flex items-center justify-center relative h-[50px] w-[50px]">
                <div
                  className="radial-progress text-gray-200 h-[50px] w-[50px] absolute [--thickness:3px] noround"
                  style={{ "--value": 100 }}
                ></div>

                <div
                  className="radial-progress text-sky-500 h-[50px] w-[50px] absolute [--thickness:4px] noround"
                  style={{ "--value": 20 }}
                >
                  20%
                </div>
              </div>

              <div>
                <h3 className="font-medium"> Backend</h3>
                <p className="text-sm">Backend kursini 20% tugatdingiz</p>
              </div>
            </div>

            <button
              className="btn btn-xs bg-white dark:bg-gray-600 border-0 block lg:hidden"
              onClick={() => setView("right")}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          {courses.map((course, index) => (
            <div key={index} className=" mb-2 ">
              <div className="collapse collapse-arrow bg-slate-100 dark:bg-slate-950 ">
                <input
                  type="checkbox"
                  id={`course-toggle-${index}`}
                  defaultChecked={index === 0 || index === 1}
                />
                <div className="collapse-title  flex gap-2 ">
                  <div className="flex items-center justify-center relative h-[45px] w-[45px]">
                    <div
                      className="radial-progress text-gray-100 h-[45px] w-[45px] absolute [--thickness:3px] noround"
                      style={{ "--value": 100 }}
                    ></div>

                    <div
                      className="radial-progress text-sm text-sky-500 h-[45px] w-[45px] absolute [--thickness:4px] noround"
                      style={{ "--value": course.progress }}
                    >
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
                    <div
                      className="flex items-center justify-between border-l-4 border-sky-500 rounded-xs  bg-white dark:bg-slate-800 px-1 py-2 cursor-pointer  font-medium hover:bg-sky-50 dark:hover:bg-slate-700"
                      onClick={() =>
                        handleLessonClick(lesson.name, lesson.locked)
                      }
                    >
                      <span className="flex items-center">
                        <i className="bi bi-check2-circle px-1.5 text-sky-500"></i>
                        <span className="ml-2 font-normal">{lesson.name}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Правая часть */}
        <div
          className={`w-3/3 lg:w-2/3 shadow p-4 rounded-2xl backdrop-blur bg-white dark:bg-slate-800 ${
            view === "left" ? "hidden" : "block"
          }`}
        >
          <div className="flex justify-between items-center mb-4 ">
            <div>
              <h3 className="text-xl font-semibold"> Express Backend</h3>
            </div>

            <div className="flex gap-1">
              <button className="btn border-none bg-sky-500 text-white">
                <span>Next lesson</span>
                <i className="bi bi-chevron-right flex justify-center items-center text-xs"></i>
              </button>

              <button
                className="btn border-none bg-sky-500 rounded-full block lg:hidden"
                onClick={() => setView("left")}
              >
                <i class="bi bi-list-nested text-white"></i>
              </button>
            </div>
          </div>

          <div className="w-full h-[300px] rounded-2xl border border-[#ccc] dark:border-gray-600 flex items-center justify-center  bg-gradient-to-r from-[#2ec05a]/20 dark:to-[#eed9ed]/30 to-[#eed9ed]/70">
            <i className="bi bi-camera-video text-3xl text-gray-600 dark:text-gray-300"></i>
          </div>

          <div className="tabs tabs-border mt-4">
            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label="Q&A"
            />
            <div className="tab-content border-t-slate-100 py-2 ">
              <div className="flex  justify-between items-center mt-6">
                <div>
                  <h1 className="font-semibold text-xl">Savol va javoblar</h1>
                  <div className="flex text-xs text-slate-500 dark:text-slate-100 gap-8 mt-3">
                    <p>
                      {" "}
                      <i class="bi bi-question-circle text-sky-500 mr-1"></i>{" "}
                      Savollar 20ta
                    </p>
                    <p>
                      {" "}
                      <i class="bi bi-envelope  text-sky-500 mr-1.5"></i>
                      Javoblar 17ta{" "}
                    </p>
                  </div>
                </div>
                <button className="btn f border-none bg-sky-500 text-white">
                  Savol so’rash
                </button>
              </div>

              <div className="flex mt-4 items-center">
                <label className="input w-full bg-slate-50 dark:bg-slate-950 border-none">
                  <i className="bi bi-search text-slate-500 dark:text-slate-100"></i>
                  <input
                    type="search"
                    className="grow placeholder:text-slate-500 dark:placeholder:text-slate-100"
                    placeholder="Savollaringizni qidiring"
                  />
                </label>

                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn w-37 bg-slate-50 dark:bg-slate-950 border-none m-1 text-slate-500 dark:text-slate-100 font-normal flex items-center justify-between"
                  >
                    Dars bo’yicha
                    <i className="bi bi-chevron-down ml-2"></i>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-3 ">
                <h1>Barcha savollar</h1>

                <div className="border border-slate-50 dark:border rounded-xl p-4 mt-2">
                  <h1>Nima uchun men video kursga kira olmayabman?</h1>
                  <div className="bg-slate-50 dark:bg-slate-950 py-2 px-3 mt-4">
                    <div className="flex items-center justify-between">
                      <div className="avatar flex items-center gap-2">
                        <div className="w-10  rounded-full">
                          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                        <h1 className="text-sm">Jursinova Zerda</h1>
                      </div>
                      <div className="flex gap-2 items-center text-slate-500 dark:text-slate-100">
                        <i class="bi bi-clock-fill"></i>
                        <h1 className="text-sm">14:50, 18.04.2025</h1>
                      </div>
                    </div>
                    <p className="text-xs mt-3">
                      Savolim video ko'rib pytonni o'rganaman deb kirgan odam
                      mayli kirish qismida 1ta video bor ekan ilk qadamlarda
                      kerakli qurilmalarni odam qayerdan bilib olishi mumkin bu
                      menga qiziq yani kerakli dasturlarni 
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-950 py-2 px-3 mt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2 items-center text-slate-500 dark:text-slate-100">
                        <i class="bi bi-clock-fill"></i>
                        <h1 className="text-sm">14:50, 18.04.2025</h1>
                      </div>

                      <div className="avatar flex items-center gap-2">
                        <div className="w-10  rounded-full">
                          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                        <h1 className="text-sm">Jursinova Zerda</h1>
                      </div>
                    </div>
                    <p className="text-xs mt-3">
                      Savolim video ko'rib pytonni o'rganaman deb kirgan odam
                      mayli kirish qismida 1ta video bor ekan ilk qadamlarda
                      kerakli qurilmalarni odam qayerdan bilib olishi mumkin bu
                      menga qiziq yani kerakli dasturlarni 
                    </p>
                  </div>

                  <div className="flex items-center justify-end mt-3">
                    <h1 className="text-sky-500 text-sm">
                      Yana 4ta javobni ko’rish{" "}
                      <i className="bi bi-chevron-down ml-2"></i>
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label="Materiallar"
              defaultChecked
            />
            <div className="tab-content border-t-slate-100  py-3 font-medium text-xl">
              Materiallar
              <p className="text-sm font-light mt-2">
                Amaliyot uchun havola{" "}
                <span className="text-sky-500">Ustiga bosing</span>
              </p>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              className="tab"
              aria-label="Izohlar"
            />
            <div className="tab-content border-t-slate-100 py-2">
              <h1>O’quvchilar fikri</h1>
              <div className="flex flex-col md:flex-row md:justify-between gap-4 items-center">
                <div className="flex flex-col space-y-1">
                  <span className="text-sky-500 text-center flex justify-center text-3xl font-bold mb-6">
                    4.8
                  </span>
                  <div className="flex  gap-3 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-auto"
                      viewBox="0 0 16 16"
                    >
                      <defs>
                        <linearGradient
                          id="starGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#FF0000" />
                          <stop offset="100%" stopColor="#FDCF58" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                        fill="url(#starGradient)"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-auto"
                      viewBox="0 0 16 16"
                    >
                      <defs>
                        <linearGradient
                          id="starGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#FF0000" />
                          <stop offset="100%" stopColor="#FDCF58" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                        fill="url(#starGradient)"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-auto"
                      viewBox="0 0 16 16"
                    >
                      <defs>
                        <linearGradient
                          id="starGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#FF0000" />
                          <stop offset="100%" stopColor="#FDCF58" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                        fill="url(#starGradient)"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-auto"
                      viewBox="0 0 16 16"
                    >
                      <defs>
                        <linearGradient
                          id="starGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#FF0000" />
                          <stop offset="100%" stopColor="#FDCF58" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"
                        fill="url(#starGradient)"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-auto"
                      viewBox="0 0 16 16"
                    >
                      <defs>
                        <linearGradient
                          id="starGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#FF0000" />
                          <stop offset="100%" stopColor="#FDCF58" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                        fill="url(#starGradient)"
                      />
                    </svg>
                  </div>
                  <p className="text-sm mt-2">Kurs o’rtacha baxosi</p>
                </div>

                <div className="flex flex-col space-y-3">
                  <div className="flex items-center gap-6">
                    <progress
                      className="progress progress-info h-4 w-40 md:w-60 xl:w-90 2xl:w-100 bg-sky-500"
                      value="100"
                      max="100"
                    >
                      {" "}
                    </progress>
                    <div className="flex gap-2">
                      <div className="flex gap-4 md:gap-6 xl:gap-8 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                            fill="url(#starGradient)"
                          />
                        </svg>
                      </div>
                      <h1 className="text-sm">90%</h1>
                    </div>
                  </div>

                  <div className="flex items-center gap-6  ">
                    <progress
                      className="progress progress-info h-4 w-40 md:w-60 xl:w-90 2xl:w-100"
                      value="70"
                      max="100"
                    ></progress>
                    <div className="flex gap-2">
                      <div className="flex  gap-4 md:gap-6 xl:gap-8 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                            fill="url(#starGradient)"
                          />
                        </svg>
                      </div>
                      <h1 className="text-sm">90%</h1>
                    </div>
                  </div>

                  <div className="flex items-center gap-6  ">
                    <progress
                      className="progress progress-info h-4 w-40 md:w-60 xl:w-90 2xl:w-100"
                      value="40"
                      max="100"
                    ></progress>
                    <div className="flex gap-2">
                      <div className="flex  gap-4 md:gap-6 xl:gap-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                            fill="url(#starGradient)"
                          />
                        </svg>
                      </div>
                      <h1 className="text-sm">90%</h1>
                    </div>
                  </div>

                  <div className="flex items-center gap-6  ">
                    <progress
                      className="progress progress-info h-4 w-40 md:w-60 xl:w-90 2xl:w-100"
                      value="20"
                      max="100"
                    ></progress>
                    <div className="flex gap-2">
                      <div className="flex  gap-4 md:gap-6 xl:gap-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                            fill="url(#starGradient)"
                          />
                        </svg>
                      </div>
                      <h1 className="text-sm">90%</h1>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 ">
                    <progress
                      className="progress progress-info h-4 w-40 md:w-60 xl:w-90 2xl:w-100"
                      value={0}
                      max="100"
                    ></progress>
                    <div className="flex gap-2">
                      <div className="flex gap-4 md:gap-6 xl:gap-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"
                            fill="url(#starGradient)"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-auto"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <linearGradient
                              id="starGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#FF0000" />
                              <stop offset="100%" stopColor="#FDCF58" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                            fill="url(#starGradient)"
                          />
                        </svg>
                      </div>
                      <h1 className="text-sm">90%</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex  w-full  mt-4 items-center">
                <label className="input w-full bg-slate-50 dark:bg-slate-950 border-none">
                  <i className="bi bi-search text-slate-500 dark:text-slate-100"></i>
                  <input
                    type="search"
                    className="grow placeholder:text-slate-500 dark:placeholder:text-slate-100"
                    placeholder="Savollaringizni qidiring"
                  />
                </label>

                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn w-37 bg-slate-50 dark:bg-slate-950 border-none m-1 text-slate-500 dark:text-slate-100 font-normal flex items-center justify-between"
                  >
                    Dars bo’yicha
                    <i className="bi bi-chevron-down ml-2"></i>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="font-medium"> Barcha savollar</h1>
                <div className="border border-slate-50 dark:border-slate-100 rounded-xl p-3 mt-2">
                  <div className="bg-slate-50 dark:bg-slate-950 py-2 px-3 ">
                    <div className="flex items-center justify-between">
                      <div className="flex  gap-2">
                        <div className="avatar flex items-center gap-2">
                          <div className="w-10  rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                          </div>
                        </div>
                        <div>
                          <h1 className="text-sm">Jursinova Zerda</h1>

                          <div className="flex  gap-3 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-auto"
                              viewBox="0 0 16 16"
                            >
                              <defs>
                                <linearGradient
                                  id="starGradient"
                                  x1="0%"
                                  y1="0%"
                                  x2="100%"
                                  y2="0%"
                                >
                                  <stop offset="0%" stopColor="#FF0000" />
                                  <stop offset="100%" stopColor="#FDCF58" />
                                </linearGradient>
                              </defs>
                              <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                fill="url(#starGradient)"
                              />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-auto"
                              viewBox="0 0 16 16"
                            >
                              <defs>
                                <linearGradient
                                  id="starGradient"
                                  x1="0%"
                                  y1="0%"
                                  x2="100%"
                                  y2="0%"
                                >
                                  <stop offset="0%" stopColor="#FF0000" />
                                  <stop offset="100%" stopColor="#FDCF58" />
                                </linearGradient>
                              </defs>
                              <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                fill="url(#starGradient)"
                              />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-auto"
                              viewBox="0 0 16 16"
                            >
                              <defs>
                                <linearGradient
                                  id="starGradient"
                                  x1="0%"
                                  y1="0%"
                                  x2="100%"
                                  y2="0%"
                                >
                                  <stop offset="0%" stopColor="#FF0000" />
                                  <stop offset="100%" stopColor="#FDCF58" />
                                </linearGradient>
                              </defs>
                              <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                                fill="url(#starGradient)"
                              />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-auto"
                              viewBox="0 0 16 16"
                            >
                              <defs>
                                <linearGradient
                                  id="starGradient"
                                  x1="0%"
                                  y1="0%"
                                  x2="100%"
                                  y2="0%"
                                >
                                  <stop offset="0%" stopColor="#FF0000" />
                                  <stop offset="100%" stopColor="#FDCF58" />
                                </linearGradient>
                              </defs>
                              <path
                                d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"
                                fill="url(#starGradient)"
                              />
                            </svg>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-auto"
                              viewBox="0 0 16 16"
                            >
                              <defs>
                                <linearGradient
                                  id="starGradient"
                                  x1="0%"
                                  y1="0%"
                                  x2="100%"
                                  y2="0%"
                                >
                                  <stop offset="0%" stopColor="#FF0000" />
                                  <stop offset="100%" stopColor="#FDCF58" />
                                </linearGradient>
                              </defs>
                              <path
                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                                fill="url(#starGradient)"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 items-center text-slate-500 dark:text-slate-100">
                        <i class="bi bi-clock-fill"></i>
                        <h1 className="text-sm">14:50, 18.04.2025</h1>
                      </div>
                    </div>
                    <p className="text-xs mt-3">
                      Assalomu alaykum platformaga gap yo’q weya hamjamiyatiga
                      rahmat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectLesson;
