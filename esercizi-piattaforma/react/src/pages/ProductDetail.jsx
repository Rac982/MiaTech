import { useParams, Link } from "react-router-dom"
import { useProductContext } from "../providers/ProductProvider";

function ProductDetail() {
    const { id } = useParams();
    const { products } = useProductContext();

    const product = products?.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="p-4 text-center text-red-600 font-semibold bg-red-100 rounded">
                Prodotto non trovato
            </div>
        )
    }

    return (
        <div className="bg-gray-100 min-h-screen px-4 py-10">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
                <div className="mb-6">
                    <Link
                        to="/"
                        className="text-blue-600 text-sm hover:underline"
                    >
                        ← Torna alla lista
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex justify-center items-center">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="rounded-lg max-h-80 object-contain"
                        />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
                        <p className="text-gray-600 mb-4">{product.description}</p>

                        <div className="mb-4">
                            <span className="text-2xl font-bold text-green-600">
                                ${product.price.toFixed(2)}
                            </span>
                            {product.discountPercentage > 0 && (
                                <span className="ml-2 text-red-500 text-sm">
                                    -{product.discountPercentage.toFixed(0)}% off
                                </span>
                            )}
                        </div>

                        <div className="mb-4 text-sm text-gray-700">
                            <p>Rating: {product.rating.toFixed(1)} / 5</p>
                            <p>Stock: {product.stock} unit{product.stock !== 1 ? 's' : ''} available</p>
                            <p>Brand: <span className="font-medium">{product.brand}</span></p>
                            <p>Category: <span className="font-medium">{product.category}</span></p>
                        </div>

                        {product.images?.length > 1 && (
                            <div className="mt-6">
                                <h2 className="text-md font-semibold mb-2">Gallery</h2>
                                <div className="flex gap-4 overflow-x-auto">
                                    {product.images.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt={`Gallery ${index}`}
                                            className="h-24 w-24 object-cover rounded-md"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail