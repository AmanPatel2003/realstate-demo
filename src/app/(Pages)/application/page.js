
"use client"

import Application from "@/components/Application";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);

  const handleShowNotice = async () => {
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
          "66d56e1dcbd66ef0ea3627cd",
          "ce151ce044ebbece",
          "66d56a10cbd66ef0ea3627cc",
          "kL7bIHE9NtNV-BsIgRwstQ",
          "t_EOF7n0_zMI2re4KbnSRy5svtTNN8PUx91bC3kfbfU"
        );
        setTimeout(() => {
          setDisabled(false);
        }, 2000);
      }
    }
  };
  return (
    <div className="">
      <Application
        handleShowNotice={handleShowNotice}
        disabled={disabled}
        setDisabled={setDisabled}
      />
    </div>
  );
};

export default Page;
