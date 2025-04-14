import "../Styles/Offers.css";
import { useNavigate } from "react-router";
interface OfferProps {
  name: string;
  description: string;
  id: number;
  bcgUrl: string;
  className?: string;
}

export const OfferCard = ({
  name,
  description,
  id,
  bcgUrl,
  className,
}: OfferProps) => {
  const navigate = useNavigate();
  const ShowHousePage = () => {
    try {
      if (className != "inactive-card") {
        navigate(`/house/${id}`);
      }
    } catch (error) {
      console.log("Ошибка перехода:", error);
    }
  };
  return (
    <div
      onClick={ShowHousePage}
      className={`OfferCard ${className}`}
      style={{
        backgroundImage: `url(${bcgUrl})`,
        backgroundSize: "cover",
      }}
    >
      <div className="OfferData">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>№{id}</p>
      </div>
    </div>
  );
};
