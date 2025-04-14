import "../Styles/OurAd.css";
import { useEffect, useState } from "react";
import { PhoneCont, SocialLinks } from "../Elements/Components/Contacts";

export const OurAd = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 1000;
      if (isMobile !== newIsMobile) {
        setIsMobile(newIsMobile);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <div className={`ContOur ${isMobile ? `mobileContainer` : ``}`}>
      {!isMobile && <PhoneCont />}
      <div className="Advet">
        <div className="AdvCard">
          <div className="CharsCont">
            <h1>✓</h1>
            <hr className="Line" style={{ height: "7px", width: "80%" }} />
          </div>
          <p>
            У нас одни из самых выгодных цен на вторичном рынке недвижимости.
          </p>
        </div>
        <div className={`AdvCard ${isMobile ? `mobileContainer` : ``}`}>
          <div className="CharsCont">
            <h1>✓</h1>
            <hr className="Line" style={{ height: "7px", width: "80%" }} />
          </div>
          <p>Дома, которые мы продаём, имеют очень удобное расположение.</p>
        </div>
        <div className="AdvCard">
          <div className="CharsCont">
            <h1>✓</h1>
            <hr className="Line" style={{ height: "7px", width: "80%" }} />
          </div>
          <p>Мы продаём только комфортную загородную недвижимость.</p>
        </div>
        {isMobile ? (
          <div className="SocialList">
            <SocialLinks isMobile={isMobile} />
            <PhoneCont isMobile={isMobile} />
          </div>
        ) : null}
      </div>
      {!isMobile && <SocialLinks />}
    </div>
  );
};
