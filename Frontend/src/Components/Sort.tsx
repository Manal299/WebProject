import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function Sort() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
          id="menu-button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          Sort
          <svg
            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <CSSTransition
        in={isOpen}
        timeout={200}
        classNames={{
          enter: "transition-opacity ease-linear duration-300",
          enterActive: "opacity-100 scale 100",
          exit: "transition ease-in duration-75 transform",
          exitActive: "opacity-0 scale 100",
        }}
        unmountOnExit
      >
        <div
          className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="font-medium text-gray-900 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              Most Popular
            </a>
            <a
              href="#"
              className="text-gray-500 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              Best Rating
            </a>
            <a
              href="#"
              className="text-gray-500 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-4"
            >
              Price: High to Low
            </a>
            <a
              href="#"
              className="text-gray-500 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-3"
            >
              Price: Low to High
            </a>
            <a
              href="#"
              className="text-gray-500 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-2"
            >
              Newest
            </a>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
export default Sort;
