"use client";

import ApplicationForm from "@/components/EducationalComp/FormComponent/ApplicationForm";
import Sidebar from "@/components/EducationalComp/Sidebar";


import { useRouter } from "next/navigation";

import React, { useState } from "react";

const page = () => {
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
        router.push("/payment"); // Replace with your actual landing page route
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
  return (
    <div>
      
      <div className="flex mt-28 justify-between bg-gray-50">
        <Sidebar />
        <div className="w-[80%] bg-gray-50 py-10">
          <ApplicationForm
            handleShowNotice={handleShowNotice}
            setDisabled={setDisabled}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
