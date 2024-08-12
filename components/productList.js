import ProductCard from "./productCard";

function ProductList({ products }) {
    return (
      <div className="container mx-auto px-4 flex flex-wrap justify-center">
        {products.map((product) => (
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl max-h-full p-4">
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    );
}

export default ProductList;