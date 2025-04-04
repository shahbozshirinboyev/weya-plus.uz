import { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

function Education() {
  const courses = [
    {
      id: 1,
      category: "Frontend",
      title: "React Basics",
      mentor: "John Doe",
      lessons: 24,
      image: "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",
    },
    {
      id: 2,
      category: "Frontend",
      title: "Advanced React",
      mentor: "Alice Brown",
      lessons: 30,
      image: "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",

    },
    {
      id: 9,
      category: "Frontend",
      title: "Advanced React",
      mentor: "Alice Brown",
      lessons: 30,
      image: "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",

    },
    {
      id: 3,
      category: "Backend",
      title: "Express Backend",
      mentor: "Azimjon Pulatov",
      lessons: 32,
      image: "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",

    },
    {
      id: 4,
      category: "Backend",
      title: "Node.js API",
      mentor: "Max Smith",
      lessons: 28,
      image: "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",

    },
    {
      id: 5,
      category: "Mobile Developer",
      title: "Flutter Fundamentals",
      mentor: "Jane Smith",
      lessons: 20,
      image: "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",

    },
    {
      id: 6,
      category: "Mobile Developer",
      title: "React Native Basics",
      mentor: "Robert Wilson",
      lessons: 18,
      image: "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",

    },
    {
      id: 7,
      category: "UI design",
      title: "Figma Essentials",
      mentor: "Sara Connor",
      lessons: 15,
      image: "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",

    },
    {
      id: 8,
      category: "UI design",
      title: "Prototyping in Figma",
      mentor: "David Lee",
      lessons: 22,
      image: "https://42.uz/_next/image?url=http%3A%2F%2Fapi.42.uz%2Fmedia%2Fthumbnails%2FThumbnail-2.png&w=640&q=75",

    },
  ];
  const categories = [
    "UI design",
    "Frontend",
    "Mobile Developer",
    "Graphic design",
    "Backend",
    "UX design",
  ];
  const [selectedCategory, setSelectedCategory] = useState("Frontend");
  return (
    <div className="container mx-auto px-3">

      {/* ------------------- */}
      <div className="flex flex-col justify-center items-center h-[500px]">
        <h1 className="text-6xl text-center text-[#333]">
          STUDY <b>ABROAD</b> IS EASY WITH US
        </h1>
        <ul className="flex flex-wrap justify-center items-center gap-2 md:gap-3 xl:gap-5 my-5">
          <li className="btn-primary-edu">UI design</li>
          <li className="btn-primary-edu">Frontend</li>
          <li className="btn-primary-edu">Backend</li>
          <li className="btn-primary-edu">Mobile developer</li>
          <li className="btn-primary-edu">Graphic design</li>
          <li className="btn-primary-edu">UX design</li>
        </ul>
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <button className="btn rounded-full uppercase mt-5 bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20 border-[#333] text-[#333]">
          get started
        </button>
      </div>
      {/* ------------------- */}

      {/* ------------------- */}
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-4xl text-center text-[#333]">COURSES</h1>
        <div className="flex flex-wrap justify-center items-center gap-5 my-5  px-2 py-1 rounded-2xl shadow-none border-0 bg-white/95 backdrop-sepia-0  bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20">
          {categories.map((category) => (
            <button
              key={category}
              className={` px-2 py-1 border rounded-full ${
                selectedCategory === category
                  ? "btn-primary-edu"
                  : "btn-primary-edu"
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
                className="border border-[#ccc] rounded-lg shadow-lg backdrop-sepia-0 bg-gradient-to-r bg-white/95  from-[#2ec05a]/30 to-[#eed9ed]/70"
              >
                <NavLink to="select-course">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-45 object-cover rounded-t-md"
                />
                </NavLink>
                <div className="p-3 mb-2">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="font-medium">Mentor: {course.mentor}</p>
                  <p className="text-sm font-medium">
                    Number of lessons: {course.lessons}
                  </p>
                  <div className="flex mt-6">
                    <NavLink to="select-course"  className="btn flex-1 font-medium rounded-full border border-black  bg-white/95 backdrop-sepia-0  bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/40  ">
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
        <h1 className="text-4xl text-center text-[#333]">
          How does Weya+ work?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 ">

          <div className="rounded-2xl  p-5 border border-[#CCC] bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20 ">
            <div className="flex flex-wrap justify-between">
              <div className="font-semibold">
                Choose the right course for you
              </div>
              <div className="text-5xl font-semibold mr-1 text-[#22222280]">
                01
              </div>
            </div>

            <p className="text-sm mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
          </div>

          <div className="rounded-2xl p-5 border border-[#CCC] bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20 ">
            <div className="flex flex-wrap justify-between">
              <div className="font-semibold">
                Choose the right course for you
              </div>
              <div className="text-5xl font-semibold mr-1 text-[#22222280]">
                02
              </div>
            </div>

            <p className="text-sm mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
          </div>

          <div className="rounded-2xl p-5 border border-[#CCC] bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20 ">
            <div className="flex flex-wrap justify-between">
              <div className="font-semibold">
                Choose the right course for you
              </div>
              <div className="text-5xl font-semibold mr-1 text-[#22222280]">
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

        <h1 className="text-4xl text-center text-[#333]">
          Choose a specialization, complete a masterclass,
          <br />and gain experience!
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-8 w-full">

          <div className="rounded-2xl py-8 flex flex-col justify-center items-center border border-[#CCC] bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20">
              <p className="font-semibold">
                Total number of students
              </p>
              <span className="text-5xl font-semibold text-[#22222280]">
                +12,265
              </span>
          </div>


          <div className="rounded-2xl py-8 flex flex-col justify-center items-center border border-[#CCC] bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20 ">
              <p className="font-semibold">
                Number of lessons recorded
              </p>
              <span className="text-5xl font-semibold mr-1 text-[#22222280] mt-2 ">
                +265
              </span>
          </div>

          <div className="rounded-2xl py-8 flex flex-col justify-center items-center border border-[#CCC] bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20 ">
              <p className="font-semibold">
                Average team experience
              </p>
              <span className="text-5xl font-semibold mr-1 text-[#22222280] mt-2">
                +7 YEARS
              </span>
          </div>




        </div>


      </div>
      {/* ------------------- */}


      {/* ------------------- */}
      <div className="flex flex-col justify-center items-center mt-18">
        <h1 className="text-4xl text-center text-[#333]">
          Choose a specialization, complete a masterclass,
          <br />
          and gain experience!
        </h1>

        <div className="flex items-center justify-center w-[100%] mt-20 mb-20">
          <div className="relative px-10 py-6 rounded-3xl shadow-lg text-center w-full  mt-5 border border-[#ccc] bg-gradient-to-r from-[#eed9ed]/70 to-[#2ec05a]/30 ">
            <div className="absolute top-0 left-0 right-0 -mt-12 flex justify-center">
              <div className="w-30 h-30 bg-white rounded-full flex items-center justify-center shadow-xl border">
                <span className="font-semibold text-lg">Logo.</span>
              </div>
            </div>
            <h1 className="text-4xl font-medium mt-22 text-black ">
              Start building your <br /> future now!
            </h1>
            <button className="mt-6 px-6 py-3 rounded-full font-medium bg-gradient-to-r from-[#2ec05a]/40 to-[#eed9ed]/70">
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
