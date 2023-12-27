import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Product = ({ products }: any) => {
  const [visibleProducts, setVisibleProducts] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    setVisibleProducts([...products?.slice(0, 10)]);
  }, [products]);

  const handleShowMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * productsPerPage;
    const endIndex = nextPage * productsPerPage;

    if (endIndex >= products?.length) {
      setVisibleProducts([...visibleProducts, ...products?.slice(startIndex)]);
    } else {
      setVisibleProducts([
        ...visibleProducts,
        ...products.slice(startIndex, endIndex),
      ]);
      setCurrentPage(nextPage);
    }
  };
  return (
    <main className="min-h-screen w-full py-10 space-y-8   md:space-y-14">
      <h2 className="text-4xl md:text-7xl font-bold text-center w-full">Products</h2>
      <p className="text-xl md:text-2xl font-normal text-center max-w-5xl mx-auto">
        Here is the api's fecthed data listed below
      </p>
      <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 mx-auto gap-10 max-w-7xl p-2">
        {visibleProducts?.map((item: any) => {
          return <ProductCard product={item} key={item?.id} />;
        })}
      </div>
      {visibleProducts.length < products.length && (
        <div className="w-full flex justify-center mt-4">
          <button
            onClick={handleShowMore}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Show More
          </button>
        </div>
      )}
    </main>
  );
};

export default Product;
