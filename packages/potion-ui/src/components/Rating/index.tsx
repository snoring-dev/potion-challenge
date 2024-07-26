import React from 'react';
import { FaStar, FaStarHalfStroke, FaRegStar } from 'react-icons/fa6';

interface RatingProps {
  rating: number;
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({ rating, className = "text-green-400" }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`flex flex-row gap-0.5 ${className}`}>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {hasHalfStar && <FaStarHalfStroke key="half" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </div>
  );
};