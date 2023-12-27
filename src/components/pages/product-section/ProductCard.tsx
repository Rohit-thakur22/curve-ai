const ProductCard = ({ product }: any) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 min-h-96">
      <img
        className="w-full h-72 object-cover object-center"
        src={product.image_url}
        alt={product.image_name}
      />
      <div className="p-4 border-t border-b">
        <div className="font-bold text-xl mb-2 text-start">
          {product.product_name}
        </div>
        <p
          className="text-gray-700 text-base"
          dangerouslySetInnerHTML={{ __html: product.product_description }}
        />
      </div>
      {product.video_link && (
        <div className="w-full flex justify-end p-2">
          <a
            href={product.video_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <svg
              className="h-6 w-6 mr-2 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.485 2 2 6.485 2 12s4.485 10 10 10 10-4.485 10-10S17.515 2 12 2zm-2 14.5v-9l7 4.5-7 4.5z" />
            </svg>
            Watch Video
          </a>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
