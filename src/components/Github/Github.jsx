// import { useEffect,useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import { FaGithub } from "react-icons/fa";
// import { Link } from "react-router-dom";
// function Github(){
//     const data = useLoaderData()
// //     const [data,setData] = useState([])
// //      useEffect(()=>{
// //     fetch('https://api.github.com/users/Vikash0216')
// //     .then(response => response.json())
// //     .then(data =>{
// //         console.log(data);
// //         setData(data);        
// //     })
// //   },[])  
//     return(
//         <>
//        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-sm mx-auto">
//             <img 
//                 src={data.avatar_url} 
//                 alt="Profile pic" 
//                 className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-md"
//             />
//             <p className="text-lg font-semibold text-gray-800 mt-4">{data.name}</p>
//             <p className="text-gray-600 text-center mt-2">{data.bio}</p>
            
//             {/* GitHub Link Button */}
//             <Link
//                 to={data.html_url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-4 flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
//             >
//                 <FaGithub className="text-xl" /> {/* GitHub SVG Icon */}
//                 <span>GitHub</span>
//             </Link>
//         </div>

//         </>
//     )
// }

// export default Github;

// export const githubLoader = async ()=>{
//  const response = await fetch('https://api.github.com/users/Vikash0216')
// return response.json()
// }

import { useLoaderData } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Github() {
    const data = useLoaderData();

    if (!data) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-gray-700 text-lg font-semibold">Loading GitHub Profile...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-sm mx-auto">
            <img 
                src={data?.avatar_url} 
                alt="Profile pic" 
                className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-md"
            />
            <p className="text-lg font-semibold text-gray-800 mt-4">{data?.name || "No Name Available"}</p>
            <p className="text-gray-600 text-center mt-2">{data?.bio || "No Bio Available"}</p>
            
            {/* GitHub Link Button */}
            <Link
                to={data?.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-transform transform hover:scale-105"
            >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
            </Link>
        </div>
    );
}

export default Github;

// GitHub Data Loader with Error Handling
export const githubLoader = async () => {
    try {
        const response = await fetch('https://api.github.com/users/Vikash0216');
        if (!response.ok) {
            throw new Error("Failed to fetch GitHub data");
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
        return null;
    }
};
