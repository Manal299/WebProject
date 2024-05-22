import React,{useState} from "react";
import Products from "./products.tsx";
import Filter from "./Filter.tsx";
import Sort from "./Sort.tsx";
import background from "../images/bg2.jpg";
import Mobilefilter from "./Mobilefilter.tsx";


const Catalogue: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <div
        // style={{
        //   backgroundImage: `url(${background})`, // Set the background image
        //   backgroundSize: "cover", // Adjust the background size
        //   backgroundRepeat: "no-repeat", // Set background repeat to no-repeat
        //   backgroundPosition: "center", // Center the background image
        // }}
      >
       <div>
        <Mobilefilter isOpen={isOpen} toggleMenu={toggleMenu} />

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-brown-200 pb-6 pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                New Arrivals
              </h1>

              <div className="flex items-center">
                <div className="relative inline-block text-left">
                  <Sort />
                </div>

                <button
                  type="button"
                  className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                >
                  <span className="sr-only">View grid</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Filters</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 ">
                <form className="hidden lg:block ">
                  <h3 className="sr-only ">Categories</h3>
                  <ul
                    role="list"
                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
                    <li>
                      <a href="#">Roses</a>
                    </li>
                    <li>
                      <a href="#">Tulips</a>
                    </li>
                    <li>
                      <a href="#">Sunflowers</a>
                    </li>
                    <li>
                      <a href="#">Daisies</a>
                    </li>
                    <li>
                      <a href="#">Dahlias</a>
                    </li>
                  </ul>

                  <div className="container">
                    <Filter
                      filter="Color"
                      options={[
                        "White",
                        "Beige",
                        "Blue",
                        "Brown",
                        "Green",
                        "Purple",
                      ]}
                    />
                    <Filter
                      filter="Category"
                      options={[
                        "New Arrivals",
                        "Sale",
                        "Travel",
                        "Organization",
                        "Accessories",
                      ]}
                    />
                    <Filter
                      filter="Size"
                      options={["2L", "6L", "12L", "18L", "20L", "40L"]}
                    />
                  </div>
                </form>

                <div className="lg:col-span-3">
                  <Products />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Catalogue;
