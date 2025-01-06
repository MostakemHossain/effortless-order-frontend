"use client";

import { useState } from "react";

interface Step {
  id: number;
  title: string;
  content: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Choose your network",
    content:
      "$ELO is available in BSC, Binance Smart Chain networks. Choose your network from here BSC to participate in $ELO pre-sale",
  },
  {
    id: 2,
    title: "Create a MetaMask Wallet",
    content:
      '$ELO token is available on the BSC blockchain. MetaMask is a third party BEP20 (Binance) browser wallet, and the very best at that! On Google Chrome, visit <a href="https://metamask.io" class="text-green-500 hover:underline" target="_blank" rel="noopener noreferrer">metamask.io</a> to download the extension and set up a wallet. On mobile? Get MetaMask\'s app for iPhone or Android',
  },
  {
    id: 3,
    title: "Send BEP20 $BNB to MetaMask",
    content:
      "Acquire $BNB through MetaMask itself or transfer it to your MetaMask wallet address from another wallet (e.g. Coinbase or Binance)",
  },
  {
    id: 4,
    title: "Click On Pre-Sale",
    content:
      "You can currently swap BNB to $ELO on Pre-Sale over ELO's official website! Pre-Sale supports only BEP20 BNB",
  },
  {
    id: 5,
    title: "Swap BEP20 $BNB to $ELO",
    content:
      "Click Connect Wallet Enter the amount of $BNB you would like to swap for $ELO. Then click on Swap",
  },
  {
    id: 6,
    title: "Claim $ELO",
    content:
      "All $ELO purchased can be claimed at the pre-sale page after the end of the vesting period.",
  },
];

export default function Step() {
  const [activeStep, setActiveStep] = useState(1);

  const handleNextStep = () => {
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleRestart = () => {
    setActiveStep(1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mb-10">
      <div className="max-w-2xl w-full mx-auto px-4 py-12 bg-white rounded">
        <div className="text-center mb-12">
          <p className="text-green-500 font-medium mb-2">Let's Get Started</p>
          <h1 className="text-4xl md:text-5xl font-bold">How to get $ELO</h1>
        </div>

        <div className="relative">
          <div className="absolute left-[15px] top-[48px] bottom-0 w-[2px] bg-gray-300" />
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.id} className="relative">
                <div className="flex gap-6">
                  {/* Step Icon */}
                  <div
                    className={`relative z-10 flex items-center justify-center w-8 p-3 rounded-full h-8 
                      ${
                        step.id === activeStep
                          ? "bg-green-500 text-white"
                          : "bg-gray-300 text-gray-400"
                      } 
                      font-medium cursor-pointer transition-colors duration-200`}
                    onClick={() => setActiveStep(step.id)}
                  >
                    {step.id}
                  </div>

                  {/* Step Content */}
                  <div className="pt-3">
                    <h3
                      className={`text-xl ${
                        step.id === activeStep ? "font-bold" : "font-normal"
                      } mb-4`}
                    >
                      {step.title}
                    </h3>
                    {step.id === activeStep && (
                      <>
                        <p
                          className="text-gray-600 mb-4"
                          dangerouslySetInnerHTML={{ __html: step.content }}
                        />
                        <div className="flex gap-4">
                          {step.id === steps.length ? (
                            <button
                              className="text-green-500 font-medium"
                              onClick={handleRestart}
                            >
                              Again
                            </button>
                          ) : (
                            <button
                              className="text-green-500 font-medium"
                              onClick={handleNextStep}
                            >
                              Got It
                            </button>
                          )}
                          {step.id > 1 && (
                            <button
                              className="text-gray-400"
                              onClick={handlePreviousStep}
                            >
                              Previous Step
                            </button>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
