"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);

  const handleShowNotice = async () => {
    setDisabled(true);
    if (typeof window !== "undefined") {
      const { morajNoticeCenter } = await import(
        "concur-consent/morajNoticeCenter"
      );

      console.log("handleShowNotice function call");
      const agreementId = localStorage.getItem("agreement_id");
      if (agreementId) {
        // If agreement_id exists, route to the landing page
        router.push("/"); // Replace with your actual landing page route
        localStorage.removeItem("agreement_id");
      } else {
        // If agreement_id doesn't exist, show the notice center
        morajNoticeCenter(
          "66d5aac5cbd66ef0ea3627eb",
          "81771b3f7229940d",
          "66d572e4cbd66ef0ea3627d8",
          "JYTG0_bz07JHoYgIeVoBAA",
          "9TF1auwX9TtVvi0YjESl5BLZZUzoC63uRKoZ95BO9sk"
        );
        setTimeout(() => {
          setDisabled(false);
        }, 2000);
      }
    }
  };

  return (
    <section
      className="w-full pt-2.5 pb-15 bg-cover"
      style={{
        backgroundImage:
          "url(https://www.narayanahealth.org/assets/images/health-check-package-background.webp)",
      }}
    >
      <div className="flex items-center pt-5 pb-5 overflow-x-hidden">
        <div className="flex items-center mr-1.5">
          <a
            href="/"
            className="text-base font-normal text-white cursor-pointer"
          >
            Home &gt;
          </a>
        </div>
        <span className="text-base font-normal text-white">
          Health Check Package Form
        </span>
      </div>
      <div className="flex justify-end py-5 m-10">
        <div className="rounded-lg bg-white p-12">
          <div className="heading">
            <h2
              className="text-5xl font-bold text-gray-700 mb-10"
              style={{ lineHeight: 1.2 }}
            >
              Health Check Package Form
            </h2>
          </div>
          <div className="form-group mt-6 w-full">
            <div className="input-field">
              <label htmlFor="name">Full Name*</label>
              <input
                autoComplete="off"
                placeholder="Full Name*"
                className="w-full outline-none border p-2"
                id="name"
                name="name"
              />
            </div>
          </div>
          <div className="form-group mt-6 w-full">
            <div className="input-field">
              <label htmlFor="mobile">Phone Number*</label>
              <span className="flex items-center border">
                <span className="code text-gray-400 pl-1">+91</span>
                <input
                  autoComplete="off"
                  placeholder="Phone Number"
                  className="w-full outline-none p-2"
                  id="mobile"
                  maxLength="10"
                  name="mobile"
                />
              </span>
            </div>
          </div>
          <div className="form-group mt-6 w-full">
            <div className="input-field">
              <label htmlFor="email">Email ID*</label>
              <input
                autoComplete="off"
                placeholder="Enter your email ID"
                className="w-full outline-none border p-2"
                id="email"
                name="email"
              />
            </div>
          </div>
          <div className="form-group mt-6 w-full">
            <label htmlFor="city" className="text-gray-700 font-bold text-lg">
              Location*
            </label>
            <div className="relative">
              <select
                id="city"
                name="city"
                // value={selectedCity}
                // onChange={handleCityChange}
                className="block appearance-none w-full bg-white border-b text-gray-400  border-gray-300 py-2.5 px-4 pr-8 leading-tight  outline-none"
              >
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Chennai">Chennai</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>
            </div>
          </div>
          <div className="form-group mt-6 w-full pb-1.5">
            <span className="text-gray-700 font-bold text-lg">
              Hospitals & Clinics*
            </span>
            <div className="select-container flex justify-between cursor-pointer border-gray-300">
              <select className="block appearance-none w-full bg-white border-b text-gray-400  border-gray-300 py-2.5 px-4 pr-8 leading-tight  outline-none">
                <option value="" disabled selected>
                  Select hospital
                </option>
                <option value="hospital1">Hospital 1</option>
                <option value="hospital2">Hospital 2</option>
                <option value="hospital3">Hospital 3</option>
              </select>
            </div>
          </div>

          <div className="form-group mt-5 w-full pb-1.5">
            <span className="text-gray-700 font-bold text-lg">Packages*</span>
            <div className="select-container flex justify-between cursor-pointer border-gray-300">
              <select className="block appearance-none w-full bg-white border-b text-gray-400  border-gray-300 py-2.5 px-4 pr-8 leading-tight  outline-none">
                <option value="" disabled selected>
                  Select packages
                </option>
                <option value="package1">Package 1</option>
                <option value="package2">Package 2</option>
                <option value="package3">Package 3</option>
              </select>
            </div>
          </div>

          <div className="mt-5 w-full flex justify-between">
            <div className="form-group pb-1.5 w-1/2 pr-2.5">
              <span className="text-gray-700 font-bold text-lg">
                Preferred Time*
              </span>
              <div className="select-container flex justify-between cursor-pointer pt-2.5">
                <select className="block appearance-none w-full bg-white border-b text-gray-400  border-gray-300 py-2.5 px-4 pr-8 leading-tight  outline-none">
                  <option value="" disabled selected>
                    Select
                  </option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>
            </div>

            <div className="form-group pb-1.5 w-1/2 pl-2.5">
              <span className="text-gray-700 font-bold text-lg">Date*</span>
              <div className="relative">
                <label htmlFor="date" className="input-field cursor-pointer">
                  <input
                    id="date"
                    inputMode="none"
                    className="w-full outline-none border p-2"
                    placeholder="dd/mm/yyyy"
                    type="text"
                    name="date"
                  />
                  <i className="absolute top-1/2 right-2.5 transform -translate-y-1/2 nh-book text-blue-600"></i>
                </label>
              </div>
            </div>
          </div>
          <div className="form-group mt-6 w-full">
            <div className="input-field">
              <label htmlFor="query">Your Query</label>
              <textarea
                placeholder="Enter your query"
                className="w-full outline-none border p-1"
                name="query"
                id="query"
              ></textarea>
            </div>
          </div>
          <div className="mt-6 w-full flex items-center ">
            <span className="check-radio flex items-center">
              <span className="check-radio-wrap flex items-center cursor-pointer">
                <input
                  id="tnc_check"
                  className="checkbox"
                  type="checkbox"
                  name="tnc_check"
                />
                <label
                  className="text-lg cursor-pointer flex items-center text-gray-500 ml-2"
                  htmlFor="tnc_check"
                >
                  <span className="block"></span>
                </label>
              </span>
            </span>
            <span className="text-gray-500 font-medium text-base ml-2">
              By clicking Submit, you agree to the Terms & Conditions and
              Privacy Policy of Narayana Health’s website.
            </span>
          </div>
          <div className="mt-10 text-left">
            <button
              onClick={handleShowNotice}
              className="btn bg-blue-600 text-white px-6 py-2 rounded-md"
              disabled={disabled}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
