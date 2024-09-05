"use client"

import React, { useState } from 'react'

const Application = ({ handleShowNotice, disabled, setDisabled }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    employment: "",
    income: "",
    rentalHistory: "",
    references: "",
    moveInDate: "",
    documents: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    setDisabled(true);
    e.preventDefault();
    // Here you can add the logic to send the formData to your backend
    console.log("Form submitted:", formData);

    handleShowNotice();
  };

  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto p-8 border rounded-lg shadow-lg w-[50%] bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Rental Application Form
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block font-semibold mb-1">
              Applicant’s Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-2">
            <label className="block font-semibold mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="john@example.com"
            />
          </div>

          <div className="mb-2">
            <label className="block font-semibold mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="123-456-7890"
            />
          </div>

          <div className="mb-2">
            <label className="block font-semibold mb-1">Current Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="123 Main St, Apt 1, City, State"
            />
          </div>

          <div className="mb-2">
            <label className="block font-semibold mb-1">
              Employment Information
            </label>
            <input
              type="text"
              name="employment"
              value={formData.employment}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Company Name, Position"
            />
          </div>

          <div className="mb-2">
            <label className="block font-semibold mb-1">Monthly Income</label>
            <input
              type="number"
              name="income"
              value={formData.income}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="₹"
            />
          </div>

          <button
            type="submit"
            disabled={disabled}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mt-4"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Application