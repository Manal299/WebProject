import ProductCard from "./ProductCard";

function Products() {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <ProductCard
            imageUrl="https://imgcdn.floweraura.com/whispers-of-affection-pink-roses-bouquet-9802810fl-A_0.jpg"
            name="Roses"
            price={35}
            productId={1}
          />
          <ProductCard
            imageUrl="https://bambooflorist.com.my/cdn/shop/products/deartulipsmorandi_3b94e5bb-4b88-4c3e-b1b6-8ac910dfb39a.jpg?v=1710059155&width=1080"
            name="Tulips"
            price={55}
            productId={2}
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
  );
}
export default Products;
