import React, { useState, useEffect } from 'react';
import { promoList, discountList, promoImages } from "../data";

function PromoBanner() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [timer, setTimer] = useState(0);

    const targetDate = new Date('2025-03-31T00:00:00').getTime();
  
    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;
    
        if (timeRemaining <= 0) {
          setTimer(0); 
          clearInterval(interval);
        } else {
          setTimer(timeRemaining);
        }
      }, 1000);
    
      return () => clearInterval(interval); 
    }, []);
    
    const formatTime = (ms) => {
      if (ms <= 0) return "00D 00H 00M 00S";

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
      setCurrentIndex((prev) => (prev === 0 ? promoImages.length - 1 : prev - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev === promoImages.length - 1 ? 0 : prev + 1));
    };

      // --- Auto-advance (slideshow) ---
      useEffect(() => {
        const slideshowInterval = setInterval(() => {
          nextSlide();
        }, 3000);
        return () => clearInterval(slideshowInterval);
      }, []);
    
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
              Enter Code <strong className="code">WOMEN25</strong>
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
              src={promoImages[currentIndex].src}
              alt={promoImages[currentIndex].alt}
              className="promo-image"
            />
          </div>
  
          <button className="arrow right" onClick={nextSlide}>
            <i className="bi bi-chevron-right" style={{ color: "gray" }}></i>
          </button>
        </div>

        <div className="dot-indicators">
        {promoImages.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
      </div>
    );
  }

  export default PromoBanner;