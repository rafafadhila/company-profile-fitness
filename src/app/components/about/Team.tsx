import React from 'react'

import Image from 'next/image';

export default function Team() {
    const teams = [
        {
            image: "/images/profile-pic.jpg",
            name: 'Juan Adam',
            role: 'CEO',
            bio : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non impedit sed, eum consequatur nobis, atque quo amet natus ipsam asperiores praesentium necessitatibus distinctio omnis voluptatum rem deserunt labore totam ad. '
        },
        {
            image: "/images/profile-pic.jpg",
            name: 'Dwayne Jhonny',
            role: 'Founder',
            bio : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non impedit sed, eum consequatur nobis, atque quo amet natus ipsam asperiores praesentium necessitatibus distinctio omnis voluptatum rem deserunt labore totam ad. '
        },
    ];

    return (
        <section id="overview" className="bg-white text-black py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-16 items-center">

                    {/* Left Side */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            Our Founder
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus, dicta error quam nisi ea! Ducimus, obcaecati ad soluta nobis explicabo nostrum similique est. Suscipit repudiandae sit eius nihil corrupti!
                        </p>
                        <a href="#" className="bg-indigo-600 px-4 py-3 text-white rounded-md font-bold shadow-md hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150">See More Of Us</a>
                    </div>

                    {/* Right Side - Cards */}
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">

                        {teams.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl shadow-sm p-8 text-center hover:scale-105 hover:shadow-2xl hover:bg-white transition-all duration-300 space-y-2"
                            >
                                <div className='w-full'>
                                <Image 
                                    src={item.image}
                                    width={300}
                                    height={300}
                                    alt={`profile pic ${item.name}`}
                                    className='w-full h-56 object-cover rounded-md'
                                />

                                </div>
                                <h3 className="text-xl font-extrabold text-indigo-600">
                                    {item.name}
                                </h3>
                                <h3 className="text-base font-semibold text-gray-700">
                                    {item.role}
                                </h3>
                                <h3 className="text-base font-semibold text-gray-700">
                                    {item.bio}
                                </h3>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>

    )
}
