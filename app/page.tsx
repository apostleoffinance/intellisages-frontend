import AboutSection from "@/components/AboutSection"
import EcosystemSection from "@/components/EcosystemSection"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import InsightSection from "@/components/InsightSection"
import MissionSection from "@/components/MissionSection"
import NavBar from "@/components/NavBar"
import SolutionSection from "@/components/SolutionSection"
import SubscribeCard from "@/components/SubscribeCard"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Insights Preview Section */}
      <InsightSection />

      <SubscribeCard />

      {/* Solutions Section */}
      <SolutionSection />

      {/* Ecosystem Section */}
      <EcosystemSection />

      {/* Mission Section */}
      <MissionSection />

      {/* About Us Section */}
      <AboutSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
