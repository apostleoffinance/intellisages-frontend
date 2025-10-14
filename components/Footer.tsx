import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
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
                  <Link href="https://www.intellisages.com/?utm_campaign=pub&utm_medium=web" className="text-gray-400 hover:text-[#FF6600] transition-colors">
                    Substack
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© IntelliSages 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer