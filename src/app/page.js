'use client'
import { useState } from "react";
import Header from "@/components/Header";
import TicketSelection from "@/components/TicketSelection";
import AttendeeDetails from "@/components/AttendeeDetails";
import React from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [ticketData, setTicketData] = useState(null);

  return (
    <div className="flex flex-col items-center min-h-screen py-2" style={{ background: "linear-gradient(0deg, #02191D, #02191D), radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%)" }}>
    <Header />
    <section id="tickets" className="max-w-lg mx-auto mt-8">
    {step === 1 ? <TicketSelection nextStep={() => setStep(2)} /> : <AttendeeDetails prevStep={() => setStep(1)} nextStep={setTicketData} />}
    </section>
  </div>
  );
}

