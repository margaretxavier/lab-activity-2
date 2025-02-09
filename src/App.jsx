import React, { useState, useEffect } from 'react';
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";


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


/* Navbar */
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <i className="bi bi-globe"></i> 
        <i className="bi bi-question-circle-fill"></i> 
        <i className="bi bi-search"></i> 
      </div>

      <div className="logo-container">
        <img src="images/logo.png" alt="YESSTYLE" className="logo" />
      </div>

      <div className="nav-right">
        <i className="bi bi-person-fill"></i> 
        <i className="bi bi-suit-heart-fill"></i> 
        <i className="bi bi-bag-fill"></i> 
      </div>

      <ul className="nav-links">
        {["BEAUTY", "WOMEN", "MEN", "LIFESTYLE", "HEALTH", "SALE", "BLOG"].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}



/* Promo Banner */
function PromoBanner() {
  const promoList = [
    { text: 'Free Expedited Shipping with any ₱3,900 purchase' },
    { text: 'Download YS App & Get 50 YS Points' },
    { text: 'Free Gifts & Premiums' },
  ];

  const discountList = [
    { discount: '8% OFF', amount: 'PHP 4,970 order' },
    { discount: '10% OFF', amount: 'PHP 9,380 order' },
    { discount: '15% OFF', amount: 'PHP 12,520 order' },
  ];

  const images = [
    { src: "images/sale.png", alt: "Promo 1" },
    { src: "images/tirtir.png", alt: "Promo 2" },
    { src: "images/unleashia.png", alt: "Promo 3" },
    { src: "images/laka.png", alt: "Promo 4" },
    { src: "images/3ce.png", alt: "Promo 5" },
    { src: "images/lilybyred.png", alt: "Promo 6" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2025-02-14T00:00:00').getTime();
  
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;
  
      if (timeRemaining <= 0) {
        clearInterval(interval);
        setTimer(0); 
      } else {
        setTimer(timeRemaining);
      }
    }, 1000);
  
    return () => clearInterval(interval); 
  }, []);
  
  const formatTime = (ms) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
  
    return (
      <span>
        <span className="timer-number">{days}</span><span className="timer-letter">D</span> 
        <span className="timer-number">{hours}</span><span className="timer-letter">H</span> 
        <span className="timer-number">{minutes}</span><span className="timer-letter">M</span> 
        <span className="timer-number">{seconds}</span><span className="timer-letter">S</span>
    </span>
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="promo-banner">
      <div className="promo-top">
        {promoList.map((promo, index) => (
          <span key={index} className="promo-item">
            {promo.text}
          </span>
        ))}
      </div>

      <div className="promos">
        <div className="promo-text">
          {discountList.map((promo, index) => (
            <span key={index} className="promo-item">
              <strong>{promo.discount}</strong> {promo.amount}
            </span>
          ))}
        </div>

        <div className="promo-code-timer">
          <span className="promo-code">
            Enter Code <strong className="code">TREAT25</strong>
          </span>
          <span className="promo-divider"></span>
          <span className="promo-timer">
            Ends in <strong className="timer">{formatTime(timer)}</strong>
            </span>
        </div>
      </div>


      <div className="promo-main">
        <button className="arrow left" onClick={prevSlide}>
          <i className="bi bi-chevron-left" style={{ color: "gray" }}></i>
        </button>

        <div className="promo-content">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="promo-image"
          />
        </div>

        <button className="arrow right" onClick={nextSlide}>
          <i className="bi bi-chevron-right" style={{ color: "gray" }}></i>
        </button>
      </div>
    </div>
  );
}



/* Product Grid */
// function ProductCard({ image, name, discount }) {
//   return (
//     <div className="product-card">
//       <img src={image} alt={name} />
//       <p className="product-name">{name}</p>
//       <span className="discount">{discount}% OFF</span>
//     </div>
//   );
// }

