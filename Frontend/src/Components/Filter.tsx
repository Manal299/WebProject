import React from "react";
import { useState } from "react";
import FilterOptions from "./FilterOptions";

type FilterProps = {
  filter: string;
  options: string[];
};

const Filter: React.FC<FilterProps> = ({ filter, options }) => {
  const [expanded, setExpanded] = useState(false);

  // Function to toggle the visibility of filter options
  const toggleOptions = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="border-b border-gray-200 py-6">
      <h3 className="-my-3 flow-root">
        <button
          type="button"
          className="flex w-full items-center justify-between  py-3 text-sm text-gray-400 hover:text-gray-500"
          aria-controls="filter-section-0"
          aria-expanded={expanded}
          onClick={toggleOptions} // Toggle visibility on click
        >
          <span className="font-medium text-gray-900">{filter}</span>
          <span className="ml-6 flex items-center">
            {/* Conditional rendering based on the state */}
            {expanded ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            )}
          </span>
        </button>
      </h3>
      {/* Conditional rendering of filter options based on the state */}
      {expanded && (
        <div className="pt-6" id={`filter-section-${filter.toLowerCase()}-0`}>
          <div className="space-y-4">
            {options.map((label, index) => (
              <FilterOptions
                key={index}
                id={`filter-${filter.toLowerCase()}-${index}`}
                label={label}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
