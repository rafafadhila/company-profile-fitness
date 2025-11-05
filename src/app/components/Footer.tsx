"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-indigo-950 text-white py-10">
            <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Left - Logo */}
                <div className="text-center md:text-left">
                    <div className="relative w-25 h-15 mx-auto">
                        <Image
                            src={'/images/fitness-logo3.png'}
                            fill
                            alt="fitness company logo"
                            className="object-contain"
                        />

                    </div>
                    <p className="text-sm text-indigo-300 mt-2">
                        Train hard, stay consistent, and achieve greatness.
                    </p>
                </div>

                {/* Center - Navigation */}
                <ul className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-indigo-200">
                    <li><Link href="/" className="hover:text-indigo-400 transition">Home</Link></li>
                    <li><Link href="/about" className="hover:text-indigo-400 transition">About</Link></li>
                    <li><Link href="/services" className="hover:text-indigo-400 transition">Services</Link></li>
                    <li><Link href="/teams" className="hover:text-indigo-400 transition">Teams</Link></li>
                    <li><Link href="/blog" className="hover:text-indigo-400 transition">Blog</Link></li>
                </ul>

                {/* Right - Social Media */}
                <div className="flex gap-5 text-lg">
                    <a href="#" className="hover:text-indigo-400 transition"><FaFacebookF /></a>
                    <a href="#" className="hover:text-indigo-400 transition"><FaTwitter /></a>
                    <a href="#" className="hover:text-indigo-400 transition"><FaInstagram /></a>
                    <a href="#" className="hover:text-indigo-400 transition"><FaLinkedinIn /></a>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="mt-10 text-center text-sm text-indigo-400 border-t border-indigo-800 pt-4">
                © {new Date().getFullYear()} FITNESS LOGO. All rights reserved.
            </div>
        </footer>
    );
}
