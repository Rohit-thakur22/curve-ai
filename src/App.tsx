import Banner from "./components/common/banners/Banner";
import FeatureBanner from "./components/common/banners/FeatureBanner";
import HeroBanner from "./components/common/banners/HeroBanner";
import Footer from "./components/common/Footer";
import HotDeals from "./components/common/HotDeals";
import Navbar from "./components/common/Navbar";
import Reviews from "./components/common/Reviews";
import Product from "./components/pages/index";

function App() {
  return (
    <div className="w-full flex flex-col  items-center space-y-6">
      <Navbar />
      <HeroBanner />
      <HotDeals />
      <Banner />
      <Reviews />
      <Product />
      <FeatureBanner />
      <Footer />
    </div>
  );
}

export default App;
