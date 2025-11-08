"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";


export default function Hero() {

    const { scrollToSection } = useSmoothScroll()
    const VideoHero = dynamic(() => import("./VideoHero"), { ssr: false });

    return (
        <section className="relative h-screen bg-purple-950">
            <Image
                src="/images/hero-background.jpg"
                alt="Hero Background"
                fill
                className="object-cover brightness-25"
                priority
            />

            <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 px-6 md:px-12 h-full pt-24 max-w-7xl mx-auto">

                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full sm:w-[400px] md:w-[450px] lg:w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[550px] overflow-hidden rounded-md shadow-xl">
                        <VideoHero

                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 text-white space-y-5 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug">
                        Empowering Your Health, One Step at a Time
                    </h1>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-medium">
                        We help individuals reach their best potential through smart training,
                        supportive coaching, and a strong community.
                    </h2>

                    <div className="pt-3">
                        <button
                            onClick={() => scrollToSection('overview')}
                            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-md font-semibold">
                            Get Started
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
