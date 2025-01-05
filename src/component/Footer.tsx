import { FaDiscord, FaEnvelope, FaTelegram, FaTwitter } from "react-icons/fa6";
import certik from "../assets/certik.svg";
import fairyProof from "../assets/fairyproof.png";
const Footer = () => {
  return (
    <footer className="0 text-center">
      <div className=" py-6 px-4 md:px-12 lg:px-20 ">
        <div className="flex flex-col items-center space-y-6 mt-5">
          <div className="mb-4 md:mb-0">
            <p className="text-[#6D6D6D]   mb-4">Audited by</p>
            <div className="flex space-x-4">
              <img src={certik} alt="Certik" className="h-8 lg:h-12" />
              <img src={fairyProof} alt="Fairyproof" className="h-8 lg:h-12" />
            </div>
          </div>

          <div className="flex space-x-8 lg:space-x-20 mt-5 mb-5">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-800 transition"
              aria-label="Twitter"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-800 transition"
              aria-label="Telegram"
            >
              <FaTelegram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-800 transition"
              aria-label="Discord"
            >
              <FaDiscord className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-800 transition"
              aria-label="Email"
            >
              <FaEnvelope className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-6  text-sm">
          Copyright © 2025 ELO. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
