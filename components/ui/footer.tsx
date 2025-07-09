"use client";
import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const email1 = "booklaneapp@gmail.com";
  const email2 = "cloudregex@gmail.com";
  const handleCopy1 = () => {
    navigator.clipboard.writeText(email1);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  const handleCopy2 = () => {
    navigator.clipboard.writeText(email2);
    setCopied2(true);
    setTimeout(() => setCopied2(false), 1500);
  };

  return (
    <footer className="relative bg-gray-950/95 pt-6 pb-8 px-4 flex flex-col items-center text-left overflow-hidden">
      {/* Gradient line */}
      <div className="w-full flex justify-center mb-3">
        <div className="h-px w-[90%] max-w-6xl bg-gradient-to-r from-blue-500 to-green-400" />
      </div>
      {/* Footer Card: About | Links | Contact */}
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-lg border border-blue-500/20 rounded-2xl shadow-2xl px-8 py-10 mb-12 flex flex-col mt-8 md:flex-row items-start gap-10 md:gap-16 text-left">
        {/* About BookLane (left) */}
        <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
          {/* Logo above About, left-aligned on desktop */}
          <div className="mb-4 w-full flex justify-start">
            <div className="w-20 h-20 flex items-center justify-center shadow-[0_0_32px_0_rgba(67,233,123,0.15)] rounded-full bg-gradient-to-br from-blue-500/10 to-green-400/10">
              <Logo />
            </div>
          </div>
          <div className="text-lg font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent mb-2 uppercase tracking-wide">About BookLane</div>
          <div className="text-gray-200 text-base md:text-lg font-semibold mb-2">Give Old Books a New Chapter</div>
          <div className="text-gray-400 text-base max-w-md mb-3">
            Our mobile app makes it easy to find and share educational books. With a simple interface and powerful search features, it's the best way to connect with other book enthusiasts.
          </div>
        </div>
        {/* Quick Links (center) */}
        <div className="flex-1 flex flex-col items-start mb-8 md:mb-0 justify-center h-full">
          <div className="text-lg font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent mb-4 uppercase tracking-wide">Quick Links</div>
          <ul className="flex flex-col gap-3 text-base font-semibold text-gray-200 w-full max-w-[180px] items-start">
            <li><Link href="/" className="hover:text-green-400 transition block">Home</Link></li>
            <li><Link href="#about" className="hover:text-green-400 transition block">About</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-green-400 transition block">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-green-400 transition block">Terms & Conditions</Link></li>
            <li><a href="https://play.google.com/store/apps/details?id=com.cloud_regex.book_lane&hl=en_IN&pli=1" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition block">Download App</a></li>
            <li><Link href="#contact"  className=" hover:text-green-400 transition block">Contact</Link></li>
          </ul>
        </div>
        {/* Contact Us (right) */}
        <div className="flex-1 flex flex-col items-start md:items-end w-full">
          <div className="text-lg font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent mb-4 uppercase tracking-wide w-full text-left">Contact</div>
          <div className="w-full max-w-xs bg-white/10 border border-blue-400/20 rounded-xl px-5 py-5 shadow-lg flex flex-col gap-6 sm:max-w-full sm:px-3 sm:py-4">
            {/* Address */}
            <div className="flex items-center gap-3">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient id="addressGradientFooter2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2196F3" />
                    <stop offset="100%" stopColor="#43E97B" />
                  </linearGradient>
                </defs>
                <path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.2 10.47 8.13 11.13a1 1 0 0 0 1.13 0C13.8 21.47 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 17.88C9.09 17.07 5 13.61 5 11c0-3.87 3.13-7 7-7s7 3.13 7 7c0 2.61-4.09 6.07-7 8.88ZM12 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" fill="url(#addressGradientFooter2)"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-base font-bold text-gray-100">Address</span>
                <span className="text-gray-200 text-base font-semibold">Pune , Baramati ,  Maharashtra</span>
              </div>
            </div>
            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-blue-500/30 via-green-400/20 to-transparent my-1 sm:hidden" />
            {/* Email */}
            <div className="flex items-start gap-3 flex-wrap sm:flex-col">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient id="emailGradientFooter2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2196F3" />
                    <stop offset="100%" stopColor="#43E97B" />
                  </linearGradient>
                </defs>
                <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.217l8 5.333 8-5.333V6.5a.5.5 0 0 0-.5-.5h-15Zm15 13a.5.5 0 0 0 .5-.5v-8.217l-7.5 5-7.5-5V17.5a.5.5 0 0 0 .5.5h15Z" fill="url(#emailGradientFooter2)"/>
              </svg>
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base font-bold text-gray-100">Email</span>
                  <button
                    type="button"
                    onClick={handleCopy1}
                    className="p-0.5 rounded hover:bg-blue-500/10 transition"
                    title="Copy email"
                  >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="inline align-middle">
                      <rect x="8" y="8" width="12" height="12" rx="2" stroke="#2196F3" strokeWidth="2"/>
                      <rect x="4" y="4" width="12" height="12" rx="2" fill="none" stroke="#43E97B" strokeWidth="2"/>
                    </svg>
                  </button>
                  {copied && (
                    <span className="bg-gray-900/90 text-green-400 text-xs font-semibold px-2 py-1 rounded shadow z-10 ml-2">
                      Copied!
                    </span>
                  )}
                </div>
                <span className="text-blue-400 underline font-semibold text-base mb-2 select-text">{email1}</span>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base font-bold text-gray-100">Alternate</span>
                  <button
                    type="button"
                    onClick={handleCopy2}
                    className="p-0.5 rounded hover:bg-blue-500/10 transition"
                    title="Copy alternate email"
                  >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="inline align-middle">
                      <rect x="8" y="8" width="12" height="12" rx="2" stroke="#2196F3" strokeWidth="2"/>
                      <rect x="4" y="4" width="12" height="12" rx="2" fill="none" stroke="#43E97B" strokeWidth="2"/>
                    </svg>
                  </button>
                  {copied2 && (
                    <span className="bg-gray-900/90 text-green-400 text-xs font-semibold px-2 py-1 rounded shadow z-10 ml-2">
                      Copied!
                    </span>
                  )}
                </div>
                <span className="text-blue-400 underline font-semibold text-base select-text">{email2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-gray-500 text-center text-xs tracking-wide">
        © Copyright Cloud Regex All Rights Reserved
      </div>
    </footer>
  );
}
