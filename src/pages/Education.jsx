import { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import { text } from "framer-motion/client";

function Education() {
  const courses = [
    {
      id: 1,
      category: "Frontend",
      title: "React Basics",
      mentor: "John Doe",
      lessons: 24,
      image: "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
      text: "Learn the fundamentals of React, including components, state management, and hooks.",
    },
    {
      id: 2,
      category: "Frontend",
      title: "Advanced React",
      mentor: "Alice Brown",
      lessons: 30,
      image: "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
      text: "Dive deeper into React with advanced topics like context API, performance optimization, and testing.",

    },
    {
      id: 9,
      category: "Frontend",
      title: "Advanced React",
      mentor: "Alice Brown",
      lessons: 30,
      image: "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
      text: "Dive deeper into React with advanced topics like context API, performance optimization, and testing.",
    },
    {
      id: 3,
      category: "Backend",
      title: "Express Backend",
      mentor: "Azimjon Pulatov",
      lessons: 32,
      image: "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
      text: "Build RESTful APIs using Express.js, including routing, middleware, and error handling.",
    },
    {
      id: 4,
      category: "Backend",
      title: "Node.js API",
      mentor: "Max Smith",
      lessons: 28,
      image: "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
      text: "Learn how to create scalable APIs with Node.js, including authentication and database integration.",
    },
    {
      id: 5,
      category: "Mobile Developer",
      title: "Flutter Fundamentals",
      mentor: "Jane Smith",
      lessons: 20,
      image: "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
      text: "Get started with Flutter and learn how to build cross-platform mobile applications.",
    },
    {
      id: 6,
      category: "Mobile Developer",
      title: "React Native Basics",
      mentor: "Robert Wilson",
      lessons: 18,
      image: "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
      text: "Learn the basics of React Native and how to create mobile apps using React.",
    },
    {
      id: 7,
      category: "UI design",
      title: "Figma Essentials",
      mentor: "Sara Connor",
      lessons: 15,
      image: "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
      text: "Master the basics of Figma for UI design, including components, styles, and prototyping.",
    },
    {
      id: 8,
      category: "UI design",
      title: "Prototyping in Figma",
      mentor: "David Lee",
      lessons: 22,
      image: "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
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
  const [selectedCategory, setSelectedCategory] = useState("Frontend");
  return (
    <div className="container mx-auto px-3 text-gray-900 dark:text-gray-50">

      {/* ------------------- */}
      <div className="flex flex-col justify-center items-center my-12">
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-center font-semibold">
          STUDY<br />
          <span className="font-bold">ABROAD</span> IS EASY<br />
          WITH US
        </h1>
        <ul className="flex flex-wrap justify-center items-center gap-2 md:gap-3 xl:gap-5 my-5">
          <li className="px-3 py-1 text-[12px] font-semibold rounded-full shadow-none border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">UI design</li>
          <li className="px-3 py-1 text-[12px] font-semibold rounded-full shadow-none border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">Frontend</li>
          <li className="px-3 py-1 text-[12px] font-semibold rounded-full shadow-none border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">Backend</li>
          <li className="px-3 py-1 text-[12px] font-semibold rounded-full shadow-none border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">Mobile developer</li>
          <li className="px-3 py-1 text-[12px] font-semibold rounded-full shadow-none border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">Graphic design</li>
          <li className="px-3 py-1 text-[12px] font-semibold rounded-full shadow-none border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">UX design</li>
        </ul>
        <p className="text-center text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <button className="mt-4 uppercase btn rounded-full shadow-none border border-gray-300 hover:border-gray-600 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
          get started
        </button>
      </div>
      {/* ------------------- */}

      {/* ------------------- */}
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-2xl text-center font-semibold">COURSES</h1>
        <div className="my-6 flex flex-wrap justify-center items-center gap-2 px-2 py-2 rounded-full bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn btn-sm rounded-full from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 transition-all duration-300 ${selectedCategory === category
                ? "border-gray-800 dark:border-gray-400 bg-gradient-to-r bg-base-100"
                : "border-gray-300 dark:border-gray-700 bg-gradient-to-l bg-base-300"
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="justify-center items-center grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
          {courses
            .filter((course) => course.category === selectedCategory)
            .map((course) => (
              <div
                key={course.id}
                className="border border-gray-300 hover:border-gray-400 dark:border-gray-600 rounded-lg overflow-hidden
                bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 transition-all duration-300
                "
              >
                <NavLink to="select-course">
                  <img src={course.image} className="w-full h-48 object-cover" />
                </NavLink>
                <div className="p-3">
                  <div className="flex justify-between text-sm opacity-60">
                    <div className="flex gap-1">
                      <i class="bi bi-play-circle flex justify-center items-center border-0 rounded-full"></i>
                      <span className="font-semibold">{course.lessons} Lessons</span>
                    </div>
                    <div className="flex gap-1">
                      <i class="bi bi-people-fill flex justify-center items-center border-0 rounded-full"></i>
                      <p className="font-semibold">{course.people} 245</p></div>
                  </div>

                  <div className="flex justify-between mt-3">
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <h3 className="text-xl font-semibold mb-2">34$</h3>
                  </div>

                  <p className="text-xs">{course.text}</p>

                  <div className="flex mt-5">
                    <NavLink to="select-course" className="uppercase bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10
                    btn w-full rounded-full border border-gray-300 hover:border-gray-400 dark:border-gray-600
                    ">
                      Go to Course
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* ------------------- */}

      {/* ------------------- */}
      <div className="flex flex-col justify-center items-center mt-18">
        <h1 className="text-4xl text-center uppercase font-semibold">
          How does Weya+ work?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 ">

          <div className="rounded-2xl p-5 transition-all duration-300 border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
            <div className="flex flex-wrap justify-between">
              <div className="font-semibold">
                Choose the right course for you
              </div>
              <div className="text-5xl font-semibold mr-1">
                01
              </div>
            </div>

            <p className="text-sm mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
          </div>

          <div className="rounded-2xl p-5 transition-all duration-300 border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
            <div className="flex flex-wrap justify-between">
              <div className="font-semibold">
                Choose the right course for you
              </div>
              <div className="text-5xl font-semibold mr-1">
                02
              </div>
            </div>

            <p className="text-sm mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
          </div>

          <div className="rounded-2xl p-5 transition-all duration-300 border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
            <div className="flex flex-wrap justify-between">
              <div className="font-semibold">
                Choose the right course for you
              </div>
              <div className="text-5xl font-semibold mr-1">
                03
              </div>
            </div>

            <p className="text-sm mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
          </div>

        </div>

      </div>
      {/* ------------------- */}



      {/* ------------------- */}
      <div className="flex flex-col justify-center items-center mt-18 w-full">

        <h1 className="text-4xl text-center">
          Choose a specialization, complete a masterclass,
          <br />and gain experience!
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-8 w-full">

          <div className="rounded-2xl py-8 flex flex-col justify-center items-center border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 transition-all duration-300">
            <p className="font-semibold">
              Total number of students
            </p>
            <span className="text-5xl font-semibold mt-2">
              +12,265
            </span>
          </div>


          <div className="rounded-2xl py-8 flex flex-col justify-center items-center border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 transition-all duration-300">
            <p className="font-semibold">
              Number of lessons recorded
            </p>
            <span className="text-5xl font-semibold mt-2">
              +265
            </span>
          </div>

          <div className="rounded-2xl py-8 flex flex-col justify-center items-center border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10 transition-all duration-300">
            <p className="font-semibold">
              Average team experience
            </p>
            <span className="text-5xl font-semibol mt-2">
              +7 YEARS
            </span>
          </div>
        </div>

      </div>
      {/* ------------------- */}


      {/* ------------------- */}
      <div className="flex flex-col justify-center items-center mt-18">
        <h1 className="text-4xl text-center">
          Choose a specialization, complete a masterclass, and gain experience!
        </h1>

        <div className="flex items-center justify-center w-[100%] mt-20 mb-20">
          <div className="relative px-10 py-6 rounded-3xl shadow-lg text-center w-full  mt-5 border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
            <div className="absolute top-0 left-0 right-0 -mt-12 flex justify-center">
              <div className="w-30 h-30 dark:bg-gray-900 rounded-full flex items-center justify-center shadow-xl border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
                <span className="font-semibold text-lg">Logo.</span>
              </div>
            </div>
            <h1 className="text-4xl font-medium mt-22">
              Start building your <br /> future now!
            </h1>
            <button className="mt-6 btn rounded-full border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      {/* ------------------- */}

      <Footer />
    </div>
  );
}

export default Education;
