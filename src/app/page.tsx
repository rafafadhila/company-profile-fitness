import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";


export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Overview></Overview>
    </main>
  );
}
