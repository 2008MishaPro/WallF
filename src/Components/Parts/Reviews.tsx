import { ReviewCard } from "../Elements/ReviewCard";
import "../Styles/Rewiews.css";
import { RewData } from "./RewData";
import { useRef } from "react";
export const Reviews = () => {
  const reviewsRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    const slider = reviewsRef.current;
    if (!slider) return;

    let isDown = true;
    const startX = e.pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDown) return;
      event.preventDefault();
      const x = event.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1; 
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      isDown = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="MainRew">
      <header className="HeaderRew">
        <p>Отзывы наших клиентов</p>
      </header>
      <div className="ReviewsCon" ref={reviewsRef} onMouseDown={handleMouseDown}>
        {RewData.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            rating={review.rate}
            text={review.description}
          />
        ))}
      </div>
    </div>
  );
};