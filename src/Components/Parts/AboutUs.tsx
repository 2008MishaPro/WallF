import { OnTopHeader } from "../Elements/OnTopHeader";
import { PartHeader } from "../Elements/PartHeader";
import { OurAd } from "./OurAdveticment";
import "../Styles/AboutUs.css";
import { Reviews } from "./Reviews";
export const AboutUs = () => {
  return (
    <div className="MainAbout" id="aboutUs">
      <OnTopHeader />
      <div className="AboutUsBcg">
        <h2 className="CompanyName">WallFlower</h2>
        <div className="Discribe">
          <p>Для тех, кто богат не только деньгами.</p>
          <p>Мы предлагаем выбор подержанных домов с</p>
          <p>удобным расположением.</p>
        </div>
      </div>
      <PartHeader color = "F8F8F8" textColor="CEE27E">Наши преимущества</PartHeader>
      <OurAd />
      <Reviews />
    </div>
  );
};
