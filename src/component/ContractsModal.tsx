"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface ContractsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ContractInfo {
  title: string;
  address: string;
}

const contracts: ContractInfo[] = [
  {
    title: "ELO Token contract",
    address: "0xeAfD5b2DCd03f54b12128405D30aC15F89906399",
  },
  {
    title: "ELO Token Presale contract",
    address: "0xBb569C738f56348B21a84D520f679fe41Fd01cc5",
  },
];

export function ContractsModal({ isOpen, onClose }: ContractsModalProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-semibold">
              Contracts
            </DialogTitle>
          </div>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {contracts.map((contract, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-lg font-medium text-gray-900">
                {contract.title}
              </h3>
              <div className="flex items-center justify-between gap-2 rounded-lg border p-3">
                <span className="text-sm text-green-600 font-medium break-all">
                  {contract.address}
                </span>
                <button
                  onClick={() => handleCopy(contract.address, index)}
                  className="ml-2 p-1 hover:bg-gray-100 rounded"
                >
                  {copiedIndex === index ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
