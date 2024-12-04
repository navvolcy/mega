import React from "react";
import UVU from "../assets/UVUMascotBlack-0019.png";




const Profile = ({setIsFlipped, username, role}) =>{
    

    const handleFlip = () =>{
        setIsFlipped(true);
    }

    return(
        <div>
            <div className="w-full max-w-sm bg-stone-500 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                    <button className="py-2 px-4 ms-2 text-sm italic font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">delete</button>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={UVU} alt="logo"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">name :{username}</h5>
                    <span className="text-sm text-black dark:text-gray-400">title: {role}</span>
                    <div className="flex mt-4 md:mt-6">
                        <button className="inline-flex items-center italic px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</button>
                        <button className="py-2 px-4 ms-2 text-sm italic font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                           onClick={handleFlip} >
                            Add Course
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}



export default Profile;