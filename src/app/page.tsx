import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Technologies } from "@/components/sections/technologies"
import { Projects } from "@/components/sections/projects"
import { Team } from "@/components/sections/team"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Technologies />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
