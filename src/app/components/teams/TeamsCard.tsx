import Image from "next/image";

export default function TeamsCard({ teams }: { teams: any[] }) {
    return (
        <>
            {
                teams.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 rounded-2xl shadow-sm p-8 text-center hover:scale-105 hover:shadow-2xl hover:bg-white transition-all duration-300 space-y-2"
                    >
                        <div className="w-full">
                            <Image
                                src={item.image}
                                width={300}
                                height={300}
                                alt={`Profile pic ${item.name}`}
                                className="w-full h-56 object-cover rounded-md"
                            />
                        </div>
                        <h3 className="text-xl font-extrabold text-indigo-600">{item.name}</h3>
                        <h3 className="text-base font-semibold text-gray-700">{item.role}</h3>
                        <p className="text-sm text-gray-600">{item.bio}</p>
                        <p className="text-xs text-gray-500">{item.country}</p>
                    </div>
                ))
            }
        </>

    );
}

