import Sidebar from "@/components/EducationalComp/Sidebar";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="flex mt-28 justify-between bg-gray-50">
        <Sidebar className="w-[20%]" />
        <div className="w-[80%] bg-gray-50">
          <h1 className="text-2xl font-semibold text-black  mt-5">
            My Profile
          </h1>
          <hr className="border-t-2 border-gray-300 my-4" />
          <div className="">
            <div className="w-full h-[400px] flex  justify-center bg-gray-50">
              <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                  Details
                </h1>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex items-center gap-4">
                      <h2 className="text-gray-700 font-semibold text-lg">
                        Name:
                      </h2>
                      <p className="text-gray-600">Richa</p>
                    </div>

                    {/* Email Address */}
                    <div className="flex items-center gap-4">
                      <h2 className="text-gray-700 font-semibold text-lg">
                        Email Address:
                      </h2>
                      <p className="text-gray-600">richa@gmail.com</p>
                    </div>

                    {/* Mobile Number */}
                    <div className="flex items-center gap-4">
                      <h2 className="text-gray-700 font-semibold text-lg">
                        Mobile Number:
                      </h2>
                      <p className="text-gray-600">2635414555</p>
                    </div>

                    {/* State */}
                    <div className="flex items-center gap-4">
                      <h2 className="text-gray-700 font-semibold text-lg">
                        State:
                      </h2>
                      <p className="text-gray-600">Delhi</p>
                    </div>

                    {/* City */}
                    <div className="flex items-center gap-4">
                      <h2 className="text-gray-700 font-semibold text-lg">
                        City:
                      </h2>
                      <p className="text-gray-600">Delhi</p>
                    </div>

                    {/* Program */}
                    <div className="flex items-center gap-4">
                      <h2 className="text-gray-700 font-semibold text-lg">
                        Program:
                      </h2>
                      <p className="text-gray-600">Graduate</p>
                    </div>

                    {/* Course */}
                    <div className="flex items-center gap-4">
                      <h2 className="text-gray-700 font-semibold text-lg">
                        Course:
                      </h2>
                      <p className="text-gray-600">BCA</p>
                    </div>

                    {/* Specification */}
                    <div className="md:col-span-2">
                      <h2 className="text-gray-700 font-semibold text-lg">
                        Specification:
                      </h2>
                      <p className="text-gray-600">CTIS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
