import React, { useState, useEffect, useRef } from "react";
import { FaUpload } from "react-icons/fa";
import html2canvas from "html2canvas";

function AttendeeDetails({ nextStep, prevStep }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [project, setProject] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "" });

  useEffect(() => {
    setName(localStorage.getItem("name") || "");
    setEmail(localStorage.getItem("email") || "");
    setAvatar(localStorage.getItem("avatar") || null);
    setProject(localStorage.getItem("project") || "");
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
      localStorage.setItem("avatar", imageUrl);
    }
  };

  const validateForm = (e) => {
    e.preventDefault();
    let newErrors = { name: "", email: "" };
    const nameRegex = /^[A-Za-z ]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
      newErrors.name = "Please enter a valid name (at least 3 letters).";
    }
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    if (!newErrors.name && !newErrors.email) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("project", project);
      nextStep();
    }
  };

  return (
    <div className="bg-[#02191D] p-6 md:p-12 text-[#FAFAFA] rounded-[40px] shadow-md border border-[#0E464F] mx-auto flex flex-col gap-8 lg:w-[700px] sm:w-[335px]">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-xl font-semibold">Attendee Details</h3>
        <span className="text-gray-500">Step 2/3</span>
      </div>
      <div className="w-full h-1 bg-gray-300 rounded-full -mt-4">
        <div className="w-2/3 h-full bg-[#24A0B5] rounded-full"></div>
      </div>

      <div className="bg-[#08252B] p-6 rounded-[32px] border border-[#0E464F] w-full">
        <p>Upload Profile Photo</p>
        <label className="bg-[#0E464F] h-[200px] rounded-[32px] p-6 flex flex-col justify-center text-center items-center text-[#FAFAFA] cursor-pointer">
          <FaUpload className="text-2xl mb-2" />
          Drag & drop or click to upload
          <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
        </label>
        {avatar && <img src={avatar} alt="Uploaded" className="mt-4 w-[150px] h-[150px] object-cover rounded-[32px]" />}
      </div>
      <form className="space-y-4" onSubmit={validateForm}>
        <p>Enter your name</p>
        <input type="text" className="w-full p-3 border rounded-2xl bg-transparent border-[#0E464F] text-white outline-none" value={name} onChange={(e) => setName(e.target.value)} required />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <p>Enter your email *</p>
        <input type="email" placeholder="hello@avioflagos.io" className="w-full p-3 border rounded-2xl bg-transparent border-[#0E464F] text-white outline-none" value={email} onChange={(e) => setEmail(e.target.value)} required />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <p>About the project</p>
        <textarea placeholder="Project" className="w-full p-3 border rounded-2xl bg-transparent border-[#0E464F] text-white outline-none" rows="4" value={project} onChange={(e) => setProject(e.target.value)}></textarea>

        <div className="flex w-full sm:flex-col gap-2 lg:flex-row justify-between items-center">
          <button type="button" onClick={prevStep} className="w-1/2 bg-transparent border border-[#24A0B5] text-gray-300 py-2 px-4 rounded hover:bg-[#24A0B5]">Back</button>
          <button type="submit" className="w-1/2 bg-[#24A0B5] text-white py-2 px-4 rounded hover:bg-[#1B8293]">Get My Free Ticket</button>
        </div>
      </form>
    </div>
  );
}

function Ready({ prevStep }) {
  const name = localStorage.getItem("name") || "N/A";
  const email = localStorage.getItem("email") || "N/A";
  const avatar = localStorage.getItem("avatar") || "";
  const project = localStorage.getItem("project") || "N/A";
  const ticketRef = useRef(null);

  const downloadTicket = () => {
    if (ticketRef.current) {
      html2canvas(ticketRef.current, { scale: 2 }).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "Event_Ticket.png";
        link.click();
      });
    }
  };

  return (
    <div className="bg-[#02191D] p-6 md:p-12 text-[#FAFAFA] rounded-[40px] shadow-md border border-[#0E464F] mx-auto flex flex-col gap-8 lg:w-[700px] sm:w-[335px] text-center">
      <h3 className="text-2xl font-bold">🎉 Ready! Your Ticket is Generated</h3>
      <div className="w-full h-1 bg-gray-300 rounded-full -mt-4">
        <div className="w-full h-full bg-[#24A0B5] rounded-full"></div>
      </div>

      <div ref={ticketRef} className="bg-[#08252B] p-6 rounded-[32px] border border-[#0E464F] w-full flex flex-col items-center shadow-lg">
        {avatar && <img src={avatar} alt="User Avatar" className="w-[150px] h-[150px] object-cover rounded-full border-2 border-[#24A0B5] mb-4" />}
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-gray-300">{email}</p>
        <p className="text-gray-400 mt-2">{project}</p>
      </div>
      <button onClick={downloadTicket} className="bg-[#24A0B5] text-white py-2 px-6 rounded hover:bg-[#1B8293]">Download Ticket</button>
    </div>
  );
}

export { AttendeeDetails, Ready };
