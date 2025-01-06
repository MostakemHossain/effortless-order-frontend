import { useState } from "react";
import { BiWallet } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo-elo.png";
import { WalletModal } from "./NavbarModal";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isWalletModalOpen, setWalletModalOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <>
      {/* Apply backdrop blur to content when wallet modal is open */}
      <div
        className={`relative transition-all duration-300 ${
          isWalletModalOpen ? "bg-[#fcf8f8] drop-shadow-xl fixed" : ""
        }`}
      >
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 backdrop-blur-sm z-30"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        <nav className="bg-white relative z-40">
          <div
            className={`${
              isMobileMenuOpen ? "blur-sm" : ""
            } transition-all duration-300`}
          >
            <div className="z-50 container mx-auto px-4 flex items-center justify-between h-16">
              {/* Mobile Menu Button - Left */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-700 mt-1 hover:text-black text-2xl"
                >
                  <RxHamburgerMenu size={20} />
                </button>
              </div>

              <div className="flex items-center justify-center absolute left-14 transform -translate-x-1/2 md:relative md:left-0 md:transform-none">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-8 w-8 object-cover rounded-full"
                />
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex space-x-8 items-center">
                <a
                  href="/"
                  className="text-gray-700 hover:text-black font-medium"
                >
                  Home
                </a>
                <a
                  href="/pre-sale"
                  className="text-gray-700 hover:text-black font-medium"
                >
                  Pre-sale
                </a>

                {/* SOON Tag */}
                <div className="relative">
                  <span className="text-neutral-400 font-medium">Stake</span>
                  <span className="absolute -top-4 -right-5 px-2 py-1 text-xs rounded-2xl bg-[#1BAB1D] text-white">
                    Soon
                  </span>
                </div>

                {/* Dropdown Menu */}
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="text-gray-700 hover:text-black font-medium flex items-center"
                  >
                    More{" "}
                    <span className="ml-1">
                      <MdOutlineKeyboardArrowDown />
                    </span>
                  </button>

                  {/* Dropdown Content */}
                  {isDropdownOpen && (
                    <div className="absolute mt-2 bg-white shadow-lg rounded-md w-40 z-50">
                      <a
                        href="/about"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        About us
                      </a>
                      <a
                        href="/elo-whitepaper"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        ELO whitepaper
                      </a>
                      <a
                        href="/contracts"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Contracts
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Wallet Connect Button */}
              <div className="flex items-center">
                <button
                  onClick={() => setWalletModalOpen(true)}
                  className="bg-[#1BAB1D] text-white font-semibold px-4 py-2 rounded-full flex items-center justify-center gap-2"
                >
                  <BiWallet size={20} />
                  <span className="hidden md:inline">Wallet Connect</span>
                  <span className="inline md:hidden">Connect</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#fcf8f8] drop-shadow-xl fixed top-0 left-0 w-1/2 h-screen z-50">
            <a
              href="/"
              className="block px-2 py-3 text-gray-700 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="/pre-sale"
              className="block px-2 py-3 text-gray-700 hover:bg-gray-100"
            >
              Pre-sale
            </a>
            <div className="relative px-2 py-3">
              <span className="text-neutral-400">Stake</span>
            </div>
            <div className="w-full border-[0.1px] border-gray-300" />
            <a
              href="/about"
              className="block px-2 py-3 text-gray-700 hover:bg-gray-100"
            >
              About us
            </a>
            <a
              href="/elo-whitepaper"
              className="block px-2 py-3 text-gray-700 hover:bg-gray-100"
            >
              ELO whitepaper
            </a>
            <a
              href="/contracts"
              className="block px-2 py-3 text-gray-700 hover:bg-gray-100"
            >
              Contracts
            </a>
          </div>
        )}
      </div>

      {/* Wallet Modal */}
      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setWalletModalOpen(false)}
      />
    </>
  );
}