function ProductGrid() {
  const products = [
    { image: "images/pb_romand.webp", title: "romand", description: "Plumpy Glow", discount: "20% OFF" },
    { image: "images/pb_house_of_hur.webp", title: "House of Hur", description: "Crushin' & Blushin'", discount: "50% OFF" },
    { image: "images/pb_milk_touch.webp", title: "MILK TOUCH", description: "Skin Detox'", discount: "50% OFF" },
    { image: "images/pb_dasique.webp", title: "dasique", description: "Perfect & Pure", discount: "35% OFF" },

    { image: "images/pb_kaja.webp", title: "KAJA", description: "Buildable Glam", discount: "40% OFF" },
    { image: "images/pb_sulwhasoo.webp", title: "Sulwhasoo", description: "Ageless Elegance", discount: "25% OFF" },
    { image: "images/pb_macqueen.webp", title: "MACQUEEN", description: "Queen of Kisses", discount: "50% OFF" },
    { image: "images/pb_2an.webp", title: "2aN", description: "Divine Shine", discount: "50% OFF" },

    { image: "images/pb_canmake.webp", title: "Canmake", description: "For All Magical Girls", discount: "20% OFF" },
    { image: "images/pb_kracie.webp", title: "Kracie", description: "Picture-Perfect Skin", discount: "20% OFF" },
    { image: "images/pb_bling_glow.webp", title: "Bling Glow", description: "Sparkle Away", discount: "25% OFF" },
    { image: "images/pb_too_cool_for_school.webp", title: "too cool for school", description: "Skin-Friendly Glam", discount: "40% OFF" },
    { image: "images/pb_focallure.webp", title: "Focallure", description: "Instant Allure", discount: "25% OFF" },
    
    { image: "images/pb_primera.webp", title: "primera", description: "Deep Cleanse", discount: "30% OFF" },
    { image: "images/pb_hince.webp", title: "hince", description: "Soft & Glowy", discount: "25% OFF" },
    { image: "images/pb_amuse.webp", title: "AMUSE", description: "Perfecting Your Aura", discount: "25% OFF" },
    { image: "images/pb_tfit.webp", title: "TFIT", description: "Like Second Skin", discount: "25% OFF" },
    { image: "images/pb_village_11_factory.webp", title: "VILLAGE 11 FACTORY", description: "Soothing & Hydrating", discount: "25% OFF" },
  ];  

  return (
    <div className="product-grid-container">
      <div className="product-grid row-1-2">
        {products.slice(0, 8).map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
              <div className="discount-badge">{product.discount}</div>
            </div>
            <div className="product-info">
              <h4>{product.title}</h4>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="product-grid row-3-4">
        {products.slice(8).map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
              <div className="discount-badge">{product.discount}</div>
            </div>
            <div className="product-info">
              <h4>{product.title}</h4>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




/* YesStylist */
function YesStylistCard({ image, title, description, bgColor }) {
  return (
    <div className="yesstylist-card">
      <img src={image} alt={title} className="yesstylist-img" />
      <div className="yesstylist-content" style={{ backgroundColor: bgColor }}>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href="#">...Read More</a>
      </div>
    </div>
  );
}

function YesStylist() {
  const articles = [
    { image: "images/newin_featureimage_feb.webp", 
      title: "New Beauty Releases to Try This Month", 
      description: "Here are the latest beauty launches at YesStyle at a glance!", 
      bgColor: "#f9b9ca" 
    },
    { image: "images/Feb2025_Feature-Image.webp", 
      title: "February’s Sponsored Products", 
      description: "This month, the YesStyle Influencer Program will be giving away these products for review!", 
      bgColor: "#e1eafb" 
    },
    { image: "images/feature_medicubepink.webp", 
      title: "All-Pink Skin Care Routine? YES PLEASE!", 
      description: "When you can’t get enough of the color pink, why not indulge in an all-pink skin care routine? Read on for the full review on medicube’s PDRN-infused skin care line!", 
      bgColor: "#f7c7dd" 
    }
  ];

  return (
    <div className="yesstylist-container">
      <h3>THE YESSTYLIST</h3>
      <div className="yesstylist-grid">
        {articles.map((article, index) => (
          <YesStylistCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
}



/* Footer */
function Footer() {
  const sections = [
    {
      title: "SUPPORT",
      links: ["Order Tracking", "Contact Us", "Customer Service", "Email Our CEO"],
    },
    {
      title: "PROGRAMS",
      links: ["Elite Club", "Friend Rewards", "Student Program"],
    },
    {
      title: "PARTNERSHIPS",
      links: ["YesStyle Influencers", "Affiliate Program"],
    },
    {
      title: "SITEMAP",
      links: ["Category Sitemap", "Product Sitemap"],
    },
    {
      title: "ABOUT US",
      links: ["About YesStyle", "Investor Relations", "Wholesale"],
    },
  ];

  const languages = ["English", "Français", "Deutsch", "Español", "Italiano", "Nederlands", "عربي"];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="socials">
          <span>Follow us</span>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-youtube"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-tiktok"></i></a>
          <a href="#"><i class="bi bi-pinterest"></i></a>
        </div>
        <div className="app-download">
          <span>Download our app and earn 50 YS Points</span>
          <a href="#"><i class="bi bi-apple"></i></a>
          <a href="#"><i class="bi bi-google-play"></i></a>
        </div>
      </div>

      <div className="footer-columns">
        {sections.map((section) => (
          <div key={section.title} className="column">
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div>
          {languages.map((lang) => (
            <a key={lang} href="#">{lang}</a>
          ))}
          <span className="divider"></span>
          <a href="#">Terms of Use</a>  
          <a href="#">Privacy Policy</a>  
          <a href="#">Cookie Preferences</a>
        </div>
        <div className="copyright">
          Copyright &copy; 2006-2025 YESSTYLE.COM LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
