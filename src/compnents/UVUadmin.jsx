import React from "react";
import Create from "./subComponents/Create";
import Search from "./subComponents/Search";

// Admin can create and see all courses and all student logs. Admin can create a teacher, TA, or student. Admin is "god" of the system.
// Create/delet/view  Teachers, TA, and students -> 
// Create/delete/view courses & log 
// Each one will have a card that can be edited and links to the db  is Teacher, TA, and Student

const UVUadmin = () =>{

    
    return (
        <div className=" w-full h-[80px] flex justify-between  px-4">
            <div className="absolute left-0 top-0 font-bold text-2xl italic font-serif p-5 "> 
                <h1>
                    Administrator
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
                                <option value={"Teacher"}>Teacher</option>
                                <option value={"TA"}>TA</option>
                                <option value={"Student"}>Student</option>
                        </select>
                            </div>
                       <Search/>

                    </form>
                    <Create/>
               

            </div>

        </div>
    )
}
export default UVUadmin;