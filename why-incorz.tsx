import { Zap, DollarSign, Award } from "lucide-react"
import Image from "next/image"

export default function WhyIncorz() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-[#4e4747] text-4xl md:text-5xl font-bold mb-6">Why Incorz?</h2>

            <p className="text-[#504e4e] text-lg mb-10 leading-relaxed">
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
                  <Award className="text-[#6200ff] h-6 w-6" />
                </div>
                <span className="text-[#4e4747] text-lg">Expert guidance since 2019</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8">
                  <DollarSign className="text-[#6200ff] h-6 w-6" />
                </div>
                <span className="text-[#4e4747] text-lg">Affordable, no hidden fees</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8">
                  <Zap className="text-[#6200ff] h-6 w-6" />
                </div>
                <span className="text-[#4e4747] text-lg">Fast, hassle-free setup</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image and Process Steps */}
          <div className="md:w-1/2 relative">
            <div className="relative">
              {/* Purple Background */}
              <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-[#6200ff] rounded-3xl -z-10"></div>

              {/* Person Image */}
              <div className="relative z-10">
                <Image
                  src="https://v0.dev/_next/image?url=https%3A%2F%2Fhebbkx1anhila5yf.public.blob.vercel-storage.com%2Fimage-QPd4PbLwdpVwGTFNIjvOXFFr6OUHEy.png&w=1920&q=75"
                  alt="Person working on laptop"
                  width={600}
                  height={500}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
