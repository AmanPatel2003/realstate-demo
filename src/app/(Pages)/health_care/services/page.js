"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Page = () => {
  const [selectedItem, setSelectedItem] = useState("all"); // Default selection is "all"
  const [selectedLetter, setSelectedLetter] = useState("A");
  const handleItemClick = (item) => {
    setSelectedItem(item); // Set the clicked item as the selected item
  };

  // Default letter is "A"

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter); // Update the selected letter
  };
  return (
    <div className="min-h-screen mt-20">
      <main id="narayan-main" className="narayana narayana--default">
        <section className="bg-gray-100 relative flex justify-center items-center container-fluid pt-16">
          <div className="flex items-center justify-center flex-wrap">
            <div className="w-1/3">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                All-inclusive Care
              </h1>
              <p className="text-lg text-gray-500">
                We are committed to addressing all your healthcare needs,
                offering services ranging from hospitals and clinics to labs,
                pharmacies, and insurance. Our goal is to provide a
                comprehensive and personalised healthcare experience that best
                serves you.
              </p>
            </div>
            <Image
              alt="Banner Image"
              loading="lazy"
              width={650}
              height={650}
              decoding="async"
              className="object-contain"
              src="https://stgaccinwbsdevlrs01.blob.core.windows.net/newcorporatewbsite/page-banner-details/December2023/WpNzdpmdsyNYop1JsYiM.webp?w=750&q=75"
            />
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="flex flex-col items-center">
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Explore Medical Specialties
              </h2>
              <p className="text-lg text-gray-500">
                Browse through our list of Medical Specialties to narrow down
                the list.
              </p>
            </div>
            <ul className="flex space-x-4">
              {["all", "speciality", "sub speciality"].map((item) => (
                <li
                  key={item}
                  onClick={() => handleItemClick(item)}
                  className={`py-2 px-4 rounded-md cursor-pointer capitalize ${
                    selectedItem === item
                      ? "font-bold bg-blue-600 text-white"
                      : "font-medium text-blue-600"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-gray-100 p-2.5 mt-8 rounded-lg w-1/2">
              <div className="text-gray-600">
                <label className="text-base font-medium text-black">
                  Search By
                </label>
                <div className="flex items-center">
                  <i className="fas fa-search text-gray-400 absolute text-lg">
                    <IoSearchOutline />
                  </i>
                  <div className="font-bold w-full">
                    <input
                      autoComplete="off"
                      placeholder="Specialty, Procedure & Conditions"
                      className="w-full py-2 px-4 pl-8 border-b border-gray-300 bg-transparent outline-none "
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white pt-20 ml-20">
            <span className="text-xl font-bold text-gray-800">
              Find a topic by its first letters
            </span>
            <ul className="flex space-x-3 pt-8">
              {[
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "l",
                "m",
                "n",
                "o",
                "p",
                "r",
                "s",
                "t",
                "u",
                "v",
                "y",
              ].map((letter) => (
                <li
                  key={letter}
                  onClick={() => handleLetterClick(letter.toUpperCase())} // Convert to uppercase when clicked
                  className={`font-medium py-2 px-3 rounded-md cursor-pointer capitalize ${
                    selectedLetter === letter.toUpperCase()
                      ? "bg-blue-600 text-white"
                      : "bg-blue-100 text-gray-700"
                  }`}
                >
                  {letter}
                </li>
              ))}
            </ul>

            <div className="container-fluid py-20 bg-white">
              <span className="bg-blue-600 text-white py-2 px-4 rounded-md">
                {selectedLetter} {/* Display the selected letter */}
              </span>
              <div className="flex flex-wrap pt-5">
                <Link
                  className="mt-2 mr-10 w-1/4 text-lg font-medium text-gray-700 py-5 border-b"
                  href="/health_care/haematoOncologyPage"
                >
                  Adult Haemato-oncology And Bmt
                </Link>
                <Link
                  className="mt-2 mr-10 w-1/4 text-lg font-medium text-gray-700 py-5 border-b"
                  href="/health_care/haematoOncologyPage"
                >
                  Anesthesiology
                </Link>
                <Link
                  className="mt-2 mr-10 w-1/4 text-lg font-medium text-gray-700 py-5 border-b"
                  href="/health_care/haematoOncologyPage"
                >
                  Audiology
                </Link>
                {/* Add more specialty links as needed */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
