export default function Roadmap() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 mb-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-2">Roadmap</h2>
        <p className="text-gray-600 mb-10">This Roadmap outlines our future plans</p>
      </div>

      <div className="relative">
        
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] hidden md:block" />

        <div className="space-y-24">
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center md:justify-end">
              <div className="w-full md:w-[15%] pr-2 mb-4 md:mb-0 lg:text-center md:text-right">
                <h3 className="text-2xl font-semibold">Phase I</h3>
              </div>
              <div className="w-full md:w-1/2 lg:pl-8">
                <div className="space-y-4">
                  {[
                    "1K Holders",
                    "Presale launch",
                    "Stage1 Marketing",
                    "1% Airdrop",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="h-3  w-3 rounded-full border-2 border-gray-300 bg-white" />
                      <span className="text-gray-800 text-2xl">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pr-8 order-last md:order-none">
                <div className="space-y-4">
                  {["3K Holders", "Add to DEX", "Stage2 Marketing"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 lg:justify-end justify-start"
                      >
                        <div className="lg:hidden block h-3 w-3 rounded-full border-2 border-gray-300 bg-white" />
                        <span className="text-gray-800 text-2xl">{item}</span>
                        <div className="hidden lg:block h-3 w-3 rounded-full border-2 border-gray-300 bg-white" />
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:pl-8  md:text-left">
                <h3 className="text-2xl font-semibold mb-2">Phase II</h3>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex flex-col md:flex-row items-center md:justify-end">
              <div className="w-full md:w-[15%] pr-2 mb-4 md:mb-0 lg:text-center md:text-right">
                <h3 className="text-2xl font-semibold">Phase III</h3>
              </div>
              <div className="w-full md:w-1/2 pl-2">
                <div className="space-y-4">
                  {["Stage3 Marketing", "Add to CEX", "1% Airdrop"].map(
                    (item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="h-3 w-3 rounded-full border-2 border-gray-300 bg-white" />
                        <span className="text-gray-800 text-2xl">{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Phase IV */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pr-2 mb-4 md:mb-0 order-last md:order-none">
                <div className="space-y-4">
                  {[
                    "5K Holders",
                    "Staking pool launch",
                    "Community Growth",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 lg:justify-end justify-start"
                    >
                      <div className="lg:hidden block h-3 w-3 rounded-full border-2 border-gray-300 bg-white" />
                      <span className="text-gray-800 text-2xl">{item}</span>
                      <div className="hidden lg:block h-3 w-3 rounded-full border-2 border-gray-300 bg-white" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:pl-8  md:text-left">
                <h3 className="text-2xl font-semibold mb-2">Phase IV</h3>
              </div>
            </div>
          </div>

          {/* Phase V */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center md:justify-end">
              <div className="w-full md:w-[15%] pr-2 mb-4 md:mb-0 lg:text-center md:text-right">
                <h3 className="text-2xl font-semibold ">Phase V</h3>
              </div>
              <div className="w-full md:w-1/2 lg:pl-8">
                <div className="space-y-4">
                  {[
                    "10K Holders",
                    "Ordering Reward Launch",
                    "1% Airdrop",
                    "Go to the moon",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="h-3 w-3 rounded-full border-2 border-gray-300 bg-white" />
                      <span className="text-gray-800 text-2xl">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
