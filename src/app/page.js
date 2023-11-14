import About from "@/components/About";
import Filosofi from "@/components/Filosofi";
import Hero from "@/components/Hero";
import Seramoe from "@/components/Seramoe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-32">
      <Hero />
      <About />
      <Filosofi />
      <Seramoe />
    </main>
  )
}
