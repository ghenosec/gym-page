import React from "react";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, price }) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg p-6 max-w-xs mx-auto">
      <h3 className="text-xl font-bold text-stone-800 mb-4 mt-8">{title}</h3>
      <p className="text-lg text-stone-700 mb-4 mt-4">{description}</p>
      <p className="text-2xl font-bold text-blue-700 mt-6">{price}</p>
    </div>
  );
};

export default PricingCard;
