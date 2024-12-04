import React from "react";

const Button = ({name}) =>{
 
    return(
        <div>
            <button 
                className="text-lg italic font-serif bg-[#06110d] text-[white] cursor-pointer ml-4 px-4 py-1 border-[none] hover:bg-green-950 active:bg-green-900 focus:outline-none focus:ring focus:ring-green-700 rounded-full"
            >   {name}
            </button>
        </div>
    )
}
export default Button;