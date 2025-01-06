import img1 from "../assets/1.svg";
import img2 from "../assets/2.svg";
import img3 from "../assets/3.svg";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check } from "lucide-react";
import { useState } from "react";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Selection {
  network: string | null;
  wallets: string[];
}

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const [selection, setSelection] = useState<Selection>({
    network: null,
    wallets: [],
  });

  const handleNetworkSelect = (network: string) => {
    setSelection((prev) => ({
      ...prev,
      network: network,
    }));
  };

  const handleWalletSelect = (wallet: string) => {
    setSelection((prev) => ({
      ...prev,
      wallets: prev.wallets.includes(wallet)
        ? prev.wallets.filter((w) => w !== wallet)
        : [...prev.wallets, wallet],
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-semibold">
              Connect Wallet
            </DialogTitle>
          </div>
        </DialogHeader>
        <div className="space-y-8 py-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                1
              </div>
              <h3 className="text-xl font-medium">Choose Network</h3>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => handleNetworkSelect("binance")}
                className="relative flex flex-col items-center gap-2 rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="h-16 w-16 rounded-full bg-[#F3BA2F] p-3">
                  <img src={img1} alt="Binance" className="h-full w-full" />
                  {selection.network === "binance" && (
                    <div className="absolute  bottom-10 right-6 h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
                <span className="text-sm font-medium">Binance</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                2
              </div>
              <h3 className="text-xl font-medium">Choose Wallet</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleWalletSelect("metamask")}
                className="relative flex flex-col items-center gap-2 rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="h-16 w-16 rounded-full bg-[#F6851B] p-3">
                  <img src={img2} alt="Metamask" className="h-full w-full" />
                  {selection.wallets.includes("metamask") && (
                    <div className="absolute bottom-10 left-24 h-4 w-4  rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
                <span className="text-sm font-medium">Metamask</span>
              </button>
              <button
                onClick={() => handleWalletSelect("walletconnect")}
                className="relative flex flex-col items-center gap-2 rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="h-16 w-16 rounded-full bg-[#3B99FC] p-3">
                  <img
                    src={img3}
                    alt="WalletConnect"
                    className="h-full w-full"
                  />
                  {selection.wallets.includes("walletconnect") && (
                    <div className="absolute bottom-10 left-24 h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
                <span className="text-sm font-medium">Wallet Connect</span>
              </button>
            </div>
          </div>

          <button
            className={`w-full rounded-lg py-3 text-center font-medium transition-colors text-[#1BAB1D]
              `}
          >
            Connect
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
