import React from "react";

function Ready({ prevStep }) {
  const name = localStorage.getItem("name") || "N/A";
  const email = localStorage.getItem("email") || "N/A";
  const avatar = localStorage.getItem("avatar") || "";

  return (
    <div className="bg-[#02191D] p-6 md:p-12 text-[#FAFAFA] rounded-[40px] shadow-md border border-[#0E464F] mx-auto flex flex-col gap-8 w-full max-w-[700px] px-4 text-center">
      <h3 className="text-2xl font-bold">🎉 Ready! Your Ticket is Generated</h3>
      <div className="w-full h-1 bg-gray-300 rounded-full -mt-4">
        <div className="w-full h-full bg-[#24A0B5] rounded-full"></div>
      </div>

      {/* Ticket Display */}
      <div className="bg-[#08252B] p-6 rounded-[32px] border border-[#0E464F] w-full flex flex-col items-center">
        {avatar && <img src={avatar} alt="User Avatar" className="w-[150px] h-[150px] object-cover rounded-full border-2 border-[#24A0B5] mb-4" />}
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-gray-300">{email}</p>
      </div>

      {/* Buttons */}
      <button onClick={prevStep} className="bg-[#24A0B5] text-white py-2 px-6 rounded hover:bg-[#1B8293]">
        Edit Details
      </button>
    </div>
  );
}

export default Ready;
