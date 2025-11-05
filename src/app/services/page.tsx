import { Metadata } from "next";
import Header from "../components/Header"
import ServicesCard from "../components/services/ServicesCard"

export const metadata: Metadata = {
  title: "Our Services | Future Fitness",
  description:
    "Explore Future Fitness services — from personal training to group workouts, designed to help you reach your peak performance.",
  openGraph: {
    title: "Our Services | Future Fitness",
    description:
      "Check out our personalized training programs, fitness plans, and wellness services.",
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
    title: "Future Fitness Services",
    description:
      "Explore premium training programs and fitness services from Future Fitness.",
    images: ["/images/fitness-logo3.png"],
  },
};


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
