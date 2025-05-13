import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { markOutOfStock, toggleFavorite } from "../store/slices/dataSlice";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleOutOfStock = (e) => {
        e.preventDefault();
        dispatch(markOutOfStock(product.id));
    };

    const handleToggleFavorite = (e) => {
        e.preventDefault();
        dispatch(toggleFavorite(product.id));
    };

    return (
        <Link to={`/product/${product.id}`}>
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
                    className={`text-xs font-medium px-2 py-1 rounded-full inline-block border ${product.outOfStock
                        ? "border-red-500 text-red-600"
                        : product.stock <= 5
                            ? "bg-red-100 text-red-700 border border-red-200"
                            : "bg-green-100 text-green-700 border border-green-200"
                        }`}
                >
                    {product.outOfStock
                        ? "Out of Stock"
                        : product.stock <= 5
                            ? "Low Stock"
                            : "In Stock"}
                </div>
                <br />
                <button
                    onClick={handleToggleFavorite}
                    className={`mt-3 text-xs px-3 py-1 rounded transition ${product.favorite
                        ? "bg-yellow-400 text-white hover:bg-yellow-500"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}
                >
                    {product.favorite ? "★ Preferito" : "☆ Aggiungi ai preferiti"}
                </button>

                {!product.outOfStock && (
                    <button
                        onClick={handleOutOfStock}
                        className="mt-3 ml-3 bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                        Segna come Out of Stock
                    </button>
                )}

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
        </Link>
    );
};

export default ProductCard;