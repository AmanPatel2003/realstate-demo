"use client";
import React, { useState } from "react";

import RegisterForm from "../FormComponent/RegisterForm";
import { morajNoticeCenter } from "concur-consent/morajNoticeCenter";
import { useRouter } from "next/navigation";

const IntroPage = () => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
        router.push("/dashboard"); // Replace with your actual landing page route
        localStorage.removeItem("agreement_id");
      } else {
        // If agreement_id doesn't exist, show the notice center
        morajNoticeCenter(
          "66d5a5b3cbd66ef0ea3627e7",
          "33a63dcfcc9a1e8d",
          "66d5a0fdcbd66ef0ea3627e5",
          "fweWzJHL0aaFZpHx9MWI3Q",
          "0zIgEDdg3WbyU2Ev-6vpUz1oa3CUh9yHereJzAVtVsA"
        );
        setTimeout(() => {
          setDisabled(false);
        }, 2000);
      }
    }
  };
  return (
    <div
      className=" h-[90vh] w-full bg-cover flex mt-28 rounded-lg"
      style={{
        backgroundImage:
          'url("https://admission.matsuniversity.ac.in/wp-content/uploads/2024/02/MATS_02-1-scaled.jpg")',
      }}
    >
      <div className="w-[50%] flex pt-20  pl-16 ">
        <div className="">
          <h1 className="text-5xl font-bold text-white ">
            Experiential Learning
          </h1>
          <h1 className="text-4xl text-white font-bold mt-2">at its best!</h1>
          <p className="text-white mt-5">
            Pursue your Passion with{" "}
            <span className="text-white font-semibold text-lg">
              {" "}
              Hogwarts University
            </span>
          </p>
          <div className="flex gap-5 mt-10">
            <button
              className="bg-[#3C4852] rounded-md text-white px-4 py-3"
              onClick={handleApplyClick}
            >
              Admission Open For 2024-25
            </button>
            <button
              className="bg-[#3C4852] rounded-md text-white py-3 px-3"
              onClick={handleApplyClick}
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-[50%] p-4">
        <RegisterForm
          handleShowNotice={handleShowNotice}
          setDisabled={setDisabled}
          disabled={disabled}
        />
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
            <RegisterForm
              handleShowNotice={handleShowNotice}
              se
              setDisabled={setDisabled}
              disabled={disabled}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroPage;
