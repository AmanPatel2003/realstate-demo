"use client";

import ApplicationForm from "@/components/EducationalComp/FormComponent/ApplicationForm";
import Sidebar from "@/components/EducationalComp/Sidebar";

import { useRouter } from "next/navigation";

import React, { useState } from "react";

const page = () => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    category: "",
    program: "",
    course: "",
    country: "",
    state: "",
    city: "",
    address: "",
    marks12th: "",
    universityName: "",
    schoolName: "",
    passingYear: "",
    percentage: "",
  });

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
        router.push("/educational-Institute/payment"); // Replace with your actual landing page route
        localStorage.removeItem("agreement_id");
      } else {
        // If agreement_id doesn't exist, show the notice center
        morajNoticeCenter(
          "66d96a66cbd66ef0ea36285e",
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

  // Update form data with predefined values including the program and course
  const updateFormData = () => {
    setFormData({
      name: "John Doe",
      email: "john.doe@example.com",
      mobile: "9876543210",
      state: "California",
      city: "Los Angeles",
      program: "graduate", // Set program to 'graduate'
      course: "BSC", // Set a valid course for the selected program
      dob: "1990-01-01",
      gender: "male",
      category: "general",
      country: "United States",
      address: "123 Main Street",
      marks12th: "85%",
      universityName: "XYZ University",
      schoolName: "ABC High School",
      passingYear: "2008",
      percentage: "85",
    });
  };

  return (
    <div>
      <div className="flex mt-28 justify-between bg-gray-50">
        <Sidebar />
        <div className="w-[80%] bg-gray-50 py-5 flex justify-around">
          <ApplicationForm
            handleShowNotice={handleShowNotice}
            setDisabled={setDisabled}
            disabled={disabled}
            formData={formData}
            setFormData={setFormData}
          />
          <button
            onClick={updateFormData}
            className="bg-[#071C55] h-14 text-white border border-[#071C55] focus:ring-4 hover:bg-white hover:text-[#071C55] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-3 text-center"
          >
            Fill data
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
