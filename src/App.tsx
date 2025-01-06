import Banner from "./component/Banner";
import CallToAction from "./component/CallToAction";
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
      <Step />
      <Tokenomics />
      <Roadmap />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
