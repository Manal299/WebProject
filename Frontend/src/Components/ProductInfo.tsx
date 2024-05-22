import { useState, useEffect } from "react";
import background from "../images/bg2.jpg";
import ProductCard from "./ProductCard";
import SizeView from "./SizeView";
import floral from "../images/floralbutton.jpg";
import photo1 from "../images/Screenshot 2024-05-12 003117.png";
import photo2 from "../images/Screenshot 2024-05-12 003126.png";
import mainbouquet from "../images/tulips.jpg";
import SlideOver from "./SlideOver";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Features/Cart/CartSlice";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../Features/Products/ProductSlice";
import { RootState, AppDispatch } from "../app/store";

function ProductInfo() {
  const [selectedSize, setSelectedSize] = useState("");
  const [mainImage, setMainImage] = useState<string | undefined>(undefined);
  const [slideOverVisible, setSlideOverVisible] = useState(false);
  const params = useParams<{ productId: string }>();
  const { productId } = params;

  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => state.products.product);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(Number(productId)));
    }
  }, [dispatch, productId]);

  useEffect(() => {
    if (product) {
      setMainImage(product.imageUrl);
    }
  }, [product]);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleImageClick = (imageUrl: string) => {
    setMainImage(imageUrl);
  };

  const handleAddToBasket = () => {
    if (product) {
      const productToAdd = {
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.imageUrl,
        quantity: 1,
      };

      dispatch(addItem(productToAdd));
      setSlideOverVisible(true);
    }
  };

  return (
    <>
      <div
        // style={{
        //   backgroundImage: `url(${background})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        // }}
      >
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li>
                <div className="flex items-center">
                  <a href="#" className="mr-2 text-sm font-medium text-gray-900">
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
                  <a href="#" className="mr-2 text-sm font-medium text-gray-900">
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
                style={{ cursor: "pointer", objectFit: "cover", height: "550px", width: "400px" }}
                onClick={() => handleImageClick(mainImage as string)}
              />
              <div className="ml-10">
                <h1 className="text-3xl mb-5">{product?.name}</h1>
                <h2 className="text-2xl mb-2">${product?.price}</h2>
                <p className="text-1xl mb-2">
                  {product?.description}
                </p>
                <div className="w-40">
                  <SizeView
                    selectedSize={selectedSize}
                    handleSizeChange={handleSizeChange}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 text-black font-semibold py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-900 focus:ring-offset-2"
                  style={{ backgroundImage: `url(${floral})`, backgroundSize: "auto" }}
                  onClick={handleAddToBasket}
                >
                  Add to Basket
                </button>
              </div>
            </div>
            <div className="mt-4 mr-8 flex w-60">
            <div className="mt-4 mr-8 flex w-60">
            <img
  src={mainImage} // Use the main product image as the source for all thumbnails
  className="w-1/4 cursor-pointer"
  onClick={() => handleImageClick(mainImage as string)} // Use the main image click handler
  style={{ height: "100px", width: "100px", objectFit: "cover" }}
/>

</div>
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
      <SlideOver
        isOpen={slideOverVisible}
        onClose={() => setSlideOverVisible(false)}
      />
    </>
  );
}

export default ProductInfo;