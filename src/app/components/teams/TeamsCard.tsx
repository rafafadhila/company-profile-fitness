import Image from "next/image"

import dummyTeamData from "@/data/dummyTeamData.json"

export default function TeamsCard() {
     const teams = dummyTeamData;
    
        return (
        <section id="overview" className="bg-white text-black py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">

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
        </section>
    )
}
