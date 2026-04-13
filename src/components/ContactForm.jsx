import React, { useState } from 'react';
import { sendEmail } from '../services/emailService';

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");
    
    const formData = new FormData(event.target);
    
    // Call the service
    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("Message sent successfully!");
      event.target.reset();
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg font-sans">
      <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-6 uppercase">
        Get In <span className="font-semibold">Touch</span>
      </h2>
      
      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <input 
            type="text" 
            name="name" 
            required 
            placeholder="Your Name" 
            className="w-full p-3 bg-[#e5e5e5] rounded border border-transparent focus:border-black focus:bg-white transition outline-none" 
          />
        </div>
        
        <div>
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="Your Email" 
            className="w-full p-3 bg-[#e5e5e5] rounded border border-transparent focus:border-black focus:bg-white transition outline-none" 
          />
        </div>
        
        <div>
          <textarea 
            name="message" 
            required 
            placeholder="Your Message" 
            className="w-full p-3 bg-[#e5e5e5] rounded border border-transparent focus:border-black focus:bg-white transition outline-none h-32 resize-none"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-black text-white font-medium py-3 rounded text-sm hover:bg-gray-800 transition duration-300"
        >
          SEND MESSAGE
        </button>
      </form>
      
      {status && (
        <div className="mt-4 text-center text-sm font-medium text-gray-600">
          {status}
        </div>
      )}
    </div>
  );
}