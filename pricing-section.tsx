import { ArrowRight, Plus, Star } from "lucide-react"

export default function PricingSection() {
  return (
    <div id="pricing" className="w-full bg-[#320e6f] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-4">One price, No Surprises</h2>
        <p className="text-white text-center max-w-3xl mx-auto mb-16">
          Incorz gives you everything in one flat price. No hidden extras, no surprise taxes, no upselling tactics, and no processing charges.
        </p>

        {/* Pricing Content */}
        <div className="bg-[#3d1a80] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="md:w-1/2">
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">Incorz All-Inclusive Pricing</h3>
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
            <div className="bg-[#3d1a80] border border-white/20 rounded-2xl p-8 w-full max-w-md">
              <p className="text-white text-center text-xl mb-8">All-in-one price</p>
              <h3 className="text-white text-center text-7xl md:text-8xl font-bold mb-8">$249+</h3>
              <p className="text-white text-center text-xl mb-8">State Fee</p>

              <div className="flex justify-center">
             <button
onClick={() => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" }) // smooth scroll
    }
  }}
  className="flex items-center justify-center gap-2 
             text-sm sm:text-base font-medium
             text-purple-600 capitalize bg-white
             rounded-full sm:rounded-full  px-6 py-3
             transition-colors"
>
  <span>Start Your Business</span>
  <ArrowRight className="w-4 h-4" />
</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
