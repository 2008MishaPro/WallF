import "../../Styles/StarRating.css";


interface StarRatingProps {
  rating: number; 
}


const StarRating = ({ rating }: StarRatingProps) => {
  const maxStars = 5; 
  const stars = Array.from({ length: maxStars }, (_, index) => index + 1); 

  return (
    <div className="StarRating">
      {stars.map((star) => {
        if (star <= Math.floor(rating)) {
          return <span key={star} className="star filled">★</span>; 
        } else if (star === Math.ceil(rating) && rating % 1 !== 0) {
          return <span key={star} className="star HalfFilled">★</span>; 
        } else {
          return <span key={star} className="star empty">★</span>; 
        }
      })}
    </div>
  );
};

export default StarRating;