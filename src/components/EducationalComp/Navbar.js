"use client";
import React, { useState } from "react";
import RegisterForm from "./FormComponent/RegisterForm";
import Link from "next/link";
import Image from "next/image";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState); // Toggle dropdown visibility
  };

  // const handleApplyClick = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className=" w-[100vw]  bg-white fixed top-0 z-50">
      <div className="bg-[#071C55]">
        <ul className="flex justify-end text-xs text-white gap-5 p-2 pr-10 ">
          <li>hogwartsuradmission@hogwartsuniversity.org</li>
          <li>91653232322</li>
          <li>NAAC</li>
          <li>Get Brochure</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div className="flex shadow-xl">
        <div className="w-[30%]  flex items-center pl-14 h-20 ">
          <Link href="/educational-Institute">
            <Image
              src="/image/logo.png"
              alt="logo"
              width={100}
              height={50}
              className="h-20 w-24 bg-transparent"
            />
          </Link>
        </div>

        <div className="w-[70%]  h-20   flex justify-end pr-10 gap-5 items-center">
          <ul className="flex  text-sm cursor-pointer font-semibold gap-5 text-[#071C55]">
            <li>School</li>
            <li>Faculty</li>
            <li>Research</li>
            <li>Placement</li>
          </ul>
          <Link href="/educational-Institute/preference-center">
            <button className="bg-[#071C55]  px-5  py-2 text-sm rounded-lg  text-white">
              PreferenceCenter
            </button>
          </Link>
          {/* <div>
            <button
              onClick={handleApplyClick}
              className="bg-[#071C55] text-sm px-5  py-2 rounded-lg  text-white"
            >
              Apply Now
            </button>
          </div> */}
          <div className="relative">
            <div className="relative  ">
              <div
                className="cursor-pointer  text-[#071C55]"
                onClick={toggleDropdown}
              >
                <FaBell size={20} />
              </div>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-96 z-50 bg-white shadow-2xl rounded-lg px-4 py-4">
                   <Link href='/educational-Institute/preference-center'>
                  
                  <div className="p-2 border-b border-gray-400 cursor-pointer">
                    <h1 className="text-gray-500 font-normal text-xs">
                      22, August, 2024
                    </h1>
                    <h1 className="text-[#071C55] font-semibold text-sm">
                      Your registration for the Fall 2024 semester is pending. Please complete your registration by the deadline.
                    </h1>
                  </div>
                  </Link>
                  <Link href='/educational-Institute/preference-center'>
                  
                  <div className="p-2 border-b border-gray-400 cursor-pointer">
                    <h1 className="text-gray-500 font-normal text-xs">
                      22, August, 2024
                    </h1>
                    <h1 className="text-gray-600 font-semibold text-sm">
                      Your tuition fee payment of ₹ 75,000.00 has been successfully processed.
                    </h1>
                  </div>
                  </Link>
                  <Link href='/educational-Institute/preference-center'>
                  
                  <div className="p-2 border-b border-gray-400 cursor-pointer">
                    <h1 className="text-gray-500 font-normal text-xs">
                      23, August, 2024
                    </h1>
                    <h1 className="text-[#071C55] font-semibold text-sm">
                      Your access to the student library has expired. Please renew your membership for uninterrupted access.
                    </h1>
                  </div>
                  </Link>
                  <Link href='/educational-Institute/preference-center'>
                  
                  <div className="p-2 border-b border-gray-400 cursor-pointer">
                    <h1 className="text-gray-500 font-normal text-xs">
                      23, August, 2024
                    </h1>
                    <h1 className="text-gray-600 font-semibold text-sm">
                      Exam schedule for the Fall 2024 semester has been released. Check your student portal for details.
                    </h1>
                  </div>
                  </Link>
                  <Link href='/educational-Institute/preference-center'>
                  
                  <div className="p-2 border-b border-gray-400 cursor-pointer">
                    <h1 className="text-gray-500 font-normal text-xs">
                      23, August, 2024
                    </h1>
                    <h1 className="text-[#071C55] font-semibold text-sm">
                      Your course enrollment for the new semester is incomplete. Please enroll before the deadline.
                    </h1>
                  </div>
                  </Link>
                  <Link href='/educational-Institute/preference-center'>
                  
                  <div className="p-2 border-gray-400 cursor-pointer">
                    <h1 className="text-gray-500 font-normal text-xs">
                      24, August, 2024
                    </h1>
                    <h1 className="text-gray-600 font-semibold text-sm">
                      Your final grades for the Spring 2024 semester are now available. Visit your student portal to view them.
                    </h1>
                  </div>
                  </Link>
                </div>

              )}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl flex justify-end p-2 w-[100%] max-w-md">
            <button
              onClick={handleCloseModal}
              className="absolute z-40 text-xl pr-2 text-white"
            >
              x
            </button>
            <RegisterForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
