const Tokenomics = () => {
  return (
    <section className="max-w-6xl mx-auto mb-10 px-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Tokenomics</h2>
        <p className="text-[#636464] text-lg max-w-3xl mx-auto mb-10 mt-3">
          During the presale, you will have the option to buy $ELO. Presale will
          take place in two steps with different prices. Presale supports only
          BEP20 $BNB. All $ELO purchased can be claimed at the pre-sale page
          after the end of the vesting period.
        </p>
        <div className="text-[#1BAB1D] font-extrabold text-3xl md:text-4xl mb-2">
          1B - 1,000,000,000
        </div>
        <div className="text-xl text-[#636464]">Total Supply</div>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row justify-center items-start lg:space-x-10">
        <div className="rounded-lg p-6 w-full">
          <h3 className="text-2xl font-bold text-black text-center mb-6">
            Tokenomic Statistics
          </h3>
          <div className="space-y-6">
            {[
              { label: "Presale", percentage: 10 },
              { label: "DEX", percentage: 10 },
              { label: "CEX reserved", percentage: 10 },
              { label: "Staking", percentage: 25 },
              { label: "Team", percentage: 10 },
              { label: "Reward for Ordering", percentage: 25 },
              { label: "Reward for Customers", percentage: 5 },
              { label: "Airdrop", percentage: 5 },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0"
              >
                <div className="text-gray-600 text-xl">{item.label}</div>

                <div className="flex items-center justify-center gap-5 lg:flex-row lg:items-center lg:w-[80%]">
                  <span className="text-gray-600 text-sm lg:text-base">
                    {item.percentage}%
                  </span>
                  <div className="w-full lg:w-[75%] bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-[#1990FF] h-2 w-full rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
