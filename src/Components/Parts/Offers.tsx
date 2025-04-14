import { OfferCard } from "../Elements/OfferCard";
import { OffersData } from "./OffersData";
import "../Styles/Offers.css";
import { useState } from "react";
import { useEffect } from "react";

export const BestOffersList = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const totalCards = OffersData.length;

  const getCardConfig = () => {
    if (window.innerWidth <= 450) {
      return { cardWidth: 300, offset: 0 };
    } else if (window.innerWidth <= 768) {
      return { cardWidth: 600, offset: 200 };
    } else if (window.innerWidth <= 1024) {
      return { cardWidth: 600, offset: 200 };
    }
    else if (window.innerWidth <= 1250) {
      return { cardWidth: 700, offset: 275 };
    }
    else {
      return { cardWidth: 1000, offset: 500 };
    }
  };

  const [cardConfig, setCardConfig] = useState(getCardConfig());

  useEffect(() => {
    const handleResize = () => setCardConfig(getCardConfig());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalCards - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === totalCards - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="OffersCarousel">
      <button onClick={handlePrev} className="CarouselButton prev">
        ←
      </button>

      <div className="CardsWrapper">
        <div
          className="CardsContainer"
          style={{
            transform: `translateX(calc(50% - ${cardConfig.cardWidth / 2}px - ${
              activeIndex * cardConfig.cardWidth
            }px))`,
          }}
        >
          {OffersData.map((offer, index) => (
            <div
              key={offer.id}
              className={`OfferCard ${
                index === activeIndex ? "active-card" : "inactive-card"
              }`}
              style={{
                width: `${cardConfig.cardWidth}px`,
                transform: `scale(${index === activeIndex ? 1 : 0.9})`,
                opacity: index === activeIndex ? 1 : 0.7,
              }}
            >
              <OfferCard
                {...offer}
                className={
                  index === activeIndex ? "active-card" : "inactive-card"
                }
              />
            </div>
          ))}
        </div>
      </div>

      <button onClick={handleNext} className="CarouselButton next">
        →
      </button>
    </div>
  );
};
