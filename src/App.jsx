import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import PromoBanner from "./components/PromoBanner";
import ProductGrid from "./components/ProductGrid";
import YesStylist from "./components/YesStylist";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <PromoBanner />
      <ProductGrid />
      <YesStylist />
      <Footer />
    </div>
  );
}

export default App;