import { BiWallet } from "react-icons/bi";

const CallToAction = () => {
  return (
    <div className="min-w-6xl  flex items-center justify-center mx-auto">
      <div className="">
        <h2 className="text-center text-2xl font-bold  mb-4 text-[#1BAB1D]">
          Already convinced?
        </h2>
        <h2 className="text-center font-bold text-4xl text-black mt-3 mb-5">
          What are you waiting for?
        </h2>
        <p className="text-center max-w-xl text-[#636464]">
          Ensure to grab your ELO token now and enjoy vast benefits that come
          along with being a part of us.
        </p>
        <div className="text-center flex items-center justify-center mt-5 mb-10">
          <button className="bg-[#1BAB1D] text-white font-semibold px-4 py-2 rounded-full flex items-center justify-center gap-2">
            <BiWallet size={20} />
            <span className="">Get $ELO Now →</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
