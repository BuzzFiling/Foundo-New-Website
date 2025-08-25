import { FileText, Timer, Banknote, CheckCircle2, Award, LandmarkIcon } from "lucide-react"

export default function LLCFormationSection() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Subtitle */}
        <p className="text-center text-purple-600 mb-2 text-sm sm:text-base">
          Your time is precious - Let StartGlobal Do your dirty paperwork
        </p>

        {/* Main heading */}
        <h2 className="text-center text-gray-700 text-2xl sm:text-3xl font-medium mb-6 sm:mb-10">
          LLC with Business Bank Account in{" "}
          <span className="text-purple-600">4 Weeks</span>
        </h2>

        {/* Three column layout */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-[35px]">
          {/* LLC Formation Card */}
          <div className="bg-white rounded-lg w-full sm:w-[355px] mx-auto sm:mx-0 shadow-sm p-6 min-h-[350px]">
            <div className="mb-4 text-purple-600">
              <Award size={32} strokeWidth={2} />
            </div>
            <h3 className="text-gray-700 font-medium uppercase tracking-wide mb-4">
              LLC FORMATION
            </h3>
            <p className="text-gray-600 mb-8">
              StartGlobal prepare and file your LLC in the State. This process
              involves filing the required documents and paying the applicable
              fees to ensure your LLC is recognized and compliant with state
              laws.
            </p>
            <div className="flex items-center text-purple-600 mt-auto">
              <CheckCircle2 className="mr-2" size={20} />
              <span className="uppercase text-sm font-medium">
                Complete Processing
              </span>
            </div>
          </div>

          {/* Tax Registration Card */}
          <div className="bg-white rounded-lg w-full sm:w-[355px] mx-auto sm:mx-0 shadow-sm p-6 min-h-[350px]">
            <div className="mb-4 text-purple-600">
              <FileText size={32} strokeWidth={2} />
            </div>
            <h3 className="text-gray-700 font-medium uppercase tracking-wide mb-4">
              TAX REGISTRATION
            </h3>
            <p className="text-gray-600 mb-8">
              We do all form preparations and you can sign the documents on our
              platform to get an Employer Identification Number (EIN) from the
              IRS. It serves as your business's tax ID.
            </p>
            <div className="flex items-center text-purple-600 mt-auto">
              <CheckCircle2 className="mr-2" size={20} />
              <span className="uppercase text-sm font-medium">
                Complete Processing
              </span>
            </div>
          </div>

          {/* Business Bank Account Card */}
          <div className="bg-white rounded-lg w-full sm:w-[355px] mx-auto sm:mx-0 shadow-sm p-6 min-h-[350px]">
            <div className="mb-4 text-purple-600">
              <LandmarkIcon size={32} strokeWidth={2} />
            </div>
            <h3 className="text-gray-700 font-medium uppercase tracking-wide mb-4">
              BUSINESS BANK ACCOUNT
            </h3>
            <p className="text-gray-600 mb-8">
              We'll help you setup your business bank account and setup your
              banking operations smoothly with your new LLC in the US within a
              day of getting your EIN from IRS.
            </p>
            <div className="flex items-center text-purple-600 mt-auto">
              <CheckCircle2 className="mr-2" size={20} />
              <span className="uppercase text-sm font-medium">
                Complete Processing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
