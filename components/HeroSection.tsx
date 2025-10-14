import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import heroImg from '../public/Regions_of_Africa_Map-removebg.png'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
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
                <Button  size="lg" className="bg-[#FF6600] hover:bg-[#E55A00] text-white group">
                 <Link href={"#insights"} className="flex items-center">
                  Explore Insights
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                 </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 hover:border-[#FF6600] hover:text-[#fff] bg-transparent"
                >
                  <Link href={'https://intellisages.substack.com/'} target='_blank'>Join the Network</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6600]/20 to-transparent rounded-3xl blur-3xl" />
              <Image
                src={heroImg}
                alt="Africa Blockchain Network"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection