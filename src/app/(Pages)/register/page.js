"use client";
import Register from "@/components/Register";
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
          "66d40359cbd66ef0ea3627c2",
          "ce151ce044ebbece",
          "66d3fcb8cbd66ef0ea3627c0",
          "k7cKKmBDRXZOWM2KYvWkUA",
          "mn0LASzKdhD9-8Nd49NmZqamBu2kKAxeIwmGDk0mhpA"
        );
        setTimeout(() => {
          setDisabled(false);
        }, 2000);
      }
    }
  };

  return (
    <div className="">
      <Register
        handleShowNotice={handleShowNotice}
        disabled={disabled}
        setDisabled={setDisabled}
      />
    </div>
  );
};

export default Page;
