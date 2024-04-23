import React from "react";
import { FaAlignJustify } from "react-icons/fa";

// Admin can create and see all courses and all student logs. Admin can create a teacher, TA, or student. Admin is "god" of the system.
// Create/delet/view  Teachers, TA, and students -> 
// Create/delete/view courses & log 
// Each one will have a card that can be edited and links to the db  is Teacher, TA, and Student



const UVUadmin = () =>{
    return (
        <div className=" w-full h-[80px] flex justify-between  px-4">
            <div className="absolute left-0 top-0 font-thin text-2xl italic font-serif "> 
                <h1>
                    Administrator
                </h1>
            </div>
            {/*list of Teacher, TA, Student*/}
            <div className="absolute top-[15%] left-0 text-2xl italic font-serif">
                <ul>
                    <li >
                        Teacher
                    </li>
                    <li>
                        TA
                    </li>
                    <li>
                        Student
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default UVUadmin;