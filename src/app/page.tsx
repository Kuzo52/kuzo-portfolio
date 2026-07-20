import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Works } from "@/components/Works";
import { Principles } from "@/components/Principles";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Works />
        <Principles />
        <Contact />
      </main>
    </>
  );
}
