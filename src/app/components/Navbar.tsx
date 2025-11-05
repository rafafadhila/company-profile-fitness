"use client";
import Link from "next/link";
import { useState } from "react";
import useAuthStore from "@/stores/useAuthStore";
import Image from "next/image";

export default function Navbar() {

  const { user, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-indigo-950 text-white shadow-md z-50">
      <nav className="mx-auto flex justify-between items-center px-4 py-4 md:px-12">
        {/* Logo */}
        <div className="relative w-20 h-12">
          <Image
            src={'/images/fitness-logo3.png'}
            fill
            alt="fitness company logo"
            className="object-contain"
          />

        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 font-semibold text-lg">
          <li><Link href="/" className="hover:text-indigo-400 transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-indigo-400 transition">About</Link></li>
          <li><Link href="/services" className="hover:text-indigo-400 transition">Services</Link></li>
          <li><Link href="/teams" className="hover:text-indigo-400 transition">Teams</Link></li>
          <li><Link href="/blog" className="hover:text-indigo-400 transition">Blog</Link></li>
        </ul>

        {/* Sign In Button (Desktop Only) */}
        <div className="hidden md:flex">
          {!user?.objectId ? (
            <>
              <Link
                href="/auth/login"
                className="bg-purple-700 hover:bg-purple-900 px-5 py-2 rounded-full font-bold text-md transition">
                Login
              </Link>
            </>
          ) : (
            <>
              <span className="bg-purple-600 p-2 m-2 rounded-md font-bold text-sm transition">
                {user?.name}
              </span>
              <button
                onClick={logout}
                className="text-sm text-red-600 hover:underline"
              >
                Logout
              </button>
            </>
          )}

        </div>


        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-0.5 bg-white transform transition duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
              }`}
          ></span>
          <span
            className={`block h-0.5 bg-white transition duration-300 ${isOpen ? "opacity-0" : ""
              }`}
          ></span>
          <span
            className={`block h-0.5 bg-white transform transition duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-indigo-900 text-white border-t border-indigo-800 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 py-6" : "max-h-0 py-0"
          }`}
      >
        <ul className="flex flex-col items-center gap-5 font-semibold text-lg">
          <li><Link href="/" className="hover:text-indigo-400 transition" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" className="hover:text-indigo-400 transition" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/teams" className="hover:text-indigo-400 transition" onClick={() => setIsOpen(false)}>Teams</Link></li>
          <li><Link href="/services" className="hover:text-indigo-400 transition" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link href="/blog" className="hover:text-indigo-400 transition" onClick={() => setIsOpen(false)}>Blog</Link></li>
          <li>
            {!user?.objectId ? (
              <>
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/auth/login"
                  className="bg-purple-700 hover:bg-purple-900 px-5 py-2 rounded-full font-bold text-md transition">
                  Login
                </Link>
              </>
            ) : (
              <>
                <span className="bg-purple-600 p-2 m-2 rounded-md font-bold text-sm transition">
                  {user?.email}
                </span>
                <button
                  onClick={logout}
                  className="text-sm text-red-600 hover:underline"
                >
                  Logout
                </button>
              </>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}
