import { Star } from "lucide-react"

export default function PricingSection() {
  return (
    <div className="w-full bg-[#320e6f] py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
          One price, No Surprises
        </h2>
        <p className="text-white text-sm sm:text-base text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          StartGlobal offers everything on a single price. No upselling, no hidden charges, no payment processing
          charges, no taxes added at the end. You pay what you see here and not a dollar more.
        </p>

        {/* Pricing Content */}
        <div className="bg-[#3d1a80] rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-12 flex flex-col md:flex-row gap-6 sm:gap-8">
          {/* Left Column */}
          <div className="md:w-1/2">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              StartGlobal All-Inclusive Pricing
            </h3>
            <p className="text-white text-sm sm:text-base mb-6 sm:mb-8">
              Our price includes all processing charges, document preparations, digital signatures and everything in
              between.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 sm:gap-y-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <Star className="text-[#dae35a] h-4 w-4 sm:h-5 sm:w-5 fill-[#dae35a]" />
                <span className="text-white text-sm sm:text-base">Name check and Clearance</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Star className="text-[#dae35a] h-4 w-4 sm:h-5 sm:w-5 fill-[#dae35a]" />
                <span className="text-white text-sm sm:text-base">LLC State Filing</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Star className="text-[#dae35a] h-4 w-4 sm:h-5 sm:w-5 fill-[#dae35a]" />
                <span className="text-white text-sm sm:text-base">Tax Registration - EIN</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Star className="text-[#dae35a] h-4 w-4 sm:h-5 sm:w-5 fill-[#dae35a]" />
                <span className="text-white text-sm sm:text-base">Business Bank Account</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Star className="text-[#dae35a] h-4 w-4 sm:h-5 sm:w-5 fill-[#dae35a]" />
                <span className="text-white text-sm sm:text-base">Registered Agent for 1 Year</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Star className="text-[#dae35a] h-4 w-4 sm:h-5 sm:w-5 fill-[#dae35a]" />
                <span className="text-white text-sm sm:text-base">All Government Fees</span>
              </div>
            </div>
          </div>

          {/* Right Column - Price Card */}
          <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
            <div className="bg-[#3d1a80] border border-white/20 rounded-xl sm:rounded-2xl p-5 sm:p-8 w-full max-w-md">
              <p className="text-white text-center text-lg sm:text-xl mb-4 sm:mb-8">All-in-one price</p>
              <h3 className="text-white text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8">
                $599
              </h3>
              <div className="flex justify-center">
                <button className="bg-white text-[#320e6f] font-medium py-1.5 sm:py-2.5 md:py-3.5 px-2.5 sm:px-4 md:px-5 rounded-full flex items-center gap-1 sm:gap-2 hover:bg-opacity-90 transition-all text-[11px] sm:text-xs md:text-sm">
                  <span>Start your LLC in 4 Weeks</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="#320e6f"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
