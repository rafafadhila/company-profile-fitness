import Header from "../components/Header"
import ServicesCard from "../components/services/ServicesCard"

export default function page() {
  return (
    <main>
      <Header
        image="/images/header.jpg"
        title="We Provides What You Need"
        subtitle="Join us and feel the difference in every move.">
      </Header>
      <ServicesCard></ServicesCard>
    </main>
  )
}
