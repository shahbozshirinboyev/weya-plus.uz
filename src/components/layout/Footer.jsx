import Logo from "@/assets/images/logos/weya_plus.png";

function Footer() {
  return (
    <footer className="relative w-full p-8 bg-[#0F172A] rounded-t-3xl text-gray-50">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0">
        <img src={Logo} alt="Logo" className="w-20" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6 mt-12 sm:mt-1">
        <nav className="hidden md:flex justify-center gap-x-5 text-sm">
          <a href="#">EDU</a>
          <a href="#">Talk</a>
          <a href="#">Webtoon</a>
          <a href="#">Game</a>
          <a href="#">Media</a>
          <a href="#">Contest</a>
        </nav>

        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#">About us</a>
          <a href="#">FAQ</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </nav>

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
