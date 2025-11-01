export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl  transition duration-200 p-4 flex flex-col justify-between">
      <div className="flex-1 flex flex-col items-center text-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-50 h-50 object-contain mb-4"
        />
        <h2 className="text-sm font-medium text-gray-800 line-clamp-2">{product.title}</h2>
        <p className="text-xs text-gray-500 mt-1 capitalize">{product.category}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-gray-500 mt-1 capitalize ">Sign in or Create an account to see pricing </span>
      </div>
    </div>
  );
}
