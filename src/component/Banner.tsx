"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaArrowDown } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
      
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#1BAB1D]">
            Effortless Order Foods
          </h1>

          <p className="text-[#666666] text-lg">
            ELO is decentralized reward system, the overall system including
            reward will be extended and we will launch extra services to make
            our token more valuable. People who own $ELO can get more and more
            reward. Our community will grow so fast and surely go to the moon
            with strong supporters and investors.
          </p>

          <h2 className="text-[#666666] font-semibold">
            Let&apos;s get more and more $ELO token.
          </h2>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-[#1BAB1D] rounded-3xl hover:bg-[#549A3D] text-white">
              Get ELO
              <ArrowRight className="ml-1 h-4 w-6" />
            </Button>

            <div className="flex items-center justify-center font-bold hover:text-black text-[#1BAB1D]">
              <div className="">ELO Whitepaper</div>
              <FaArrowDown className="ml-2 h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VB5_R9_F8MY"
            title="ELO Crypto Coin ICO Explainer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Banner;
