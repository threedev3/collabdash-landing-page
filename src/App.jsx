import Choose from "./components/Choose/Choose";
import Faq from "./components/FAQ/Faq";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Herosection from "./components/Herosection/Herosection";
import Pricing from "./components/Pricing/Pricing";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="">
      <div id="home">
        <Herosection />
      </div>
      <div id="services">
        <Features />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="why-choose-us">
        <Choose />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
