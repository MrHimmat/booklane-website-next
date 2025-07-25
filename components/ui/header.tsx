"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
          {/* Hamburger menu icon for mobile */}
          <button
            className="sm:hidden ml-auto p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Simple mobile menu with fade-down animation */}
          {menuOpen && (
            <>
              {/* Overlay with fade-in */}
              <div className="fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 animate-fade-in" onClick={() => setMenuOpen(false)} />
              {/* Slide-down and fade-in menu */}
              <nav className="fixed top-0 left-0 z-50 w-full h-full bg-gray-900/95 flex flex-col items-center justify-center sm:hidden animate-slide-down">
                <button
                  className="absolute top-6 right-6 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <ul className="flex flex-col gap-8 font-extrabold text-2xl items-center justify-center h-full w-full">
                  <li><Link href="/"  className="font-black hover:text-blue-400 transition-colors duration-200">Home</Link></li>
                  <li><a href="#about" onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="font-black hover:text-blue-400 transition-colors duration-200">About</a></li>
                  <li><a href="https://play.google.com/store/apps/details?id=com.cloud_regex.book_lane&hl=en_IN&pli=1" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="font-black hover:text-blue-400 transition-colors duration-200">Download</a></li>
                  <li><a href="#contact" onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="font-black hover:text-blue-400 transition-colors duration-200">Contact</a></li>
                </ul>
              </nav>
              <style jsx>{`
                @keyframes fade-in {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }
                .animate-fade-in {
                  animation: fade-in 0.2s ease;
                }
                @keyframes slide-down {
                  from {
                    opacity: 0;
                    transform: translateY(-30px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                .animate-slide-down {
                  animation: slide-down 0.25s cubic-bezier(0.4,0,0.2,1);
                }
              `}</style>
            </>
          )}
          {/* Main navigation links for desktop */}
          <nav className="hidden sm:flex flex-1 items-center justify-end">
            <ul className="flex flex-row items-center gap-6 text-sm font-bold">
              <li><Link href="/" className="font-black transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:bg-clip-text hover:text-transparent hover:scale-105">Home</Link></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="font-black transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:bg-clip-text hover:text-transparent hover:scale-105">About</a></li>
              <li><a href="https://play.google.com/store/apps/details?id=com.cloud_regex.book_lane&hl=en_IN&pli=1" target="_blank" rel="noopener noreferrer" className="font-black transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:bg-clip-text hover:text-transparent hover:scale-105">Download</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="font-black transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:bg-clip-text hover:text-transparent hover:scale-105">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
