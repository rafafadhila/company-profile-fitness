'use client'
import { useState, useEffect } from "react";
import { PiQuotesFill } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonial() {

    const testimonials = [
        {
            name: "Ryan",
            review: `"Didn't think I'd enjoy working out this much. The coaches are super chill but still push you hard when it counts. Love the energy here!"`,
        },
        {
            name: "Jane",
            review: `“The gym feels like a second home. Cool people, clean space, and the playlist always hits. Best decision I made this year.”`,
        },
        {
            name: "Leo",
            review: `"They really make fitness feel fun again. The atmosphere keeps me motivated every single time I show up!"`,
        }
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="bg-white text-black py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* FLEX LAYOUT — reverse on mobile */}
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16">

                    {/* Left Side - Auto Carousel */}
                    <div className="relative flex flex-col items-center justify-center w-full lg:w-1/2">

                        <div className="h-72 flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute bg-gray-50 rounded-2xl shadow-sm px-8 py-10 text-center max-w-md w-full hover:scale-105 hover:shadow-2xl hover:bg-white transition-all duration-300 space-y-5"
                                >
                                    <PiQuotesFill className="text-4xl text-indigo-600 w-full" />
                                    <h3 className="text-base font-medium text-gray-700 leading-relaxed">
                                        {testimonials[index].review}
                                    </h3>
                                    <span className="block text-xl font-extrabold text-indigo-600">
                                        {testimonials[index].name}
                                    </span>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Indicators */}
                        <div className="flex space-x-3 mt-10">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-indigo-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                                />
                            ))}
                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="space-y-6 w-full lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            What Our Clients Say About Us
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Hear from people who’ve experienced our fitness community firsthand — real results, good vibes, and a place that feels like home.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
