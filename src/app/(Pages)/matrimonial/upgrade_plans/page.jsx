"use client";
import Loader from '@/components/matrimonialComp/Loader';
import { morajNoticeCenter } from 'concur-consent/morajNoticeCenter';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


const plans = [
  {
    id: 1,
    name: 'Basic Plan',
    price: '₹999',
    features: ['Profile Highlighting', '5 Express Interests', 'Limited Contacts'],
  },
  {
    id: 2,
    name: 'Standard Plan',
    price: '₹1999',
    features: ['Profile Highlighting', '10 Express Interests', 'Unlimited Contacts', 'Priority Support'],
  },
  {
    id: 3,
    name: 'Premium Plan',
    price: '₹2999',
    features: ['Profile Highlighting', '20 Express Interests', 'Unlimited Contacts', 'Priority Support', 'Personal Matchmaker'],
  },
];

const paymentMethods = [
  { id: 2, name: 'Debit Card' },
  { id: 4, name: 'UPI' },
];

const Page = () => {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState(plans[0].id);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(paymentMethods[0].id);

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const selectedPlanDetails = plans.find((plan) => plan.id === selectedPlan);


  const handleFillData = () => {
    setCardNumber('9513574268586943');
    setExpiryDate('14/15');
    setCvv('137');
  };

  const handleShowNotice = async () => {
    setIsLoading(true);
    if (typeof window !== "undefined") {
      const { morajNoticeCenter } = await import(
        "concur-consent/morajNoticeCenter"
      );

      console.log("handleShowNotice function call");
      const agreementId = localStorage.getItem("agreement_id");
      if (agreementId) {
        // If agreement_id exists, route to the landing page
        router.push("/matrimonial/dashboard"); // Replace with your actual landing page route
        localStorage.removeItem("agreement_id");
      } else {
        // If agreement_id doesn't exist, show the notice center
        morajNoticeCenter(
          "66d95766cbd66ef0ea362853",
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
  };

  const validateFields = () => {
    let tempErrors = {};

    if (selectedPaymentMethod === 2) {
      // Validate Debit Card details
      if (cardNumber.length !== 16) {
        tempErrors.cardNumber = 'Card number must be 16 digits';
      }
      if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        tempErrors.expirationDate = 'Expiration date must be in MM/YY format';
      }
      if (cvv.length !== 3) {
        tempErrors.cvv = 'CVV must be 3 digits';
      }
    }

    if (selectedPaymentMethod === 4) {
      // Validate UPI ID
      if (!upiId) {
        tempErrors.upiId = 'UPI ID is required';
      }
    }

    setErrors(tempErrors);

    // Return true if there are no errors
    return Object.keys(tempErrors).length === 0;
  };

  const handlePayment = () => {
    const isValid = validateFields();

    if (isValid) {
      handleShowNotice();
      if (selectedPaymentMethod === 2) {
        // alert(`Processing payment of ${selectedPlanDetails.price} using Debit Card.`);
      } else if (selectedPaymentMethod === 4) {
        // alert(`Processing payment of ${selectedPlanDetails.price} using UPI.`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-10 pb-16 ">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Upgrade Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 border-2 rounded-lg shadow-md cursor-pointer transition duration-300 ${selectedPlan === plan.id ? 'border-pink-600 bg-blue-50' : 'border-gray-200 hover:shadow-lg'}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
              <p className="text-2xl font-bold text-gray-900 mt-2">{plan.price}</p>
              <ul className="mt-4 text-gray-600 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       <div className='flex gap-4'>
       <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6">Select Payment Method</h2>
        <button
            onClick={handleFillData}
            className="px-6 h-12 mt-8   text-pink-600 hover:text-white cursor-pointer  border border-pink-600 hover:bg-pink-700 rounded-lg z-50">
            Fill Data
          </button>
       </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`p-4 border-2 rounded-lg shadow-md cursor-pointer transition duration-300 ${selectedPaymentMethod === method.id ? 'border-pink-600 bg-blue-50' : 'border-gray-200 hover:shadow-lg'}`}
              onClick={() => setSelectedPaymentMethod(method.id)}
            >
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 mr-3 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {method.id === 2 ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 10l5 5m0 0l5-5m-5 5V4"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M9 21v-4a4 4 0 018 0v4M9 3v4a4 4 0 008 0V3M4 10h16M4 21h16"
                    />
                  )}
                </svg>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{method.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {method.id === 2 && "Pay securely using your Debit Card."}
                    {method.id === 4 && "Pay using your UPI ID for fast transactions."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedPaymentMethod === 2 && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Enter Debit Card Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-600 font-medium">Card Number</label>
                <input
                  type="text"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 placeholder-gray-400 ${errors.cardNumber ? 'border-red-500' : ''}`}
                  placeholder="Enter your card number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 font-medium">Expiry Date</label>
                  <input
                    type="text"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 placeholder-gray-400 ${errors.expirationDate ? 'border-red-500' : ''}`}
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                  {errors.expirationDate && <p className="text-red-500 text-sm">{errors.expirationDate}</p>}
                </div>
                <div>
                  <label className="block text-gray-600 font-medium">CVV</label>
                  <input
                    type="text"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 placeholder-gray-400 ${errors.cvv ? 'border-red-500' : ''}`}
                    placeholder="Enter CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                  {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedPaymentMethod === 4 && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Enter UPI ID</h3>
            <div>
              <label className="block text-gray-600 font-medium">UPI ID</label>
              <input
                type="text"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 placeholder-gray-400 ${errors.upiId ? 'border-red-500' : ''}`}
                placeholder="Enter your UPI ID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
              {errors.upiId && <p className="text-red-500 text-sm">{errors.upiId}</p>}
            </div>
          </div>
        )}

        <button
          onClick={handlePayment}
          className="mt-8 w-full bg-pink-600 text-white font-bold py-3 rounded-lg transition duration-300 hover:bg-pink-700"
        >
          {isLoading ? <Loader /> : " Proceed to Pay"}
         
        </button>
      </div>
    </div>
  );
};

export default Page;
