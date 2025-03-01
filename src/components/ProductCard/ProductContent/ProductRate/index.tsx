import { Star } from "lucide-react";

interface IProps {
  rating: number;
  star: [1, 2, 3, 4, 5];
}
const ProductRate = ({ rating, star }: IProps) => {
  return (
    <>
      <div className="cardRating py-3">
        <span className="flex flex-row gap-0">
          {star.map((index: number) => {
            return (
              <Star
                key={index}
                fill={`${index < rating ? "black" : "transparent"}`}
              />
            );
          })}
          ({rating})
        </span>
      </div>
    </>
  );
};

export default ProductRate;
