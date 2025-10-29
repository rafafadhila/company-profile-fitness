import Header from "../components/Header"
import TeamsCard from "../components/teams/TeamsCard"

export default function page() {
    return (
        <main>
            <Header
                image="/images/header.jpg"
                title="Our Team"
                subtitle="Them who makes all think possible"
            />
            <TeamsCard />
        </main>

    )
}
