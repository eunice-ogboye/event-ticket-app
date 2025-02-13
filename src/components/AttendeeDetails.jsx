import React from 'react'
import { FaUpload } from "react-icons/fa";
import { useState } from "react";

function AttendeeDetails({ prevStep }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [errors, setErrors] = useState({ name: "", email: "" });
  
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        setAvatar(URL.createObjectURL(file));
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
        console.log("Form submitted successfully");
      }
    };
  
    return (
      <div className="bg-[#02191D] p-6 md:p-12 text-[#FAFAFA] rounded-[40px] shadow-md border border-[#0E464F] w-[700px] mx-auto flex flex-col gap-8">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-xl font-semibold">Attendee Details</h3>
          <span className="text-gray-500">Step 2/3</span>
        </div>
        <div className="w-full h-1 bg-gray-300 rounded-full -mt-4">
          <div className="w-2/3 h-full bg-[#24A0B5] rounded-full"></div>
        </div>
        <div className="bg-[#08252B] p-6 rounded-[32px] border border-[#0E464F] w-full">
            
            <div className="bg-[#08252B] p-6 rounded-[32px] border border-[#0E464F] w-full">
                <p>Upload Profile Photo</p>
              
                <div className="bg-[#02191D] h-[200px] w-full mt-4">
                <div className="flex flex-col items-center">
                <label className="bg-[#0E464F] h-[200px] rounded-[32px] p-6 flex flex-col justify-center text-center items-center text-[#FAFAFA] cursor-pointer">
                    <FaUpload className="text-2xl mb-2" />
                    Drag & drop or click to upload
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
                {/* {avatar && <img src={avatar} alt="Uploaded" className="mt-4 w-[240px] h-[240px] object-cover rounded-[32px]" />} */}
                
                </div>
                </div>
                
             </div>

             <div className="w-full h-1 bg-[#07373F] my-8"></div>

                <form className="space-y-4" onSubmit={validateForm}>
                    <p>Enter your name</p>
                <input 
                    type="text" 
                    className="w-full p-3 border rounded-2xl bg-transparent border-[#0E464F] text-white outline-none"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                <p>Enter your email *</p>
                <input 
                    type="email" 
                    placeholder="hello@avioflagos.io" 
                    className="w-full p-3 border rounded-2xl bg-transparent border-[#0E464F] text-white outline-none"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                <p>About the project</p>
                <textarea placeholder="Project" className="w-full p-3 border rounded-2xl bg-transparent border-[#0E464F] text-white outline-none" rows="4"></textarea>
                <div className="flex w-full sm:flex-col gap-2 lg:flex-row justify-between items-center">
                    <button onClick={prevStep} className="w-1/2 bg-transparent border border-[#24A0B5] text-gray-300 py-2 px-4 rounded hover:bg-[#24A0B5]">Back</button>
                    <button type="submit" className="w-1/2 bg-[#24A0B5] text-white py-2 px-4 rounded hover:bg-[#1B8293]">Get My Free Ticket</button>
                </div>
                </form>
            </div>
      </div>
    );
  }
  
export default AttendeeDetails