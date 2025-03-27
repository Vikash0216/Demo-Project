import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function User() {
    const { userId } = useParams();
    const [location, setLocation] = useState("");
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation(`Lat: ${position.coords.latitude}, Long: ${position.coords.longitude}`);
                },
                () => {
                    setLocation("Location access denied");
                }
            );
        } else {
            setLocation("Geolocation not supported");
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Hello, {userId} 👋</h1>
                <p className="text-gray-600 mb-2">📍 Location: <span className="font-semibold">{location}</span></p>
                <p className="text-gray-600 mb-4">🖱️ Click Count: <span className="font-semibold">{clicks}</span></p>
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    onClick={() => setClicks(clicks + 1)}
                >
                    Click Me
                </button>
            </div>
        </div>
    );
}

export default User;
