import React from "react";

const Course =()=>{
    

    return(
        <div>
            <div className="w-full max-w-sm bg-stone-500 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <form>
                    <div className=" flex flex-col justify-center items-center text-xl mb-2">
                        <input className=" border border-black m-2 rounded-full italic font-serif" type="text" placeholder=" Course " maxLength={8}/>
                        <textarea className=" p-16 mb-2"></textarea>
                        <button className=" italic font-serif bg-[#06110d] text-[white] cursor-pointer ml-4 px-4 py-1 border-[none] hover:bg-green-950
                        active:bg-green-900 focus:outline-none focus:ring focus:ring-green-700 rounded-full" type="submit">Add Log</button>
                    </div>             
                </form>
            </div>

        </div>
    );
}

export default Course;