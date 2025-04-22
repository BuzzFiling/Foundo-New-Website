import { Award, DollarSign, Zap } from "lucide-react"
import Image from "next/image"

export default function WhyIncorzSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Purple side borders - only visible on large screens */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-8 bg-purple-800"></div>
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-8 bg-purple-800"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-[#4e4747] text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Why Incorz?</h2>

            <p className="text-[#504e4e] text-base sm:text-lg mb-8 leading-relaxed">
              We know how to take the complexity out of forming your company because we've been in your shoes. Privatly
              was born because we struggled ourselves—facing a complicated, lengthy process when trying to set up our
              own company in a supported country. Since 2019, we've been committed to providing unmatched expertise,
              affordable prices, and the fastest turnaround time to help entrepreneurs like you start your business
              journey smoothly and confidently.
            </p>

            {/* Benefits List */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8">
                  <Award className="text-purple-700 h-6 w-6" />
                </div>
                <span className="text-[#4e4747] text-lg">Expert guidance since 2019</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8">
                  <DollarSign className="text-purple-700 h-6 w-6" />
                </div>
                <span className="text-[#4e4747] text-lg">Affordable, no hidden fees</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8">
                  <Zap className="text-purple-700 h-6 w-6" />
                </div>
                <span className="text-[#4e4747] text-lg">Fast, hassle-free setup</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Purple Background */}
              <div className="bg-purple-700 rounded-2xl p-6 sm:p-8 md:p-10 relative">
                <div className="relative z-10 w-full h-[300px] sm:h-[350px] md:h-[400px]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wNPJSsA2szB7xqEgNVAjWrzKxIa2ed.png"
                    alt="Person working on laptop with notification UI showing company formation steps"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
