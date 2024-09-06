"use client";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { morajNoticeCenter } from "concur-consent/morajNoticeCenter";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [profileFor, setProfileFor] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  // const handleShowNotice = () => {
  //   // alert("handleShowNotice function call");
  //   const agreementId = localStorage.getItem("agreement_id");

  //   if (agreementId) {
  //     localStorage.removeItem("agreement_id");
  //     router.push('/dashboard')
  //   } else {
  //     morajNoticeCenter(
  //       "66d5bc3ccbd66ef0ea3627ff",
  //       "a5b38b10e6316732",
  //       "66d5b9c2cbd66ef0ea3627fd",
  //       "mmEVIRTZ_UGUKJQ4Nfxgaw",
  //       "gQGpM81A-LsTj6CA55IvUQz6Op_crRgjOm_b88Gs3EU"
  //     );
  //   }
  // };


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
        router.push("/personal_details"); // Replace with your actual landing page route
        localStorage.removeItem("agreement_id");
      } else {
        // If agreement_id doesn't exist, show the notice center
        morajNoticeCenter(
          "66d5bc3ccbd66ef0ea3627ff",
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

  const handleSubmit = (e) => {
    e.preventDefault();
  //  alert('happy')
    if (profileFor && email && mobile && password) {
  
      handleShowNotice();
      console.log({
        profileFor,
        email,
        mobile,
        password,
      });

  
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="px-4 py-2 bg-black/70 rounded-lg shadow-md w-96 mt-8">
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col items-start">
          <label
            htmlFor="profileFor"
            className="mb-2 text-xs font-medium text-white text-start w-full"
          >
            Create Profile For
          </label>
          <select
            id="profileFor"
            value={profileFor}
            onChange={(e) => setProfileFor(e.target.value)}
            className="px-4 py-1 w-full"
            required
          >
            <option value="">Select</option>
            <option value="self">Self</option>
            <option value="son">Son</option>
            <option value="daughter">Daughter</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-4 flex flex-col items-start">
          <label
            htmlFor="email"
            className="mb-2 text-xs font-medium text-white text-start"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-1 w-full placeholder:text-xs placeholder:font-semibold"
            placeholder="Enter Email Address"
            required
          />
        </div>

        <div className="mb-4 flex flex-col items-start">
          <label
            htmlFor="mobile"
            className="mb-2 text-xs font-medium text-white text-start w-full"
          >
            Mobile No.
          </label>
          <div className="flex w-full">
            <span className="inline-flex items-center px-3 bg-gray-700 text-white border border-gray-700 rounded-l">
              +91
            </span>
            <input
              type="tel"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="px-4 py-1 w-full placeholder:text-xs placeholder:font-semibold"
              placeholder="Enter Mobile Number"
              required
            />
          </div>
        </div>

        <div className="mb-4 flex flex-col items-start">
          <label
            htmlFor="password"
            className="mb-2 text-xs font-medium text-white text-start"
          >
            Create Password
          </label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-1 w-full pr-10 placeholder:text-xs placeholder:font-semibold"
              placeholder="Enter Password"
              required
              minLength={6}
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-400" />
              ) : (
                <FaEye className="text-gray-400" />
              )}
            </span>
          </div>
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="w-full px-4 py-2 text-white bg-pink-600 rounded hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          {isLoading ? <Loader /> : "Register for Free"}
          {/* Register for Free */}
        </button>
        <p className="mt-6 text-xs text-gray-400">
          By clicking on &apos;Register Free,&apos; you confirm that you accept
          the
          <span className="text-pink-500"> Terms of Use</span> and
          <span className="text-pink-500"> Privacy Policy</span>.
        </p>
      </form>
    </div>
  );
}
