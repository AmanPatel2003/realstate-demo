"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";
import Sidebar from "@/components/EducationalComp/Sidebar";
import ExamForm from "@/components/EducationalComp/FormComponent/ExamForm";

const Page = () => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    email: "",
    course: "",
    semester: "",
    subject: "",
    contactNumber: "",
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
        router.push("/educational-Institute/dashboard"); // Replace with your actual landing page route
        localStorage.removeItem("agreement_id");
      } else {
        // If agreement_id doesn't exist, show the notice center
        morajNoticeCenter(
          "66d5b19ecbd66ef0ea3627f4",
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
  const updateFormData = () => {
    setFormData({
      name: "John Doe",
      studentId: "STU123456",
      email: "johndoe@example.com",
      course: "B.Tech",
      semester: "5",
      subject: "Computer Science",
      contactNumber: "9876543210",
    });
  };
  return (
    <div>
      <div className="flex mt-28 justify-between bg-gray-50">
        <Sidebar className="w-[20%]" />
        <div className="w-[80%] bg-gray-50">
          <h1 className="text-2xl font-semibold text-black mt-5">Exam Form</h1>
          <hr className="border-t-2 border-gray-300 my-2" />
          <div className="flex w-full  ">
            <div className="w-[80%] ">
              <ExamForm
                handleShowNotice={handleShowNotice}
                setDisabled={setDisabled}
                disabled={disabled}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
            <button
              onClick={updateFormData}
              className="bg-[#071C55] h-14 w-24 mr-14 text-white border border-[#071C55] focus:ring-2 hover:bg-white hover:text-[#071C55] font-medium rounded-md text-sm  py-1 text-center"
            >
              Fill data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
