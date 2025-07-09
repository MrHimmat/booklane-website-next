"use client";

import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { useState } from "react";

export default function Cta() {
  const [copied, setCopied] = useState(false);
  const email = "booklaneapp@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="flex flex-col items-center justify-center pt-8 md:pt-12 pb-16 md:pb-28">
      <div className="w-full flex justify-center mb-8">
        <div className="h-px w-[90%] max-w-6xl bg-gradient-to-r from-blue-500 to-green-400" />
      </div>
      <div className="flex justify-center items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
        <span
          id="about"
          className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent"
        >
          Contact
        </span>
      </div>
      <h2
        id="contact"
        className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent mb-8 tracking-tight animate-gradient"
        style={{ animation: "gradient 12s linear infinite" }}
      >
        Contact Us
      </h2>
      <p className="text-lg md:text-xl text-gray-300 mb-10 text-center max-w-xl">
        We’d love to hear from you! Whether you have a question, feedback, or
        need support, our team is here to help.
      </p>
      <div className="w-full max-w-2xl flex justify-center mb-10 mx-4 sm:mx-0">
        <div className="w-auto min-w-[280px] sm:min-w-[320px] bg-white/5 backdrop-blur-md border border-blue-500/20 rounded-2xl shadow-2xl px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-6 sm:gap-8 md:flex-row md:items-start md:gap-16">
          {/* Address */}
          <div className="flex flex-col items-start flex-1 w-full">
            <div className="flex items-center gap-3 mb-2">
              <svg width="24" height="24" className="sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient
                    id="addressGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#2196F3" />
                    <stop offset="100%" stopColor="#43E97B" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.2 10.47 8.13 11.13a1 1 0 0 0 1.13 0C13.8 21.47 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 17.88C9.09 17.07 5 13.61 5 11c0-3.87 3.13-7 7-7s7 3.13 7 7c0 2.61-4.09 6.07-7 8.88ZM12 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                  fill="url(#addressGradient)"
                />
              </svg>
              <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
                Address
              </span>
            </div>
            <div className="text-gray-200 text-sm sm:text-base md:text-lg font-semibold">
              Pune , Baramati , Maharashtra
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-col items-start flex-1 w-full">
            <div className="flex items-center gap-3 mb-2">
              <svg width="24" height="24" className="sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient
                    id="emailGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#2196F3" />
                    <stop offset="100%" stopColor="#43E97B" />
                  </linearGradient>
                </defs>
                <path
                  d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.217l8 5.333 8-5.333V6.5a.5.5 0 0 0-.5-.5h-15Zm15 13a.5.5 0 0 0 .5-.5v-8.217l-7.5 5-7.5-5V17.5a.5.5 0 0 0 .5.5h15Z"
                  fill="url(#emailGradient)"
                />
              </svg>
              <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
                Email Us
              </span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <a
                href={`mailto:${email}`}
                className="text-blue-400 decoration-0 text-sm sm:text-base md:text-lg font-semibold underline hover:text-green-400 break-all"
              >
                {email}
              </a>
              <div className="relative flex flex-col items-center">
                {copied && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900/90 text-green-400 text-xs font-semibold px-2 py-1 rounded shadow z-10">
                    Copied!
                  </span>
                )}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="p-1 cursor-pointer rounded hover:bg-blue-500/10 transition"
                  title="Copy email"
                >
                  <svg width="16" height="16" className="sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24">
                    <rect
                      x="8"
                      y="8"
                      width="12"
                      height="12"
                      rx="2"
                      stroke="#2196F3"
                      strokeWidth="2"
                    />
                    <rect
                      x="4"
                      y="4"
                      width="12"
                      height="12"
                      rx="2"
                      fill="none"
                      stroke="#43E97B"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div className="w-auto min-w-[280px] sm:min-w-[320px] bg-white/10 backdrop-blur-lg border border-blue-500/20 rounded-2xl shadow-2xl px-4 sm:px-6 py-6 sm:py-8 mx-4 sm:mx-0">
        <form className="flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col gap-4 sm:gap-6 md:flex-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="flex-1 rounded-xl px-4 sm:px-5 py-3 bg-gray-900/80 text-gray-100 border border-blue-400/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none transition placeholder-gray-400 text-sm sm:text-base md:text-lg shadow-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="flex-1 rounded-xl px-4 sm:px-5 py-3 bg-gray-900/80 text-gray-100 border border-blue-400/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none transition placeholder-gray-400 text-sm sm:text-base md:text-lg shadow-sm"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="rounded-xl px-4 sm:px-5 py-3 bg-gray-900/80 text-gray-100 border border-blue-400/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none transition placeholder-gray-400 text-sm sm:text-base md:text-lg shadow-sm resize-none"
            required
          />
          <button
            type="submit"
            className="mt-2 py-3 px-6 sm:px-8 rounded-xl font-bold text-base sm:text-lg bg-gradient-to-r from-blue-500 to-green-400 text-white shadow-xl hover:brightness-95 hover:scale-95 active:scale-100 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
