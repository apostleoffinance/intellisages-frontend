import React from 'react'

const MissionSection = () => {
  return (
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
  )
}

export default MissionSection