import { useNavigate } from "react-router-dom"

function About() {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 w-full py-12">
            <div className="max-w-7xl mx-auto flex items-center space-x-6">
                <div className="flex flex-col">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Lorem ipsum dolor sit amet</h2>
                    <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, error. In facilis quasi asperiores, quas ipsa illum vitae eius possimus? Numquam placeat asperiores voluptates praesentium suscipit fuga blanditiis dolor rerum.</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Lorem ipsum dolor sit amet</h2>
                    <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, error. In facilis quasi asperiores, quas ipsa illum vitae eius possimus? Numquam placeat asperiores voluptates praesentium suscipit fuga blanditiis dolor rerum.</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Lorem ipsum dolor sit amet</h2>
                    <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, error. In facilis quasi asperiores, quas ipsa illum vitae eius possimus? Numquam placeat asperiores voluptates praesentium suscipit fuga blanditiis dolor rerum.</p>
                </div>
            </div>
            <div className="flex justify-center pt-12">
                <button
                    onClick={() => navigate("/")}
                    className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-200 cursor-pointer shadow-md"
                >
                    Torna alla Home
                </button>
            </div>

        </div>
    )
}

export default About