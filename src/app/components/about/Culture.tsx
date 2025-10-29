import React from 'react'
import { LuBicepsFlexed, LuUsers, LuTrendingUp } from "react-icons/lu"

export default function Culture() {
    const cultureValues = [
        {
            icon: <LuBicepsFlexed className="text-5xl text-indigo-600" />,
            title: "Integrity",
            description: "We believe honesty and accountability build lasting trust. Every goal, decision, and workout starts with doing what’s right — even when no one’s watching."
        },
        {
            icon: <LuUsers className="text-5xl text-indigo-600" />,
            title: "Teamwork",
            description: "Our strength lies in unity. We support each other, celebrate progress together, and move as one community — trainers, staff, and members alike."
        },
        {
            icon: <LuTrendingUp className="text-5xl text-indigo-600" />,
            title: "Growth",
            description: "We never stop improving. Whether it’s physical performance, mindset, or innovation, we’re driven by progress and the pursuit of excellence."
        }
    ]

    return (
        <section className="bg-white text-gray-900 py-24">
            <div className="max-w-6xl mx-auto px-6 lg:px-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Our Culture
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        A culture built on passion, respect, and a shared commitment to growth — both in and out of the gym.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {cultureValues.map((value, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 hover:bg-white rounded-2xl shadow-sm hover:shadow-xl p-10 text-center transition-all duration-300"
                        >
                            <div className="flex flex-col items-center gap-4">
                                {value.icon}
                                <h3 className="text-2xl font-bold mt-2">{value.title}</h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
