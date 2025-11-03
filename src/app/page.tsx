import Hero from "./components/home/Hero";
import Overview from "./components/home/Overview";
import Services from "./components/home/Services";
import Testimonial from "./components/home/Testimonial";


export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Overview></Overview>
      <Services></Services>
      <Testimonial></Testimonial>
    </main>
  );
}
