import React, { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { showSuccess, showError } from "../lib/alert";

const Footer = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setLoading(false)
          console.log("SUCCESS!");
          setForm({ name: "", email: "", message: "" });
          showSuccess("Thank you for reaching out! I will get back to you soon.");
        },
        (error) => {
          console.log("FAILED...", error.text);
          showError("Something went wrong! Please try again.");
        }
      );
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <footer
      id="contact"
      className="bg-white border-t border-blue-100 py-12 px-4 md:px-8"
    >
      <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-12 border-b-4 border-blue-600 pb-2 w-fit mx-auto">
          Contact Me
        </h2>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-gray-50 rounded-xl shadow p-8 flex flex-col gap-6 items-center"
          data-aos="fade-up"      
        >
          <div className="w-full flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-slate-800 bg-white shadow-sm"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-slate-800 bg-white shadow-sm"
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-slate-800 bg-white shadow-sm"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow cursor-pointer hover:bg-blue-700 transition"
          >
            {
            loading ? <div>Sending..</div>: 
              <div>Send Message</div>
            }
            
          </button>
        </form>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/sumitbansode360"
            target="_blank"
            className="text-blue-600 hover:underline flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/sumitbansode"
            target="_blank"
            className="text-blue-600 hover:underline flex items-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/16FDCfrToqxrCFqs7HRkV0keNQ0Ep5PhP/view?usp=sharing"
            target="_blank"
            className="text-blue-600 hover:underline flex items-center gap-2"
          >
            <FaFile /> Resume
          </a>
        </div>
        <div className="mt-8 text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Sumit Bansode. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
