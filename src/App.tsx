import Banner from "./component/Banner";
import CallToAction from "./component/CallToAction";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Tokenomics from "./component/Tokenomics";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Tokenomics />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
