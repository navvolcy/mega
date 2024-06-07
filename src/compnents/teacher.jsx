//Teacher can create a course, add a student, create a TA, see all their courses, and logs.
import React from "react";

const Teacher =() =>{

    
    return(
        <div>
            <div className=" w-full h-[80px] flex justify-between  px-4">
            <div className="absolute left-0 top-0 font-bold text-2xl italic font-serif p-5 "> 
                <h1>
                    Teacher
                </h1>
            </div>
            
            
            {/*list of Teacher, TA, Student*/}
            <div className="text-2xl italic font-serif ">
                {/*Teacher form that can do CRUD */}
               
                    <form className="font-thin text-2xl italic font-serif "> 
                        <label><b> ID: </b></label>
                        <input type='text' placeholder='12345678' maxLength={8}/>
                        <div>
                        <select className="font-thin text-2xl italic font-serif  mx-16 my-5 ">
                                <option>Account type</option>
                                <option value={"TA"}>TA</option>
                                <option value={"Student"}>Student</option>
                        </select>
                            </div>
                        <button className=" text-2xl italic font-serif bg-[#06110d] text-[white] cursor-pointer w-full mx-0 my-2 px-5 py-3.5 border-[none] hover:bg-green-950 active:bg-green-900 focus:outline-none focus:ring focus:ring-green-700 rounded-full">Search</button>

                    </form>
                    <button className="text-2xl italic font-serif bg-[#06110d] text-[white] cursor-pointer w-full mx-0 my-2 px-5 py-3.5 border-[none] hover:bg-green-950 active:bg-green-900 focus:outline-none focus:ring focus:ring-green-700 rounded-full">Create</button>
               

            </div>

        </div>
            
        </div>
    )
}

export default Teacher;