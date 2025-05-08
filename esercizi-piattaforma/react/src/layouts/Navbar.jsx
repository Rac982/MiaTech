import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="bg-white w-full shadow-md px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center space-x-6">
                <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
                    Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">
                    About
                </Link>
            </div>
        </nav>
    )
}

export default Navbar