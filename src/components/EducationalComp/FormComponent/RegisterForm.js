"use client";
import React, { useState } from "react";
import Link from "next/link";
import Loader from "../Loader";

const RegisterForm = ({ handleShowNotice, disabled }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [level, setLevel] = useState("");
  const [stream, setStream] = useState("");
  const [program, setProgram] = useState("");

  // Function to check if all required fields are filled
  const isFormValid = () => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      mobile.trim() !== "" &&
      state.trim() !== "" &&
      city.trim() !== "" &&
      level.trim() !== "" &&
      stream.trim() !== "" &&
      program.trim() !== ""
    );
  };
  const handleSubmit = () => {
    if (isFormValid()) {
      handleShowNotice();
    }
  };

  return (
    <div
      className="relative bg-cover rounded-lg p-5"
      style={{
        backgroundImage:
          'url("https://admission.matsuniversity.ac.in/wp-content/uploads/2024/02/MATS-School-of-Information-Technology.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-blue-900 opacity-80 rounded-lg"></div>

      <div className="relative">
        <input
          type="text"
          placeholder="Enter Name*"
          className="w-full mb-3 rounded-md border outline-none border-gray-600 py-2 px-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email Address*"
          className="w-full mb-3 rounded-md border mt-2 outline-none border-gray-600 py-2 px-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="w-full mb-3 flex items-center mt-2">
          <span className="inline-flex items-center py-2 px-2 text-sm text-gray-900 bg-gray-200 border border-gray-300 rounded-l-md">
            +91
          </span>
          <input
            type="text"
            name="phoneNumber"
            className="w-full bg-gray-50 border outline-none text-gray-900 text-sm border-gray-300 rounded-r-md py-2 px-2"
            placeholder="Enter Mobile Number*"
            value={mobile}
            onChange={(e) => {
              const numericValue = e.target.value.replace(/\D/g, ""); // Removes non-numeric characters
              setMobile(numericValue);
            }}
            maxLength={10}
          />
        </div>

        <div className="flex gap-8 mt-5">
          <input
            type="text"
            placeholder="Enter State*"
            className="w-1/2 mb-3 rounded-md border outline-none border-gray-600 py-2 px-2"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter City*"
            className="w-1/2 mb-3 rounded-md border outline-none border-gray-600 py-2 px-2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <select
          className="w-full mb-3 mt-2 rounded-md border outline-none border-gray-600 py-2 px-2"
          placeholder=" Select Level Applying For*"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option className="text-gray-500" value="">
            Select Level Applying For*
          </option>
          <option value="undergraduate">Undergraduate</option>
          <option value="postgraduate">Post Graduate</option>
        </select>

        <select
          className="w-full mb-3 mt-2 rounded-md border outline-none border-gray-600 py-2 px-2"
          value={stream}
          onChange={(e) => setStream(e.target.value)}
        >
          <option className="text-gray-500" value="">
            Select Stream*
          </option>
          <option value="IT">I.T</option>
          <option value="Arts and Humanities">Arts and Humanities</option>
          <option value="Law">Law</option>
          <option value="Science">Science</option>
          <option value="Management">Management</option>
        </select>

        <select
          className="w-full mb-3 mt-2 rounded-md border outline-none border-gray-600 py-2 px-2"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
        >
          <option className="text-gray-500" value="">
            Select Course Name*
          </option>
          {level === "postgraduate" ? (
            <>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
              <option value="M.Sc">M.Sc</option>
            </>
          ) : (
            <>
              <option value="BBA">BBA</option>
              <option value="BCA">BCA</option>
              <option value="B.Sc">B.Sc</option>
            </>
          )}
        </select>

        <button
          type="button"
          className={`w-full mt-2 py-2 px-2 text-lg font-medium bg-[#071C55] text-white rounded-md ${
            !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={disabled || !isFormValid()} // Update here
          onClick={handleSubmit}
        >
          {disabled ? <Loader /> : " Submit"}
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
