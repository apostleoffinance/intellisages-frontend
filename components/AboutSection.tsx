import React from 'react'

const AboutSection = () => {
  return (
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
  )
}

export default AboutSection