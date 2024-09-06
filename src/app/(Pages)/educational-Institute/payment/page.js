"use client";

import Sidebar from "@/components/EducationalComp/Sidebar";
import Payment from "@/components/EducationalComp/FormComponent/Payment";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    agree: false,
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
        router.push("/educational-Institute/dashboard");
        localStorage.removeItem("agreement_id");
      } else {
        morajNoticeCenter(
          "66d97619cbd66ef0ea362866",
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
      cardNumber: "4111111111111111",
      expiryMonth: "12",
      expiryYear: "2025",
      cvv: "123",
      agree: true,
    });
  };
  return (
    <div>
      <div className="flex mt-28 justify-between h-screen bg-gray-50">
        <Sidebar className="w-[20%]" />
        <div className="w-[80%] bg-gray-50">
          <h1 className="text-2xl font-semibold text-black  mt-5">
            Make Payment
          </h1>
          <hr className="border-t-2 border-gray-300 my-4" />
          <div className=" flex">
            <Payment
              handleShowNotice={handleShowNotice}
              setDisabled={setDisabled}
              disabled={disabled}
              formData={formData}
              setFormData={setFormData}
            />
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

export default page;
