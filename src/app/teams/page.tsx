import Header from "../components/Header"
import TeamsCard from "../components/teams/TeamsCard"
import { getTeamData } from "@/lib/getTeamData"

export const metadata = {
    title: "Our Team | Future Fitness",
    description:
        "Meet the passionate trainers and fitness professionals behind Future Fitness who guide your journey to success.",
    openGraph: {
        title: "Our Team | Future Fitness",
        description:
            "Get to know the expert trainers and dedicated staff of Future Fitness.",
        images: [
            {
                url: "/images/fitness-logo3.png",
                width: 1200,
                height: 630,
                alt: "Future Fitness Gym Facility",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Meet the Future Fitness Team",
        description:
            "Meet our experienced coaches and team members helping you achieve your fitness goals.",
        images: ["/images/fitness-logo3.png"],
    },
};


export default async function page() {

    const teams = await getTeamData();

    return (
        <main className="bg-white">
            <Header
                image="/images/header.jpg"
                title="Our Team"
                subtitle="Them who makes all think possible"
            />
            <div className="max-w-6xl mx-auto p-4 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center w-full">
                    <TeamsCard teams={teams} />
                </div>
            </div>
        </main >

    )
}
