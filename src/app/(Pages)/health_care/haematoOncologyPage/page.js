"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });
  const [disabled, setDisabled] = useState(true);

  // Function to update form data (prefill example)
  const updateFormData = () => {
    setFormData({
      fullName: "Gaurav Mehta",
      phoneNumber: "8770467824",
      email: "demo@perfios.com",
    });
  };

  // Enable/Disable submit button based on form completeness
  useEffect(() => {
    const isFormComplete =
      formData.fullName !== "" &&
      formData.phoneNumber !== "" &&
      formData.email !== "";
    setDisabled(!isFormComplete);
  }, [formData]);

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
        router.push("/health_care"); // Replace with your actual landing page route
        localStorage.removeItem("agreement_id");
      } else {
        // If agreement_id doesn't exist, show the notice center
        morajNoticeCenter(
          "66d59a7fcbd66ef0ea3627df",
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
    <div>
      <main
        id="narayan-main"
        className="narayana narayana--default flex items-center flex-col "
      >
        <section className="relative flex items-center justify-between bg-gradient-to-r from-white via-white to-transparent w-[85%]">
          <div className="absolute flex flex-col gap-3 w-1/3">
            {/* Heading */}
            <h1
              className="font-bold text-gray-700 text-4xl mb-4"
              style={{ lineHeight: "1.2" }}
            >
              Adult Haemato-oncology And Bmt
            </h1>

            {/* Description */}
            <div className="font-medium text-base text-gray-700 mb-4">
              <p>
                Narayana Health is a leading BMT services provider across Asia
                with over 1500 conducted procedures&nbsp;
              </p>
            </div>

            {/* Button */}
            <a
              className="bg-blue-600 text-white py-5 px-12 rounded-md"
              href="/ocaapp/doctors/bangalore/adult-haemato-oncology-and-bmt"
            >
              Find an Adult Haemato-oncology And Bmt Doctor
            </a>
          </div>

          {/* Banner Image */}
          <span className="flex justify-end w-full">
            <span className="block w-full">
              <Image
                id="image-banner"
                alt="Adult Haemato-oncology And Bmt"
                fetchPriority="high"
                width={1920}
                height={701}
                decoding="async"
                className="w-full h-auto"
                src="https://stgaccinwbsdevlrs01.blob.core.windows.net/newcorporatewbsite/specialities/June2024/Sj4VOcS5z697dTz65UiN.webp?w=3840&q=100"
              />
            </span>
          </span>
        </section>

        {/* Overview Section */}
        <div className="flex w-full justify-center px-20 py-10">
          <section className="container-fluid flex justify-between pt-12 pb-16 w-[70%]">
            <div className="pr-12 mr-12 w-full">
              <div className="heading">
                <h2 className="text-2xl font-bold text-blue-600 mb-4 leading-tight">
                  Overview
                </h2>
              </div>
              <div className="specialities--staticHtml">
                <p>
                  Blood cancer is one of the most dreaded ailments of all. Being
                  or taking care of a cancer patient can deeply impact your
                  mental and emotional health. However, you should know that you
                  are not alone in this difficult journey, and expert doctors
                  from Narayana Health are there to treat the condition and help
                  you navigate the situation. When every year about 1 lakh
                  people get diagnosed with blood cancer in India, we have built
                  a cancer fighting troop of our own. &nbsp;
                </p>
                <p>
                  Haemato Oncology is a medical specialty that deals with the
                  diagnosis and treatment of blood cancer and other haematologic
                  ailments. The human body produces three types of blood cells-
                  red blood cells (RBC), white blood cells (WBC), and platelets.
                  A person may develop blood cancer when their bone marrow
                  produces an excess of any of these blood cells. In certain
                  conditions, while the amount of blood cells remain consistent
                  with normal body function, the cells may develop abnormalities
                  or mutations, resulting in blood cancer. This can prevent the
                  blood from performing normal functions, such as transporting
                  nutrition and oxygen, fighting diseases, and clotting wounds.
                  Depending on the type of blood disease and the extent of the
                  spread of cancer, a haematologist may suggest a cancer
                  treatment with a bone marrow transplant (BMT).&nbsp;
                </p>
                {/* Add more paragraphs, lists, and content as needed */}
              </div>
            </div>
            {/* Add other sections like "Why Choose Narayana Health", "Preparation for BMT", etc. */}
          </section>

          {/* Reach Out Form */}
          <section className="specialities--form mt-8 w-[30%] ">
            <h2 className="text-4xl font-bold text-gray-700 mb-4">
              Reach out to us
            </h2>
            <div className="flex w-full px-4 justify-center gap-4  ">
              <button
                onClick={updateFormData}
                className="btn bg-blue-300 mr-2 w-1/2 py-2 px-2 text-gray-700 font-bold text-center rounded-md text-lg"
                href="/hospitals"
              >
                Fill Data
              </button>
              <a
                className=" bg-blue-200 w-1/2 py-2 px-2 text-gray-700 font-bold text-center rounded-md text-lg"
                href=""
              >
                Find a Doctor
              </a>
            </div>
            <div className="mt-6">
              <div className="form-group mb-6">
                <label htmlFor="fullname" className="block">
                  Full Name*
                </label>
                <input
                  autoComplete="off"
                  placeholder="Enter Here"
                  id="fullname"
                  name="fullname"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full border border-gray-300 p-3 rounded-md"
                />
              </div>
              <div className="form-group mb-6">
                <label htmlFor="mobile" className="block">
                  Phone Number*
                </label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <span className="code bg-gray-100 p-3 rounded-l-md">+91</span>
                  <input
                    autoComplete="off"
                    placeholder="Enter Here"
                    id="mobile"
                    maxLength="10"
                    name="mobile"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    className="w-full p-3 rounded-r-md"
                  />
                </div>
              </div>
              <div className="form-group mb-6">
                <label htmlFor="email" className="block">
                  Email ID*
                </label>
                <input
                  autoComplete="off"
                  placeholder="Enter Here"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-gray-300 p-3 rounded-md"
                />
              </div>
              <div className="mt-8">
                <button
                  disabled={disabled}
                  onClick={handleShowNotice}
                  className={`btn ${
                    disabled ? "bg-gray-400" : "bg-blue-600"
                  } text-white py-3 px-6 rounded-md`}
                >
                  Submit
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Page;
