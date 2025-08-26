import { Star } from "lucide-react"

export default function PricingSection() {
  return (
    <div className="w-full bg-[#C24505] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-4">One price, No Surprises</h2>
        <p className="text-white text-center max-w-3xl mx-auto mb-16">
          StartGlobal offers everything on a single price. No upselling, no hidden charges, no payment processing
          charges, no taxes added at the end. You pay what you see here and not a dollar more.
        </p>

        {/* Pricing Content */}
        <div className="bg-[#EA580C] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="md:w-1/2">
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">StartGlobal All-Inclusive Pricing</h3>
            <p className="text-white mb-8">
              Our price includes all processing charges, document preparations, digital signatures and everything in
              between.
            </p>

            {/* Features List */}
            <div className="grid md:grid-cols-2 gap-x-4 gap-y-6">
              <div className="flex items-center gap-3">
                <Star className="text-[#dae35a] h-5 w-5 fill-[#dae35a]" />
                <span className="text-white">Name check and Clearance</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-[#dae35a] h-5 w-5 fill-[#dae35a]" />
                <span className="text-white">LLC State Filing</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-[#dae35a] h-5 w-5 fill-[#dae35a]" />
                <span className="text-white">Tax Registration - EIN</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-[#dae35a] h-5 w-5 fill-[#dae35a]" />
                <span className="text-white">Business Bank Account</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-[#dae35a] h-5 w-5 fill-[#dae35a]" />
                <span className="text-white">Registered Agent for 1 Year</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-[#dae35a] h-5 w-5 fill-[#dae35a]" />
                <span className="text-white">All Government Fees</span>
              </div>
            </div>
          </div>

          {/* Right Column - Price Card */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="bg-[#EA580C] border border-white/20 rounded-2xl p-8 w-full max-w-md">
              <p className="text-white text-center text-xl mb-8">All-in-one price</p>
              <h3 className="text-white text-center text-7xl md:text-8xl font-bold mb-8">$599</h3>
              <div className="flex justify-center">
                <button className="bg-white text-[#EA580C] font-medium py-4 px-6 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all">
                  Start your LLC in 4 Weeks
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="#C24505"
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
