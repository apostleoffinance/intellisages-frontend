import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, FileText, Users, TrendingUp, Database, Globe } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold">
                <span className="text-gray-900">Intelli</span>
                <span className="text-[#FF6600]">Sages</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#insights" className="text-gray-600 hover:text-[#FF6600] transition-colors">
                Insights
              </Link>
              <Link href="#solutions" className="text-gray-600 hover:text-[#FF6600] transition-colors">
                Solutions
              </Link>
              <Link href="#ecosystem" className="text-gray-600 hover:text-[#FF6600] transition-colors">
                Ecosystem
              </Link>
              <Link href="#mission" className="text-gray-600 hover:text-[#FF6600] transition-colors">
                Mission
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-[#FF6600] transition-colors">
                About Us
              </Link>
            </div>
            <Button className="bg-[#FF6600] hover:bg-[#E55A00] text-white">Join the Network</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-[#FF6600]/10 text-[#FF6600] rounded-full text-sm font-medium">
                  Blockchain Intelligence for Africa
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Blockchain Data & Intelligence Hub for Africa's Crypto Adoption
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-serif">
                Empowering projects with data, insights, and partnerships across the African crypto ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#FF6600] hover:bg-[#E55A00] text-white group">
                  Explore Insights
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 hover:border-[#FF6600] hover:text-[#FF6600] bg-transparent"
                >
                  Join the Network
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6600]/20 to-transparent rounded-3xl blur-3xl" />
              <img
                src="/abstract-map-of-africa-with-blockchain-network-con.jpg"
                alt="Africa Blockchain Network"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insights Preview Section */}
      <section id="insights" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-600 font-serif max-w-2xl mx-auto">
              Deep-dive research and analysis on Africa's blockchain ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Stablecoins in Africa",
                description:
                  "Analyzing the rapid adoption of USD-backed stablecoins across African markets and their impact on remittances.",
                icon: TrendingUp,
                category: "Market Research",
              },
              {
                title: "DeFi Adoption Trends",
                description:
                  "Tracking decentralized finance protocols gaining traction in Nigeria, Kenya, and South Africa.",
                icon: BarChart3,
                category: "Data Analysis",
              },
              {
                title: "RWA Tokenization",
                description:
                  "Exploring real-world asset tokenization opportunities in African agriculture and real estate sectors.",
                icon: Database,
                category: "Innovation Report",
              },
              {
                title: "Cross-Border Payments",
                description: "How blockchain is revolutionizing intra-African trade and payment settlements.",
                icon: Globe,
                category: "Industry Insight",
              },
            ].map((insight, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-[#FF6600]/50"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[#FF6600]/10 rounded-lg group-hover:bg-[#FF6600] transition-colors">
                      <insight.icon className="h-6 w-6 text-[#FF6600] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-medium text-gray-500">{insight.category}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-[#FF6600] transition-colors">
                    {insight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 font-serif mb-4">{insight.description}</CardDescription>
                  <Link href="#" className="text-[#FF6600] font-medium inline-flex items-center group/link">
                    View Insight
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-600 font-serif max-w-2xl mx-auto">
              Comprehensive intelligence services for the African blockchain ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Tracking",
                description:
                  "Real-time monitoring of stablecoins, RWA tokenization, and DeFi trends across African markets.",
                icon: Database,
                features: ["On-chain analytics", "Market metrics", "Adoption tracking"],
              },
              {
                title: "Market Research",
                description:
                  "Deep-dive country and sector reports providing actionable insights for strategic decision-making.",
                icon: FileText,
                features: ["Country reports", "Sector analysis", "Trend forecasting"],
              },
              {
                title: "Partnership Intelligence",
                description: "Connecting projects with users and local partners to accelerate growth and adoption.",
                icon: Users,
                features: ["Network mapping", "Partner matching", "Ecosystem insights"],
              },
            ].map((solution, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="p-4 bg-[#FF6600]/10 rounded-xl w-fit mb-4">
                    <solution.icon className="h-8 w-8 text-[#FF6600]" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{solution.title}</CardTitle>
                  <CardDescription className="text-gray-600 font-serif text-base">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#FF6600] rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Ecosystem</h2>
            <p className="text-xl text-gray-600 font-serif max-w-2xl mx-auto">
              Partnering with leading platforms and projects across the blockchain space
            </p>
          </div>
          {/* Gradient fade overlays */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Scrolling container */}
            <div className="logo-carousel-container group">
              <div className="logo-carousel">
                {/* First set of logos */}
                <div className="logo-item">
                  <img src="/celo.webp" alt="Celo" className="logo-image" />
                </div>
                <div className="logo-item">
                  <img src="/sages-lab.png" alt="Sages Lab" className="logo-image" />
                </div>
                <div className="logo-item">
                  <img src="/analytic-sages.jpg" alt="Analytic Sages" className="logo-image" />
                </div>
                <div className="logo-item">
                  <img src="/celo.webp" alt="Celo" className="logo-image" />
                </div>
                <div className="logo-item">
                  <img src="/sages-lab.png" alt="Sages Lab" className="logo-image" />
                </div>
                <div className="logo-item">
                  <img src="/analytic-sages.jpg" alt="Analytic Sages" className="logo-image" />
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="logo-item">
                  <img src="/celo.webp" alt="Celo" className="logo-image" />
                </div>
                <div className="logo-item">
                  <img src="/sages-lab.png" alt="Sages Lab" className="logo-image" />
                </div>
                <div className="logo-item">
                  <img src="/analytic-sages.jpg" alt="Analytic Sages" className="logo-image" />
                </div>
                <div className="logo-item">
                  <img src="/celo.webp" alt="Celo" className="logo-image" />
                </div>
                <div className="logo-item">
                  <img src="/sages-lab.png" alt="Sages Lab" className="logo-image" />
                </div>
                <div className="logo-item">
                  <img src="/analytic-sages.jpg" alt="Analytic Sages" className="logo-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-gradient-to-br from-[#FF6600] to-[#E55A00] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl font-serif leading-relaxed mb-8 text-white/90">
            We're accelerating Africa's crypto adoption through intelligence, training, and collaboration. By providing
            data-driven insights and fostering strategic partnerships, we empower blockchain projects to navigate the
            African market with confidence and precision.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { number: "15+", label: "Countries Covered" },
              { number: "50+", label: "Research Reports" },
              { number: "100+", label: "Network Partners" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-xl text-gray-600 font-serif leading-relaxed">
              Built by analysts, researchers, and builders accelerating blockchain innovation in Africa. We combine deep
              market knowledge with technical expertise to deliver actionable intelligence that drives real-world
              adoption.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-600 font-serif leading-relaxed mb-4">
              IntelliSages was founded to bridge the information gap in Africa's rapidly evolving blockchain ecosystem.
              We recognized that while innovation was flourishing across the continent, there was a critical need for
              reliable data, comprehensive research, and strategic intelligence.
            </p>
            <p className="text-gray-600 font-serif leading-relaxed">
              Today, we serve as the trusted intelligence hub for projects, investors, and builders looking to
              understand and engage with African crypto markets. Our team brings together expertise in blockchain
              technology, financial analysis, and African market dynamics.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <div className="text-2xl font-bold">
                  <span className="text-white">Intelli</span>
                  <span className="text-[#FF6600]">Sages</span>
                </div>
              </div>
              <p className="text-gray-400 font-serif">
                Blockchain Data & Intelligence Hub for Africa's Crypto Adoption
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#insights" className="text-gray-400 hover:text-[#FF6600] transition-colors">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link href="#solutions" className="text-gray-400 hover:text-[#FF6600] transition-colors">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#ecosystem" className="text-gray-400 hover:text-[#FF6600] transition-colors">
                    Ecosystem
                  </Link>
                </li>
                <li>
                  <Link href="#mission" className="text-gray-400 hover:text-[#FF6600] transition-colors">
                    Mission
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-[#FF6600] transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#FF6600] transition-colors">
                    Twitter/X
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#FF6600] transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#FF6600] transition-colors">
                    Substack
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© IntelliSages 2025 – All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
