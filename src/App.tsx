import Banner from "./component/Banner";
import Brand from "./component/Brand";
import CallToAction from "./component/CallToAction";
import Features from "./component/Features";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Roadmap from "./component/Roadmap";
import Step from "./component/Step";
import Tokenomics from "./component/Tokenomics";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Brand />
      <Features />
      <Step />
      <Tokenomics />
      <Roadmap />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
