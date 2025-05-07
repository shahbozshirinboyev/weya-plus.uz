import { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/layout/Footer";
import { p } from "framer-motion/client";

function Education() {
  const courses = [
    {
      id: 1,
      category: "Frontend",
      title: "React Basics",
      mentor: "John Doe",
      lessons: 24,
      image:
        "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
      text: "Learn the fundamentals of React, including components, state management, and hooks.",
    },
    {
      id: 2,
      category: "Frontend",
      title: "Advanced React",
      mentor: "Alice Brown",
      lessons: 30,
      image:
        "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
      text: "Dive deeper into React with advanced topics like context API, performance optimization, and testing.",
    },
    {
      id: 12,
      category: "Frontend",
      title: "Advanced React",
      mentor: "Alice Brown",
      lessons: 30,
      image:
        "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
      text: "Dive deeper into React with advanced topics like context API, performance optimization, and testing.",
    },
    {
      id: 9,
      category: "Frontend",
      title: "Advanced React",
      mentor: "Alice Brown",
      lessons: 30,
      image:
        "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
      text: "Dive deeper into React with advanced topics like context API, performance optimization, and testing.",
    },
    {
      id: 3,
      category: "Backend",
      title: "Express Backend",
      mentor: "Azimjon Pulatov",
      lessons: 32,
      image:
        "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
      text: "Build RESTful APIs using Express.js, including routing, middleware, and error handling.",
    },
    {
      id: 4,
      category: "Backend",
      title: "Node.js API",
      mentor: "Max Smith",
      lessons: 28,
      image:
        "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
      text: "Learn how to create scalable APIs with Node.js, including authentication and database integration.",
    },
    {
      id: 5,
      category: "Mobile Developer",
      title: "Flutter Fundamentals",
      mentor: "Jane Smith",
      lessons: 20,
      image:
        "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
      text: "Get started with Flutter and learn how to build cross-platform mobile applications.",
    },
    {
      id: 6,
      category: "Mobile Developer",
      title: "React Native Basics",
      mentor: "Robert Wilson",
      lessons: 18,
      image:
        "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
      text: "Learn the basics of React Native and how to create mobile apps using React.",
    },
    {
      id: 7,
      category: "UI design",
      title: "Figma Essentials",
      mentor: "Sara Connor",
      lessons: 15,
      image:
        "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
      text: "Master the basics of Figma for UI design, including components, styles, and prototyping.",
    },
    {
      id: 8,
      category: "UI design",
      title: "Prototyping in Figma",
      mentor: "David Lee",
      lessons: 22,
      image:
        "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
      text: "Learn how to create interactive prototypes in Figma, including animations and transitions.",
    },
  ];
  const categories = [
    "Frontend",
    "UI design",
    "Mobile Developer",
    "Graphic design",
    "Backend",
    "UX design",
  ];
  const popular_des = [
    { icon: "bi bi-palette", name: "Design" },
    { icon: "bi bi-code-slash", name: "Development" },
    { icon: "bi bi-mortarboard", name: "Professional Dev." },
    { icon: "bi bi-camera", name: "Photography" },
    { icon: "bi bi-database", name: "Data Science" },
    { icon: "bi bi-briefcase", name: "Business" },
    { icon: "bi bi-megaphone", name: "Marketing" },
    { icon: "bi bi-music-note-beamed", name: "Music" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Frontend");
  return (
    <>
      <div className="container mx-auto px-3 text-gray-900 dark:text-gray-50">
        {/* ------------------- */}
        <div className="flex flex-col justify-center items-center my-12">
          <h1 className="flex flex-col gap-1 text-4xl md:text-6xl lg:text-8xl text-center font-extrabold uppercase">
            <span>Kasb o‘rganish</span>
            <span>biz bilan</span>
            <span className="dark:bg-gray-50 text-gray-50 bg-gray-900 dark:text-gray-900 leading-snug">
              yanada oson!
            </span>
          </h1>
          <ul className="flex flex-wrap justify-center items-center gap-2 md:gap-3 xl:gap-5 mt-5">
            <li className="px-4 py-2 xl:px-6 xl:py-3 text-[14px] font-semibold rounded-full bg-base-200 border border-base-300">
              UI design
            </li>
            <li className="px-4 py-2 xl:px-6 xl:py-3 text-[14px] font-semibold rounded-full bg-base-200 border border-base-300">
              Frontend
            </li>
            <li className="px-4 py-2 xl:px-6 xl:py-3 text-[14px] font-semibold rounded-full bg-base-200 border border-base-300">
              Backend
            </li>
            <li className="px-4 py-2 xl:px-6 xl:py-3 text-[14px] font-semibold rounded-full bg-base-200 border border-base-300">
              Mobile developer
            </li>
            <li className="px-4 py-2 xl:px-6 xl:py-3 text-[14px] font-semibold rounded-full bg-base-200 border border-base-300">
              Graphic design
            </li>
            <li className="px-4 py-2 xl:px-6 xl:py-3 text-[14px] font-semibold rounded-full bg-base-200 border border-base-300">
              UX design
            </li>
          </ul>
          <p className="text-center text-sm font-semibold opacity-50 my-5 xl:px-65">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa iure
            iusto quisquam totam tempora dignissimos recusandae, fuga velit
            possimus vitae praesentium quia eligendi distinctio inventore alias
            fugiat provident. In dicta consequuntur, iure laudantium suscipit
            voluptatem.
          </p>
          <button className="uppercase btn btn-lg rounded-full dark:hover:bg-white font-bold dark:hover:text-gray-900 shadow-none border border-gray-300 hover:border-gray-600 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
            get started
          </button>
        </div>
        {/* ------------------- */}

        {/* ------------------- */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex gap-1 text-2xl text-center font-bold uppercase">
            <span>futured</span>
            <span className="dark:bg-gray-50 text-gray-50 bg-gray-900 dark:text-gray-900 leading-snug px-2">
              courses
            </span>
          </h1>
          <div className="my-6 flex flex-wrap justify-center items-center gap-4 px-2 py-2 rounded-full bg-base-200 bg-gradient-to-r dark:bg-[#082F49] shadow">
            {categories.map((category) => (
              <button key={category}
              className={`btn btn-sm rounded-full border-none transition-all duration-300 font-normal  ${selectedCategory === category
                ? " bg-gradient-to-r bg-[#0EA5E9] text-white"
                : " bg-gradient-to-l bg-base-300 dark:bg-[#0369A1]"
                }`} onClick={() => setSelectedCategory(category)} >
              {category}
            </button>
            ))}
          </div>

          <div className="justify-center items-center grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  2xl:grid-cols-4 gap-8 w-full">
            {courses
              .filter((course) => course.category === selectedCategory)
              .map((course) => (
                <div key={course.id}
                    className="rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow shadow-gray-300 dark:shadow-gray-950 relative"  >
                      <div className="absolute bg-sky-500 px-1 py-2 w-[120px] rounded-br-xl flex justify-center items-center text-white font-semibold">
                        <span className="uppercase text-xs">Yangi</span>
                      </div>
                    <NavLink to="select-course">
                      <img src={course.image} className="w-full h-48 object-cover" />
                    </NavLink>
                    <div className="p-3 md:p-4">

                      <div className="flex justify-between ">
                        <h3 className="text-xl font-semibold mb-2">
                          {course.title}
                        </h3>
                        <h3 className="text-xl font-semibold mb-2">34$</h3>
                      </div>

                      <p className="text-xs opacity-60 dark:opacity-90">{course.text}</p>

                      <div className="flex justify-between  ">



                        <div className="flex items-center gap-1 mt-4 ">
                          <span className="font-medium text-transparent bg-gradient-to-r from-[#FF0000]/60  to-[#FDCF58] bg-clip-text transition-all duration-300 mr-0.5">
                            4.8
                          </span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-auto" viewBox="0 0 16 16" >
                            <defs>
                              <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FF0000" />
                                <stop offset="100%" stopColor="#FDCF58" />
                              </linearGradient>
                            </defs>
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="url(#starGradient)" />
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-auto" viewBox="0 0 16 16" >
                            <defs>
                              <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FF0000" />
                                <stop offset="100%" stopColor="#FDCF58" />
                              </linearGradient>
                            </defs>
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="url(#starGradient)" />
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-auto" viewBox="0 0 16 16"   >
                            <defs>
                              <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FF0000" />
                                <stop offset="100%" stopColor="#FDCF58" />
                              </linearGradient>
                            </defs>
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="url(#starGradient)" />
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-auto" viewBox="0 0 16 16"   >
                            <defs>
                              <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FF0000" />
                                <stop offset="100%" stopColor="#FDCF58" />
                              </linearGradient>
                            </defs>
                            <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" fill="url(#starGradient)" />
                          </svg>


                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-auto" viewBox="0 0 16 16"   >
                            <defs>
                              <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FF0000" />
                                <stop offset="100%" stopColor="#FDCF58" />
                              </linearGradient>
                            </defs>
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" fill="url(#starGradient)" />
                          </svg>
                        </div>

                        <div className="flex items-center gap-1.5 opacity-60  dark:opacity-90 mt-4">
                          <i className="bi bi-eye text-lg mt-0.5"></i>
                          <p className="text-sm">{course.view}</p>
                        </div>
                      </div>
                      <div className="flex mt-4">
                        <NavLink to="select-course" className="uppercase bg-[#0EA5E9] btn w-full rounded-lg text-white border-none">
                          Go to Course
                        </NavLink>
                      </div>
                    </div>
                  </div>
              ))}
          </div>
        </div>
        {/* ------------------- */}

        {/* LEADING TEACHERS ------------------- START */}
        <div className="flex flex-col justify-center items-center my-12">
          <h1 className="flex gap-1 text-2xl text-center font-bold uppercase">
            <span>Yetakchi</span>
            <span className="dark:bg-gray-50 text-gray-50 bg-gray-900 dark:text-gray-900 leading-snug px-2">
              O‘qituvchilar
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full">
            {[...Array(6).keys()].map((i) => (
              <div className="p-6 flex justify-between items-center rounded-xl bg-base-100 hover:bg-base-200 border border-base-300">
                <div className="flex gap-3 items-center">
                  <div className="avatar ">
                    <div className="w-14 rounded-full">
                      <img
                        src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                      />
                    </div>
                  </div>

                  <div>
                    <h1 className="text-lg font-semibold">Zerda Jursinova</h1>
                    <p className="text-xs opacity-50">Frontend Dev.</p>
                  </div>
                </div>

                <div className="btn btn-circle p-2 border border-base-300 hover:bg-sky-500 group">
                  <i className="bi bi-arrow-up-right flex justify-center items-center text-gray-900 dark:text-gray-50 group-hover:text-gray-50"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* LEADING TEACHERS ------------------- END */}

        {/* POPULAR DESTINATIONS ------------------- START */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex gap-1 text-2xl text-center font-bold uppercase">
            <span>Eng Ommabop</span>
            <span className="dark:bg-gray-50 text-gray-50 bg-gray-900 dark:text-gray-900 leading-snug px-2">
              Yo‘nalishlar
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full">
            {popular_des.map((item) => (
              <div className="p-5 flex justify-between items-center rounded-xl bg-base-100 hover:bg-base-200 border border-base-300">
                <div className="flex gap-3 items-center">
                  <i className={`${item.icon} text-xl flex justify-center items-center`}></i>

                  <div>
                    <h1 className="text-md font-normal ">{item.name}</h1>
                  </div>
                </div>

                <div className="btn btn-circle p-2 border border-base-300 hover:bg-sky-500 group">
                  <i className="bi bi-arrow-up-right flex justify-center items-center text-gray-900 dark:text-gray-50 group-hover:text-gray-50"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* POPULAR DESTINATIONS ------------------- END */}

        {/* HOW DOES IT WORK? ------------------- START */}
        <div className="flex flex-col justify-center items-center my-12">
          <h1 className="flex gap-1 text-2xl text-center font-bold uppercase">
            <span className="dark:bg-gray-50 text-gray-50 bg-gray-900 dark:text-gray-900 leading-snug px-2 ">
              WeYa+
            </span>
            <span>qanday ishlaydi?</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 ">
            <div className="rounded-2xl p-5  bg-base-100 hover:bg-base-200 border border-base-300 ">
              <div className="flex flex-wrap justify-between relative">
                <p className="font-semibold w-[80%] h-15">
                  O'zingizga mos masterklassni tanlaysiz.
                </p>
                <div className="text-5xl font-bold mr-1 absolute right-0 top-0 opacity-50">
                  01
                </div>
              </div>

              <p className="text-sm mt-4 opacity-90">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae asperiores magni sunt dicta veritatis nostrum.
              </p>
            </div>

            <div className="rounded-2xl p-5  bg-base-100 hover:bg-base-200 border border-base-300">
              <div className="flex flex-wrap justify-between relative">
                <p className="font-bold w-[80%] h-15">
                  Berilgan darslarni o'rganib, vazifalarni bajarasiz.
                </p>
                <div className="text-5xl font-bold mr-1 absolute right-0 top-0 opacity-50">
                  02
                </div>
              </div>

              <p className="text-sm mt-4 opacity-90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
                sint voluptas itaque nam, molestias modi.
              </p>
            </div>

            <div className="rounded-2xl p-5  bg-base-100 hover:bg-base-200 border border-base-300">
              <div className="flex flex-wrap justify-between relative">
                <p className="font-bold w-[80%] h-15">
                  Amaliy mashg'ulotlarda qatnashing, sertifikatga ega bo'ling.
                </p>
                <div className="text-5xl font-bold mr-1 absolute right-0 top-0 opacity-50">
                  03
                </div>
              </div>

              <p className="text-sm mt-4 opacity-90">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                porro deserunt alias. Facilis, iusto placeat.
              </p>
            </div>
          </div>
        </div>
        {/* HOW DOES IT WORK? ------------------- END */}

        {/* ------------------- */}
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="flex gap-1 text-2xl text-center font-bold uppercase">
            <span>Platforma</span>
            <span className="dark:bg-gray-50 text-gray-50 bg-gray-900 dark:text-gray-900 leading-snug px-2">
              Ko‘rsatkichlari
            </span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full">
            <div className="rounded-2xl py-8 flex flex-col justify-center items-center  bg-base-100 hover:bg-base-200 border border-base-300">
              <p className="font-bold text-xl">Umumiy o'quvchilar soni</p>
              <span className="text-4xl font-extrabold mt-2">+12,265</span>
            </div>

            <div className="rounded-2xl py-8 flex flex-col justify-center items-center  bg-base-100 hover:bg-base-200 border border-base-300">
              <p className="font-bold text-xl">Yozilgan darslar soni</p>
              <span className="text-4xl font-extrabold mt-2">+265</span>
            </div>

            <div className="rounded-2xl py-8 flex flex-col justify-center items-center bg-base-100 hover:bg-base-200 border border-base-300 ">
              <p className="font-bold text-xl">O'rtacha jamoaviy tajribaa</p>
              <span className="text-4xl font-extrabold mt-2">+7 yil</span>
            </div>
          </div>
        </div>
        {/* ------------------- */}

        <div className="mt-12"></div>

        <Footer />
      </div>
    </>
  );
}

export default Education;
