import React from "react";
import Profile from "../subComponents/Profile";
import Course from "../subComponents/Course";
import { useState } from "react";
import View from "../subComponents/View";
import { useLocation } from "react-router-dom";

// Admin can create and see all courses and all student logs. Admin can create a teacher, TA, or student. Admin is "god" of the system.
// Create/delet/view  Teachers and students -> 
// Create/delete/view courses & log 
// Each one will have a card that can be edited and links to the db  is Teacher, TA, and Student

//part 2 functionallity 
// View buttion 
// Create button
// delete button 
// add log button 
// retrieve value from inputs 
//fetch 
const UVUadmin = () =>{

    const [showForm, setShowForm] = useState(false);
    
    const [showProfile, setShowProfile] = useState(true)
    const [showView, setShowView] = useState(false);
    const [showCourse, setShowCourse] = useState(false);

    const [searchId, setSearchId ]= useState("");
    const [userName, setUserName] = useState("");
    const [userRole, setUserRole] = useState("");
   
     const location = useLocation();
     const displayedCourses = location.state.courses.map((course) => {  
        return course.display;
     })
     console.log("new location: ", displayedCourses)
     


    //for create button
    const handleForm = () => {
      setShowForm(!showForm);

    };

    const handleSearch = (event) => {
        const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    setSearchId(numericValue);
    }

    const fetchSearch = async(e) =>{
        e.preventDefault()
            fetch(`http://localhost:3000/api/login/${searchId}`)
            .then(response=>{
                if(!response.ok){
                    throw new Error("network response for SEARCH was not ok")
                }
                return response.json();
            }).then(data => {
                setUserName(data.name)
                setUserRole(data.role)

               
            })
    }

    

    
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
               
                    <form className="font-thin text-xl italic font-serif "> 
                        <div  className="flex justify-center place-items-center m-2">
                            <label className="px-4"><b> ID: </b></label>
                            <input type='text' placeholder='12345678' className="py" maxLength={8} value={searchId} onChange={handleSearch} />
                            <button 
                                className="text-lg italic font-serif bg-[#06110d] text-[white] cursor-pointer ml-4 px-4 py-1 border-[none]
                             hover:bg-green-950 active:bg-green-900 focus:outline-none focus:ring focus:ring-green-700 rounded-full"
                             onClick={fetchSearch}
                             >   
                                 Search
                             </button>
                            
                        </div>

                         <div>
                             {showCourse && <Course setShowCourse={setShowCourse} setShowProfile={setShowProfile}/> }
                             {showView && <View displayedCourses = {displayedCourses} setShowProfile={setShowProfile}setShowView={setShowView}/>  }
                             {showProfile && <Profile setShowProfile={setShowProfile}  setShowCourse={setShowCourse}  setShowView ={setShowView} userName={userName}  userRole={userRole}/>}
                        </div> 
                        
                    </form>

                    <div className=" flex flex-col justify-center items-center mt-4">
                    <button className="text-lg italic font-serif bg-[#06110d] text-[white] cursor-pointer ml-4 px-4 py-1 border-[none] hover:bg-green-950
                         active:bg-green-900 focus:outline-none focus:ring focus:ring-green-700 rounded-full" onClick={ handleForm}
                    >   
                    Create
                    </button>
                    {showForm && (
                        <form>
                            <div className=" flex flex-col justify-center items-center text-xl">
                            
                            <input className=" border border-black m-2 rounded-full italic font-serif" type="text" placeholder=" UVU ID#" maxLength={8}/>
                            <input className=" border border-black m-2 rounded-full italic font-serif" type="text" placeholder=" First Name" />
                            <input className=" border border-black m-2 rounded-full italic font-serif" type="text" placeholder=" Last Name" />
                            <input className=" border border-black m-2 rounded-full italic font-serif" type="text" placeholder=" Password" maxLength={8} />
                            <input className=" border border-black m-2 rounded-full italic font-serif" type="text" placeholder=" Title" />
                            <button className=" italic font-serif bg-[#06110d] text-[white] cursor-pointer ml-4 px-4 py-1 border-[none] hover:bg-green-950
                         active:bg-green-900 focus:outline-none focus:ring focus:ring-green-700 rounded-full" type="submit">Submit</button>
                            </div>
                            
                        </form>
                    )}
                    </div>
                
            </div>

        </div>
    )
};




export default UVUadmin;