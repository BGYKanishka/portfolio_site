import React, { useState } from 'react';
import { sendEmail } from '../services/emailService';

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");
    
    const formData = new FormData(event.target);

    const { success, data, error } = await sendEmail(formData);

    if (success) {
      setStatus("Message sent successfully!");
      event.target.reset();
    } else {
      console.error("Error", data || error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-lg font-sans transition-colors duration-300">
      <h2 className="text-3xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 mb-6 uppercase">
        Get In <span className="font-semibold text-blue-600 dark:text-blue-500">Touch</span>
      </h2>
      
      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <input 
            type="text" 
            name="name" 
            required 
            placeholder="Your Name" 
            className="w-full p-3 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded border border-zinc-300 dark:border-zinc-800 focus:border-blue-500 focus:bg-white dark:focus:bg-zinc-800 transition outline-none placeholder-zinc-500" 
          />
        </div>
        
        <div>
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="Your Email" 
            className="w-full p-3 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded border border-zinc-300 dark:border-zinc-800 focus:border-blue-500 focus:bg-white dark:focus:bg-zinc-800 transition outline-none placeholder-zinc-500" 
          />
        </div>
        
        <div>
          <textarea 
            name="message" 
            required 
            placeholder="Your Message" 
            className="w-full p-3 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded border border-zinc-300 dark:border-zinc-800 focus:border-blue-500 focus:bg-white dark:focus:bg-zinc-800 transition outline-none h-32 resize-none placeholder-zinc-500"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-medium py-3 rounded text-sm transition duration-300"
        >
          SEND MESSAGE
        </button>
      </form>
      
      {status && (
        <div className="mt-4 text-center text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {status}
        </div>
      )}
    </div>
  );
}