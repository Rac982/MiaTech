const ProductCard = ({ product }) => {
    return (
        <div
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition duration-200 ease-in-out"
        >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {product.title}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                {product.description}
            </p>
            <div className="mb-2 flex items-center gap-2">
                <span className="text-lg font-bold text-green-600">
                    ${product.price.toFixed(2)}
                </span>
                {product.discountPercentage > 0 && (
                    <span className="text-sm text-red-500">
                        -{product.discountPercentage.toFixed(0)}% off
                    </span>
                )}
            </div>
            <div className="flex items-center text-sm mb-2">
                <span className="text-yellow-500">
                    {"⭐".repeat(Math.round(product.rating || 0))}
                </span>
                <span className="text-gray-700 ml-2">
                    ({product.rating?.toFixed(1) || "0.0"}/5)
                </span>
            </div>
            <div
                className={`text-xs font-medium px-2 py-1 rounded-full inline-block ${product.stock <= 5
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                    }`}
            >
                {product.stock <= 5 ? "Low Stock" : "In Stock"}
            </div>
            <div className="mt-3 text-xs text-gray-500">
                Brand:{" "}
                <span className="font-medium text-gray-700">
                    {product.brand}
                </span>{" "}
                | Category:{" "}
                <span className="font-medium text-gray-700">
                    {product.category}
                </span>
            </div>
        </div>
    );
};

export default ProductCard;