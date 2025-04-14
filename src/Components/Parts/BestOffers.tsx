import { PartHeader } from "../Elements/PartHeader";
import { BestOffersList } from "./Offers";

export const BestOffers = () => {
  return (
    <div id="bestOffers">
      <PartHeader>Лучшие предложения</PartHeader>
      <BestOffersList />
    </div>
  );
};
