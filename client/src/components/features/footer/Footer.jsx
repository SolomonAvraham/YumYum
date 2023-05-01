import React from "react";

function Footer() {
  return (
    <footer className="bg-[#76a561] py-3  shadow-2xl">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-2 flex justify-center items-center gap-2">
          <img className=" w-10    p-1 " src="icons/icon.png" alt="icon" />
          <p className="text-base text-white font-three">&copy; 2023 Yum Yum</p>
        </div>
        <p className=" text-xs p-1 text-center text-white ">
          A recipe site platform that provides users with a wide variety of
          culinary ideas, cooking techniques, and recipe inspiration. These
          sites can range from simple blogs run by food enthusiasts.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
