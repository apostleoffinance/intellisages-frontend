import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Database, FileText, Users } from 'lucide-react'

const SolutionSection = () => {
  return (
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
  )
}

export default SolutionSection