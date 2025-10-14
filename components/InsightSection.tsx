import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { ArrowRight, BarChart3, Database, Globe, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const InsightSection = () => {
  return (
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
                link: 'https://intellisages.substack.com/'
              },
              //Add more
            //   {
            //     title: "DeFi Adoption Trends",
            //     description:
            //       "Tracking decentralized finance protocols gaining traction in Nigeria, Kenya, and South Africa.",
            //     icon: BarChart3,
            //     category: "Data Analysis",
            //     link: ''
            //   },
            //   {
            //     title: "RWA Tokenization",
            //     description:
            //       "Exploring real-world asset tokenization opportunities in African agriculture and real estate sectors.",
            //     icon: Database,
            //     category: "Innovation Report",
            //     link: ''
            //   },
            //   {
            //     title: "Cross-Border Payments",
            //     description: "How blockchain is revolutionizing intra-African trade and payment settlements.",
            //     icon: Globe,
            //     category: "Industry Insight",
            //     link: ''
            //   },
            ].map((insight, index) => (
                <Link href={insight.link || '#'} target='_blank' key={index} rel="noopener noreferrer">
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
                    <Link href={insight.link || "#"} className="text-[#FF6600] font-medium inline-flex items-center group/link">
                        View Insight
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    </CardContent>
                </Card>
                </Link>
              
            ))}
          </div>
        </div>
      </section>
  )
}

export default InsightSection