import Header from "../components/Header"
import TeamsCard from "../components/teams/TeamsCard"
import { getTeamData } from "@/lib/getTeamData"

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
