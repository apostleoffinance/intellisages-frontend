import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/intellsage1-removebg.png'

const NavBar = () => {
  return (
    <nav className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50 p-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold">
                <Image src={logo} alt="IntelliSages Logo" width={150} height={50} className=''/>
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
            <Button className="bg-[#FF6600] hover:bg-[#E55A00] text-white">
              <Link href={'https://www.intellisages.com/?utm_campaign=pub&utm_medium=web'} target='_blank'>Join the Network</Link>
            </Button>
          </div>
        </div>
      </nav>
  )
}

export default NavBar