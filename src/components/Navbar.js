 "use client"
 
 import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setDropdownOpen] = useState(false); 

   const toggleDropdown = () => {
     setDropdownOpen((prevState) => !prevState); // Toggle dropdown visibility
   };
  return (
    <header className="bg-gray-800 text-white ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 w-[80%] m-auto">
        <Link href="/" className="text-2xl font-bold">
          Real Estate Platform
        </Link>
        <nav className='flex
         gap-4'>
          <ul className="flex space-x-7">
            <li>
              <Link href="/application" className="hover:text-yellow-300">
                Application
              </Link>
            </li>
            <li>
              <Link href="/feedback" className="hover:text-yellow-300">
                Feedback
              </Link>
            </li>
            <li>
              <Link href="/reservation" className="hover:text-yellow-300">
                Reservation
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-yellow-300">
                Register
              </Link>
            </li>
          </ul>
          <div
            className={`flex items-center gap-4  ${
              pathname != "/" && "hidden"
            }`}
          >
            {/* <div className="">
              <FaBell size={22} />
            </div> */}
            <div className="relative">
              <div className="relative">
                <div className="cursor-pointer" onClick={toggleDropdown}>
                  <FaBell size={22} />
                </div>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-96 z-50   bg-white shadow-2xl rounded-lg  px-4 py-4">
                    <Link href="/trust-bank/preference-center">
                      <div className="p-2 border-b border-gray-400 cursor-pointer">
                        <h1 className="text-gray-500 font-normal text-xs">
                          {" "}
                          22, August, 2024
                        </h1>
                        <h1 className="text-[#FF0000] font-semibold text-sm">
                          Your consent for email address has expired. Reconsent
                          to continue with service experience.
                        </h1>
                      </div>
                    </Link>
                    <Link href="/trust-bank/preference-center">
                      <div className="p-2 border-b border-gray-400 cursor-pointer">
                        <h1 className="text-gray-500 font-normal text-xs">
                          {" "}
                          22, August, 2024
                        </h1>
                        <h1 className="text-gray-600 font-semibold text-sm ">
                          Your account balance is now ₹ 15,250.00.
                        </h1>
                      </div>
                    </Link>
                    <Link href="/trust-bank/preference-center">
                      <div className="p-2 border-b border-gray-400 cursor-pointer">
                        <h1 className="text-gray-500 font-normal text-xs">
                          {" "}
                          23,August,2024
                        </h1>
                        <h1 className="text-[#FF0000] font-semibold text-sm">
                          Your consent for CIBL report processing has expired.
                          Reconsent to continue with service experience
                        </h1>
                      </div>
                    </Link>
                    <Link href="/trust-bank/preference-center">
                      <div className="p-2 border-b border-gray-400 cursor-pointer">
                        <h1 className="text-gray-500 font-normal text-xs">
                          {" "}
                          23,August,2024
                        </h1>
                        <h1 className="text-gray-600 font-semibold text-sm">
                          Transaction Alert: ₹ 5000.00 has been withdrawn from
                          your account ending in 1234.
                        </h1>
                      </div>
                    </Link>
                    <Link href="/trust-bank/preference-center">
                      <div className="p-2 border-b border-gray-400 cursor-pointer">
                        <h1 className="text-gray-500 font-normal text-xs">
                          {" "}
                          23,August,2024
                        </h1>
                        <h1 className="text-[#FF0000] font-semibold text-sm">
                          Your consent for mobile number has expired. Reconsent
                          to continue wit service experience.
                        </h1>
                      </div>
                    </Link>
                    <Link href="/trust-bank/preference-center">
                      <div className="p-2  border-gray-400 cursor-pointer">
                        <h1 className="text-gray-500 font-normal text-xs">
                          24,August,2024
                        </h1>
                        <h1 className="text-gray-600 font-semibold text-sm">
                          Your account balance is now ₹ 10,250.00.
                        </h1>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <Link href="/preference-center">
              <FaUserCircle size={25} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar