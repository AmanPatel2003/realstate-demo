
import Sidebar from "@/components/EducationalComp/Sidebar";
import React from "react";

const page = () => {
  return (
    <div>
      
      <div className="flex mt-28 justify-between bg-gray-50">
        <Sidebar className="w-[20%]" />
        <div className="w-[80%] bg-gray-50">
          <h1 className="text-2xl font-semibold text-black  mt-5">Dashboard</h1>
          <hr className="border-t-2 border-gray-300 my-4 mr-10" />
          <div className="grid-cols-3 flex gap-5 mr-10">
            <div className="bg-[#57802D] px-20 py-5 flex  justify-start text-white text-lg font-medium border border-gray-500">
              <h1 className="text-nowrap">Application in progress</h1>
            </div>
            <div className="border  text-blue-800 text-lg font-medium px-20 py-5 border-gray-500">
              <h1 className="text-nowrap">Application Completed</h1>
            </div>
            <div className="border px-20 py-5 text-lg font-medium text-black border-gray-500">
              <h1 className="text-nowrap">Query Raised</h1>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default page;
