import binanceLogo from "../assets/b1.svg";
import certikLogo from "../assets/b2.svg";
import coinMarketCapLogo from "../assets/b3.svg";
import fairyproofLogo from "../assets/b4.png";

const Brand = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        <img
          src={binanceLogo}
          alt="Binance Smart Chain"
          className="w-24 h-auto mx-auto"
        />
        <img
          src={coinMarketCapLogo}
          alt="CoinMarketCap"
          className="w-24 h-auto mx-auto"
        />
        <img src={certikLogo} alt="Certik" className="w-24 h-auto mx-auto" />
        <img
          src={fairyproofLogo}
          alt="Fairyproof"
          className="w-24 h-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Brand;
