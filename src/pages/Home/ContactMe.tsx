"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";

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
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
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
  );
};

export default ContactForm;
