import React from "react";

type FilterOptionsProps = {
  id: string;
  label: string;
};

const FilterOptions: React.FC<FilterOptionsProps> = ({ id, label }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        name={id}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <label htmlFor={id} className="ml-3 min-w-0 flex-1 text-gray-600">
        {label}
      </label>
    </div>
  );
};

export default FilterOptions;
