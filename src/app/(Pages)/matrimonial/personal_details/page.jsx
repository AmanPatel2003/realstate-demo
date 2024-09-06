"use client";
import Loader from '@/components/matrimonialComp/Loader';
import { morajNoticeCenter } from 'concur-consent/morajNoticeCenter';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';


const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [currentStep, setCurrentStep] = useState(() => {
    const savedStep = localStorage.getItem('currentStep');
    return savedStep !== null ? JSON.parse(savedStep) : 0;
  });

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    motherTongue: "",
    religion: "",
    maritalStatus: "",
    height: "",
    country: "",
    degree: "",
    employedIn: "",
    income: "",
    expressYourself: "",
    familyType: "",
    fatherOccupation: "",
    motherOccupation: "",
    contactAddress: "",
    aboutFamily: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    dob: "",
    motherTongue: "",
    religion: "",
    maritalStatus: "",
    height: "",
    country: "",
    degree: "",
    employedIn: "",
    income: "",
    familyType: "",
    contactAddress: ""
  });

  const steps = ["Profile Details", "Career Details", "Lifestyle & Family"];

  const options = {
    motherTongue: ["Hindi", "Bengali", "Telugu", "Marathi", "Tamil"],
    religion: ["Hindu", "Muslim", "Christian", "Sikh", "Other"],
    maritalStatus: ["Single", "Married", "Divorced", "Widowed"],
    height: ["4'0\" - 4'5\"", "4'6\" - 5'0\"", "5'1\" - 5'5\"", "5'6\" - 6'0\"", "6'1\" and above"],
    country: ["India", "USA", "Canada", "UK", "Australia"],
    degree: ["High School", "Bachelor's", "Master's", "PhD"],
    employedIn: ["Private Sector", "Government", "Self-Employed", "Student", "Other"],
    income: ["< 3 Lakh", "3 - 5 Lakh", "5 - 10 Lakh", "10 - 20 Lakh", "20 Lakh and above"]
  };

  useEffect(() => {
    localStorage.setItem('currentStep', JSON.stringify(currentStep));
  }, [currentStep]);

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSelectChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const validateCurrentStep = () => {
    let isValid = true;
    let errorsCopy = { ...errors };

    if (currentStep === 0) {
      if (!formData.name) {
        errorsCopy.name = "Name is required.";
        isValid = false;
      }
      if (!formData.dob) {
        errorsCopy.dob = "Date of Birth is required.";
        isValid = false;
      }
      if (!formData.motherTongue) {
        errorsCopy.motherTongue = "Mother Tongue is required.";
        isValid = false;
      }
      if (!formData.religion) {
        errorsCopy.religion = "Religion is required.";
        isValid = false;
      }
      if (!formData.maritalStatus) {
        errorsCopy.maritalStatus = "Marital Status is required.";
        isValid = false;
      }
      if (!formData.height) {
        errorsCopy.height = "Height is required.";
        isValid = false;
      }
    } else if (currentStep === 1) {
      if (!formData.country) {
        errorsCopy.country = "Country is required.";
        isValid = false;
      }
      if (!formData.degree) {
        errorsCopy.degree = "Highest Degree is required.";
        isValid = false;
      }
      if (!formData.employedIn) {
        errorsCopy.employedIn = "Employment Status is required.";
        isValid = false;
      }
      if (!formData.income) {
        errorsCopy.income = "Income is required.";
        isValid = false;
      }
    } else if (currentStep === 2) {
      if (!formData.familyType) {
        errorsCopy.familyType = "Family Type is required.";
        isValid = false;
      }
      if (!formData.contactAddress) {
        errorsCopy.contactAddress = "Contact Address is required.";
        isValid = false;
      }
    }

    setErrors(errorsCopy);
    return isValid;
  };

  const handleShowNotice = async () => {
    if (validateCurrentStep()) {
      setIsLoading(true);
      if (typeof window !== "undefined") {
        const { morajNoticeCenter } = await import(
          "concur-consent/morajNoticeCenter"
        );

        console.log("handleShowNotice function call");
        const agreementId = localStorage.getItem("agreement_id");
        if (agreementId) {
          router.push("/matrimonial/dashboard"); // Replace with your actual landing page route
          localStorage.removeItem("agreement_id");
        } else {
          morajNoticeCenter(
            "66d9506fcbd66ef0ea36284b",
            "a5b38b10e6316732",
            "66d5b9c2cbd66ef0ea3627fd",
            "mmEVIRTZ_UGUKJQ4Nfxgaw",
            "gQGpM81A-LsTj6CA55IvUQz6Op_crRgjOm_b88Gs3EU"
          );
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }
      }
    }
    localStorage.removeItem('currentStep');
  };

  return (
    <div className="max-w-xl mx-auto mt-10 mb-16">
      {/* Stepper */}
      <div className="flex justify-between mb-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`w-full p-2 border-b-4 ${currentStep === index
              ? "border-[#D9475C] text-[#D9475C]"
              : "border-gray-300 text-gray-500"
              } text-center`}
          >
            {step}
          </div>
        ))}
      </div>

      {/* Step Forms */}
      {currentStep === 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Full Name *</label>
              <input
                type="text"
                value={formData.name}
                placeholder='Enter Full Name'
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full p-2 border border-gray-300 rounded ${errors.name ? "border-red-500" : ""
                  }`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label className="block mb-1">Date of Birth *</label>
              <input
                type="date"
                value={formData.dob}
                onChange={(e) =>
                  setFormData({ ...formData, dob: e.target.value })
                }
                className={`w-full p-2 border border-gray-300 rounded ${errors.dob ? "border-red-500" : ""
                  }`}
              />
              {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
            </div>
            <div>
              <label className="block mb-1">Mother Tongue *</label>
              <select
                value={formData.motherTongue}
                onChange={(e) =>
                  handleSelectChange('motherTongue', e.target.value)
                }
                className={`w-full p-2 border border-gray-300 rounded ${errors.motherTongue ? "border-red-500" : ""
                  }`}
              >
                <option value="">Select</option>
                {options.motherTongue.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.motherTongue && <p className="text-red-500 text-sm">{errors.motherTongue}</p>}
            </div>
            <div>
              <label className="block mb-1">Religion *</label>
              <select
                value={formData.religion}
                onChange={(e) =>
                  handleSelectChange('religion', e.target.value)
                }
                className={`w-full p-2 border border-gray-300 rounded ${errors.religion ? "border-red-500" : ""
                  }`}
              >
                <option value="">Select</option>
                {options.religion.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.religion && <p className="text-red-500 text-sm">{errors.religion}</p>}
            </div>
            <div>
              <label className="block mb-1">Marital Status *</label>
              <select
                value={formData.maritalStatus}
                onChange={(e) =>
                  handleSelectChange('maritalStatus', e.target.value)
                }
                className={`w-full p-2 border border-gray-300 rounded ${errors.maritalStatus ? "border-red-500" : ""
                  }`}
              >
                <option value="">Select</option>
                {options.maritalStatus.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.maritalStatus && <p className="text-red-500 text-sm">{errors.maritalStatus}</p>}
            </div>
            <div>
              <label className="block mb-1">Height *</label>
              <select
                value={formData.height}
                onChange={(e) =>
                  handleSelectChange('height', e.target.value)
                }
                className={`w-full p-2 border border-gray-300 rounded ${errors.height ? "border-red-500" : ""
                  }`}
              >
                <option value="">Select</option>
                {options.height.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.height && <p className="text-red-500 text-sm">{errors.height}</p>}
            </div>
          </div>
        </div>
      )}

      {currentStep === 1 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Career Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Country *</label>
              <select
                value={formData.country}
                onChange={(e) =>
                  handleSelectChange('country', e.target.value)
                }
                className={`w-full p-2 border border-gray-300 rounded ${errors.country ? "border-red-500" : ""
                  }`}
              >
                <option value="">Select</option>
                {options.country.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
            </div>
            <div>
              <label className="block mb-1">Highest Degree *</label>
              <select
                value={formData.degree}
                onChange={(e) =>
                  handleSelectChange('degree', e.target.value)
                }
                className={`w-full p-2 border border-gray-300 rounded ${errors.degree ? "border-red-500" : ""
                  }`}
              >
                <option value="">Select</option>
                {options.degree.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.degree && <p className="text-red-500 text-sm">{errors.degree}</p>}
            </div>
            <div>
              <label className="block mb-1">Employed In *</label>
              <select
                value={formData.employedIn}
                onChange={(e) =>
                  handleSelectChange('employedIn', e.target.value)
                }
                className={`w-full p-2 border border-gray-300 rounded ${errors.employedIn ? "border-red-500" : ""
                  }`}
              >
                <option value="">Select</option>
                {options.employedIn.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.employedIn && <p className="text-red-500 text-sm">{errors.employedIn}</p>}
            </div>
            <div>
              <label className="block mb-1">Annual Income *</label>
              <select
                value={formData.income}
                onChange={(e) =>
                  handleSelectChange('income', e.target.value)
                }
                className={`w-full p-2 border border-gray-300 rounded ${errors.income ? "border-red-500" : ""
                  }`}
              >
                <option value="">Select</option>
                {options.income.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.income && <p className="text-red-500 text-sm">{errors.income}</p>}
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Lifestyle & Family</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1">Family Type </label>
              <select
                value={formData.familyType}
                onChange={(e) =>
                  setFormData({ ...formData, familyType: e.target.value })
                }
                className={`w-full p-2 border border-gray-300 rounded ${errors.familyType ? "border-red-500" : ""
                  }`}
              >
                <option value="">Select Family Type</option>
                <option value="Nuclear">Nuclear</option>
                <option value="Joint">Joint</option>
                <option value="Extended">Extended</option>
                <option value="Single Parent">Single Parent</option>
              </select>
              {errors.familyType && <p className="text-red-500 text-sm">{errors.familyType}</p>}
            </div>
            <div>
              <label className="block mb-1">Contact Address </label>
              <input
                placeholder='Enter Address'
                type="text"
                value={formData.contactAddress}
                onChange={(e) =>
                  setFormData({ ...formData, contactAddress: e.target.value })
                }
                className={`w-full p-2 border border-gray-300 rounded ${errors.contactAddress ? "border-red-500" : ""
                  }`}
              />
              {errors.contactAddress && <p className="text-red-500 text-sm">{errors.contactAddress}</p>}
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        {currentStep > 0 && (
          <button
            onClick={handlePrev}
            className="bg-gray-200 text-gray-700 p-2 rounded"
          >
            Previous
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button
            onClick={handleNext}
            className="bg-[#D9475C] text-white p-2 rounded"
          >
            Next
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-[#D9475C] text-white rounded"
            onClick={handleShowNotice}
          // onClick={() => router.push('/dashboard')}
          >
            {isLoading ? <Loader /> : "Submit"}

          </button>
        )}
      </div>

      {/* {isLoading && <Loader />} */}
    </div>
  );
};

export default Page;
