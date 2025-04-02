import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#343434] text-white p-6 md:p-8 rounded-t-2xl">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <h2 className="text-lg font-semibold mb-4">LOGO.</h2>
        <nav className="flex flex-wrap justify-center md:justify-start gap-4 text-sm mb-4">
          <a href="#">About us</a>
          <a href="#">FAQ</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </nav>
        <div className="text-xs space-y-1">
          <p>KOREA : Weaya Co., LTD CEO 이성혁 등록번호 482-88-02872</p>
          <p>UZBEKISTAN : Weaya LLC CEO 리야드 등록번호 311-176-835</p>
          <p>Copyright© 2024, WeaVas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer