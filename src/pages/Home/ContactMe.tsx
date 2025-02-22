"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { League_Gothic } from 'next/font/google';

const leagueGothic = League_Gothic({
  subsets: ["latin"],
})


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const messageData = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Isha Kaur",  
      to_email: "isha3076@gmail.com",  
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, // Template ID
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string // Public Key
      );

      if (response.status === 200) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSuccess("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/background.png"
          alt="Homepage Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="object-cover w-full h-full"
        />
      </div>
  
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-transparent opacity-100"></div>
  
      {/* GET IN TOUCH Text */}
      <h1 className={`absolute z-20 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl text-center ${leagueGothic.className}`}>
        GET IN TOUCH
      </h1>
  
      {/* Contact Form */}
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 bg-white bg-opacity-30 rounded-lg shadow-lg z-30">
        <h2 className="text-2xl text-white font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {success && <p className="text-center text-green-500">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
