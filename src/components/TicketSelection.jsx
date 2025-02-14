import { useState } from "react";

export default function TicketSelection({ nextStep }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [ticketCount, setTicketCount] = useState("");

  const isNextDisabled = !selectedPlan || !ticketCount || ticketCount <= 0;

  return (
    <div className="bg-[#02191D] p-6 md:p-12 text-[#FAFAFA] rounded-[40px] shadow-md border border-[#0E464F] mx-auto flex flex-col gap-8 lg:w-[700px] sm:w-[335px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <h3 className="text-2xl sm:text-3xl">Ticket Selection</h3>
        <span className="text-sm sm:text-base text-gray-300 underline">Step 1/3</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-[#0E464F] rounded-full -mt-4">
        <div className="w-1/3 h-full bg-[#24A0B5] rounded-full"></div>
      </div>

      {/* Event Details */}
      <div className="bg-[#08252B] p-6 rounded-[32px] border border-[#0E464F] w-full">
        <div
          className="w-full max-w-[556px] mx-auto p-6 rounded-[24px] border border-[#07373F] border-r-2 border-b-2 border-l-2 bg-opacity-10 backdrop-blur-[14px] lg:underline text-center sm:no-underline"
          style={{
            background:
              "linear-gradient(0deg, rgba(10, 12, 17, 0.1), rgba(10, 12, 17, 0.1)), radial-gradient(103.64% 57.39% at 14.02% 32.06%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%)",
          }}
        >
          <h1 className="font-[Road Rage] text-4xl sm:text-2xl leading-[62px] tracking-[0%]">
            Techember Fest ”25
          </h1>
          <p className="text-sm sm:text-base">Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
          <p className="text-sm sm:text-base">📍 [Event Location] | March 15, 2025 | 7:00 PM</p>
        </div>

        {/* Divider */}
        <div className="w-full h-1 bg-[#0E464F] rounded-full my-4 sm:my-8"></div>

        <p className="text-sm sm:text-base text-gray-300">Select Ticket Type</p>

        {/* Ticket Selection Grid */}
        <div className="bg-[#052228] p-4 rounded-[24px] my-4 border border-[#0E464F] underline">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Regular", amount: "Free", ticketsLeft: "50 left", value: "Regular" },
              { label: "VIP", amount: "$100", ticketsLeft: "20 left", value: "VIP" },
              { label: "VVIP", amount: "$200", ticketsLeft: "10 left", value: "VVIP" },
            ].map((plan) => (
              <div
                key={plan.value}
                className={`p-4 border border-[#0E464F] rounded-[20px] cursor-pointer hover:shadow-lg transition-all flex flex-col gap-2 ${
                  selectedPlan === plan.value ? "bg-[#197686] text-white" : "bg-[#052228] text-white"
                }`}
                onClick={() => setSelectedPlan(plan.value)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">{plan.label}</h3>
                  <p
                    className={`text-md font-semibold px-2 py-1 rounded border border-[#0E464F] ${
                      selectedPlan === plan.value ? "bg-[#0E464F]" : "bg-[#197686]"
                    }`}
                  >
                    {plan.amount}
                  </p>
                </div>
                <span className="text-sm text-gray-300">{plan.ticketsLeft}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Number of Tickets Input */}
        <label htmlFor="ticketCount" className="text-sm sm:text-base underline">
          Number of Tickets
        </label>
        <input
          id="ticketCount"
          type="number"
          min="1"
          placeholder="Enter the number of tickets"
          value={ticketCount}
          onChange={(e) => setTicketCount(e.target.value)}
          className="w-full p-3 border rounded-2xl bg-transparent border-[#0E464F] text-white outline-none"
        />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-6 rounded-full my-4 border border-[#0E464F] sm:bg-[#052228] border-none">
          <button className="w-full sm:w-auto border border-[#24A0B5] text-[#24A0B5] py-2 px-8 rounded transition sm:hover:bg-gray-400">
            Cancel
          </button>
          <button
            onClick={nextStep}
            className={`w-full sm:w-auto py-2 px-8 rounded transition ${
              isNextDisabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-[#24A0B5] text-white hover:bg-[#1B8293]"
            }`}
            disabled={isNextDisabled}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
