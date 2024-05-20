import { useState } from "react";
import background from "./bg2.jpg";
import ProductCard from "./ProductCard";
import SizeView from "./SizeView";
import floral from "./floralbutton.jpg";
import photo1 from "./Screenshot 2024-05-12 003117.png";
import photo2 from "./Screenshot 2024-05-12 003126.png";
import mainbouquet from "./tulips.jpg"
import SlideOver from "./SlideOver";
import { Link } from "react-router-dom";

function App() {
  const [selectedSize, setSelectedSize] = useState("");
  const [mainImage, setMainImage] = useState(
    mainbouquet
  );
  const [slideOverVisible, setSlideOverVisible] = useState(false); // State to control slide-over visibility

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleImageClick = (imageUrl: string) => {
    setMainImage(imageUrl);
  };
  const handleAddToBasket = () => {
    setSlideOverVisible(true); // Show slide-over panel
    setTimeout(() => {
      setSlideOverVisible(false); // Hide slide-over panel after 3 seconds
    }, 3000);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`, // Set the background image
          backgroundSize: "cover", // Adjust the background size
          backgroundRepeat: "no-repeat", // Set background repeat to no-repeat
          backgroundPosition: "center", // Center the background image
        }}
      >
                {/* Render SlideOver component conditionally */}
                {slideOverVisible && (
          <SlideOver isOpen={true} onClose={() => setSlideOverVisible(false)} />
        )}

        
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    NewArrivals
                  </a>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    Tulips
                  </a>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>

              <li className="text-sm">
                <a
                  href="#"
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  Mixed Tulips
                </a>
              </li>
            </ol>
          </nav>
          <div className="ml-32 mt-10 mr-32">
            <div className="flex flex-row">
              <img
                src={mainImage}
                className="w-4/12 mr-10"
                alt="Main Product"
              />
              <div className="ml-10">
                <h1 className="text-3xl mb-5">Tulips</h1>
                <h2 className="text-2xl mb-2">$55</h2>
                <p className="text-1xl mb-2">
                  Handcrafted with meticulous care, our tulip bouquet features
                  a harmonious blend of colors and textures, carefully curated
                  to evoke joy and admiration. Each stem is expertly selected
                  for its freshness and beauty, ensuring that every blossom is
                  at its peak when it reaches your doorstep.
                </p>
                <div className="w-40">
                  <SizeView
                    selectedSize={selectedSize}
                    handleSizeChange={handleSizeChange}
                  />
                </div>
                <button
              type="submit"
              className="mt-6 w- text-black font-semibold py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-900 focus:ring-offset-2"
              style={{
                backgroundImage: `url(${floral})`,
                backgroundSize: "auto",
              }}
              onClick={handleAddToBasket} // Call handleAddToBasket when the button is clicked
              >
                  Add to Basket
                </button>
              </div>
            </div>
            <div className="mt-4 mr-8 flex w-60">
            <img
                src={mainbouquet}
                className="w-1/4 cursor-pointer"
                alt="Additional Product "
                onClick={() => handleImageClick(mainbouquet)}
              />
              <img
                src={photo1}
                className="w-1/4 cursor-pointer"
                alt="Additional Product 1"
                onClick={() => handleImageClick(photo1)}
              />

              <img
                src={photo2}
                className="w-1/4 cursor-pointer"
                alt="Additional Product 2"
                onClick={() => handleImageClick(photo2)}
              />
            </div>
          </div>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <ProductCard
                imageUrl="https://imgcdn.floweraura.com/whispers-of-affection-pink-roses-bouquet-9802810fl-A_0.jpg"
                name="Roses"
                price={35}
                productId={1}
              />
              <ProductCard
                imageUrl="https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1707263235/vendor/4429/catalog/product/2/0/20211007033251_file_615f1323779ec_615f13309f60f..jpg"
                name="Sunflowers"
                price={50}
                productId={3}
              />
              <ProductCard
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZsEtg3UIh_3gnrdWR_Q8TzEkcrfRHMjCDIkNKf6gsQ&s"
                name="Daisies"
                price={20}
                productId={4}
              />
              <ProductCard
                imageUrl="https://makingdream.ca/wp-content/uploads/2023/10/Classic-12-Red-Roses-Bouquet-1237654.jpg"
                name="Red Roses"
                price={30}
                productId={5}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;