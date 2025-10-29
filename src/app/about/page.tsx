import Header from "../components/Header"
import AboutUs from "../components/about/AboutUs"
import Team from "../components/about/Team"
import Culture from "../components/about/Culture"

export default function page() {
  return (
    <main className="">
      <Header
        image="/images/header.jpg"
        title="About Our Company"
        subtitle="Built from passion. Driven by strength.">
      </Header>
      <AboutUs></AboutUs>
      <Team></Team>
      <Culture></Culture>
    </main>
  )
}
