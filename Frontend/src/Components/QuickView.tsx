import React, { useState, useEffect } from "react";
import Reviews from "../Reviews";
import SizeView from "./SizeView";
import floral from "./floralbutton.jpg";

type QuickViewProps = {
  onClose: () => void;
  imageUrl: string;
  isOpen: boolean;
  ProductName: string;
  Price: number;
};

function QuickView({
  onClose,
  imageUrl,
  isOpen,
  ProductName,
  Price,
}: QuickViewProps) {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    if (isOpen) {
      setSelectedColor(""); // Reset selected color when modal is opened
      setSelectedSize(""); // Reset selected size when modal is opened
    }
  }, [isOpen]);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };
  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add logic to handle form submission (e.g., adding item to bag)
    console.log("Color:", selectedColor);
    console.log("Size:", selectedSize);
  };

  const handleContentClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    // Prevent closing when clicking inside the content area
    event.stopPropagation();
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto ${isOpen ? "" : "hidden"}`}
      onClick={onClose}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="bg-white overflow-hidden shadow-xl relative w-full max-w-md"
          onClick={handleContentClick}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
          >
            <span className="sr-only">Close</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-4 sm:grid-cols-12 lg:gap-x-8 p-6">
            <div className="aspect-h-4 aspect-w-3 w-90 h-60 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img
                src={imageUrl}
                alt="Product"
                className="object-cover object-center h-full w-full"
              />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-semibold text-gray-900">
                {ProductName}
              </h2>

              <section aria-labelledby="information-heading" className="mt-4">
                <h3
                  id="information-heading"
                  className="text-lg font-semibold text-gray-900"
                >
                  Price: ${Price}
                </h3>
                <Reviews />
              </section>

              <section aria-labelledby="options-heading" className="mt-3">

                <div className="container mx-auto py-4">
                  <form onSubmit={handleSubmit}>
                    <SizeView
                      selectedSize={selectedSize}
                      handleSizeChange={handleSizeChange}
                    />

                    {/* Add to Basket Button */}
                    <button
                      type="submit"
                      className="mt-6 w-full text-black font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-900 focus:ring-offset-2"
                      style={{
                        backgroundImage: `url(${floral})`, // Set the background image
                        backgroundSize: "auto", // Set the background size
                      }}
                    >
                      Add to Basket
                    </button>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickView;
