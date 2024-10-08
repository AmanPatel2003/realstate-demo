"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginRegisterModal = ({setShowModal}) => {
  const router = useRouter();

  // State to manage form fields and button disabled status
  const [formData, setFormData] = useState({
    email: "",
    mobileNumber: "",
    tncCheck: false,
  });
  const [disabled, setDisabled] = useState(false);

  // Function to pre-fill form data with example values
  const updateFormData = () => {
    setFormData({
      email: "demo@perfios.com",
      mobileNumber: "9876543210",
      tncCheck: true,
    });
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
        setShowModal(false) // Replace with your actual landing page route
        localStorage.removeItem("agreement_id");
      } else {
        // If agreement_id doesn't exist, show the notice center
        morajNoticeCenter(
          "66d57627cbd66ef0ea3627da",
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
    <div className="flex">
      <ul className="bg-blue-100 text-center login-modal-left p-12 flex flex-col justify-around">
        <li className="flex flex-col items-center mb-8">
          <i className="nh-user text-4xl text-blue-600 p-2 bg-white rounded-full"></i>
          <span className="font-medium text-lg text-gray-700 pt-2">
            Access your health records in one place
          </span>
        </li>
        <li className="flex flex-col items-center mb-8">
          <i className="nh-writing-pad text-4xl text-blue-600 p-2 bg-white rounded-full"></i>
          <span className="font-medium text-lg text-gray-700 pt-2">
            Keep track of appointments and doctor visits
          </span>
        </li>
        <li className="flex flex-col items-center">
          <i className="nh-test text-4xl text-blue-600 p-2 bg-white rounded-full"></i>
          <span className="font-medium text-lg text-gray-700 pt-2">
            View your medical records and lab and test results
          </span>
        </li>
      </ul>

      <div className="login-modal-right flex flex-col bg-white ml-6 p-6">
        <div className="w-full flex justify-between">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            <span className="text-blue-600">Health</span>Care
          </span>
        </div>

        <div className="flex flex-col justify-between mt-6 login-modal-right-credentials">
          <h3 className="text-2xl font-bold text-gray-700">
            Login / Register Account
          </h3>
          <p className="text-lg font-medium text-gray-500 pt-4">
            Registered to NH Portal? Use your mobile number, as your medical
            history won&apos;t sync to a new one.
          </p>

          <div className="form-group mt-6">
            <div className="input-field flex flex-col">
              <label htmlFor="email" className="mb-2">
                Email*
              </label>
              <input
                autoComplete="off"
                placeholder="Enter Email"
                className="ml-8 outline-none border p-2 w-1/2"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-group mt-6">
            <div className="input-field">
              <label htmlFor="mobile" className="">
                Mobile Number*
              </label>
              <span className="mobile-input flex items-center">
                <span className="code">+91</span>
                <input
                  autoComplete="off"
                  placeholder="Enter Phone no."
                  className="ml-2 outline-none border p-2 w-1/2"
                  id="mobile"
                  maxLength="10"
                  type="tel"
                  name="mobile"
                  value={formData.mobileNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, mobileNumber: e.target.value })
                  }
                />
              </span>
            </div>
          </div>

          <div className="mt-6 flex items-center">
            <span className="check-radio flex items-center">
              <span className="check-radio-wrap flex items-center cursor-pointer">
                <input
                  id="tnc-check"
                  className="checkbox"
                  type="checkbox"
                  checked={formData.tncCheck}
                  onChange={(e) =>
                    setFormData({ ...formData, tncCheck: e.target.checked })
                  }
                  name="tnc-check"
                />
                <label
                  className="text-xl cursor-pointer flex items-center font-medium text-gray-500 ml-2"
                  htmlFor="tnc-check"
                >
                  By logging in, you agree to our&nbsp;
                </label>
              </span>
            </span>
            <button
              type="button"
              className="btn btn-link underline text-lg font-medium text-gray-500 cursor-pointer"
              aria-label="tnc button"
            >
              Terms of Use
            </button>
          </div>

          <div className="mt-10 text-right">
            <button
              disabled={disabled}
              onClick={handleShowNotice}
              className="btn bg-blue-600 text-white px-6 py-2 rounded-md"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      {/* Add the Fill Data button */}
      <button
        onClick={updateFormData}
        className="absolute top-4 right-20 bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Fill Data
      </button>
    </div>
  );
};

export default LoginRegisterModal;
