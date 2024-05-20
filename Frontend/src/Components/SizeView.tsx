import React from "react";

type SizeViewProps = {
  selectedSize: string;
  handleSizeChange: (size: string) => void;
};

const SizeView: React.FC<SizeViewProps> = ({
  selectedSize,
  handleSizeChange,
}) => {
  return (
    <div >
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-gray-900">Size</h4>
      </div>

      <fieldset className="mt-2">
        <legend className="sr-only">Choose a size</legend>
        <div className="grid grid-cols-4 gap-2">
          {["S", "M", "L", "XL"].map((size) => (
            <label
              key={size}
              className={`group relative flex items-center justify-center rounded-md border py-2 px-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm ${
                selectedSize === size
                  ? "ring ring-offset-1 ring-green-900"
                  : "ring-2 border-green-400"
              }`}
            >
              <input
                type="radio"
                name="size-choice"
                value={size}
                className="sr-only"
                checked={selectedSize === size}
                onChange={(event) => handleSizeChange(event.target.value)}
              />
              <span>{size}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default SizeView;
