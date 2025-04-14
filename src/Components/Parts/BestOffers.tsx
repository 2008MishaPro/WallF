import { PartHeader } from "../Elements/PartHeader";
import { BestOffersList } from "./Offers";

export const BestOffers = () => {
  return (
    <div id="bestOffers">
      <PartHeader color = "F8F8F8" textColor="CEE27E">Лучшие предложения</PartHeader>
      <BestOffersList />
    </div>
  );
};
