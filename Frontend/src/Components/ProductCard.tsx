import React, { useState,useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { BsBasket3 } from "react-icons/bs";
import QuickView from "./QuickView"; // Import the QuickView component
import {Link} from 'react-router-dom'

type ProductCardProps = {
  imageUrl: string;
  name: string;
  price: number;
  productId: number; // Add productId prop to uniquely identify each product
};

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  name,
  price,
  productId,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [openProductId, setOpenProductId] = useState<number | null>(null); // State to store the ID of the currently open product

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleQuickView = () => {
    setOpenProductId(productId === openProductId ? null : productId); // Toggle the open product ID
  };



  const [quickViewPosition, setQuickViewPosition] = useState<"left" | "right" | null>(null); // State to store the position of the quick view

  useEffect(() => {
    const handleResize = () => {
      const cardRect = document.getElementById(`product-card-${productId}`)?.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      if (cardRect) {
        const cardLeftSpace = cardRect.left;
        const cardRightSpace = screenWidth - cardRect.right;
        if (cardLeftSpace >= cardRightSpace) {
          setQuickViewPosition("left");
        } else {
          setQuickViewPosition("right");
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial positioning

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [productId]);

  return (
    <div className="group flex flex-col items-center">
      <div
        id={`product-card-${productId}`}
        className="aspect-h-1 aspect-w-1 w-full h-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
        onClick={toggleQuickView}
      >
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <div className="w-full border-b border-gray-500 mb-1"></div>
      <div className="flex items-center justify-between w-full">
        <p className="text-lg font-medium text-gray-900 self-start">${price}</p>
        <div className="flex">
          <Link to='/Tulips'>
            <button className="mr-1">
              <BsBasket3 className="text-gray-600" />
            </button>
          </Link>
          <button onClick={toggleLike}>
            <CiHeart
              className={
                isLiked
                  ? "text-red-500"
                  : "text-gray-600 group-hover:text-red-500"
              }
              style={{ fontSize: "1.3rem" }}
            />
          </button>
        </div>
      </div>
      {openProductId === productId && (
        <QuickView
          onClose={toggleQuickView}
          imageUrl={imageUrl}
          isOpen={openProductId === productId}
          ProductName={name}
          Price={price}
          // position={quickViewPosition}
        />
      )}
    </div>
  );
};
export default ProductCard