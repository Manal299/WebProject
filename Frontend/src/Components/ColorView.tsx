import React from "react";

type ColorViewProps = {
  selectedColor: string;
  handleColorChange: (size: string) => void;
};

const ColorView: React.FC<ColorViewProps> = ({
  selectedColor,
  handleColorChange,
}) => {
  return (
    <>
      {/* Colors */}
      <div>
        <h4 className="text-sm font-medium text-gray-900">Color</h4>

        <fieldset className="mt-2">
          <legend className="sr-only">Choose a color</legend>
          <span className="flex items-center space-x-2">
            <label
              className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${selectedColor === "White" ? "ring ring-offset-1 ring-green-900" : "ring-2"}`}
            >
              <input
                type="radio"
                name="color-choice"
                value="White"
                className="sr-only"
                checked={selectedColor === "White"}
                onChange={(event) => handleColorChange(event.target.value)}
              />
              <span
                aria-hidden="true"
                className="h-7 w-7 bg-white rounded-full border border-black border-opacity-10"
              ></span>
            </label>
            <label
              className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${selectedColor === "Pink" ? "ring ring-offset-1 ring-green-900" : "ring-2"}`}
            >
              <input
                type="radio"
                name="color-choice"
                value="Pink"
                className="sr-only"
                checked={selectedColor === "Pink"}
                onChange={(event) => handleColorChange(event.target.value)}
              />
              <span
                aria-hidden="true"
                className="h-7 w-7 bg-pink-500 rounded-full border border-black border-opacity-10"
              ></span>
            </label>
            <label
              className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${selectedColor === "Yellow" ? "ring ring-offset-1 ring-green-900" : "ring-2"}`}
            >
              <input
                type="radio"
                name="color-choice"
                value="Yellow"
                className="sr-only"
                checked={selectedColor === "Yellow"}
                onChange={(event) => handleColorChange(event.target.value)}
              />
              <span
                aria-hidden="true"
                className="h-7 w-7 bg-yellow-400 rounded-full border border-black border-opacity-10"
              ></span>
            </label>
          </span>
        </fieldset>
      </div>
    </>
  );
};

export default ColorView;
