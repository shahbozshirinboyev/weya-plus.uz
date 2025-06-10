import Logo from "@/assets/images/logos/weya_plus.png";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function Footer() {
  const links = [
    { to: "/about", label: "About Us" },
    { to: "/faq", label: "FAQ" },
    { to: "/privacy-policy", label: "Privacy Policy" },
    { to: "/contact", label: "Contact Us" },
  ];
  return (
    <footer className="relative w-full p-8 bg-gray-900 shadow shadow-gray-950 rounded-t-3xl text-gray-50">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0">
        <img src={Logo} alt="Logo" className="w-20" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6 mt-12 sm:mt-1">
        <nav className="hidden md:flex justify-center gap-x-5 text-sm">
          <Link to="/edu">EDU</Link>
          <Link to="/talk">Talk</Link>
          <Link to="/webtoon">Webtoon</Link>
          <Link to="/game">Game</Link>
          <Link to="/media">Media</Link>
          <Link to="/contest">Contest</Link>
        </nav>

        <div className="flex flex-wrap justify-center items-center gap-1 text-sm">
          {links.map((link, i) => (
            <Fragment key={link.to}>
              <Link to={link.to}>{link.label}</Link>
              {i < links.length - 1 && <span className="mx-2">|</span>}
            </Fragment>
          ))}
        </div>

        <div className="text-xs space-y-1">
          <p>KOREA : Weayaa Co., LTD CEO 이승현 등록번호 482-88-02872</p>
          <p>UZBEKISTAN : Weayaa LLC CEO 김대근 등록번호 311-176-835</p>
          <p>Copyright® 2024, WeaYaa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
