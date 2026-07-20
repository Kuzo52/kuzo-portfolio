import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Works } from "@/components/Works";
import { Principles } from "@/components/Principles";
import { Stack } from "@/components/Stack";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Works />
        <Principles />
        <Stack />
        <Contact />
      </main>
    </>
  );
}
