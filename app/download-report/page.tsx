import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const DownloadReportPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Download Report</h1>
            <p className="text-xl text-gray-600 font-serif">State Of Crypto Adoption in Africa</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-3xl">
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg bg-white">
                <Image
                  src="/State Of Crypto Adoption in Africa.png"
                  alt="State Of Crypto Adoption in Africa report cover"
                  width={1400}
                  height={2000}
                  className="w-full h-auto"
                  priority
                />
                <div className="p-6 sm:p-8 flex justify-center">
                  <Button asChild className="bg-[#FF6600] hover:bg-[#E65C00] text-white px-8 py-6 text-lg rounded-full">
                    <Link href="https://forms.gle/MRNmynTWu9xro6hL6" target="_blank" rel="noopener noreferrer">
                      Download PDF
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DownloadReportPage
