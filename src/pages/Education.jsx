import { NavLink } from "react-router-dom";

function Education() {
  return (
    <div className="container mx-auto">
      {/* ------------------- */}
      <div className="flex flex-col justify-center items-center h-[500px]">
        <h1 className="text-6xl text-center text-[#333]">
          STUDY <b>ABROAD</b> IS EASY WITH US
        </h1>
        <ul className="flex justify-center items-center gap-5 my-5">
          <li className="btn-primary-edu">UI design</li>
          <li className="btn-primary-edu">Frontend</li>
          <li className="btn-primary-edu">Backend</li>
          <li className="btn-primary-edu">Mobile developer</li>
          <li className="btn-primary-edu">Graphic design</li>
          <li className="btn-primary-edu">UX design</li>
        </ul>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="btn rounded-full uppercase mt-5 bg-gradient-to-r from-[#eed9ed]/50 to-[#2ec05a]/20 border-[#333] text-[#333]">get started</button>
      </div>
      {/* ------------------- */}
      <NavLink to="select-course">
        <button className="btn">Select Course</button>
      </NavLink>
    </div>
  );
}

export default Education;
