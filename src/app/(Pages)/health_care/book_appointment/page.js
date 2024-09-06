"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    city: "",
    hospital: "",
    package: "",
    preferredTime: "",
    date: "",
    query: "",
    tncCheck: false,
  });
  const [disabled, setDisabled] = useState(true);

  // Function to update form data (prefill example)
  const updateFormData = () => {
    setFormData({
      fullName: "Gaurav Mehta",
      phoneNumber: "8770467824",
      email: "demo@perfios.com",
      city: "Bangalore",
      hospital: "hospital1",
      package: "package1",
      preferredTime: "morning",
      date: "01/01/2024",
      query: "Sample query",
      tncCheck: true,
    });
  };

  // Enable/Disable submit button based on form completeness
  useEffect(() => {
    const isFormComplete =
      formData.fullName !== "" &&
      formData.phoneNumber !== "" &&
      formData.email !== "" &&
      formData.city !== "" &&
      formData.hospital !== "" &&
      formData.package !== "" &&
      formData.preferredTime !== "" &&
      formData.date !== "" &&
      formData.tncCheck;

    setDisabled(!isFormComplete);
  }, [formData]);

  const handleShowNotice = async () => {
    if (disabled) return;

    setDisabled(true);
    if (typeof window !== "undefined") {
      const { morajNoticeCenter } = await import(
        "concur-consent/morajNoticeCenter"
      );

      console.log("handleShowNotice function call");
      const agreementId = localStorage.getItem("agreement_id");
      if (agreementId) {
        router.push("/health_care"); // Replace with your actual landing page route
        localStorage.removeItem("agreement_id");
      } else {
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
      <button
        onClick={updateFormData}
        className="absolute top-20 bg-blue-600  right-10 text-white border border-white focus:ring-4 hover:bg-red-500 hover:text-white font-medium rounded-md text-base w-full sm:w-auto px-7 py-3 text-center"
      >
        Fill Data
      </button>
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
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
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
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
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
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="block appearance-none w-full bg-white border-b   border-gray-300 py-2.5 px-4 pr-8 leading-tight  outline-none"
              >
                <option value="" disabled>
                  Select location
                </option>
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
              <select
                value={formData.hospital}
                onChange={(e) =>
                  setFormData({ ...formData, hospital: e.target.value })
                }
                className="block appearance-none w-full bg-white border-b   border-gray-300 py-2.5 px-4 pr-8 leading-tight  outline-none"
              >
                <option value="" disabled>
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
              <select
                value={formData.package}
                onChange={(e) =>
                  setFormData({ ...formData, package: e.target.value })
                }
                className="block appearance-none w-full bg-white border-b  border-gray-300 py-2.5 px-4 pr-8 leading-tight  outline-none"
              >
                <option value="" disabled>
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
                <select
                  value={formData.preferredTime}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredTime: e.target.value })
                  }
                  className="block appearance-none w-full bg-white border-b   border-gray-300 py-2.5 px-4 pr-8 leading-tight  outline-none"
                >
                  <option value="" disabled>
                    Select preferred time
                  </option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>
            </div>
            <div className="form-group pb-1.5 w-1/2">
              <span className="text-gray-700 font-bold text-lg">Date*</span>
              <input
                autoComplete="off"
                type="text"
                placeholder="dd/mm/yyyy"
                className="w-full outline-none border p-2"
                name="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-group mt-6 w-full">
            <div className="input-field">
              <label htmlFor="query">Query</label>
              <textarea
                autoComplete="off"
                placeholder="Enter your query"
                className="w-full outline-none border p-2"
                id="query"
                name="query"
                rows={4}
                value={formData.query}
                onChange={(e) =>
                  setFormData({ ...formData, query: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group mt-6 w-full flex items-center">
            <input
              type="checkbox"
              checked={formData.tncCheck}
              onChange={(e) =>
                setFormData({ ...formData, tncCheck: e.target.checked })
              }
              className="form-checkbox"
            />
            <span className="ml-2">
              I agree to the{" "}
              <a href="#" className="text-blue-500">
                terms and conditions
              </a>
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
