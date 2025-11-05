import Header from "../components/Header"
import AboutUs from "../components/about/AboutUs"
import Team from "../components/about/Team"
import Culture from "../components/about/Culture"
import { Metadata } from "next";

export const metadata: Metadata  = {
  title: "About Us | Future Fitness",
  description:
    "Learn more about Future Fitness — our mission, vision, and dedication to helping you achieve your health and fitness goals.",
  openGraph: {
    title: "About Us | Future Fitness",
    description:
      "Discover the story behind Future Fitness and our commitment to a healthier lifestyle for everyone.",
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
    title: "About Future Fitness",
    description:
      "Get to know Future Fitness — a place where passion meets progress in fitness.",
    images: ["/images/fitness-logo3.png"],
  },
};


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
