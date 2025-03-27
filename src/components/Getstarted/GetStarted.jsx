import { Link } from "react-router-dom";

function GetStarted() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center max-w-2xl p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold text-gray-900">
                    Ready to Get Started?
                </h1>
                <p className="mt-4 text-gray-600">
                    Join us today and take the first step towards an amazing experience.
                </p>

                {/* Get Started Button */}
                <Link
                    to="/signup"
                    className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg 
                    text-lg font-medium hover:bg-blue-700 transition-transform transform hover:scale-105"
                >
                    Get Started
                </Link>
            </div>
        </div>
    );
}

export default GetStarted;
