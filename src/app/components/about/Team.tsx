import React from 'react'

import TeamsCard from "@/app/components/teams/TeamsCard"
import { getTeamData } from "@/lib/getTeamData"

export default async function Team() {

    const teams = await getTeamData();


    return (
        <section id="overview" className="bg-white text-black py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-16 items-center">

                    {/* Left Side */}
                    <div className="space-y-6 text-center lg:text-left">
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
                        <TeamsCard teams={teams.slice(0, 2)}></TeamsCard>
                    </div>

                </div>
            </div>
        </section>

    )
}
