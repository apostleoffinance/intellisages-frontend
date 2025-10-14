import React from 'react'

const EcosystemSection = () => {
  return (
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
  )
}

export default EcosystemSection