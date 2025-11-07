"use client";
import Link from "next/link";
import useAuthStore from "@/stores/useAuthStore";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import useToggleMobile from "@/hooks/useToggleMobile";

export default function Navbar() {

  const { user, logout } = useAuthStore();
  const { isOpen, toggle } = useToggleMobile();

  return (
    <header className="fixed top-0 left-0 w-full bg-indigo-950 text-white shadow-md z-50">
      <nav className="mx-auto flex justify-between items-center px-4 py-4 md:px-12">
        {/* Logo */}
        <Link
          href={'/'}
          className="relative w-20 h-12">
          <Image
            src={'/images/fitness-logo3.png'}
            fill
            alt="fitness company logo"
            className="object-contain"
            sizes="(max-width: 768px) 60px, 80px"
          />

        </Link>

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
          className="md:hidden flex items-center justify-center w-10 h-10 text-white focus:outline-none transition-transform duration-300"
          onClick={toggle}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <HiX className="text-3xl transition-transform duration-300 rotate-90" />
          ) : (
            <HiMenu className="text-3xl transition-transform duration-300 rotate-0" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-indigo-900 text-white border-t border-indigo-800 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 py-6" : "max-h-0 py-0"
          }`}
      >
        <ul className="flex flex-col items-center gap-5 font-semibold text-lg">
          <li><Link href="/" className="hover:text-indigo-400 transition" onClick={toggle}>Home</Link></li>
          <li><Link href="/about" className="hover:text-indigo-400 transition" onClick={toggle}>About</Link></li>
          <li><Link href="/teams" className="hover:text-indigo-400 transition" onClick={toggle}>Teams</Link></li>
          <li><Link href="/services" className="hover:text-indigo-400 transition" onClick={toggle}>Services</Link></li>
          <li><Link href="/blog" className="hover:text-indigo-400 transition" onClick={toggle}>Blog</Link></li>
          <li>
            {!user?.objectId ? (
              <>
                <Link
                  onClick={toggle}
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
