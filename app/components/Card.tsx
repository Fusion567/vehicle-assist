import React from "react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white dark:bg-gray-800">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />}
      <h2 className="text-xl font-semibold mt-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default Card;
