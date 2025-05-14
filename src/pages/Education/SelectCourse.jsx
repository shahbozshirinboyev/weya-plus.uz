import React, { useState } from "react";
import LeftDrawer from "../../components/layout/LeftDrawer";
import { NavLink } from "react-router-dom";
import BuyModal from "../../components/modals/BuyModal";
import { div } from "framer-motion/client";

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
      progress: 20,
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
      setActiveLesson((prev) => (prev === lessonName ? null : lessonName));
    }
  };

  return (
    <>
      <LeftDrawer />
      <BuyModal />
      <div className="p-6 rounded-xl container mx-auto px-3 flex flex-col md:flex-row items-start mt-4 gap-4 md:gap-8 text-gray-900 dark:text-gray-50 bg-white dark:bg-slate-800">
        <div className="w-full  dark:bg-slate-950 md:w-72 lg:w-92 rounded-lg border dark:border-slate-100 border-slate-200 overflow-hidden">
          <img
            src="https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75"
            alt="Course_Title"
          />
          <div className="p-3  ">
            <h1 className="text-2xl font-medium">Express Backend</h1>

            <div className="mt-5 flex gap-3">
              <div className="avatar">
                <div className="w-11 rounded-full">
                  <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h1 className="font-medium">Zerda Jursinova</h1>
                <p className="text-sm text-slate-500 dark:text-slate-100">
                  Front end dev.{" "}
                </p>
              </div>
            </div>

            <div className="mt-3">
              <span className="text-[12px] text-slate-500 dark:text-slate-100 ">
                8 / 56 / 876 min
              </span>
            </div>

            <div className="flex mt-3">
              <p className="text-sm font-semibold  text-green-500">
                1 200 000{" "}
                <span className="text-slate-500 dark:text-slate-100"> / </span>
              </p>
              <span className="text-xs line-through flex items-center font-semibold text-red-500 ml-2">
                1 480 000
              </span>
            </div>

            <div className=" dark:bg-white rounded-lg dark:p-3 mt-4">
              <button
                onClick={(e) => {
                  e.preventDefault(),
                    document.getElementById("buy_modal").showModal();
                }}
                className=" border-none  flex justify-between items-center w-full "
              >
                <span className="bg-sky-500 rounded-lg px-6 text-sm py-1.5 text-white">
                  Buy Now
                </span>
                <span className="flex gap-1">
                  <img
                    src="/src/assets/payment_icon/Humo.svg"
                    className="border w-8 h-5 p-[2px] rounded-sm border-[#ccc] border-none"
                    alt=""
                  />
                  <img
                    src="/src/assets/payment_icon/Uzcard.svg"
                    className="border w-8 h-5 p-[2px] rounded-sm border-[#ccc] border-none"
                    alt=""
                  />
                  <img
                    src="/src/assets/payment_icon/Payme.svg"
                    className="border w-8 h-5 p-[2px] rounded-sm border-[#ccc] border-none"
                    alt=""
                  />
                </span>
              </button>
            </div>
            {/* <label htmlFor="my-drawer" className='btn rounded-full mt-2 border border-gray-300 hover:border-gray-400 dark:hover:border-gray-600 dark:border-gray-700 flex justify-start items-center bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10'>Learn More</label> */}
          </div>
        </div>

        <div className="w-full md:flex-1">
          {courses.map((course, index) => (
            <div key={index} className="mb-4">
              <div className="collapse collapse-arrow">
                <input
                  type="checkbox"
                  id={`course-toggle-${index}`}
                  defaultChecked={index === 0 || index === 1}
                />
                <div className="collapse-title font-semibold bg-slate-50 dark:bg-slate-950 ">
                  {course.title}
                </div>

                <div className="collapse-content p-0 bg-slate-50 dark:bg-slate-950">
                  {course.lessons.map((lesson, idx) => (
                    <NavLink
                      to="select-lesson"
                      key={idx}
                      className={`flex items-center justify-between px-3 py-2 cursor-pointer mt-2 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 ${
                        lesson.locked ? "" : ""
                      }
                      ${activeLesson === lesson.name ? "" : ""}`}
                      onClick={() =>
                        handleLessonClick(lesson.name, lesson.locked)
                      }
                    >
                      <span className="flex items-center">
                        {lesson.locked ? (
                          <i className="bi bi-lock text-sky-500 bg-white dark:bg-slate-800 p-2 rounded-lg flex justify-center items-center"></i>
                        ) : (
                          <i className="bi bi-play-fill flex justify-center items-center bg-white dark:bg-slate-800 p-2 rounded-lg"></i>
                        )}
                        <span className="ml-2">{lesson.name}</span>
                      </span>

                      <div className="flex items-center justify-center relative h-[35px] w-[35px]">
                        <div
                          className="radial-progress text-gray-100 h-[35px] w-[35px] absolute [--thickness:3px] noround"
                          style={{ "--value": 100 }}
                        ></div>

                        <div
                          className="radial-progress text-xs text-sky-500 h-[36px] w-[35px] absolute [--thickness:4px] noround"
                          style={{ "--value": course.progress }}
                        >
                          {course.progress}%
                        </div>
                      </div>
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
