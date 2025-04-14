import "../Styles/Rewiews.css";
import StarRating from "../UI/Text/StarsBar";
interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
}

export const ReviewCard = ({ name, rating, text }: ReviewCardProps) => {
  return (
    <div className="ReviewCard">
      <h3>{name}</h3>
      <StarRating rating={rating} />
      <p>{text}</p>
    </div>
  );
};
